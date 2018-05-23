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


var timer1 = setInterval(function tick () {
    elRed.style.backgroundColor = (elRed.style.backgroundColor === "red") ? "white" : "red"; 
}, 5000);

var timer2 = setTimeout(function tick() {
    elYellow.style.backgroundColor = "yellow";
    timer2 = setTimeout(tick, 10000);
}, 2000);

var timer3 = setInterval(function tick () {
    elYellow.style.backgroundColor = "white";
}, 5000);

var timer4 = setInterval(function tick () {
    elGreen.style.backgroundColor = (elGreen.style.backgroundColor === "white") ? "green" : "white"; 
}, 5000);

var timer5 = setTimeout(function tick() {
    elGreen.style.backgroundColor = "white";

    var timer6 = setInterval(function tick () {
        elGreen.style.backgroundColor = "white";    
    }, 10000);
}, 8000);

var timer7 = setTimeout(function tick() {
    elGreen.style.backgroundColor = "green";

    var timer8 = setInterval(function tick () {
        elGreen.style.backgroundColor = "green";    
    }, 10000); 
}, 8500);

var timer9 = setTimeout(function tick() {
    elGreen.style.backgroundColor = "white"; 

    var timer10 = setInterval(function tick () {
        elGreen.style.backgroundColor = "white";    
    }, 10000);    
}, 9000);

var timer11 = setTimeout(function tick() {
    elGreen.style.backgroundColor = "green";  

    var timer12 = setInterval(function tick () {
        elGreen.style.backgroundColor = "green";    
    }, 10000);
}, 9500);

setI