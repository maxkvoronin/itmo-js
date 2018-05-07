/** JS
 * Урок 4. Задание 1.
 * Заданы два массива 
 * A = [ 12, 4, 3, 10, 1, 20 ]  
 * B = [-3, -7, -100, -33] 
 * необходимо их объединить в один массив C добавив  массив B в конец(в начало) A. 
 */

var arrA = [ 12, 4, 3, 10, 1, 20];  
var arrB = [-3, -7, -100, -33]; 

//B в конец A
var arrC = [...arrA, ...arrB];
//console.log(arrC);

//B в начало A
var arrC = [...arrB, ...arrA];
//console.log(arrC);

/** JS 
 * Урок 4. Задание 2.
 * Одномерным массивом задана доска 3 на 3 
 * var area = [ null, null, null, null, null, null, null, null, null ]
 * Необходимо сформировать игровое поле состоящее из квадратов для крестиков-ноликов  в HTML. 
 * При появлении в массиве 0-ля рисовать нолик , 1-цы крестик 
 *Пример:  [ 1, null, 0, null, 1, null, null, null, null ] на поле 2-а крестика, и 1-н нолик.
 
 */

//см. dz4-2.html
function tictac (arr) {
    var str = '<table>';
    var td = '';
    
    for(var i=0;i<9;i++) {
        td = '<td>';
        if (i === 1 || i === 7) {
            td = '<td class="vertical">';
        }
        if (i === 3 || i === 5) {
            td = '<td class="horizontal">';            
        }
        if (i === 4) {
            td = '<td class="vertical horizontal">';     
        }

        if (i%3 === 0) {
            str += "<tr>";
        }
        
        if (arr[i] === 1) {
            str += td + "X</td>";
        }
        
        if (arr[i] === 0) {
            str += td + "O</td>";
        }
        
        if (arr[i] === null) {
            str += td + "</td>";
        }
        
        if (i === 2 || i === 5 || i===8) {
            str+="</tr>";
        }
    } 
    
    return str + '</table>';        
}
    



/** JS
 * Урок 4. Задание 3.
 * Задан массив  - [12,4,3,10,1,20]. 
 * Удалить из него наименьшее и наибольшее значение.
 */

//console.log(deleteMinMax([12,4,3000,-10,11,200,-100]));
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
        return element !== minValue && element !== maxValue;  
    });

    return arrN;
}

/** JS 
 * Урок 4. Задание 4.
 * 4. Задан массив - [12,4,3,10,1,20]. 
 * Необходимо отсортировать его в порядке возрастания,  при этом не использовать готовый метод sort 
 * и методы разобранные на занятии. Снабдите комментариями каждую строку.
 */

console.log(sortGnome([12,4,30,10,1,20]));
function sortGnome(arr) {
    var tmp; //временное хранилище  
    for(var i=0;i<arr.length;i++) {  //цикл направление слева направо 
        if(arr[i]>arr[i+1]) { //если текуций элемент больше следующего
            for(var j=i+1;j>=0;j--) { //бежим в обратную сторону влево до начала
                if(arr[j] < arr[j-1]) { //переставляем элементы так чтобы слева был наименьший               
                    tmp = arr[j];      //временное хранилище  
                    arr[j] = arr[j-1]; //сама перестановка
                    arr[j-1] = tmp;     
                }
            }
        }
    }
return arr;
}