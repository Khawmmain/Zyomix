(function () {
    const header = document.querySelector('.site-header .header-container');
    const navigation = header?.querySelector('.nav-links');
    if (!header || !navigation) return;

    const profileLink = document.createElement('a');
    profileLink.className = 'header-account-link';
    profileLink.href = 'account.html';
    profileLink.setAttribute('aria-label', 'Open account');

    const avatar = document.createElement('span');
    avatar.className = 'header-account-avatar';
    avatar.setAttribute('aria-hidden', 'true');
    avatar.textContent = 'G';

    const label = document.createElement('span');
    label.className = 'header-account-name';
    label.textContent = 'Sign in';
    profileLink.append(avatar, label);
    header.append(profileLink);

    function initials(name) {
        return name
            .trim()
            .split(/\s+/)
            .slice(0, 2)
            .map(part => part[0])
            .join('')
            .toUpperCase() || 'U';
    }

    async function loadProfile() {
        const token = localStorage.getItem('zyomix_token');
        if (!token) return;

        try {
            const response = await fetch('/api/me', {
                headers: { Authorization: `Bearer ${token}` }
            });

            if (response.status === 401) {
                localStorage.removeItem('zyomix_token');
                return;
            }
            if (!response.ok) throw new Error(`Account request failed: ${response.status}`);

            const data = await response.json();
            const name = typeof data.user?.name === 'string' ? data.user.name.trim() : '';
            if (!name) throw new Error('Account response did not include a user name.');

            avatar.textContent = initials(name);
            label.textContent = name;
            profileLink.setAttribute('aria-label', `Open account for ${name}`);
        } catch (error) {
            console.warn('Unable to load the header account profile:', error);
            label.textContent = 'Account';
            profileLink.setAttribute('aria-label', 'Open account');
        }
    }

    loadProfile();
})();
