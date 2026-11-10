(function () {
    const completedKey = 'zyomix_completed_lessons';
    const pathsKey = 'zyomix_chapter_paths';
    let chapterPaths = [];

    function readArray(key) {
        try {
            const value = JSON.parse(localStorage.getItem(key) || '[]');
            return Array.isArray(value) ? value : [];
        } catch (error) {
            console.warn(`Unable to read ${key}:`, error);
            return [];
        }
    }

    function readPaths() {
        try {
            const paths = JSON.parse(localStorage.getItem(pathsKey) || '[]');
            return Array.isArray(paths) ? paths : [];
        } catch (error) {
            console.warn('Unable to read chapter paths:', error);
            return [];
        }
    }

    function savePaths(paths) {
        try {
            localStorage.setItem(pathsKey, JSON.stringify(paths));
        } catch (error) {
            console.warn('Unable to save chapter paths:', error);
        }
    }

    function collectChapterPaths(root = document) {
        return [...root.querySelectorAll('.subject-detail-block')].flatMap(subjectBlock => {
            const subject = subjectBlock.dataset.subject;
            return [...subjectBlock.querySelectorAll('.chapter-title-modern')].flatMap((heading, index) => {
                const cards = heading.nextElementSibling;
                if (!cards?.classList.contains('concept-steps-grid')) return [];

                const sections = [...cards.querySelectorAll('a[href]')].flatMap(link => {
                    const destination = new URL(link.href, window.location.href);
                    const step = destination.searchParams.get('step');
                    if (!step) return [];
                    return [{
                        step,
                        title: link.querySelector('h4')?.textContent.trim() || step.toUpperCase(),
                        label: link.querySelector('.step-badge-tag')?.textContent.trim() || '',
                        href: `lesson.html?step=${encodeURIComponent(step)}`
                    }];
                });
                if (!sections.length) return [];
                return [{
                    id: `${subject}-${index}-${heading.textContent.trim()}`,
                    subject,
                    title: heading.textContent.trim(),
                    chapterNumber: heading.textContent.match(/\bChapter\s+(\d+)\b/i)?.[1] || '',
                    sections
                }];
            });
        });
    }

    function nextIncomplete(path, completed) {
        return path.sections.find(section => !completed.has(section.step)) || path.sections[0];
    }

    function updateConceptCatalog(paths) {
        const completed = new Set(readArray(completedKey).filter(item => typeof item === 'string'));

        paths.forEach(path => {
            const heading = [...document.querySelectorAll('.chapter-title-modern')]
                .find(item => item.textContent.trim() === path.title);
            const grid = heading?.nextElementSibling;
            if (!heading || !grid?.classList.contains('concept-steps-grid')) return;

            const count = path.sections.filter(section => completed.has(section.step)).length;
            const toolbar = document.createElement('div');
            toolbar.className = 'chapter-learning-path';
            const progressCopy = document.createElement('span');
            progressCopy.className = 'chapter-path-count';
            progressCopy.textContent = `${count} of ${path.sections.length} sections complete`;
            const progress = document.createElement('div');
            progress.className = 'chapter-path-progress';
            progress.setAttribute('role', 'progressbar');
            progress.setAttribute('aria-label', `${path.title} progress`);
            progress.setAttribute('aria-valuemin', '0');
            progress.setAttribute('aria-valuemax', String(path.sections.length));
            progress.setAttribute('aria-valuenow', String(count));
            const fill = document.createElement('span');
            fill.style.width = `${Math.round((count / path.sections.length) * 100)}%`;
            progress.append(fill);
            const next = nextIncomplete(path, completed);
            const continueLink = document.createElement('a');
            continueLink.className = 'chapter-continue-link';
            continueLink.href = next.href;
            continueLink.textContent = count === path.sections.length ? 'Review chapter' : 'Continue chapter';
            const assignmentLink = document.createElement('a');
            assignmentLink.className = 'chapter-assignment-link';
            assignmentLink.href = path.chapterNumber
                ? `practice.html?subject=${encodeURIComponent(path.subject)}#chapter-assignment-${encodeURIComponent(path.subject)}-${encodeURIComponent(path.chapterNumber)}`
                : `practice.html?subject=${encodeURIComponent(path.subject)}`;
            assignmentLink.textContent = 'Chapter assignment';
            toolbar.append(progressCopy, progress, continueLink, assignmentLink);
            heading.after(toolbar);

            path.sections.forEach(section => {
                const card = [...grid.querySelectorAll('a[href]')].find(link => {
                    const destination = new URL(link.href, window.location.href);
                    return destination.searchParams.get('step') === section.step;
                });
                if (!card) return;

                if (card.querySelector('.section-completion-status')) return;
                if (completed.has(section.step)) card.classList.add('is-completed');

                const status = document.createElement('span');
                status.className = 'section-completion-status';
                status.textContent = completed.has(section.step) ? 'Completed' : 'Open lesson';
                card.append(status);
            });
        });
        savePaths(paths);
    }

    function renderChapterSidebar(subjectId) {
        const sidebar = document.getElementById('chapterSectionSidebar');
        if (!sidebar) return;

        const paths = subjectId === 'all'
            ? chapterPaths
            : chapterPaths.filter(path => path.subject === subjectId);
        const completed = new Set(readArray(completedKey).filter(item => typeof item === 'string'));
        const currentStep = new URLSearchParams(window.location.search).get('step');
        const subjectNames = {
            math: 'Mathematics',
            science: 'Science',
            rla: 'RLA',
            social: 'Social Studies'
        };

        sidebar.replaceChildren();
        const heading = document.createElement('h2');
        heading.className = 'chapter-sidebar-title';
        heading.textContent = 'Chapter sections';
        const description = document.createElement('p');
        description.className = 'chapter-sidebar-description';
        description.textContent = 'Choose a chapter to view its lessons.';
        const chapterList = document.createElement('div');
        chapterList.className = 'chapter-sidebar-list';

        paths.forEach((path, index) => {
            const chapter = document.createElement('details');
            chapter.className = 'chapter-sidebar-group';
            chapter.open = index === 0;

            const summary = document.createElement('summary');
            summary.className = 'chapter-sidebar-heading';
            const title = document.createElement('span');
            title.textContent = subjectId === 'all'
                ? `${subjectNames[path.subject] || path.subject}: ${path.title}`
                : path.title;
            const count = document.createElement('span');
            count.className = 'chapter-sidebar-count';
            count.textContent = `${path.sections.filter(section => completed.has(section.step)).length}/${path.sections.length}`;
            summary.append(title, count);
            chapter.append(summary);

            const sectionList = document.createElement('ul');
            sectionList.className = 'chapter-sidebar-sections';
            path.sections.forEach(section => {
                const item = document.createElement('li');
                const link = document.createElement('a');
                link.className = 'chapter-sidebar-link';
                link.href = section.href;
                link.textContent = [section.label, section.title].filter(Boolean).join(' · ');
                if (completed.has(section.step)) {
                    link.classList.add('is-completed');
                    link.setAttribute('aria-label', `${section.label} ${section.title}, completed`);
                }
                if (section.step === currentStep) {
                    link.setAttribute('aria-current', 'page');
                    chapter.open = true;
                }
                item.append(link);
                sectionList.append(item);
            });
            chapter.append(sectionList);
            chapterList.append(chapter);
        });

        sidebar.append(heading, description, chapterList);
        sidebar.hidden = paths.length === 0;
    }

    window.renderChapterSidebar = renderChapterSidebar;

    function renderLessonPath(paths) {
        const step = new URLSearchParams(window.location.search).get('step');
        if (!step) return;

        const path = paths.find(item => item.sections.some(section => section.step === step));
        const panel = document.getElementById('lessonCompletionPanel');
        if (!panel) return;

        const completed = new Set(readArray(completedKey).filter(item => typeof item === 'string'));
        const markButton = document.getElementById('markLessonCompleteButton');
        const status = document.getElementById('lessonCompletionStatus');
        const continueLink = document.getElementById('continueNextSectionLink');
        const chapterLink = document.getElementById('returnToChapterLink');
        chapterLink.href = `concept.html?subject=${encodeURIComponent(path?.subject || step.split('-')[0])}`;

        function showNextSection() {
            if (!path) {
                continueLink.hidden = true;
                status.textContent = 'Lesson completion is saved on this browser. Return to Concepts to choose another section.';
                return;
            }

            const currentIndex = path.sections.findIndex(section => section.step === step);
            const next = path.sections[currentIndex + 1];
            if (next) {
                continueLink.href = next.href;
                continueLink.textContent = 'Next Section →';
                continueLink.setAttribute('aria-label', `Continue to ${next.title}`);
                continueLink.title = `Continue to ${next.title}`;
                continueLink.hidden = false;
                const chapterCompleted = path.sections.filter(section => completed.has(section.step)).length;
                status.textContent = `${path.title}: ${chapterCompleted} of ${path.sections.length} sections completed.`;
            } else {
                continueLink.hidden = true;
                status.textContent = `You completed the final section in ${path.title}. Great work!`;
            }
        }

        markButton.hidden = false;
        markButton.disabled = !completed.has(step) && markButton.dataset.lessonStepsComplete !== 'true';
        if (!completed.has(step) && markButton.disabled) {
            status.textContent = 'Continue through each lesson step to unlock section completion.';
        }
        markButton.addEventListener('lesson-step-flow-change', event => {
            if (completed.has(step)) return;
            markButton.disabled = event.detail?.complete !== true;
            status.textContent = markButton.disabled
                ? 'Continue through each lesson step to unlock section completion.'
                : 'You reached the end of the lesson. Mark this section complete to continue.';
        });
        if (completed.has(step)) {
            markButton.dataset.lessonCompleted = 'true';
            markButton.textContent = '✓ Lesson completed';
            markButton.disabled = true;
            showNextSection();
        }

        markButton.addEventListener('click', () => {
            if (completed.has(step)) return;
            completed.add(step);
            try {
                localStorage.setItem(completedKey, JSON.stringify([...completed]));
            } catch (error) {
                console.error('Unable to save lesson completion:', error);
                status.textContent = 'Could not save completion. Please check browser storage and try again.';
                return;
            }
            markButton.dataset.lessonCompleted = 'true';
            markButton.textContent = '✓ Lesson completed';
            markButton.disabled = true;
            showNextSection();
        });
    }

    async function initialize() {
        if (document.body.classList.contains('concept-page')) {
            chapterPaths = collectChapterPaths();
            updateConceptCatalog(chapterPaths);
            return;
        }

        if (!document.body.classList.contains('lesson-page')) return;
        let paths = readPaths();
        if (!paths.length) {
            try {
                const response = await fetch('concept.html');
                if (!response.ok) throw new Error(`Concept catalog request failed: ${response.status}`);
                const html = await response.text();
                const catalog = new DOMParser().parseFromString(html, 'text/html');
                paths = collectChapterPaths(catalog);
                savePaths(paths);
            } catch (error) {
                console.error('Unable to load chapter sections:', error);
            }
        }
        chapterPaths = paths;
        renderLessonPath(paths);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initialize, { once: true });
    } else {
        initialize();
    }
})();
