(function () {
    const subjectNames = {
        math: 'mathematics math',
        science: 'science',
        rla: 'rla language arts reading',
        social: 'social studies civics history'
    };
    const subjectCardNames = {
        math: 'math-card',
        science: 'science-card',
        rla: 'rla-card',
        social: 'social-card'
    };
    const subjectLabels = {
        math: 'Mathematics',
        science: 'Science',
        rla: 'RLA',
        social: 'Social Studies'
    };

    function normalize(value) {
        return value.toLowerCase().replace(/[^a-z0-9.]+/g, ' ').trim();
    }

    function buildSearchIndex(html) {
        const catalog = new DOMParser().parseFromString(html, 'text/html');
        const searchTerms = Object.fromEntries(
            Object.keys(subjectNames).map(subject => [subject, [subjectNames[subject]]])
        );
        const lessons = [];

        catalog.querySelectorAll('.subject-detail-block').forEach(block => {
            const subject = block.dataset.subject;
            if (!searchTerms[subject]) return;

            block.querySelectorAll('.chapter-title-modern').forEach(heading => {
                const chapter = heading.textContent.trim();
                searchTerms[subject].push(chapter);
                const grid = heading.nextElementSibling;
                grid?.querySelectorAll('a[href]').forEach(link => {
                    const step = new URL(link.href, window.location.href).searchParams.get('step');
                    const title = link.querySelector('h4')?.textContent.trim();
                    const sectionNumber = step?.split('-').slice(1).join('.');
                    if (step && title) {
                        lessons.push({
                            subject,
                            chapter,
                            title,
                            section: `Section ${sectionNumber}`,
                            step,
                            terms: normalize(`${subjectLabels[subject]} ${chapter} ${title} Section ${sectionNumber} Step ${sectionNumber} ${step}`)
                        });
                    }
                    searchTerms[subject].push(
                        link.textContent,
                        link.querySelector('.step-badge-tag')?.textContent || '',
                        step || '',
                        sectionNumber ? `Section ${sectionNumber} Step ${sectionNumber}` : ''
                    );
                });
            });
        });

        return {
            subjectTerms: Object.fromEntries(
                Object.entries(searchTerms).map(([subject, terms]) => [subject, normalize(terms.join(' '))])
            ),
            lessons
        };
    }

    async function initializeSearch() {
        const input = document.getElementById('homeSearchInput');
        const status = document.getElementById('homeSearchStatus');
        const matches = document.getElementById('homeSearchMatches');
        const cards = [...document.querySelectorAll('.module-grid .module-card')];
        const filters = [...document.querySelectorAll('.home-category-filter')];
        if (!input || !status || !matches || !cards.length || !filters.length) return;

        let activeCategory = 'all';
        let searchIndex = { subjectTerms: {}, lessons: [] };
        let searchIndexAvailable = true;

        function updateResults() {
            const query = normalize(input.value);
            const terms = query ? query.split(/\s+/) : [];
            let visibleCount = 0;

            cards.forEach(card => {
                const subject = Object.keys(subjectCardNames)
                    .find(key => card.classList.contains(subjectCardNames[key]));
                const categoryMatches = activeCategory === 'all' || activeCategory === subject;
                const haystack = normalize(`${card.innerText} ${searchIndex.subjectTerms[subject] || ''}`);
                const queryMatches = terms.every(term => haystack.includes(term));
                const visible = categoryMatches && queryMatches;
                card.hidden = !visible;
                if (visible) visibleCount += 1;
            });

            const matchingLessons = query
                ? searchIndex.lessons.filter(lesson =>
                    (activeCategory === 'all' || lesson.subject === activeCategory)
                    && terms.every(term => lesson.terms.includes(term)))
                : [];
            matches.replaceChildren();
            if (matchingLessons.length) {
                const heading = document.createElement('h3');
                heading.textContent = 'Matching sections';
                matches.append(heading);
                matchingLessons.slice(0, 8).forEach(lesson => {
                    const link = document.createElement('a');
                    link.className = 'home-search-result';
                    link.href = `lesson.html?step=${encodeURIComponent(lesson.step)}`;
                    const copy = document.createElement('span');
                    const title = document.createElement('strong');
                    title.textContent = lesson.title;
                    const context = document.createElement('small');
                    context.textContent = `${subjectLabels[lesson.subject]} · ${lesson.section} · ${lesson.chapter}`;
                    copy.append(title, context);
                    const arrow = document.createElement('span');
                    arrow.className = 'home-search-result-arrow';
                    arrow.setAttribute('aria-hidden', 'true');
                    arrow.textContent = '→';
                    link.append(copy, arrow);
                    matches.append(link);
                });
            }

            let resultMessage = '';
            if (query || activeCategory !== 'all') {
                resultMessage = matchingLessons.length
                    ? `${matchingLessons.length} matching section${matchingLessons.length === 1 ? '' : 's'} in ${visibleCount} subject${visibleCount === 1 ? '' : 's'}. Open a result or choose a subject.`
                    : visibleCount
                        ? `${visibleCount} subject${visibleCount === 1 ? '' : 's'} found. Choose a subject to browse its concepts or practice.`
                        : 'No subjects or sections match your search. Try another word or choose All.';
            }
            const indexMessage = searchIndexAvailable
                ? ''
                : 'Topic search is unavailable right now. You can still filter by subject.';
            status.textContent = [resultMessage, indexMessage].filter(Boolean).join(' ');
        }

        input.addEventListener('input', updateResults);
        filters.forEach(button => {
            button.addEventListener('click', () => {
                activeCategory = button.dataset.category || 'all';
                filters.forEach(filter => {
                    const selected = filter === button;
                    filter.classList.toggle('is-active', selected);
                    filter.setAttribute('aria-pressed', String(selected));
                });
                updateResults();
            });
        });

        try {
            const response = await fetch('concept.html');
            if (!response.ok) throw new Error(`Concept catalog request failed: ${response.status}`);
            searchIndex = buildSearchIndex(await response.text());
        } catch (error) {
            console.error('Unable to load concept search index:', error);
            searchIndexAvailable = false;
        }
        updateResults();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeSearch, { once: true });
    } else {
        initializeSearch();
    }
})();
