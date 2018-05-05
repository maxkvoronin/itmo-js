/**
 * JS
 * Урок 3. Задание 1.
 * Дана строка, изображающая целое число. Вывести сумму цифр этого числа. 
 * 
 */

//console.log(summOfDigits("0-12345-3"));

function summOfDigits(str) {

    var summ = 0;
    str.match(/-*\d/g).forEach( function(elem) {
        summ = summ + +elem;          
    });
    
    return summ;
}

//console.log(summOfDigits_hardCode("0-1-23-445-5-09"));
function summOfDigits_hardCode(str) {
/**
 * Хардкорная версия
 * чаркод символа '0' - это  48
 * чаркод символа '9' - это  57
 * из этого можно сделать вывод что чаркод цифры больше на 48 чем значение цифры.

 */
    str = str.match(/-*\d/g).join('');
 
    var summ = 0;
    for (var i=0; i<str.length; i++) {
        if (str.charCodeAt(i) === 45) {   
            //чаркод '-' - это 45, значит следующий за ним цифру вычитаемж и перепрыгиваем      
            summ = summ - str.charCodeAt(++i) + 48; 
        }        
        else
            summ = summ + str.charCodeAt(i) - 48;
    }
    return summ;
}

/** JS
 * Урок 3. Задание 2.
 * Дана строка S и символ C. Удвоить каждое вхождение символа C в строку S.
 */

//будем считать, что большие буквы и обычные - это разные символы, т.к. чаркоды у них разные.

//console.log(doubleChars("Шла Саша по шоссе и сосала сушку", "с"));

function doubleChars(str, char) {
    
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

console.log(passCheck("123kAkjg!i"));

function passCheck(str) {

    if (str.match(/.{9}/g)===null) {
        console.log("длина пароля должен быть от девяти символов");
        return false;
    }
    
    if (str.match(/(?=.*[A-Z])(?=.*[a-z])/g)===null) {
        console.log("пароль должен состоять из английских букв верхнего и нижнего регистра;");
        return false;
    }
    
    if (str.match(/(.*\d){3}/g)===null) {
        console.log("пароль должен содержать более двух цифр");
        return false;
    }

    if (str.match(/.*[!$#%]/g)===null) {
        console.log("пароль должен содержать один из неалфавитных символов (например, !, $, #, %)");
        return false;
    }

    return true;
}