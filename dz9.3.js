/*Изобразить клавиатуру и расположенные 
на ней клавиши в виде html документа. 
При нажатии клавиши пользователем 
на клавиатуре, подсвечивать нажатую 
клавишу на клавиатуре изображенной 
в html и выводить нажатое значение.
*/

function pressKey (keyCode, toggle) {
    
    var aTags = document.getElementsByClassName('key');
    var searchText = String.fromCharCode(keyCode);
    
    for (var i = 0; i < aTags.length; i++) {
      if (aTags[i].textContent.indexOf(searchText) !==-1) {
        var found = aTags[i];
        break;
      }
    }
    found.style.background = (toggle) ? "red" : "#333";
    elScreen.textContent = found.textContent;

}

document.onkeydown  = (ev) => { 
    pressKey(ev.keyCode, true);
    return false;
}

document.onkeyup  = (ev) => {
    pressKey(ev.keyCode, false);
    return false;
}

