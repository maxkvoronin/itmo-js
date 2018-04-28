/*
    JS
    Урок 1. Задание 2.

    Дано целое число, лежащее в диапазоне от -999 до 999.
    Вывести строку - словесное описание данного числа вида

    "отрицательное двузначное число",
    "нулевое число",
    "положительное однозначное число" и т.д.

    Maxim Voronin @ ITMO 04/2018
*/

var inputNum="", numRank="", numSymbol="";

getNumInRange();

if (inputNum === "0") {
    alert(inputNum + ' - это нулевое число');
}
else if (inputNum!== null) { //сравниваем с null т.к. ошибка будет если отмену нажмут
    var inputLth = inputNum.length;

    if (parseInt(inputNum) < 0) {
        numSymbol = 'отрицательное ';
        inputLth--; //уменьшаем значение длины строки чтобы правильно разряднось посчитать
    }
    if (parseInt(inputNum) > 0)
        numSymbol = 'положительое ';

    if (inputLth === 3) numRank = 'трехзначное ';
    if (inputLth === 2) numRank = 'двузначное ';
    if (inputLth === 1) numRank = 'однозначное ';


    alert(inputNum + ': Это ' + numSymbol + numRank + 'число');
}
else { //если отмену нажмут
    alert("Не хотите вводить значение? Ну и ладно");
}


//функция проверки введенного числа на диапозон
function getNumInRange() {
    while (inputNum = prompt('Введите целое число в диапазоне от -999 до 999')) {
        if (isValidFormat(inputNum) ) { //если не каракули ввели
            if (!isInt(inputNum)) { //если не целое число то опять предлагаем ввод
                alert('Вы ввели не целое число');
                continue;
            }

            if (parseInt(inputNum) >= -999 && parseInt(inputNum) <= 999) {
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
function isValidFormat(num) {
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
