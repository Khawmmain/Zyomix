(function() {
    const headerContainer = document.querySelector('.site-header .header-container');
    const navigation = headerContainer?.querySelector('.nav-links');

    if (!headerContainer || !navigation) return;

    navigation.id = navigation.id || 'primary-navigation';
    const menuButton = document.createElement('button');
    menuButton.className = 'mobile-nav-toggle';
    menuButton.type = 'button';
    menuButton.setAttribute('aria-controls', navigation.id);
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation menu');
    menuButton.innerHTML = '<span class="mobile-nav-icon" aria-hidden="true"><span></span><span></span><span></span></span><span>Menu</span>';
    headerContainer.insertBefore(menuButton, navigation);

    function setMenuOpen(isOpen) {
        menuButton.setAttribute('aria-expanded', String(isOpen));
        menuButton.setAttribute('aria-label', `${isOpen ? 'Close' : 'Open'} navigation menu`);
        navigation.classList.toggle('is-open', isOpen);
    }

    menuButton.addEventListener('click', () => {
        setMenuOpen(menuButton.getAttribute('aria-expanded') !== 'true');
    });

    navigation.addEventListener('click', event => {
        if (event.target.closest('a')) setMenuOpen(false);
    });

    document.addEventListener('keydown', event => {
        if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
            setMenuOpen(false);
            menuButton.focus();
        }
    });
})();
