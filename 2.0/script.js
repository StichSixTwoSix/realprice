const data = [
  {
    menu: "Килограмм",
    description:
      'Введите цену за упаковку, её вес и нажмите на кнопку "Расчитать"',
    priceTitle: "руб.",
    edismTitle: "кг.",
    formula: () => {
      return ((price / count) * 1000).toFixed(2);
    },
  },
];

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

function itogi() {
  let price = document.querySelector("#price").value;
  let count = document.querySelector("#count").value;
  let itog = ((price / count) * 1000).toFixed(2);
  console.log(itog);
  document.querySelector("#price").value = "";
  document.querySelector("#count").value = "";
  document.getElementById("result").innerHTML =
    '<span class="itog-itog">' +
    new Intl.NumberFormat("ru-RU").format(itog) +
    ' руб. </span><p class="itog-title">' +
    "Цена за штуку" +
    "</p>";

  document
    .getElementById("logi")
    .insertAdjacentHTML(
      "beforeend",
      '<tr><td><div class="log-title">Цена за упаковку</div>' +
        Intl.NumberFormat("ru-RU").format(price) +
        ' руб.</td><td><div class="log-title">Упаковка</div>' +
        Intl.NumberFormat("ru-RU").format(count) +
        " руб. " +
        '</td><td><div class="log-title"> Цена за килограмм' +
        "</div>" +
        Intl.NumberFormat("ru-RU").format(itog) +
        " руб.</td></tr>"
    );
}
