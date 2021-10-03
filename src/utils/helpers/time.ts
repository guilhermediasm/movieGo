export const convertMinsToTime = (mins: number): string => {
  if (mins) {
    const hours = Math.floor(mins / 60);
    let minutes = mins % 60;
    minutes = minutes < 10 ? 0 + minutes : minutes;
    return `${hours}h ${minutes}min`;
  }
  return ' ';
};
