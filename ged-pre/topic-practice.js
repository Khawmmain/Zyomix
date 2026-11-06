(function () {
    const availableSections = new Set([
        'science-1-1', 'science-1-2', 'science-1-3', 'science-1-4', 'science-1-5', 'science-1-6',
        'science-2-1', 'science-2-2', 'science-2-3', 'science-2-4', 'science-2-5', 'science-2-6',
        'social-1-1', 'social-1-2'
    ]);

    window.hasTopicPractice = (stepId) => availableSections.has(stepId);

    window.renderCoursePracticeLists = function () {
        const subjects = [
            {
                subject: 'science',
                rootId: 'science-practice-chapters',
                chapters: window.scienceCourseChapters || [],
                badgeClass: 'science-pill',
                accentClass: 'bg-green'
            },
            {
                subject: 'social',
                rootId: 'social-practice-chapters',
                chapters: window.socialStudiesCourseChapters || [],
                badgeClass: 'social-pill',
                accentClass: 'bg-yellow'
            }
        ];

        subjects.forEach(({ subject, rootId, chapters, badgeClass, accentClass }) => {
            const root = document.getElementById(rootId);
            if (!root) return;
            root.replaceChildren();

            chapters.forEach((chapter, chapterIndex) => {
                const chapterNumber = chapterIndex + 1;
                const box = document.createElement('section');
                box.className = 'chapter-section-box';

                const titleBar = document.createElement('div');
                titleBar.className = 'chapter-title-bar';
                const badge = document.createElement('span');
                badge.className = `chapter-pill ${badgeClass}`;
                badge.textContent = `${subject === 'science' ? 'Science' : 'Social Studies'} Chapter ${chapterNumber}`;
                const divider = document.createElement('span');
                divider.className = 'divider-line';
                divider.textContent = '|';
                const title = document.createElement('h3');
                title.textContent = chapter.title;
                titleBar.append(badge, divider, title);

                const grid = document.createElement('div');
                grid.className = 'steps-grid-2col';
                chapter.sections.forEach(([sectionTitle], sectionIndex) => {
                    const sectionNumber = sectionIndex + 1;
                    const stepId = `${subject}-${chapterNumber}-${sectionNumber}`;
                    const available = window.hasTopicPractice(stepId);
                    const card = document.createElement('a');
                    card.href = available
                        ? `quiz.html?step=${stepId}`
                        : `lesson.html?step=${stepId}`;
                    card.className = 'step-practice-card searchable-card';

                    const details = document.createElement('div');
                    const sectionBadge = document.createElement('span');
                    sectionBadge.className = `step-header-tag ${accentClass}`;
                    sectionBadge.textContent = `Section ${chapterNumber}.${sectionNumber}`;
                    const heading = document.createElement('h4');
                    heading.textContent = sectionTitle;
                    const description = document.createElement('p');
                    description.textContent = available
                        ? 'Topic-specific practice questions are available.'
                        : 'Topic-specific practice is not yet available. Review the lesson while this question set is being prepared.';
                    details.append(sectionBadge, heading, description);

                    const action = document.createElement('span');
                    action.className = `start-btn ${available ? 'green-btn' : ''}`;
                    action.textContent = available ? 'Start Practice →' : 'Review Lesson →';
                    card.append(details, action);
                    grid.append(card);
                });

                box.append(titleBar, grid);
                root.append(box);
            });
        });
    };
})();
