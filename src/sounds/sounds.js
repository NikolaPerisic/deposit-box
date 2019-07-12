import beep from "./Beep-tone.mp3";
import error from "./beep-error.mp3";

export const playSound = val => {
  let sound;
  if (val === "error") {
    sound = new Audio(error);
    return sound.play();
  }
  sound = new Audio(beep);
  return sound.play();
};
