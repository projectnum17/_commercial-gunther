const beforeAfterSlider = () => {
    const sliders = document.querySelectorAll('[data-component="image-comparison-slider"]');

    const activateRange = (range) => range.classList.add('image-comparison__range--active');
    const deactivateRange = (range) => range.classList.remove('image-comparison__range--active');

    const moveSliderThumb = (e, range, thumb) => {
        let position = e.layerY - 20;
        position = Math.max(-20, Math.min(position, range.offsetHeight - 20));
        thumb.style.top = `${position}px`;
    };

    const init = (element) => {
        const range = element.querySelector('[data-image-comparison-range]');
        const slider = element.querySelector('[data-image-comparison-slider]');
        const overlay = element.querySelector('[data-image-comparison-overlay]');
        const thumb = element.querySelector('[data-image-comparison-thumb]');

        const onMove = (e) => moveSliderThumb(e, range, thumb);

        range.addEventListener('input', (e) => {
            const value = e.target.value;
            slider.style.left = `${value}%`;
            overlay.style.width = `${value}%`;
            activateRange(range);
            element.addEventListener('mousemove', onMove);
        });

        range.addEventListener('change', () => {
            deactivateRange(range);
            element.removeEventListener('mousemove', onMove);
        });

        if (!('ontouchstart' in window)) {
            range.addEventListener('mouseup', () => deactivateRange(range));
            range.addEventListener('mousedown', () => element.addEventListener('mousemove', onMove));
        }

        range.addEventListener('touchstart', () => activateRange(range), { passive: true });
        range.addEventListener('touchend', () => deactivateRange(range), { passive: true });
    };

    sliders.forEach(init);
};

export default beforeAfterSlider;