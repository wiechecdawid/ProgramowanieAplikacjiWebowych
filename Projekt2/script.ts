import SoundHelper from './sounds';

interface IChannel {
    isRecording: boolean,
    playBtn: HTMLButtonElement,
    recordBtn: HTMLButtonElement,
    soundHelper: SoundHelper,
    sounds: { key: string, stamp: number }[]

    onPlayPressed(): void,
    onRecordPressed(ev: MouseEvent): void
}

class App {
    channels: IChannel[] = this.setChannels(document.querySelectorAll('.channel'));

    setChannels(channelDivs: NodeListOf<Element>): IChannel[] {
        let channels: IChannel[] = [];
        let channel: IChannel;
        channel.isRecording = false;
        channel.soundHelper = new SoundHelper();
        channel.sounds = [];
        channel.onRecordPressed = onChannelRecorded;
        channel.onPlayPressed = onChannelPlayed;

        channelDivs.forEach(el => {
            channel.playBtn = el.children[1] as HTMLButtonElement;
            channel.playBtn.addEventListener('click', channel.onPlayPressed);

            channel.recordBtn = el.children[0] as HTMLButtonElement;
            channel.recordBtn.addEventListener('click', channel.onRecordPressed)

            channels.push(channel);
        })

        return channels;
    }

    appStart(): void {
        document.addEventListener('keypress', this.onKeyPressed)
    }
    
    
    onKeyPressed(ev: KeyboardEvent): void {
        const key = ev.key;
        const stamp = ev.timeStamp;

        this.channels.forEach(ch => {
            if(ch.isRecording) {                
                ch.sounds.push({ key, stamp });
                ch.soundHelper.playSound(key);
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

    this.isRecorded = true;

    const key = '-';
    const stamp = ev.timeStamp;

    this.sounds.push({ key, stamp });
}

function onChannelPlayed(): void {
    this.sounds.forEach(sound => {
        setTimeout( this.soundHelper.playSound(sound.key), sound.stamp-this.sounds[0].stamp );
    });
}

