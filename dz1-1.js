/*
    JS
    Урок 1. Задание 1.
    Из трех данных чисел выбрать наименьшее.

    Maxim Voronin @ ITMO 04/2018
*/

var input1="", input2="", input3="";

getNum();
whoIsLess();

//функция которая запрашвает данные, пока пользователь не введет их правильно
function getNum() {
   while (input1 = prompt("Введите первое число")) {
        if (isValidFormat(input1))
            break;
   }

   while (input2 = prompt("Введите второе число")) {
        if (isValidFormat(input2))
            break;
   }

   while (input3 = prompt("Введите третье число")) {
        if (isValidFormat(input3))
            break;
   }

   //если нажималась кнопка отмены или были введены одинаковые числа- начинаем заново
   if (isCancel() || isEqual())
       getNum();
}

//функция проверки не нажималась ли кнопка отмены
function isCancel() {
    if (input1 === null || input2 === null || input3 === null) {
        alert("Зачем нажимали отмену? Так сложно ввести число");
        return true;
    }
    return false;
}
//функция проверки на одинаково введенные числа
function isEqual() {
    if(input1 === input2 || input1 === input3 || input2 === input3) {
        alert("Нужно ввести три РАЗНЫХ числа, эта программа выбирает одно НАИМЕНЬШЕЕ из трех");
        return true;
    }
    return false;
}

//  проверка на ввод именно числа, а не '1212ыдлаоыв';
function isValidFormat(num) {
    if (isNaN(+num)) { //Можно было использовать parseInt / parseFloat, но немного другую логику строить.
        alert("Неверный формат ввода. Введите целое или дробное число");
        return false;
    }
    return true;
}

//функция проверки кто меньший
function whoIsLess() {

    //ставнивать будем флоаты, т.к. в ТЗ однозначно не сказано целое или вещественное число приходит
    input1 = parseFloat(input1);
    input2 = parseFloat(input2);
    input3 = parseFloat(input3);

    if (input1 < input2 && input1 < input3) {
        document.write('Первое число: ' + input1 + ' - наименьшее');
    } else if (input2 < input1 && input2 < input3) {
        document.write('Второе число: ' + input2 + ' - наименьшее');
    } else  {
        document.write('Третье число: ' + input3 + ' - наименьшее');
    }
}

