/*4.* Выбрать 10 незнакомых (которые не разбирались на занятиях) 
шаблонов объектов (классов) доступных в глобальной области и 
привести информацию в виде комментариев в коде для чего 
они используются. Информацию можно найти в документации 
(справочные системы по js, статьи по программированию и т.п.).*/



/* 1 WebSocket ****************
 * Объект WebSocket предоставляет API для создания и управления вебсокет-подключения 
 * к серверу, а также для отправки и получения данных в этом подключении.
 * Для открытия соединения достаточно создать объект WebSocket, указав в нём специальный протокол ws.:
 * */

var socket = new WebSocket("ws://javascript.ru/ws");

//колбэки
socket.onopen = function() {
  alert("Соединение установлено.");
};

socket.onclose = function(event) {
  if (event.wasClean) {
    alert('Соединение закрыто чисто');
  } else {
    alert('Обрыв соединения'); // например, "убит" процесс сервера
  }
  alert('Код: ' + event.code + ' причина: ' + event.reason);
};

socket.onmessage = function(event) {
  alert("Получены данные " + event.data);
};

socket.onerror = function(error) {
  alert("Ошибка " + error.message);
};

socket.send("Привет"); //Для посылки данных используется метод socket.send(data). Пересылать можно любые данные.


/* 2 XMLHttpRequest ****************
 * Дает возможность из JavaScript делать HTTP-запросы к серверу без перезагрузки страницы. 
 */

// 1. Создаём новый объект XMLHttpRequest
var xhr = new XMLHttpRequest();

// 2. Конфигурируем его: GET-запрос на URL 'phones.json'
xhr.open('GET', 'phones.json', false);

// 3. Отсылаем запрос
xhr.send();

// 4. Если код ответа сервера не 200, то это ошибка
if (xhr.status != 200) {
  // обработать ошибку
  alert( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
} else {
  // вывести результат
  alert( xhr.responseText ); // responseText -- текст ответа.
}

/* 3 Map ****************
 * Объект Map является простым ассоциативным массивом. Любые типы (как объекты, так и примитивы) 
 * могут быть использованы в качестве ключа или значения.
 * Сходство объектов и map
 * Объекты похожи на Map в том, что и те и другие позволяют задавать значения по ключам, получать эти значения, удалять ключи и проверять наличие ключа. В связи с этим, исторически объекты использовались как Map, однако, у них есть существенные отличия:

 * Объект имеет прототип, что означает наличие стандартных значений в ассоциативном массиве. Однако, это можно обойти при помощи выражения map = Object.create(null).
 * В объекте ключи должны быть строками, когда в Map они могут иметь любой тип.
 * Вы можете легко получить размер Map, в то время как в объекте необходимо самостоятельно его учитывать.*/

var myMap = new Map();

var keyObj = {},
    keyFunc = function () {},
    keyString = "a string";

// задание значений
myMap.set(keyString, "value associated with 'a string'");
myMap.set(keyObj, "value associated with keyObj");
myMap.set(keyFunc, "value associated with keyFunc");

myMap.size; // 3

// получение значений
myMap.get(keyString);    // "value associated with 'a string'"
myMap.get(keyObj);       // "value associated with keyObj"
myMap.get(keyFunc);      // "value associated with keyFunc"

myMap.get("a string");   // "value associated with 'a string'"
                         // потому что keyString === 'a string'
myMap.get({});           // undefined, потому что keyObj !== {}
myMap.get(function() {}) // undefined, потому что keyFunc !== function () {}

/* 4 Set ****************
 * Объекты Set позволяют вам сохранять уникальные значения любого типа, как примитивы, так и другие типы объектов.
 */

var mySet = new Set();

mySet.add(1); // Set { 1 }
mySet.add(5); // Set { 1, 5 }
mySet.add(5); // Set { 1, 5 }
mySet.add("some text"); // Set { 1, 5, 'some text' }
var o = {a: 1, b: 2};
mySet.add(o);

mySet.add({a: 1, b: 2}); // переменная o связана с другим объектом, поэтому данная строка также сработает

mySet.has(1); // true
mySet.has(3); // false, 3 не было добавлено в set
mySet.has(5);              // true
mySet.has(Math.sqrt(25));  // true
mySet.has("Some Text".toLowerCase()); // true
mySet.has(o); // true

mySet.size; // 5

mySet.delete(5); // удаляет 5 из set
mySet.has(5);    // false, 5 было удалено

mySet.size; // 4, было удалено одно значение
console.log(mySet); // Set {1, 'some text', Object {a: 1, b: 2}, Object {a: 1, b: 2}}

/* 5 JSON ****************
 * Объект JSON содержит методы для разбора объектной нотации JavaScript (JavaScript Object Notation — сокращённо JSON) и преобразования значений в JSON. Его нельзя вызвать как функцию или сконструировать как объект, 
 * и кроме своих двух методов он не содержит никакой интересной функциональности.*/

var user = '{ "name": "Вася", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';
user = JSON.parse(user);
alert( user.friends[1] ); // 1

//Метод JSON.stringify(value, replacer, space) преобразует («сериализует») значение в JSON-строку.
var event = {
    title: "Конференция",
    date: "сегодня"
  };
  
  var str = JSON.stringify(event);
  alert( str ); // {"title":"Конференция","date":"сегодня"}
  
/* 6 Promise ****************
 * Объект Promise (обещание) используется для отложенных и асинхронных вычислений. Promise может находиться в трёх состояниях:
 * Интерфейс Promise (обещание) представляет собой обертку для значения, неизвестного на момент создания обещания. Он позволяет обрабатывать 
 * результаты асинхронных операций так, как если бы они были синхронными: вместо конечного результата асинхронного метода возвращается обещание
 * получить результат в некоторый момент в будущем.
 *  - ожидание (pending): начальное состояние, не выполнено и не отклонено.
 *  - выполнено (fulfilled): операция завершена успешно.
 *  - отклонено (rejected): операция завершена с ошибкой.
 */

const myFirstPromise = new Promise((resolve, reject) => {
    // выполняется асинхронная операция, которая в итоге вызовет:
    //
    resolve(someValue); // успешное завершение
    // или
    reject("failure reason"); // неудача
  });


/* 7 Intl ****************
 * Объект Intl является пространством имён для API интернационализации ECMAScript, предосталяющим языко-зависимое сравнение строк, форматирование чисел и дат со временем. 
 * Конструкторы объектов Collator, NumberFormat и DateTimeFormat являются свойствами объекта Intl.

 Intl.Collator
 * Конструктор сортировщиков — объектов, включающих языко-зависимое сравнение строк.
 */

console.log(new Intl.Collator().compare('a', 'c')); // → отрицательное значение
console.log(new Intl.Collator().compare('c', 'a')); // → положительное значение
console.log(new Intl.Collator().compare('a', 'a')); // → 0
// В немецком буква ä идёт рядом с буквой a
console.log(new Intl.Collator('de').compare('ä', 'z'));// → отрицательное значение
// В шведском буква ä следует после буквы z
console.log(new Intl.Collator('sv').compare('ä', 'z')); // → положительное значение


/* 8 Intl.DateTimeFormat  ****************
 *Конструктор объектов, включающих языко-зависимое форматирование даты и времени.
 */

var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// Форматирование ниже предполагает, что местный часовой пояс равен America/Los_Angeles для локали США
// В америкаском английском используется порядок месяц-день-год
console.log(new Intl.DateTimeFormat('en-US').format(date));// → "12/19/2012"

// В британском английском используется порядок день-месяц-год
console.log(new Intl.DateTimeFormat('en-GB').format(date));// → "20/12/2012"

// В корейском используется порядок год-месяц-день
console.log(new Intl.DateTimeFormat('ko-KR').format(date));// → "2012. 12. 20."

/* 9 Intl.NumberFormat ****************
 * Конструктор объектов, включающих языко-зависимое форматирование чисел.
 */

var number = 123456.789;

// В Германии в качестве разделителя целой и дробной части используется запятая, а в качестве разделителя разрядов - точка
console.log(new Intl.NumberFormat('de-DE').format(number)); // → 123.456,789
// В России в качестве разделителя целой и дробной части используется запятая, а в качестве разделителя разрядов - пробел
console.log(new Intl.NumberFormat('ru-RU').format(number));// → 123 456,789
// В большинстве арабоговорящих стран используют настоящие арабские цифры
console.log(new Intl.NumberFormat('ar-EG').format(number));// → ١٢٣٤٥٦٫٧٨٩
// В Индии используют разделители для тысяч/лакх/крор
console.log(new Intl.NumberFormat('en-IN').format(number));// → 1,23,456.789

// Запрашиваем формат валюты
console.log(new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(number));// → 123.456,79 €
console.log(new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' }).format(number));// → 123 456,79 руб.

/* 10 Error **************** 
 * Конструктор Error создаёт объект ошибки. Экземпляры объекта Error выбрасываются при возникновении ошибок во время выполнения. Объект Error также может использоваться в 
 * качестве базового для пользовательских исключений. Смотрите ниже стандартные встроенные типы ошибок.*/

//возбудить ошибку с помощью throw 
try {
    throw new Error('Уупс!');
  } catch (e) {
    console.log(e.name + ': ' + e.message);
  }