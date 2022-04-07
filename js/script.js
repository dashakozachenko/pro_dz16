"use strict";

function power(x, n= 1) {

    if (x === null || n == null) {
        return 'Вы отменили ввод данных!';
    }

    if (x.trim() === '' || isNaN(+x) || n.trim() === '' || isNaN(+n)) {
        return 'Ошибка!';
    }

    return x ** n;
}

let x = prompt("Число:");
let n = prompt("Степень:");
alert(power(x,n));



