(() => {
    'use strict'
    // Does the browser support video
    let supportsVideo = !!document.getElementById('video').canPlayType;

    if(supportsVideo) {
        // Obtain handle to main elements
        let video = document.getElementById('video');
        
        // Obtain handles to buttons and other ui elements
        let progress = document.getElementById('progress');

        let playpause = document.getElementById('play-pause');
        let stop = document.getElementById('stop');
        let mute = document.getElementById('mute');
        let volinc = document.getElementById('vol-inc');
        let voldec = document.getElementById('vol-dec');
        let fullscreen = document.getElementById('fs');
        let subtitles = document.getElementById('subtitles');

        // When play button clicks
        playpause.addEventListener('click', () => {
            if (video.paused || video.ended) video.play();
            else video.pause();
        })

        
    }

})();