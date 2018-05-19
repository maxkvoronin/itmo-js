/**
 * JS Занятие 9. Задание 2.
 * Реализовать счётчик нажатий на 
 *  кнопку: Дана кнопка внутри неё 
 *  записана цифра. При клике на 
 *  кнопку – её значение должно 
 *  увеличиваться на единицу.
*/

let count1 = 0;
let count2 = 0;

elButton1.onclick = (ev) => {
    ev.target.textContent = `Счетчик: ${++count1}`;
}

elButton2.onclick = function() {
    this.textContent = `Счетчик: ${++count2}`;
}