/** JS Занятие 9. Задание 1.
 * Даны несколько div элементов на html.
 * По первому нажатию на каждый div 
 * он перекрашивается зеленым цветом, 
 * при повторном нажатии перекрашивается 
 * обратно и так далее каждый клик 
 * происходит чередование цвета. 
 */

function changeColor(ev){
    ev.target.style.background = (ev.target.style.background === 'green') ? '' : 'green';
}

elDiv1.onclick = changeColor;
elDiv2.onclick = changeColor;
elDiv3.onclick = changeColor;