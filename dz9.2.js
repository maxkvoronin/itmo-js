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
let printToButton4 = buildCount();

//через стрелочную функцию
elButton1.onclick = (ev) => {
    ev.target.textContent = printToButton1();
}

//через this 
elButton2.onclick = function() {
    this.textContent = printToButton2();
}

//через регистратор обработчика события
elButton3.addEventListener("click", function() {this.textContent = printToButton3();});

//через переменную CSS
elButton4.onclick = function() {
    document.querySelector(':root').style.setProperty("--count", `"${printToButton4()}"`);
}