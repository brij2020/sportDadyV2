


const LIVE_SCORE_EVENTS = new Map([
    ['FIFTY', ]

]);

const makeAudio = (file) => {
    const audio = new Audio(file);
    const play = () => {
        audio?.play()
    }
    const pause = () => {
        audio.pause()
    }
    return{
        play,
        pause
    }
}
module.exports =  {
    makeAudio,
    getDayName
}