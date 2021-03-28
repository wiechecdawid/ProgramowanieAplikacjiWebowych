document.addEventListener('keypress', onKeyPressed)

function onKeyPressed(ev: KeyboardEvent): void {
    const key = ev.key;
    const stamp = ev.timeStamp;

    // const clapSound = document.querySelector('#clap');
    const clapSound: HTMLAudioElement = document.querySelector('[data-sound="clap"]');
    clapSound.currentTime = 0;
    clapSound.play();

    console.log(ev);
}