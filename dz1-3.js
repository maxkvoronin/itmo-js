/*
    JS
    Урок 1. Задание 3.

    Дано целое число в диапазоне 0 - 9.

    Вывести строку - название соответствующей цифры
    на русском языке
    (0 - "ноль", 1 - "один", 2 - "два", ...).

    Maxim Voronin @ ITMO 04/2018
*/
var inputNum=0;
var namesOfDigits=["ноль","один","два","три","четыре","пять","шесть","семь","восемь","девять"];

GetNumInRange09();

if (inputNum!= null)
    alert("Вы ввели цифру " + namesOfDigits[inputNum]);
else
    alert("Не хотите вводить. Ну и ладно");


//функция проверки введенного числа на диапозон
function GetNumInRange09() {
    while (inputNum = prompt('Введите целое число в диапазоне от 0 до 9')) {
        if (IsValidFormat(inputNum) ) { //если не каракули ввели
            if (!isInt(inputNum)) { //если не целое число то опять предлагаем ввод
                alert('Вы ввели не целое число');
                continue;
            }
            if (inputNum >= 0 && inputNum <= 9) {
                break; //все ок выхдим
            }
            else {
                alert('Вы ввели целое число не верного диапозона');
                //и опять заново предлагаем ввод
            }
        }
    }
}

//проверка на ввод именно числа, а не '1212ыдлаоыв'
function IsValidFormat(num) {
    if (isNaN(+num)) { //Можно было использовать parseInt / parseFloat, но немного другую логику строить.
        alert("Неверный формат ввода. Введите целое число");
        return false;
    }
    return true;
}

//поверка на целое число
function isInt(numString) {
    return parseInt(numString) === +numString; // преобразуем к числу
}
