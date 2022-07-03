export const formatTime = (inputTime) => {
  const time = inputTime / 1000;
  let minutes = Math.floor(time / 60);
  minutes = minutes < 10 ? "0" + minutes : minutes;
  let seconds = Math.round(time % 60);
  seconds = seconds < 10 ? "0" + seconds : seconds;
  const formattedTime = `${minutes}:${seconds}`;
  return formattedTime;
};

export const millisecondsToMinutes = (milliseconds) => {
  return milliseconds / 60 / 1000;
};