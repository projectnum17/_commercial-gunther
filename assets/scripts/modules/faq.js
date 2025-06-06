const faq = () => {
    const faqBoxes = document.querySelectorAll('.faq__item');
    faqBoxes.forEach((box) => {
        box.addEventListener('click', function () {
            this.classList.toggle('open')
        });
    });
};

export default faq;
