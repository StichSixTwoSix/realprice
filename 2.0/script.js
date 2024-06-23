const menuButton = document.querySelector(".butter");
const infoBtn = document.querySelector(".infoBtn");
const closeButton = document.querySelector(".closeIcon");
const menuBody = document.querySelector(".menu-list");
const about = document.querySelector(".about");
const body = document.querySelector(".body");
const main = document.querySelector("#main");
const footer = document.querySelector(".footer");
// var calc = "kilo";

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
  menuBody.classList.remove("open");
  about.classList.add("open");
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
  console.log(calc);
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

function clears() {
  document.querySelector("#price").value = "";
  document.querySelector("#count").value = "";
  document.getElementById("result").innerHTML = "";
  document.querySelector("#logi").innerHTML = "";
}

function cls() {
  document.querySelector("#kg").classList.remove("active");
  document.querySelector("#lit").classList.remove("active");
  document.querySelector("#sht").classList.remove("active");
  document.querySelector("#upak").classList.remove("active");
  document.querySelector("#tKg").classList.remove("active");
  document.querySelector("#tLit").classList.remove("active");
  document.querySelector("#tSht").classList.remove("active");
  document.querySelector("#tUpak").classList.remove("active");
}

document.querySelector("#upak").addEventListener("click", function () {
  cls();
  document.querySelector("#upack").classList.add("active");
  document.querySelector("#tUpak").classList.add("active");
  sht();
});
document.querySelector("#tUpak").addEventListener("click", function () {
  cls();
  document.querySelector("#upak").classList.add("active");
  document.querySelector("#tUpak").classList.add("active");
  sht();
});

console.log(calc);

function sht() {
  document.getElementById("result").innerHTML = `<span
          >Введите цену за килограмм (литр), вес (объём) 
          упаковки и нажмите на кнопку
          "Рассчитать"</span>`;
  document.getElementById("priceTitle").innerHTML = "Введите цену за килограмм";
  document.getElementById("vesTitle").innerHTML = "Введите вес в граммах";
  var calc = "upack";
  console.log(calc);
}
