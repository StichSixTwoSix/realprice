const menuButton = document.querySelector(".butter");
const infoBtn = document.querySelector(".infoBtn");
const closeButton = document.querySelector(".closeIcon");
const menuBody = document.querySelector(".menu-list");
const about = document.querySelector(".about");
const body = document.querySelector(".body");
const main = document.querySelector("#main");
const footer = document.querySelector(".footer");

function lockContent() {
  body.classList.toggle("lock");
  main.classList.toggle("blur");
  footer.classList.toggle("blur");
}

menuButton.addEventListener("click", function (e) {
  menuBody.classList.toggle("open");
  lockContent();
});

infoBtn.addEventListener("click", function (e) {
  about.classList.add("open");
  lockContent();
});

closeButton.addEventListener("click", function (e) {
  about.classList.remove("open");
  lockContent();
});
