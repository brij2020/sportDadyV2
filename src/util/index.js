const getDayName = (dateString = '06-04-2023') => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const d = new Date(dateString);
    const dayName = days[d.getDay()];
    return dayName
}
module.exports = {
    getDayName
}