'use strict';

import slider from './modules/slider.js';
import video from './modules/video.js';
import faq from './modules/faq.js';
import beforeAfterSlider from './modules/beforeAfterSlider.js';

document.addEventListener('DOMContentLoaded', () => {
    beforeAfterSlider()
    slider();
    video();
    faq();
});
