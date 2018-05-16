/*JS Занятие 8. Задача 1. Создать функцию которая выводит время 
в html и обновляет значения каждую секунду. 
Время выводить в формате чч:мм:cc, при этом 
часы, минуты и секунды отобразить разными цветами. */

//см. dz8.1.html

var h1 = document.createElement('h1');
document.body.appendChild(h1);

var timerId = setInterval(function getmyTime () {
    var date = new Date();

    var hrs = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();

    if (hrs < 10) hrs = "0" + hour;
    if (min < 10) min = "0" + min;
    if (sec < 10) sec = "0" + sec;

    h1.innerText = `${hrs}:${min}:${sec}`;
}, 1000);




