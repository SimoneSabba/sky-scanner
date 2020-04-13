export const minsToHours = (mins) => Math.floor(mins / 60) + ":" + mins % 60;

export const formatTime = (dateToFormat) => {
    const time = new Date(dateToFormat);
    return `${time.getHours()}:${time.getHours()}`;
}