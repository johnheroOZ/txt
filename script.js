let openBtn = document.getElementById("modal-button");
let modal = document.getElementById("modal-container");
let closeBtn = document.getElementById("close");
let bg = document.getElementById("bg");

openBtn.addEventListener("click", () => {
  modal.style.bottom = "0px";
  bg.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  modal.style.bottom = "-500px";
  bg.style.display = "none";
});
