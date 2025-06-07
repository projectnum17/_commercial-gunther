'use strict';

import beforeAfterSlider from './modules/beforeAfterSlider.js';
import slider from './modules/slider.js';
import video from './modules/video.js';
import faq from './modules/faq.js';
import calcScrollingBlock from './modules/calcScrollingBlock.js';
import setupCounterObserver from './modules/counterObserver.js';

document.addEventListener('DOMContentLoaded', () => {
    beforeAfterSlider();
    setupCounterObserver('.pros__about-val');
    setupCounterObserver('.intro__num-item span');
    setupCounterObserver('.stats-box__val');
    slider();
    calcScrollingBlock();
    video();
    faq();
});
