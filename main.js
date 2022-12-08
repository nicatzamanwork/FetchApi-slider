let dog_btn = document.getElementById("dog_btn");

let dog_result = document.getElementById("dog_result");

let img = document.querySelector("img");
dog_btn.addEventListener("click", getRandomDOg);

function getRandomDOg() {
  fetch("https://dog.ceo/api/breeds/image/random'")
    .then((res) => res.json())
    .then((data) => (img.src = data.message));
}
