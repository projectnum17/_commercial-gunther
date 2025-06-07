const calcScrollingBlock = () => {
    const scrollContainer = document.querySelector('.advantages__info');

    if (scrollContainer) {
        scrollContainer.addEventListener('scroll', () => {
            const scrollTop = scrollContainer.scrollTop;
            const scrollHeight = scrollContainer.scrollHeight;
            const clientHeight = scrollContainer.clientHeight;

            if (scrollTop + clientHeight >= scrollHeight) {
                scrollContainer.classList.add('hide');
            } else {
                scrollContainer.classList.remove('hide');
            }
        });
    }
};

export default calcScrollingBlock;
