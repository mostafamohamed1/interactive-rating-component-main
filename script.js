let mainContainer = document.querySelector(".main-container");
let thankContainer = document.querySelector(".thank-container");
let btns = document.querySelectorAll(".btn");
let rating = document.getElementById("rate");
let submit = document.querySelector(".submit");

submit.addEventListener("click", () => {
  thankContainer.classList.remove("hidden");
  mainContainer.style.display = "none";
});

btns.forEach((rate) => {
  rate.addEventListener("click", () => {
    rating.innerHTML = rate.innerHTML;
  });
});
