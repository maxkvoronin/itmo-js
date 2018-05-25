/*3*. Дана таблица. Несколько столбцов и строк. У каждого 
столбца есть заголовок (например, №, ФИО, возраст). 
По нажатию на заголовок столбца осуществлять сортировку 
строк таблицы по значениям этого столбца. По возможности 
использовать объектно-ориентированное программирование.*/

function Table () {
    this._rows = [];
    
    this.setRow = function (id, prof, name) {
        this._rows.push({id: id, prof: prof, name: name});
    }

    this.getRowsValues = function () {
        var arr = [];
        for (row of this._rows) {
            arr.push(row.id);
            arr.push(row.prof);
            arr.push(row.name);
        }
        return arr;
    }

    this.getRows = function () {
        return this._rows;
    }

    this.mysort = function (sortType) {
        this._rows = this._rows.sort(function(a, b) {
            switch (sortType) {
                case 'num':
                    return a.id - b.id;  
                case 'fio':
                    var x = a.name.toLowerCase();
                    var y = b.name.toLowerCase();
                    return x < y ? -1 : x > y ? 1 : 0;
                case 'prof':
                    var x = a.prof.toLowerCase();
                    var y = b.prof.toLowerCase();
                    return x < y ? -1 : x > y ? 1 : 0;     
            }
        })
    }
}


clicker.onclick = function(ev) {    
    var tds = document.getElementsByTagName('td');
    var table = new Table();

    for (var i = 0;i<tds.length;i+=3) {
        table.setRow(parseInt(tds[i].textContent), tds[i+1].textContent, tds[i+2].textContent);
    }

    table.mysort(ev.target.id);

    var vals = table.getRowsValues();

    for (var i = 0;i<tds.length;i++) {
        tds[i].textContent = vals[i];
    }
}