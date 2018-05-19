/**
 * JS Занятие 9. Задание 2.
 * Реализовать счётчик нажатий на 
 *  кнопку: Дана кнопка внутри неё 
 *  записана цифра. При клике на 
 *  кнопку – её значение должно 
 *  увеличиваться на единицу.
*/


function buildCount () {
    let count = 0;
        return function inner () { 
            return `Счетчик: ${++count}`;
        }
}

let printToButton1 = buildCount();
let printToButton2 = buildCount();
let printToButton3 = buildCount();

elButton1.onclick = (ev) => {
    ev.target.textContent = printToButton1();
}

elButton2.onclick = function() {
    this.textContent = printToButton2();
}

elButton3.addEventListener("click", function() {this.textContent = printToButton3();});