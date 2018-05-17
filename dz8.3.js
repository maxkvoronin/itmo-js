/** JS Занятие 8. Задача 2.
 * Создать светофор (красный, желтый, 
 * зелёный). Переключать цвет у светофора 
 * через каждые 2 сек сверху вниз и снизу вверх.
 */ 

var elRed = document.getElementById("divRed");
var elYellow = document.getElementById("divYellow");
var elGreen = document.getElementById("divGreen");

elRed.style.backgroundColor = "red";
elYellow.style.backgroundColor = "white";
elGreen.style.backgroundColor = "white";


var timer1 = setInterval(function setSvet1 () {
    elRed.style.backgroundColor = (elRed.style.backgroundColor === "red") ? "white" : "red"; 
}, 5000);

var timer2 = setTimeout(function tick() {
    elYellow.style.backgroundColor = "yellow";
    timer2 = setTimeout(tick, 10000);
}, 2000);

var timer3 = setInterval(function setSvet () {
    elYellow.style.backgroundColor = "white";
}, 5000);

var timer4 = setInterval(function setSvet1 () {
    elGreen.style.backgroundColor = (elGreen.style.backgroundColor === "white") ? "green" : "white"; 
}, 5000);

var timer20 = setTimeout(function tick() {
    elGreen.style.backgroundColor = "white";

    var timer7 = setInterval(function setSvet3 () {
        elGreen.style.backgroundColor = "white";    
    }, 10000);
}, 8000);

var timer21 = setTimeout(function tick1() {
    elGreen.style.backgroundColor = "green";

    var timer8 = setInterval(function setSvet3 () {
        elGreen.style.backgroundColor = "green";    
    }, 10000); 
}, 8500);

var timer22 = setTimeout(function tick1() {
    elGreen.style.backgroundColor = "white"; 

    var timer9 = setInterval(function setSvet3 () {
        elGreen.style.backgroundColor = "white";    
    }, 10000);    
}, 9000);

var timer23 = setTimeout(function tick1() {
    elGreen.style.backgroundColor = "green";  

    var timer10 = setInterval(function setSvet3 () {
        elGreen.style.backgroundColor = "green";    
    }, 10000);
}, 9500);
