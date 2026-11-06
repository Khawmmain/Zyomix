(function () {
    const subjectNames = {
        math: 'Mathematics',
        science: 'Science',
        rla: 'Reasoning Through Language Arts',
        social: 'Social Studies'
    };

    function readStoredValue(key, fallback) {
        try {
            const value = localStorage.getItem(key);
            return value ? JSON.parse(value) : fallback;
        } catch (error) {
            console.warn(`Unable to read saved ${key} data:`, error);
            return fallback;
        }
    }

    function getRecentLesson() {
        const storedLesson = readStoredValue('zyomix_last_lesson', null);
        const progress = readStoredValue('zyomix_practice_progress', {});
        const progressLessons = Object.entries(progress || {}).map(([step, result]) => ({
            step,
            subject: step.split('-')[0],
            title: '',
            updatedAt: result?.timestamp || ''
        }));
        const candidates = [storedLesson, ...progressLessons].filter(lesson =>
            lesson
            && typeof lesson.step === 'string'
            && subjectNames[lesson.subject]
            && lesson.step.startsWith(`${lesson.subject}-`)
        );

        candidates.sort((a, b) => {
            const aTime = Date.parse(a.updatedAt || a.updated_at || '') || 0;
            const bTime = Date.parse(b.updatedAt || b.updated_at || '') || 0;
            return bTime - aTime;
        });
        return candidates[0] || null;
    }

    function renderContinueLearning() {
        const title = document.getElementById('homeContinueTitle');
        const description = document.getElementById('homeContinueDescription');
        const eyebrow = document.getElementById('homeContinueEyebrow');
        const primary = document.getElementById('homeContinuePrimary');
        const secondary = document.getElementById('homeContinueSecondary');
        if (!title || !description || !eyebrow || !primary || !secondary) return;

        const lesson = getRecentLesson();
        if (!lesson) return;

        const subjectName = subjectNames[lesson.subject];
        const section = lesson.step.split('-').slice(1).join('.');
        eyebrow.textContent = 'PICK UP WHERE YOU LEFT OFF';
        title.textContent = lesson.title || `${subjectName} · Section ${section}`;
        description.textContent = `Continue your ${subjectName} practice or review the concept first.`;
        primary.href = `quiz.html?step=${encodeURIComponent(lesson.step)}`;
        primary.textContent = 'Continue practice';
        secondary.href = `lesson.html?step=${encodeURIComponent(lesson.step)}`;
        secondary.textContent = 'Review concept';
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', renderContinueLearning, { once: true });
    } else {
        renderContinueLearning();
    }
})();
