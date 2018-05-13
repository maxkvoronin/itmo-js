/*
 * JS Занятие 7. Задача 4**.
 * Написать кодер для шифра Цезаря (https://ru.wikipedia.org/wiki/Шифр_Цезаря). 
 * На вход принимается строка и сдвиг. На выход - зашифрованное/расшифрованное сообщение.
 * Выдержка из Вики:
 * Шифр Цезаря — это вид шифра подстановки, в котором каждый символ в открытом 
 * тексте заменяется символом, находящимся на некотором постоянном числе позиций левее 
 * или правее него в алфавите. Например, в шифре со сдвигом вправо на 3, А была бы 
 * заменена на Г, Б станет Д, и так далее
 */

/** 
 * Функция кодер по шифру Цезаря, возвращиет зашифрованную строку.
 * @param {string} inputStr | строка для кодировки
 * @param {number} shift | ключ шифрования (сдвиг) 
 */
function ceasar (inputStr, shift) {
    var outputStr='';

    return function crypto () {
        var chr;
        var nwChr;
        
        if (shift > 31) {
            shift = shift % 32;
        }

        [...inputStr].forEach((currentChr) => {
            chr = currentChr.charCodeAt(0);
            nwChr = shift + chr; //сдвигаем чаркод
            
            if (chr > 1071 && chr < 1104) { //нижний регистр
                    outputStr+=(String.fromCharCode(nwChr - (nwChr < 1104 ? 0 : 32)));
            } else
            if (chr > 1039 && chr < 1072) { //верхний регистр
                    outputStr+=(String.fromCharCode(nwChr - (nwChr < 1072 ? 0 : 32)));
            }
            else
                outputStr+=currentChr;
        });

        return outputStr;
    }
};

var shifr = ceasar("Алексей, меня зовут Ярослав, а тебя?", 1000)
console.log(shifr());