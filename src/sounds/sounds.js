import beep from "./Beep-tone.mp3";
import error from "./beep-error.mp3";

export const soundBeep = () => {
  const sound = new Audio(beep);
  return sound.play();
};
export const soundError = () => {
  const sound = new Audio(error);
  return sound.play();
};
