const faq = () => {
    const faqBoxes = document.querySelectorAll('.faq__item');
    const showMoreButton = document.querySelector('.js-more');
    const visibleCount = 5;

    if (!faqBoxes.length) return;

    faqBoxes[0].classList.add('open');

    faqBoxes.forEach((box, index) => {
        if (index >= visibleCount) {
            box.style.display = 'none';
        }

        box.addEventListener('click', () => {
            box.classList.toggle('open');
        });
    });

    if (showMoreButton && faqBoxes.length > visibleCount) {
        showMoreButton.style.display = '';

        showMoreButton.addEventListener('click', () => {
            faqBoxes.forEach((box, index) => {
                if (index >= visibleCount) {
                    box.style.display = '';
                }
            });

            showMoreButton.style.display = 'none';
        });
    } else if (showMoreButton) {
        showMoreButton.style.display = 'none';
    }
};

export default faq;