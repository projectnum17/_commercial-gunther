const setupCounterObserver = (selector, options = {}) => {
    const counters = document.querySelectorAll(selector);
    const { threshold = 0.6, duration = 1000 } = options;

    const animate = (el, target, suffix = '') => {
        let start = 0;
        const startTime = performance.now();

        const step = (currentTime) => {
            const progress = Math.min((currentTime - startTime) / duration, 1);
            const value = Math.floor(progress * target);
            el.textContent = value + suffix;

            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                el.textContent = target + suffix;
            }
        };

        requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
        (entries, obs) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const target = parseInt(el.dataset.count, 10);
                    const suffix = el.dataset.suffix || '';
                    animate(el, target, suffix);
                    obs.unobserve(el);
                }
            });
        },
        { threshold }
    );

    counters.forEach((counter) => observer.observe(counter));
};

export default setupCounterObserver;
