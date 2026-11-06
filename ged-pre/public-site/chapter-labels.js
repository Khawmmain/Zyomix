(function () {
    const subjects = {
        math: 'Mathematics',
        science: 'Science',
        rla: 'RLA',
        social: 'Social Studies'
    };

    function getSection(stepId) {
        const match = stepId.match(/^([a-z]+)-(\d+)-(\d+)$/i);
        if (!match) return null;

        const [, subject, chapter, lesson] = match;
        const section = subject.toLowerCase() === 'math' && chapter === '12'
            ? `1.${lesson}`
            : `${chapter}.${lesson}`;

        return {
            subject: subjects[subject.toLowerCase()] || subject.toUpperCase(),
            chapter,
            section
        };
    }

    function stepFromLink(link) {
        const destination = new URL(link.href, window.location.href);
        const queryStep = destination.searchParams.get('step');
        if (queryStep) return queryStep;
        return destination.hash.slice(1);
    }

    document.querySelectorAll('.step-badge-tag, .step-header-tag').forEach(badge => {
        const link = badge.closest('a[href]');
        let section = link && getSection(stepFromLink(link));
        if (!section) {
            const labelMatch = badge.textContent.trim().match(/^(?:Step|Section)\s+(\d+)\.(\d+)$/i);
            if (labelMatch) {
                const [, chapter, lesson] = labelMatch;
                section = {
                    section: chapter === '12' ? `1.${lesson}` : `${chapter}.${lesson}`
                };
            }
        }
        if (section) badge.textContent = `Section ${section.section}`;
    });

    document.querySelectorAll('.practice-subject-group[data-subject] .chapter-section-box').forEach(chapter => {
        const subject = chapter.closest('.practice-subject-group')?.dataset.subject;
        const label = chapter.querySelector('.chapter-pill')?.textContent || '';
        const chapterNumber = label.match(/Chapter\s+(\d+)/i)?.[1];
        if (subject && chapterNumber) {
            chapter.id = `chapter-assignment-${subject}-${chapterNumber}`;
        }
    });

    const lessonBadge = document.getElementById('lessonBadge');
    const lessonStep = new URLSearchParams(window.location.search).get('step');
    const lessonSection = lessonStep && getSection(lessonStep);
    if (lessonBadge && lessonSection) {
        lessonBadge.textContent = `${lessonSection.subject} · Chapter ${lessonSection.chapter} · Section ${lessonSection.section}`;
    }
})();
