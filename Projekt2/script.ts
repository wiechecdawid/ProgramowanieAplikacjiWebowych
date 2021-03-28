let clapSound: HTMLAudioElement;
let kickSound: HTMLAudioElement;
let channel1Btn: HTMLButtonElement;

const channelArr: any[] = [];

function appStart(): void {
    document.addEventListener('keypress', onKeyPressed);
    
    channel1Btn = document.querySelectorAll('.channelButton')[0] as HTMLButtonElement;
    channel1Btn.addEventListener('click', onChannelPlayed);

    getAudioTags();
}

function onChannelPlayed(): void {
    channelArr.forEach(sound => {
        setTimeout(() => playSound(sound.key), sound.time);
    })
}

function getAudioTags(): void {
    // const clapSound = document.querySelector('#clap');
    clapSound = document.querySelector('[data-sound="clap"]');
    kickSound = document.querySelector('[data-sound="kick"]');
}

function onKeyPressed(ev: KeyboardEvent): void {
    const key = ev.key;
    const stamp = ev.timeStamp;

    channelArr.push({key, stamp});

    playSound(key);

    console.log(ev);
}


function playSound(key: string): void {
    switch(key) {
        case 'q':
            clapSound.currentTime = 0;
            clapSound.play();
            break;
        case 'w':
            kickSound.currentTime = 0;
            kickSound.play();
            break;
    }
}

appStart();