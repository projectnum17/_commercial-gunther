const header = () => {
    const header = document.querySelector('header');
    if (!header) return;

    const toggleHeaderStyles = () => {
        if (window.scrollY > 5) {
            header.classList.add('scroll');
        } else {
            header.classList.remove('scroll');
        }
    };
    toggleHeaderStyles();
    window.addEventListener('scroll', toggleHeaderStyles);
};

export default header;
