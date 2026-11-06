(function() {
    const isLocalHost = ['localhost', '127.0.0.1'].includes(window.location.hostname);
    if (isLocalHost && window.location.port !== '3000') {
        const appUrl = new URL(window.location.href);
        appUrl.port = '3000';
        window.location.replace(appUrl.href);
    }
})();
