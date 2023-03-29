const timer = document.querySelector('.timer');
const button = document.querySelector('.button');
const audio = document.querySelector('audio');
const body = document.querySelector('body');
let interval;
let seconds = 2400;

button.addEventListener('click', () => {
    if (timer.classList.contains('paused')) {
        onStart();

        interval = setInterval(() => {
            console.log(seconds)
            if (seconds > 0) {
                seconds--;
                timer.innerText = new Date(seconds * 1000).toISOString().slice(14, 19)
            } else {
                clearInterval(interval);
                onFocusEnd();
            }
        }, 1000)
    } else {
        onPause();
    }

})

const onFocusEnd = () => {
    audio.play();
    body.style.background = '#6c9168bf';
    onPause();
}

const onPause = () => {
    timer.classList.add('paused');
    button.innerText = 'START';
    clearInterval(interval);
}

const reset = () => {
    audio.pause();
    audio.currentTime = 0;
    body.style.background = 'none';
}

const onStart = () => {
    timer.classList.remove('paused');
    button.innerText = 'PAUSE';
    if (seconds == 0) {
        reset();
        seconds = 2400;
    }
}