const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';
const SESSION_TTL_DAYS = 30;
const dbPath = path.join(__dirname, 'zyomix.db');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Database connection failed:', err.message);
  } else {
    console.log('Connected to SQLite database');
  }
});

app.use(express.json({ limit: '1mb' }));
app.use((req, res, next) => {
  const requestedPath = decodeURIComponent(req.path);
  const relativePath = path.relative(__dirname, path.resolve(__dirname, `.${requestedPath}`));
  const topLevelPath = relativePath.split(path.sep)[0];
  const restrictedFiles = new Set(['server.js', 'package.json', 'package-lock.json']);

  if (
    restrictedFiles.has(relativePath) ||
    topLevelPath === 'node_modules' ||
    /^zyomix\.db(?:-|$)/.test(topLevelPath)
  ) {
    return res.sendStatus(404);
  }

  next();
});
app.use(express.static(__dirname));

function createToken() {
  return crypto.randomBytes(24).toString('hex');
}

function recordStudyDay(userId) {
  const studyDate = new Date().toISOString().slice(0, 10);
  db.run('INSERT OR IGNORE INTO study_days (user_id, study_date) VALUES (?, ?)', [userId, studyDate]);
}

function withAuth(req, res, next) {
  const authHeader = req.headers.authorization || '';
  const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : null;

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized. Please log in again.' });
  }

  db.get(
    "SELECT user_id FROM sessions WHERE token = ? AND created_at >= datetime('now', ?)",
    [token, `-${SESSION_TTL_DAYS} days`],
    (err, row) => {
      if (err) {
        console.error('Session lookup failed:', err.message);
        return res.status(500).json({ error: 'Session lookup failed.' });
      }

      if (!row) {
        return res.status(401).json({ error: 'Invalid or expired session token.' });
      }

      req.userId = row.user_id;
      req.sessionToken = token;
      next();
    }
  );
}

function initializeDatabase() {
  db.serialize(() => {
    db.run(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password_hash TEXT NOT NULL,
        created_at TEXT DEFAULT CURRENT_TIMESTAMP
      )
    `);

    db.run(`
      CREATE TABLE IF NOT EXISTS sessions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER NOT NULL,
        token TEXT NOT NULL UNIQUE,
        created_at TEXT DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY(user_id) REFERENCES users(id)
      )
    `);

    db.run(`
      CREATE TABLE IF NOT EXISTS progress (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER NOT NULL,
        subject TEXT NOT NULL,
        lesson TEXT NOT NULL,
        completed INTEGER NOT NULL DEFAULT 0,
        score INTEGER NOT NULL DEFAULT 0,
        updated_at TEXT DEFAULT CURRENT_TIMESTAMP,
        UNIQUE(user_id, lesson),
        FOREIGN KEY(user_id) REFERENCES users(id)
      )
    `);

    db.run(`
      CREATE TABLE IF NOT EXISTS study_days (
        user_id INTEGER NOT NULL,
        study_date TEXT NOT NULL,
        PRIMARY KEY(user_id, study_date),
        FOREIGN KEY(user_id) REFERENCES users(id)
      )
    `);

    db.run(`
      CREATE TABLE IF NOT EXISTS exam_attempts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER NOT NULL,
        mode TEXT NOT NULL,
        score INTEGER NOT NULL,
        total INTEGER NOT NULL,
        duration_seconds INTEGER NOT NULL,
        completed_at TEXT DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY(user_id) REFERENCES users(id)
      )
    `);

    db.run(`
      INSERT OR IGNORE INTO users (id, name, email, password_hash)
      VALUES (1, 'Demo Student', 'demo@zyomix.dev', '$2a$10$Qy4i4v7jJ7m7BNhFvV8xQe0gJ4KCZB8H7E8N9a0dV7VZP8IHZ1OO')
    `);
  });
}

initializeDatabase();

app.get('/api/health', (req, res) => {
  res.json({ ok: true, timestamp: new Date().toISOString() });
});

app.post('/api/signup', (req, res) => {
  const { name, email, password } = req.body || {};

  if (typeof name !== 'string' || typeof email !== 'string' || typeof password !== 'string' || !name.trim() || !email.trim()) {
    return res.status(400).json({ error: 'Name, email, and password are required.' });
  }

  if (name.trim().length > 120 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    return res.status(400).json({ error: 'Enter a valid email address and a name under 120 characters.' });
  }

  if (password.length < 8) {
    return res.status(400).json({ error: 'Password must be at least 8 characters.' });
  }

  const normalizedEmail = email.trim().toLowerCase();
  const hashedPassword = bcrypt.hashSync(password, 10);

  db.run(
    'INSERT INTO users (name, email, password_hash) VALUES (?, ?, ?)',
    [name.trim(), normalizedEmail, hashedPassword],
    function (err) {
      if (err) {
        if (err.code === 'SQLITE_CONSTRAINT') {
          return res.status(409).json({ error: 'An account with that email already exists.' });
        }
        return res.status(500).json({ error: 'Signup failed.' });
      }

      const token = createToken();
      db.run('INSERT INTO sessions (user_id, token) VALUES (?, ?)', [this.lastID, token], (sessionErr) => {
        if (sessionErr) {
          return res.status(500).json({ error: 'Unable to create login session.' });
        }

        return res.status(201).json({
          user: { id: this.lastID, name: name.trim(), email: normalizedEmail },
          token,
          message: 'Account created successfully.'
        });
      });
    }
  );
});

app.post('/api/login', (req, res) => {
  const { email, password } = req.body || {};

  if (typeof email !== 'string' || typeof password !== 'string' || !email.trim() || !password) {
    return res.status(400).json({ error: 'Email and password are required.' });
  }

  const normalizedEmail = email.trim().toLowerCase();

  db.get('SELECT * FROM users WHERE email = ?', [normalizedEmail], (err, user) => {
    if (err) {
      return res.status(500).json({ error: 'Login failed.' });
    }

    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password.' });
    }

    const valid = bcrypt.compareSync(String(password), user.password_hash);

    if (!valid) {
      return res.status(401).json({ error: 'Invalid email or password.' });
    }

    const token = createToken();
    db.run('INSERT INTO sessions (user_id, token) VALUES (?, ?)', [user.id, token], (sessionErr) => {
      if (sessionErr) {
        return res.status(500).json({ error: 'Unable to create login session.' });
      }

      res.json({
        user: { id: user.id, name: user.name, email: user.email },
        token,
        message: 'Login successful.'
      });
    });
  });
});

app.get('/api/me', withAuth, (req, res) => {
  db.get('SELECT id, name, email FROM users WHERE id = ?', [req.userId], (err, user) => {
    if (err || !user) {
      return res.status(404).json({ error: 'User not found.' });
    }

    res.json({ user });
  });
});

app.post('/api/logout', withAuth, (req, res) => {
  db.run('DELETE FROM sessions WHERE token = ?', [req.sessionToken], (err) => {
    if (err) {
      console.error('Session logout failed:', err.message);
      return res.status(500).json({ error: 'Unable to end session.' });
    }

    res.json({ ok: true });
  });
});

app.get('/api/progress', withAuth, (req, res) => {
  db.all(
    'SELECT subject, lesson, completed, score, updated_at FROM progress WHERE user_id = ? ORDER BY updated_at DESC',
    [req.userId],
    (err, rows) => {
      if (err) {
        return res.status(500).json({ error: 'Unable to load progress.' });
      }

      res.json({ progress: rows || [] });
    }
  );
});

app.post('/api/progress', withAuth, (req, res) => {
  const { subject, lesson, completed, score } = req.body || {};

  if (typeof subject !== 'string' || typeof lesson !== 'string' || !subject.trim() || !lesson.trim() || subject.length > 40 || lesson.length > 160) {
    return res.status(400).json({ error: 'Subject and lesson are required.' });
  }

  const completeValue = completed ? 1 : 0;
  const scoreValue = Number(score || 0);
  if (!Number.isInteger(scoreValue) || scoreValue < 0 || scoreValue > 100) {
    return res.status(400).json({ error: 'Score must be a whole number from 0 to 100.' });
  }

  db.run(
    `
      INSERT INTO progress (user_id, subject, lesson, completed, score, updated_at)
      VALUES (?, ?, ?, ?, ?, CURRENT_TIMESTAMP)
      ON CONFLICT(user_id, lesson)
      DO UPDATE SET
        subject = excluded.subject,
        completed = excluded.completed,
        score = excluded.score,
        updated_at = CURRENT_TIMESTAMP
    `,
    [req.userId, String(subject), String(lesson), completeValue, scoreValue],
    function (err) {
      if (err) {
        return res.status(500).json({ error: 'Unable to save progress.' });
      }

      if (completeValue) recordStudyDay(req.userId);
      res.json({ ok: true, progress: { subject, lesson, completed: completeValue, score: scoreValue } });
    }
  );
});

app.get('/api/exam-attempts', withAuth, (req, res) => {
  db.all(
    'SELECT id, mode, score, total, duration_seconds, completed_at FROM exam_attempts WHERE user_id = ? ORDER BY completed_at DESC LIMIT 10',
    [req.userId],
    (err, attempts) => {
      if (err) {
        return res.status(500).json({ error: 'Unable to load exam history.' });
      }

      res.json({ attempts: attempts || [] });
    }
  );
});

app.post('/api/exam-attempts', withAuth, (req, res) => {
  const { mode, score, total, durationSeconds } = req.body || {};
  const scoreValue = Number(score);
  const totalValue = Number(total);
  const durationValue = Number(durationSeconds);

  if (!['timed-practice', 'exam-simulator'].includes(mode) || !Number.isInteger(scoreValue) || !Number.isInteger(totalValue) || totalValue < 1 || scoreValue < 0 || scoreValue > totalValue || !Number.isInteger(durationValue) || durationValue < 0) {
    return res.status(400).json({ error: 'A valid mode, score, question total, and duration are required.' });
  }

  db.run(
    'INSERT INTO exam_attempts (user_id, mode, score, total, duration_seconds) VALUES (?, ?, ?, ?, ?)',
    [req.userId, mode, scoreValue, totalValue, durationValue],
    function (err) {
      if (err) {
        return res.status(500).json({ error: 'Unable to save exam result.' });
      }

      recordStudyDay(req.userId);
      res.status(201).json({ ok: true, attemptId: this.lastID });
    }
  );
});

app.get('/api/dashboard', withAuth, (req, res) => {
  db.get(
    'SELECT COUNT(*) AS totalLessons FROM progress WHERE user_id = ?',
    [req.userId],
    (err, totalRow) => {
      if (err) {
        return res.status(500).json({ error: 'Dashboard load failed.' });
      }

      db.get(
        'SELECT AVG(score) AS avgScore, SUM(completed) AS completedCount FROM progress WHERE user_id = ?',
        [req.userId],
        (avgErr, avgRow) => {
          if (avgErr) {
            return res.status(500).json({ error: 'Dashboard score load failed.' });
          }

          db.all('SELECT study_date FROM study_days WHERE user_id = ? ORDER BY study_date DESC', [req.userId], (daysErr, days) => {
            if (daysErr) {
              return res.status(500).json({ error: 'Dashboard streak load failed.' });
            }

            const today = new Date().toISOString().slice(0, 10);
            const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
            let currentStreak = 0;
            let expectedDate = days?.[0]?.study_date;

            if (expectedDate === today || expectedDate === yesterday) {
              for (const row of days) {
                if (row.study_date !== expectedDate) break;
                currentStreak++;
                const previousDay = new Date(`${expectedDate}T00:00:00Z`);
                previousDay.setUTCDate(previousDay.getUTCDate() - 1);
                expectedDate = previousDay.toISOString().slice(0, 10);
              }
            }

            res.json({
              totalLessons: Number(totalRow?.totalLessons || 0),
              completedLessons: Number(avgRow?.completedCount || 0),
              averageScore: Number(avgRow?.avgScore || 0),
              currentStreak,
              lastStudyDate: days?.[0]?.study_date || null
            });
          });
        }
      );
    }
  );
});

app.get('*', (req, res, next) => {
  if (req.path.startsWith('/api/')) {
    return next();
  }

  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, HOST, () => {
  console.log(`Zyomix server running on http://localhost:${PORT} (listening on ${HOST})`);
});
