/** JS
 * Урок 4. Задание 1.
 * Заданы два массива 
 * A = [ 12, 4, 3, 10, 1, 20 ]  
 * B = [-3, -7, -100, -33] 
 * необходимо их объединить в один массив C добавив  массив B в конец(в начало) A. 
 */

var arrA = [ 12, 4, 3, 10, 1, 20];  
var arrB = [-3, -7, -100, -33]; 

//в конец
arrC = [...arrA, ...arrB];
//console.log(arrC);

//в начало
arrC = [...arrB, ...arrA];
//console.log(arrC);

/** JS 
 * Урок 4. Задание 3.
 * Одномерным массивом задана доска 3 на 3 
 * var area = [ null, null, null, null, null, null, null, null, null ]
 * Необходимо сформировать игровое поле состоящее из квадратов для крестиков-ноликов  в HTML. 
 * При появлении в массиве 0-ля рисовать нолик , 1-цы крестик 
 *Пример:  [ 1, null, 0, null, 1, null, null, null, null ] на поле 2-а крестика, и 1-н нолик.
 
 UNDER CONSRUCTION
 
 */

/** JS
 * Урок 4. Задание 3.
 * Задан массив  - [12,4,3,10,1,20]. 
 * Удалить из него наименьшее и наибольшее значение.
 */


//console.log(deleteMinMax([12,4,3,-10,11,200,-100]));
function deleteMinMax (arr) {
    var maxValue = 0;
    
    //ищем максимальный элемент
    for (var i=0;i<arr.length;i++) {
        if (arr[i] > maxValue)
            maxValue = arr[i];        
    }

    var minValue = maxValue;

    //ищем минимальный элемент
    for (var i=0;i<arr.length;i++) {
        if (arr[i] < minValue)
            minValue = arr[i];        
    }

    //удаляем минимальный и максимальный элемент из массива
    var arrN = arr.filter(element => {
        return (element !== minValue && element !== maxValue);  
    });

    return arrN;
}

/** JS
 * Урок 4. Задание 4.
 * 4. Задан массив - [12,4,3,10,1,20]. 
 * Необходимо отсортировать его в порядке возрастания,  при этом не использовать готовый метод sort 
 * и методы разобранные на занятии. Снабдите комментариями каждую строку.
    UNDER CONSRUCTION
 */