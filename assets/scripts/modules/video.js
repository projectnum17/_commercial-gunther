const video = () => {
    const videoItem = document.querySelector('.video video');
    const videoPlay = document.querySelector('.btn--play');

    if (!videoItem || !videoPlay) return;

    videoItem.addEventListener('play', () => {
        videoPlay.classList.add('hide');
    });

    videoItem.addEventListener('pause', () => {
        videoPlay.classList.remove('hide');
    });

    videoItem.addEventListener('ended', () => {
        videoPlay.classList.remove('hide');
    });

    videoPlay.addEventListener('click', () => {
        if (videoItem.paused) {
            videoItem.play();
        } else {
            videoItem.pause();
        }
    });
};

export default video;
