/** JS Занятие 8. Задача 4**.
 * Генерация игрового поля заданного размера.
 * Суть - дана таблица с числами, распаложенными 
 * в случайном порядке в ячейках таблицы. 
 * Числа идут по порядку от 1 до N*N. 
 * Все числа разного размера и цвета.
 */

//максимальный размер шрифта от 0.1px до 100px
//чтобы не было совсем большых шрифтов
const maxFontSize = 1000; // 100px.

var obj = {
    color: {
        r: [],
        g: [],
        b: [],
    },
    txt: [],
    fontsize: [],
    fontsizeIndex: 0,

    //заполнение и случайная сортировка;
    init: function() {
        this.arrInitAndSort(this.color.r, 256);
        this.arrInitAndSort(this.color.g, 256);
        this.arrInitAndSort(this.color.b, 256);
        this.arrInitAndSort(this.txt, size*size);    
        this.arrInitAndSort(this.fontsize, maxFontSize);
        this.fontsizeIndex = maxFontSize;
        return this;
    },

    arrInitAndSort: function (arr, num) {
        var i = 0;
        //инициализируем массив
        while (i<num) {
            arr[i] = i;
            i++;
        }
        //cлучайно сортируем алгоритмом Фишера-Йейса 
        for (var i = num - 1; i >= 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        return arr;
    },

    //получает случайный индекс из объекта color, в котором три массива со случайно отсортированными эл-тами от 0 до 255;
    getColorfromRandomIndex: function() {
        var index1 = Math.floor(Math.random()*256);
        var index2 = Math.floor(Math.random()*256);
        var index3 = Math.floor(Math.random()*256);          
        return `rgb(${this.color.r[index1]},${this.color.g[index2]},${this.color.b[index3]})`;

    },

    //получить элемент из массива со случайными размерами
    //если достигаем заданного максимума, то инициализируем новый случайный массив.
    getFontSize: function() {
        if (this.fontsizeIndex === maxFontSize) {
            this.fontsizeIndex = 0;
            this.arrInitAndSort(this.fontsize, maxFontSize);
        }

        return `${(this.fontsize[this.fontsizeIndex++]+1)/10}px`; 
    }

}; 

var size = parseInt(prompt("Введите размер поля"));

var obj = obj.init();

var table = document.createElement('table');

for(var i = 0, k = 0; i < size; i++){
    var tr = document.createElement('tr');
    
	for(var j=0; j < size; j++){
        var td = document.createElement('td');
        td.innerText = obj.txt[k]+1;
        td.style.color = obj.getColorfromRandomIndex();
        td.style.fontSize = obj.getFontSize();
        tr.appendChild(td);
    k++;
    }

table.appendChild(tr);
}
document.body.appendChild(table);