interface ISoundSet {
    boomSound: HTMLAudioElement,
    clapSound: HTMLAudioElement,
    hihatSound: HTMLAudioElement,
    kickSound: HTMLAudioElement,
    openhatSound: HTMLAudioElement,
    rideSound: HTMLAudioElement,
    snareSound: HTMLAudioElement,
    tinkSound: HTMLAudioElement,
    tomSound: HTMLAudioElement
}

const soundHelper = {
    soundSet: {
        boomSound: document.querySelector('[data-sound="boom"]'),
        clapSound: document.querySelector('[data-sound="clap"]'),
        hihatSound: document.querySelector('[data-sound="hihat"]'),
        kickSound: document.querySelector('[data-sound="kick"]'),
        openhatSound: document.querySelector('[data-sound="openhat"]'),
        rideSound: document.querySelector('[data-sound="ride"]'),
        snareSound: document.querySelector('[data-sound="snare"]'),
        tinkSound: document.querySelector('[data-sound="tink"]'),
        tomSound: document.querySelector('[data-sound="tom"]')
    } as ISoundSet,

    playSound: function (key: string): void {
        for(const property in this.soundSet) {
            let temp: HTMLAudioElement = this.soundSet[property];

            if(key === temp.dataset.key)
            {
                temp.currentTime = 0;
                temp.play();

                return;
            }
        }
    }
}

interface IChannel {
    isRecording: boolean,
    playBtn: HTMLButtonElement,
    recordBtn: HTMLButtonElement,
    sounds: { key: string, stamp: number }[]

    onPlayPressed(): void,
    onRecordPressed(ev: MouseEvent): void
}

class App {
    setChannels(channelDivs: NodeListOf<Element>): IChannel[] {
        let chans: IChannel[] = [];
        let channel: IChannel = {
            isRecording: false,
            sounds: [],
            onRecordPressed: (ev: MouseEvent) => onChannelRecorded(ev),
            onPlayPressed: onChannelPlayed,
            playBtn: {} as HTMLButtonElement,
            recordBtn: {} as HTMLButtonElement
        };        

        channelDivs.forEach(el => {
            channel.playBtn = el.children[1] as HTMLButtonElement;
            channel.playBtn.addEventListener('click', () => channel.onPlayPressed);

            channel.recordBtn = el.children[0] as HTMLButtonElement;
            channel.recordBtn.addEventListener('click', () => channel.onRecordPressed)

            chans.push(channel);
        })

        return chans;
    }

    channels: IChannel[] = this.setChannels(document.querySelectorAll('.channel'));;

    appStart(): void {
        document.addEventListener('keypress', this.onKeyPressed)
    }
    
    
    onKeyPressed = (ev: KeyboardEvent): void => {
        const key = ev.key;
        const stamp = ev.timeStamp;
        console.log( { key, stamp} )
        console.log( this.channels )
        soundHelper.playSound(key);

        this.channels.forEach(ch => {
            if(ch.isRecording) {                
                ch.sounds.push({ key, stamp });
                console.log(ch.sounds);
            }
        });
    }
}

const app = new App();
app.appStart();

function onChannelRecorded(ev: MouseEvent) {
    app.channels.forEach(ch => {
        ch.isRecording = false;
        ch.sounds = [];
    })

    console.log(this);

    this.isRecording = true;

    const key = '-';
    const stamp = ev.timeStamp;

    this.sounds.push({ key, stamp });
}

function onChannelPlayed(): void {
    this.sounds.forEach(sound => {
        setTimeout( this.soundHelper.playSound(sound.key), sound.stamp-this.sounds[0].stamp );
    });
}

