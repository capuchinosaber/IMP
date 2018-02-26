var myAudio = document.getElementById("sound");

    
function playPause() {

    if(myAudio.paused) {
        myAudio.play();
                
    } else {
           myAudio.pause();
    }
    
}
    function stop() {
        myAudio.stop();
    }


    window.SetVolume = function(val) {
    
    console.log('Before: ' + myAudio.volume);
    myAudio.volume = val / 100;
    console.log('After: ' + myAudio.volume);
    
    }

    