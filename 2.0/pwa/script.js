const menuButton = document.querySelector(".butter");
const infoBtn = document.querySelector(".infoBtn");
const closeButton = document.querySelector(".closeIcon");
const menuBody = document.querySelector(".menu-list");
const about = document.querySelector(".about");
const body = document.querySelector(".body");
const main = document.querySelector("#main");
const footer = document.querySelector(".footer");

menuButton.addEventListener("click", function (e) {
  menuBody.classList.toggle("open");
  body.classList.toggle("lock");
  main.classList.toggle("blur");
  footer.classList.toggle("blur");
});

infoBtn.addEventListener("click", function (e) {
  menuBody.classList.remove("open");
  about.classList.add("open");
});

closeButton.addEventListener("click", function (e) {
  about.classList.remove("open");
  body.classList.remove("lock");
  main.classList.remove("blur");
  footer.classList.remove("blur");
});

function clears() {
  let countType = document.getElementById("knopka").name;

  switch (countType) {
    case "kilo":
      var rez = `<span>
    Введите цену за упаковку, её вес в граммах 
    и нажмите на кнопку
    "Рассчитать"</span>`;
      break;
    case "litre":
      var rez = `<span>
    Введите цену за упаковку, её объем в миллилитрах 
    и нажмите на кнопку
    "Рассчитать"</span>`;
      break;
    case "sht":
      var rez = `<span>
    Введите цену за упаковку, количество 
    и нажмите на кнопку
    "Рассчитать"</span>`;
      break;
    case "upak":
      var rez = `<span>
    Введите цену за килограмм (литр), вес (объём) 
    упаковки и нажмите на кнопку
    "Рассчитать"</span>`;
      break;
  }

  document.querySelector("#price").value = "";
  document.querySelector("#count").value = "";
  document.querySelector("#result").innerHTML = rez;
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
  menuBody.classList.remove("open");
  body.classList.remove("lock");
  main.classList.remove("blur");
  footer.classList.remove("blur");
}

function kilo() {
  cls();
  document.getElementById("kg").classList.add("active");
  document.getElementById("tKg").classList.add("active");
  document.getElementById("result").innerHTML = `<span>
    Введите цену за упаковку, её вес в граммах 
    и нажмите на кнопку
    "Рассчитать"</span>`;
  document.getElementById("priceTitle").innerHTML = "Введите цену за упаковку";
  document.getElementById("vesTitle").innerHTML = "Введите вес в граммах";
  document.getElementById("edism").innerHTML = "г.";
  document.getElementById("knopka").name = "kilo";
}
function litre() {
  cls();
  document.getElementById("lit").classList.add("active");
  document.getElementById("tLit").classList.add("active");
  document.getElementById("result").innerHTML = `<span>
    Введите цену за упаковку, её объем в миллилитрах 
    и нажмите на кнопку
    "Рассчитать"</span>`;
  document.getElementById("priceTitle").innerHTML = "Введите цену за упаковку";
  document.getElementById("vesTitle").innerHTML = "Введите объем в миллилитрах";
  document.getElementById("edism").innerHTML = "мл.";
  document.getElementById("knopka").name = "litre";
}
function sht() {
  cls();
  document.getElementById("sht").classList.add("active");
  document.getElementById("tSht").classList.add("active");
  document.getElementById("result").innerHTML = `<span>
    Введите цену за упаковку, количество 
    и нажмите на кнопку
    "Рассчитать"</span>`;
  document.getElementById("priceTitle").innerHTML = "Введите цену за упаковку";
  document.getElementById("vesTitle").innerHTML = "Введите количество в штуках";
  document.getElementById("edism").innerHTML = "шт.";
  document.getElementById("knopka").name = "sht";
}
function upak() {
  cls();
  document.getElementById("upak").classList.add("active");
  document.getElementById("tUpak").classList.add("active");
  document.getElementById("result").innerHTML = `<span>
    Введите цену за килограмм (литр), вес (объём) 
    упаковки и нажмите на кнопку
    "Рассчитать"</span>`;
  document.getElementById("priceTitle").innerHTML = "Введите цену за килограмм";
  document.getElementById("vesTitle").innerHTML = "Введите вес в граммах";
  document.getElementById("edism").innerHTML = "г.";
  document.getElementById("knopka").name = "upak";
}

function itogi() {
  let countType = document.getElementById("knopka").name;
  let price = document.querySelector("#price").value;
  let count = document.querySelector("#count").value;
  var resultat;

  if ((price > 0) | (count > 0)) {
    switch (countType) {
      case "kilo":
        resultat = ((price / count) * 1000).toFixed(2);
        var logTitle = "Цена за килограмм";
        var logSI = " г.";
        break;
      case "litre":
        resultat = ((price / count) * 1000).toFixed(2);
        var logTitle = "Цена за литр";
        var logSI = " мл.";
        break;
      case "sht":
        resultat = (price / count).toFixed(2);
        var logTitle = "Цена за штуку";
        var logSI = " шт.";
        break;
      case "upak":
        // resultat = price;
        resultat = ((price * count) / 1000).toFixed(2);
        var logTitle = "Цена за упаковку";
        var logSI = " г.";
        break;
    }

    if (document.getElementById("knopka").name == "upak") {
      var a = "Цена за килограмм";
    } else {
      var a = "Цена за упаковку";
    }

    document.getElementById("result").innerHTML =
      '<span class="itog-itog">' +
      new Intl.NumberFormat("ru-RU").format(resultat) +
      ' руб. </span><p class="itog-title">' +
      logTitle +
      "</p>";

    document
      .getElementById("logi")
      .insertAdjacentHTML(
        "beforeend",
        '<tr><td><div class="log-title">' +
          a +
          "</div>" +
          Intl.NumberFormat("ru-RU").format(price) +
          ' руб.</td><td><div class="log-title">Упаковка</div>' +
          Intl.NumberFormat("ru-RU").format(count) +
          logSI +
          '</td><td><div class="log-title">' +
          logTitle +
          "</div>" +
          Intl.NumberFormat("ru-RU").format(resultat) +
          " руб.</td></tr>"
      );
    document.querySelector("#price").value = "";
    document.querySelector("#count").value = "";
  } else {
    alert("Проверьте ввод!");
  }
}
