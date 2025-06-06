// const beforeAfterSlider = () => {
//     new BeerSlider(document.querySelector('#heroSlider'));
// };

// export default beforeAfterSlider;

const beforeAfterSlider = () => {
    const slider = document.querySelector('#heroSlider');
    if (slider) {
        const beerSlider = new BeerSlider(slider);

        const handle = slider.querySelector('.beer-handle');
        const container = slider;

        let isDragging = false;

        const onTouchStart = (e) => {
            isDragging = true;
        };

        const onTouchMove = (e) => {
            if (!isDragging) return;
            const touch = e.touches[0];
            const rect = container.getBoundingClientRect();
            const offsetX = touch.clientX - rect.left;
            const percent = (offsetX / rect.width) * 100;

            beerSlider.reveal.style.width = `${percent}%`;
            beerSlider.handle.style.left = `${percent}%`;
        };

        const onTouchEnd = () => {
            isDragging = false;
        };

        handle.addEventListener('touchstart', onTouchStart, { passive: true });
        container.addEventListener('touchmove', onTouchMove, { passive: true });
        window.addEventListener('touchend', onTouchEnd);
    }
};

export default beforeAfterSlider;
