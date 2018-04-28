/*
    JS
    Урок 1. Задание 5.

    Проверить истинность высказывания:

    "Среди трех данных целых чисел есть 
    хоть бы одна пара совпадающих".

    Требуется вывести логическое значение True, если
    приведенное высказывание для предложенных исходных
    данных является истинным, и значение False в противном случае.

    Maxim Voronin @ ITMO 04/2018
*/
var input1="",input2="",input3="";

getNum();

alert(isTheSamePair(input1, input2, input3));

//функция которая запрашвает данные, пока пользователь не введет их правильно
function getNum() {
    while (input1 = prompt("Введите первое число") || input1!==null) {
        if (isValidFormat(input1) && isInt(input1))
            break;
    }
    while (input2 = prompt("Введите второе число") || input2!==null) {
        if (isValidFormat(input2) && isInt(input2))
            break;
    }
    while (input3 = prompt("Введите третье число") || input3!==null) {
        if (isValidFormat(input3) && isInt(input3))
            break;
    }
}

//Возвращает true если из трех строк с цеолыми чиселами есть пара совпадающих
function isTheSamePair(numString1, numString2, numString3) {

    return  numString1 === numString2 ||
            numString2 === numString3 ||
            numString3 === numString1;
}

//Возвращает true если строка не содержит недопустимых символов '1212ыдлаоыв'
function isValidFormat(numString) {
    if (isNaN(+numString)) { //Можно было использовать parseInt / parseFloat, но немного другую логику строить.
        alert("Неверный формат ввода. Введите число");
        return false;
    }
    return true;
}

//Возвращает true если строка numString содержит целое число
function isInt(numString) {
    if (parseInt(numString) === +numString) {
        return true;
    }
    alert("Неверный формат ввода. Введите целое число");
    return false;
}
