<<<<<<< HEAD


=======
>>>>>>> b342bbd (schedule dynamic and bottom_nav fixed)
const getDayName = (dateString = '06-04-2023') => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const d = new Date(dateString);
    const dayName = days[d.getDay()];
    return dayName
}
<<<<<<< HEAD


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
=======
module.exports = {
>>>>>>> b342bbd (schedule dynamic and bottom_nav fixed)
    getDayName
}