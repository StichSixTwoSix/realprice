function realprice() {

    var price = Number(document.getElementById("price").value);
    var count = Number(document.getElementById("counts").value);
    var realprice;

    realprice = (price / count * 1000).toFixed(2);

    document.getElementById("itog").innerHTML = (
        new Intl.NumberFormat("ru-RU").format(realprice) + ' руб.'
    );
}

function realpriceITEM() {

    var price = Number(document.getElementById("price").value);
    var count = Number(document.getElementById("counts").value);
    var realprice;

    realprice = (price / count).toFixed(2);

    document.getElementById("itog").innerHTML = (
        new Intl.NumberFormat("ru-RU").format(realprice) + ' руб.'
    );
}