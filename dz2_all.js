/*
    JS
    Урок 2. Задание 1.

    Перераспределить значения переменных
    X и Y так, чтобы в X оказалось меньшее
    из этих значений, а в Y — большее.

    Maxim Voronin @ ITMO 04/2018
*/

var x = 100, y = 50;

//console.log("step1: \n\tX is " + x + "\n\tY is " + y);

if (x > y) {
    var maxValue = x; 
    x = y;
    y = maxValue;
}

//console.log("step2: \n\tX is " + x + "\n\tY is " + y);


/**
 * JS
 * Урок 2. Задание 2.
 * Есть три вершины a, b и с. У каждой
 * вершина заданы координатами x, y, z как
 * целые числа. Нужно определить - является
 * ли треугольник с заданными координатами
 * прямоугольным.
*/

//(console.isRightTriangle(3, 3, 0, 3, 10, 0, 15, 3, 0));

function isRightTriangle(xA, yA, zA, xB, yB, zB, xC, yC, zC) {
    /**Теорема Пифогора работает для n-мерных пространств
     * 1. Проверяем что длины ненулевые
     * 2. Находим больший квадрат длины и для него проверяем что он
     * равен сумме квадратов друих длинн.
     * ab, bc, ca - суммы квадратов длинн
     */

    /*
    * Если хотябы одна пара коордиант совпадает, значит одна длина стороны будет нулевая
    * */
    if ((xA === xB && yA === yB && zA === zB) ||
        (xA === xC && yA === yC && zA === zC) ||
        (xB === xC && yB === yC && zB === zC)) {
        console.error("invalid triangle coordinates");
        return false;
    }

    /*
    * ab, bc, ca - суммы квадратов длинн
    * */
    var ab = Math.pow( (xB - xA),2 ) + Math.pow( (yB - yA),2 ) + Math.pow( (zB - zA),2 );
    var bc = Math.pow( (xC - xB),2 ) + Math.pow( (yC - yB),2 ) + Math.pow( (zC - zB),2 );
    var ca = Math.pow( (xA - xC),2 ) + Math.pow( (yA - yC),2 ) + Math.pow( (zA - zC),2 );


    if (ab > bc && ab > ca) {
        if (ab === bc + ca) {
            return true;
        }
    }
    if (bc > ab && bc > ca) {
        if (bc === ab + ca) {
            return true;
        }
    }
    if (ca > ab && ca > bc) {
        if (ca === ab + bc) {
            return true;
        }
    }

    return false;
}


/**
 * JS
 * Урок 2. Задание 3.
 * 3. Дан номер месяца (1 — январь, 2 — февраль, ...)
 * Вывести название соответствующего времени год
 * ("зима", "весна" и т.д.).
 */

//console.log(whatIsSeasonInSaintPetersburg(12));

function whatIsSeasonInSaintPetersburg(monthIndex) {
    switch (monthIndex) {
        case 2:
        case 3:
            return "winter";
        case 4:
        case 5:
        case 6:
            return "spring";
        case 7:
        case 8:
            return "summer";
        case 9:
        case 10:
        case 11:
        case 12:
        case 1:
            return "autumn";
        default:
            console.error("invalid mounthIndex value: " + monthIndex);
    }
}

/**
 * JS
 * Урок 2. Задание 4.
 4. Единицы длины пронумерованы следующим образом:
 1 — дециметр, 2 — километр,
 3 — метр, 4 — миллиметр, 5 — сантиметр.
 Дан номер единицы длины и длина
 отрезка L в этих единицах (вещественное
 число). Вывести длину данного отрезка
 в метрах.
 */

//console.log(getLengthOfPiece(1, 5));

function getLengthOfPiece(pieceLength, unitLength) {
    switch (unitLength) {
        case 1:
            return pieceLength/10;
        case 2:
            return pieceLength*1000;
        case 3:
            return pieceLength;
        case 4:
            return pieceLength/1000;
        case 5:
            return pieceLength/100;
        default:
            console.error("invalid unitLenth value: " + unitLength);
    }
}

/**
 *  JS
 *  Урок 2. Задание 5*.
 *  Пользователь вводит строку, необходимо определить
    является ли она палиндромом. (Палиндром - это текст,
    который читается одинаково и слева, и справа.
    Примеры для тестирования:
    1) '49094' – это строка палиндром
    2) 'Я бы изменил мир, но бог не дает исходники' – это строка не палиндром
    3) 'Сел в озере березов лес' – это строка палиндром
 */

//console.log(isPolindrom('Сел в озере березов лес'));

function isPolindrom(str) {
    str = str.toLowerCase();
    str = str.replace(/ /g, '');
    return str === str.split('').reverse().join('');
}


/**
 * JS
 * Урок 2. Задание 7*.
 * Пользователь вводит год, необходимо определить
 * является ли он високосным. Примеры данных для тестирования:
 * 1) '2000' – високосный год
 * 2) '1800' – не високосный год
 */

//console.log(isHighYear(2000));

function isHighYear(year) {
    /**
     * Год является високосным, если год делится на 4 без остатка.
     * Год не является високосным, если он полностью делится и на 4, и на 100.
     * Год является високосным, если он делится и на 4, и на 100, и на 400.
     */

    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true;
            }

            return false;
        }

        return true;
    }

    return false;
}

/**
 * Урок 2. Задание 6*.
 Пользователь вводит количество тарелок и количество
 моющего средства. Моющее средство расходуется из расчета 0.5
 на одну тарелку. Вымыть тарелки в цикле. Вывести на экран:
 1) сколько тарелок осталось, если моющее средство закончилось:
 'Моющее средство закончилось. Осталось N тарелок'
 (где N – заменить на число оставшихся тарелок)
 2) сколько осталось моющего средства, если тарелки закончились:
 'Все тарелки вымыты. Осталось N ед. моющего средства'
 (где N – заменить на число оставшегося моющего средства)
 3) если мы помыли все тарелки и моющее средство закончилось,
 то вывести: 'Все тарелки вымыты, моющее средство закончилось'
 */

//startWash( prompt("Кол-во тарелок:"), prompt("Кол-во моющего средства:") );

function startWash(dirtyPlates, fairy) {

    dirtyPlates = parseInt(dirtyPlates);
    fairy = parseFloat(fairy);

    if (isNaN(dirtyPlates) || isNaN(fairy) || dirtyPlates < 0 || fairy < 0) {
        console.error("Invalid dirtyPlates or fairy value")
    }
    else {
        var totalPlates = dirtyPlates;

        for (var clearPlates = 1; clearPlates <= totalPlates; clearPlates++) {
            if (fairy <= 0) {
                break;
            }
            fairy -= 0.5;
            dirtyPlates--;
        }

        if (dirtyPlates === 0) {
            if (fairy > 0) {
                alert('Все тарелки вымыты. Осталось ' + fairy + ' ед. моющего средства');
            }
            if (fairy === 0) {
                alert('Все тарелки вымыты, моющее средство закончилось');
            }
        } else {
            alert('Моющее средство закончилось. Осталось ' + dirtyPlates + ' тарелок');
        }
    }

}
