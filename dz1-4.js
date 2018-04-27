/*
    JS
    Урок 1. Задание 4.

    Дано целое число в диапазоне 1 - 5.
    Вывести строку - словесное описание соответствующей оценки
    (1 - "плохо",
     2 - "неудовлетворительно",
     3 - "удовлетворительно",
     4 - "хорошо",
     5 - "отлично").?

    Maxim Voronin @ ITMO 04/2018
 */
var inputNum=0;
var namesOfRating=["плохо","неудовлетворительно","удовлетворительно","хорошо","отлично"];

GetNumInRange15();

if (inputNum!= null)
    alert(namesOfRating[inputNum-1]);
else
    alert("Не хотите вводить. Ну и ладно");

//функция проверки введенного числа на диапозон
function GetNumInRange15() {
    while (inputNum = prompt('Введите целое число в диапазоне от 1 до 5')) {
        if (IsValidFormat(inputNum) ) { //если не каракули ввели
            if (!isInt(inputNum)) { //если не целое число то опять предлагаем ввод
                alert('Вы ввели не целое число');
                continue;
            }
            if (inputNum > 0 && inputNum <= 5) {
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
