import axios from "axios";

function generateJoke() {
  const options = {
    headers: {
      Accept: "application/json",
    },
  };

  axios.get("https://icanhazdadjoke.com", options).then((res) => {
    document.getElementById("joke").innerHTML = res.data.joke;
  });
}

export default generateJoke;
