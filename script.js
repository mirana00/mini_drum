document.addEventListener("keydown", (event)=>{
const key = event.key.toUpperCase();

const sounds = {
    A: "sounds/clap.mp3",
    S: "sounds/hihat.mp3",
    D: "sounds/kick.mp3",
    F: "sounds/ride.mp3",
    G: "sounds/snare.mp3",
    H: "sounds/tom.mp3",

};

const soundFile = sounds[key];

if(soundFile) {
    const audio = new Audio(soundFile);
    audio.play();

}

});