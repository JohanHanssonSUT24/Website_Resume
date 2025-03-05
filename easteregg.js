document.getElementById("easteregg").addEventListener("click", function () {
  window.location.href = "tel:+46707531173";
});
let code = [];
const easterEggCode = ["6", "6", "6"];

const modal = document.querySelector(".modal");
const closeButton = document.querySelector(".close");

document.addEventListener("keydown", (event) => {
  code.push(event.key);
  if (code.join("") === easterEggCode.join("")) {
    modal.style.display = "block";
  }
});
closeButton.addEventListener("click", () => {
  modal.style.display = "none";
});
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
