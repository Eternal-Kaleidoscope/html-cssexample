let instance

/**
 * 统一的音效管理器
 */

export class Music {
    constructor() {
        if (instance) return instance

        instance = this

        this.bgmAudio = new Audio()
        this.bgmAudio.loop = false
        this.bgmAudio.src = 'audio/start.wav'

        this.shootAudio = new Audio()
        this.shootAudio.src = 'audio/fire.wav'

        this.playBgm()
    }

    playBgm() {
        this.bgmAudio.play()
    }

    playShoot() {
        this.shootAudio.currentTime = 0
        this.shootAudio.play()
    }

}
