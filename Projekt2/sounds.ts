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

function setSounds(): ISoundSet {
    let soundSet: ISoundSet;

    soundSet.boomSound = document.querySelector('[data-sound="boom"]')
    soundSet.clapSound = document.querySelector('[data-sound="clap"]')
    soundSet.hihatSound = document.querySelector('[data-sound="hihat"]')
    soundSet.kickSound = document.querySelector('[data-sound="kick"]')
    soundSet.openhatSound = document.querySelector('[data-sound="openhat"]')
    soundSet.rideSound = document.querySelector('[data-sound="ride"]')
    soundSet.snareSound = document.querySelector('[data-sound="snare"]')
    soundSet.tinkSound = document.querySelector('[data-sound="tink"]')
    soundSet.tomSound = document.querySelector('[data-sound="tom"]')

    return soundSet
}

export default class SoundHelper {
    soundSet: ISoundSet = setSounds();

    playSound(key: string): void {
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