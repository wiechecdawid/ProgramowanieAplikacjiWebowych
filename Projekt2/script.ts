import SoundHelper from './sounds';

interface IChannel {
    playBtn: HTMLButtonElement,
    recordBtn: HTMLButtonElement,
    soundHelper: SoundHelper,
    sounds: { key: string, stamp: number }[]
}

class App {
    channels: IChannel[] = this.setChannels(document.querySelectorAll('.channel'));

    setChannels(channelDivs: NodeListOf<Element>): IChannel[] {
        let channels: IChannel[] = [];
        let channel: IChannel;
        channel.soundHelper = new SoundHelper();
        channel.sounds = [];

        channelDivs.forEach(el => {
            channel.playBtn = el.children[1] as HTMLButtonElement;
            channel.playBtn.addEventListener('click', onChannelPlayed);

            channel.recordBtn = el.children[0] as HTMLButtonElement;
            channel.recordBtn.addEventListener('click', onChannelRecorded)

            channels.push(channel);
        })

        return channels;
    }
}

let clapSound: HTMLAudioElement;
let kickSound: HTMLAudioElement;
let channel1Btn: HTMLButtonElement;
let recordBtn: HTMLButtonElement;

let channelArr: { key: string, stamp: number }[] = [];

function appStart(): void {
    document.addEventListener('keypress', onKeyPressed);
    
    channel1Btn = document.querySelectorAll('.channelButton')[0] as HTMLButtonElement;
    channel1Btn.addEventListener('click', onChannelPlayed);

    recordBtn = document.querySelectorAll('.recordButton')[0] as HTMLButtonElement;
    recordBtn.addEventListener('click', onChannelRecorded)
}

function onChannelPlayed(): void {
    channelArr.forEach(sound => {
        setTimeout(() => { 
            console.log(sound);
            playSound(sound.key)
        }, sound.stamp - channelArr[0].stamp);
    });
}

function onKeyPressed(ev: KeyboardEvent): void {
    const key = ev.key;
    const stamp = ev.timeStamp;

    channelArr.push({key, stamp});

    playSound(key);

    console.log(channelArr);
}


function onChannelRecorded(ev: MouseEvent) {
    channelArr = [];
    const key = '-';
    const stamp = ev.timeStamp;

    channelArr.push({ key, stamp })
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

