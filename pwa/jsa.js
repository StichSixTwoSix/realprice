function changeType() {
    var si = document.querySelectorAll('input[name="type"]');
    for (var f of si) {
        if (f.checked) {
            var sival = f.value
        }
    }; 
        switch (sival) {
        case 'kg':
            var inp = 'Введите вес в граммах';
            var edsi = 'г.'
            break;
        case 'ml':
            var inp = 'Введите объем в милилитрах';
            var edsi = 'мл.'
            break;
        case 'cn':
            var inp = 'Введите количество в штуках';
            var edsi = 'шт.'
        break;
    }  
    document.getElementById("counts-title").innerHTML = inp;
    document.getElementById("counts-si").innerHTML = edsi;
}


function realprice() {

    var price = Number(document.getElementById("price").value);
    var count = Number(document.getElementById("qty").value);
    var realprice;
    var si = document.querySelectorAll('input[name="type"]');
    for (var f of si) {
        if (f.checked) {
            var sival = f.value
        }
    };   

    if (price > 0 | count > 0) {

    switch (sival) {
        case 'kg':
            realprice = (price / count * 1000).toFixed(2);
            var logTitle = 'Цена за килограмм'
            var logSI = ' г.'
            break;
        case 'ml':
            realprice = (price / count * 1000).toFixed(2);
            var logTitle = 'Цена за литр';
            var logSI = ' мл.'
            break;
        case 'cn':
            realprice = (price / count).toFixed(2);
            var logTitle = 'Цена за штуку'
            var logSI = ' шт.'
        break;
    }  

    document.getElementById("itog").innerHTML = (
        '<h2 class="itog-head">Честная цена</h2><span class="itog-itog" id="itog">'
        + new Intl.NumberFormat("ru-RU").format(realprice)
        + ' руб. </span><p class="itog-title">'
        + logTitle 
        + '</p>'
    );

    document.getElementById("logi").insertAdjacentHTML('beforeend',
        '<tr><td><div class="log-title">Цена за упаковку</div>'
            + Intl.NumberFormat("ru-RU").format(price)
            + ' руб.</td><td><div class="log-title">Упаковка</div>'
            + Intl.NumberFormat("ru-RU").format(count) + logSI + ''
            + '</td><td><div class="log-title">'
            + logTitle
            + '</div>'
            + Intl.NumberFormat("ru-RU").format(realprice)
            + ' руб.</td></tr>'
    );
    document.getElementById("price").value = "";
    document.getElementById("qty").value = "";


    } else {
        alert('Проверьте ввод!')
    }

}

function cls() {
    document.getElementById("itog").innerHTML = (
            '<img src="./realprice.svg" alt="" class="logo">'
            + '<h3>Только честные расчеты</h3>'
            + '<p>Все просто: выберите интересующий показатель, заполните требуемые поля</p>'
        );
    document.getElementById("logi").innerHTML = "";
    document.getElementById("price").value = "";
    document.getElementById("qty").value = "";
}