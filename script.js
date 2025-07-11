document.addEventListener("keydown", (event)=>{
const key = event.key.toUpperCase();

const sounds = {
    A: "sounds/clap.mp3",
    S: "sounds/hihat.mp3",
    D: "sounds/kick.mp3",
    F: "sounds/ride.mp3",
    G: "sounds/snare.mp3",
    H: "sounds/tom.mp3",
    V: "sounds/crashCymbal.mp3",


};

const soundFile = sounds[key];

if(soundFile) {
    const audio = new Audio(soundFile);
    audio.play();

    const button = document.querySelector(`button[data-key="${key}"]`);
    if (button) {
      button.classList.add("active");

      // Remove the class after the animation finishes
      setTimeout(() => {
        button.classList.remove("active");
      }, 200);
}
}
});

const buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
  btn.addEventListener("touchstart", () => {
    const key = btn.dataset.key;
    const soundFile = sounds[key];

    if (soundFile) {
      const audio = new Audio(soundFile);
      audio.play();

      btn.classList.add("active");
      setTimeout(() => btn.classList.remove("active"), 200);
    }
  });
});


