const video = () => {
    const videoItem = document.querySelector('.video video');
    const videoPlay = document.querySelector('.btn--play');
    const videoPause = document.querySelector('.btn--pause');

    const toggleVideo = () => {
        if (videoItem.paused) {
            videoItem.play();
            videoPlay.classList.add('hide');
            videoPause.classList.add('show');
        } else {
            videoItem.pause();
            videoPlay.classList.remove('hide');
            videoPause.classList.remove('show');
        }
    };

    if (videoItem && videoPlay && videoPause) {
        videoItem.addEventListener('click', toggleVideo);
        videoPlay.addEventListener('click', toggleVideo);
        videoPause.addEventListener('click', toggleVideo);
    }
};

export default video;
