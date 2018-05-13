/** JS Занятие 7. Задача 3.
 * Написать свою подключаемую js библиотеку для работы с массивом, хранящим целые числа. 
- Библиотека должна обладать следующими методами:
- поиск минимального элемента в переданном массиве;
- поиск максимально элемента в переданном массиве;
- расчет среднего арифметического значения элементов переданного массива;
- создание копии (клонирование) переданного массива.
 */

 var myLib = function () {
    var obj = {};

    obj.findMin = function (array) {
        return Math.min(...array);
    };

    obj.findMax = function (array) {
        return Math.max(...array);
    };

    obj.medium = function (array) {
        return array.reduce((prev, curr) => {
            return curr + prev; 
        })/array.length;
    };

    obj.clone = function (array) {
        return [...array];
    };

    return obj;
 }

var a = myLib();

console.log(a.findMax([1,2,300,4,5,6,10,100]));
console.log(a.findMin([1,2,300,4,5,6,10,100]));
console.log(a.medium([1,2,300,4,5,6,10,100]));
console.log(a.clone([1,2,300,4,5,6,10,100]));