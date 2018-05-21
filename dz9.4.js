/**
 * JS Занятие 9. Задание 4***.
 * Реализуйте модуль number_system для перевода числа из одной системы счисления в другую.
 * Модуль должен содержать 6 функций для перевода из десятичной системы счисления в двоичную, 
 * восьмеричную, шестнадцатиричную и наоборот:
 * dec2bin(number) # возвращает string
 * dec2oct(number) # возвращает string
 * dec2hex(number) # возвращает string
 * bin2dec(number) # возвращает number
 * oct2dec(number) # возвращает number
 * hex2dec(number) # возвращает number
 * (!) Запрещено использовать встроенные функции/методы, решающие эту задачу.
 * Подсказка. Не спешите писать 6 разных реализаций, подумайте, можно ли 
 * написать универсальный алгоритм перевода.Ситуации, когда в исходном числе есть 
 * не допустимые цифры (буквы), игнорируются.
 */

+(function() {

    function dec2bin(number) {
        return decToScale(number, 2);
    }

    function dec2oct(number) {
        return decToScale(number, 8);
    }

    function dec2hex(number) {
        return decToScale(number, 16);
    }

    function bin2dec(number) {
        return scaleToDec(number, 2)
    }
    
    function oct2dec(number) {
        return scaleToDec(number, 8)
    }
    
    function hex2dec(number) {
        return scaleToDec(number, 16)
    }

    function decToScale (numbs, scale) {
        let arr = []; 
        let ost;

        while(numbs!==0) {
            ost = numbs % scale;
            numbs = (numbs - ost) / scale;
            
            if(scale === 16) {
                ost = (ost===10) ? 'A' : (ost===11) ? 'B' : (ost===12) ? 'C' : 
                      (ost===13) ? 'D' : (ost===14) ? 'E' : (ost===15) ? 'F' : ost;
            }
            arr.push(ost);
        }
        return arr.reverse().join('');
    }
    
    function scaleToDec([...numbs], scale) {
        let res = 0;

        numbs.forEach( (numb, i) => {
            if(scale === 16) {
                numb = (numb==='A') ? 10 : (numb==='B') ? 11 : (numb==='C') ? 12 : 
                       (numb==='D') ? 13 : (numb==='E') ? 14 : (numb==='F') ? 15 : numb;
            }
            res += numb * Math.pow(scale, numbs.length - i - 1);    
        });
        return res;
    }
    //console.log(dec2bin(1019912));
    //console.log(dec2oct(17234982));
    //console.log(dec2hex(7548549));
    //console.log(bin2dec('011010111111001'));
    //console.log(oct2dec('17237346'));
    //console.log(hex2dec('A1211D345F'));
})();





