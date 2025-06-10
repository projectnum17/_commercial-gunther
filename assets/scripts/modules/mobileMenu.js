const mobileMenu = () => {
    const openMenu = document.querySelector('.js-menu-open');
    const closeMenu = document.querySelector('.js-menu-close');
    const menuLinks = document.querySelectorAll('.js-menu-link');
    const mobMenu = document.querySelector('.mobile-menu');

    if (openMenu && mobMenu) {
        openMenu.addEventListener('click', () => {
            mobMenu.classList.add('shown');
            document.body.style.overflow = 'hidden';
        });
    }

    if (menuLinks && mobMenu) {
        menuLinks.forEach((link) => {
            link.addEventListener('click', () => {
                mobMenu.classList.remove('shown');
                document.body.style.overflow = '';
            });
        });
    }

    if (closeMenu && mobMenu) {
        closeMenu.addEventListener('click', () => {
            mobMenu.classList.remove('shown');
            document.body.style.overflow = '';
        });
    }
};

export default mobileMenu;
