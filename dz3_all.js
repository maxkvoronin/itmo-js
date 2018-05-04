/**
 * JS
 * Урок 3. Задание 1.
 * Дана строка, изображающая целое число. Вывести сумму цифр этого числа. 
 * 
 */

//console.log(sumOfDigits("012309jyhfjhf"));
//console.log(sumOfDigits_v2("0201"));

function sumOfDigits(str) {
    str = str.match(/\d/g).join('');

    var summ = 0;
    for (var i=0; i<str.length; i++) {
        summ = summ + str.charCodeAt(i) - 48;
    }

    return summ;
}

function sumOfDigits_v2(str) {
    if (isNaN(+str)) {
        console.error("string is not a Number");
        return NaN;
    }
  
    var summ = 0;
    str.split('').forEach( function(elem) {
        summ+=+elem; 
    }); 

    return summ;
}

/** JS
 * Урок 3. Задание 2.
 * Дана строка S и символ C. Удвоить каждое вхождение символа C в строку S.
 */

//будем считать, что большие буквы и обычные - это разные символы, т.к. чаркоды у них разные.

//console.log(doubleChars("Шла Саша по шоссе и сосала сушку", "с"));

function doubleChars (str, char) {
    
    str = str.match(/./g); 
    
    for (var i=0; i<str.length; i++) {
        if(str[i] === char) 
            str.splice(i++, 0, char);
    }
 
    return str.join('');
 }

/** JS 
 * Урок 3. Задание 3.
 * Проверить что введенный пароль удовлетворяет следующим условиям сложности:
 * - длинна от 9 символов;
 * - содержит обязательно английские буквы верхнего и нижнего регистра;
 * - содержит более двух цифр;
 * - содержит обязательно один из неалфавитных символов (например, !, $, #, %).
 */

//console.log(passCheck("q1weggg!7"));

function passCheck(str) {

    if (str.match(/.{9}/g)===null) {
        console.log("пароль должен быть до девяти символов");
        return false;
    }
    
    if (str.match(/[A-z]/g)===null) {
        console.log("пароль должен состоять из английские буквы верхнего и нижнего регистра;");
        return false;
    }
    
    if (str.match(/(.*\d){2}/g)===null) {
        console.log("пароль должен содержать более двух цифр");
        return false;
    }

    if (str.match(/.*[!$#%]/g)===null) {
        console.log("пароль должен содержать один из неалфавитных символов (например, !, $, #, %)");
        return false;
    }

    return true;
}