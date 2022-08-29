import generateJoke from "./generateJoke";
import "./styles/main.scss";
import foxImage from "./assets/fox_face.jpg";

console.log(generateJoke());

const foxImgTag = document.getElementById("fox");
foxImgTag.src = foxImage;

const genJokeBtn = document.getElementById("jokeBtn");
genJokeBtn.addEventListener("click", generateJoke);
