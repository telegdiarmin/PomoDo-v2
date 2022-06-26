export const DEFAULT_TIMER_DURATION = 3 * 1000

export const calculateCurrentTime = () => new Date(Date.now()).getTime();

export const calculateRemainingTime = (startTime) => {
  const currentTime = calculateCurrentTime();
  const elapsedTime = currentTime - startTime;
  return DEFAULT_TIMER_DURATION - elapsedTime;
};

export const displayTimer = (inputTime) => {
  const time = inputTime / 1000;
  let minutes = Math.floor(time / 60);
  minutes = minutes < 10 ? "0" + minutes : minutes;
  let seconds = Math.round(time % 60);
  seconds = seconds < 10 ? "0" + seconds : seconds;
  return `${minutes}:${seconds}`;
};
