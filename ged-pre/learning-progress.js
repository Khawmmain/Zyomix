(function() {
    const subjects = new Set(['math', 'science', 'rla', 'social']);

    function saveLessonFromLink(link) {
        const destination = new URL(link.href, window.location.href);
        const step = destination.searchParams.get('step');
        if (!step) return;

        const subject = step.split('-')[0];
        if (!subjects.has(subject)) return;

        const title = link.querySelector('h4')?.textContent.trim()
            || link.querySelector('strong')?.textContent.trim()
            || '';
        localStorage.setItem('zyomix_last_lesson', JSON.stringify({
            step,
            subject,
            title,
            updatedAt: new Date().toISOString()
        }));
    }

    document.addEventListener('click', event => {
        const link = event.target.closest('a[href]');
        if (link) saveLessonFromLink(link);
    }, true);

    const params = new URLSearchParams(window.location.search);
    const step = params.get('step');
    const subject = step?.split('-')[0];
    if (step && subjects.has(subject) && params.get('mode') !== 'exam') {
        const previous = (() => {
            try {
                return JSON.parse(localStorage.getItem('zyomix_last_lesson') || 'null');
            } catch (error) {
                console.warn('Unable to read the last studied lesson:', error);
                return null;
            }
        })();
        const lastLesson = {
            step,
            subject,
            title: previous?.step === step ? previous.title || '' : '',
            updatedAt: new Date().toISOString()
        };
        localStorage.setItem('zyomix_last_lesson', JSON.stringify(lastLesson));
    }
})();
