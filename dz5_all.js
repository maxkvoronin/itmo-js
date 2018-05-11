/**
 * 
1 Построить объект студент со свойствами:
Имя, Фамилия, Возраст, Интересы (в виде массива), Место обучения.
Написать отдельную функцию, которой передается объект студент, 
а она выводит его содержимое.
 */

var Student = {
    firstname: "Ivan",
    surname: "Pupkin",
    age: 18,
    interests: ["football", "history"],
    placeOfStydy: "SPBGU"
};

function showObj (obj) {
    console.log(obj);
}(Student);


/**
 * 
2 Заданы два массива A и B необходимо их объединить 
в один массив C так, чтобы в массиве остались уникальные 
(неповторяющиеся) элементы. 
Например: A = [1,2], B = [2,3] получим С = [1, 2, 3].
 * 
 */

var arrA = [0,2,1,2];
var arrB = [2,3,2,2,0,2,0,6];
var arrC = [...arrA, ...arrB];

arrC = arrC.filter( (item, i) => {      
            if (arrC.indexOf(item) >= i) {
                return true; 
            }
        }
);

//console.log(arrC)

/**
 * 3 Написать отдельную функцию, которая выводит пользователю 
заданное число чисел Фибоначчи. 
(например, первых 8 чисел Фибоначчи:  1, 1, 2, 3, 5, 8, 13, 21). 
Заданное число передается функции в качестве аргумента. 
 */

//fibo(2);

function fibo(maxstep) {
    var cur = 0, pre = 1, prepre = 0;
    for (var i = 0; i < maxstep; i++) {
        if (i !== 0) {
            prepre = pre;
            pre = cur;
        }
        console.log(pre);
        cur = pre + prepre;
    }
}
   

/**4** Напишите функцию counter, которая возвращает количество дней, 
часов и минут до нового года. Датой наступления нового года считается 
1 января. Функция должна вернуть строку вида: "14 дней 21 час 46 минут"
Нужно реализовать корректные окончания слов, например: 1 день, 2 дня, 
5 дней. Функция должна корректно работать при запуске в любом году, 
т. е. грядущий год должен вычисляться программно.*/


//console.log(counter());


function counter () {

    var ny = {
        day: 0,
        dayStr: ["день", "дня", "дней"],
        hour: 0,
        hourStr: ["час", "часа", "часов"],
        minut: 0,
        minutStr: ["минута", "минуты", "минут"],
        Str: "",
        convertStr: function () {

            if (this.day%100 < 20 && this.day%100 > 10) {
                this.Str += this.day + " " +  this.dayStr[2] + " ";
            } else
            if (this.day%10 === 1) {
                this.Str += this.day + " " +  this.dayStr[0] + " ";
            } else
            if (this.day%10 === 2 || this.minut%10 === 3
                || this.day%10 === 4) {
                this.Str += this.day + " " +  this.dayStr[1] + " ";
            } else {
                this.Str += this.day + " " +  this.dayStr[2] + " ";
            }


            switch (this.hour) {
                case 1: case 21:
                    this.Str += this.hour + " " +  this.hourStr[0] + " ";    
                    break;
                case 2: case 3: case 4: case 22: case 23:
                    this.Str += this.hour + " " +  this.hourStr[1] + " ";    
                    break;
                default:
                    this.Str += this.hour + " " +  this.hourStr[2] + " "; 
            }        

            if (this.minut < 20 && this.minut > 10) {
                this.Str += this.minut + " " +  this.minutStr[2];
            } else
            if (this.minut%10 === 1) {
                this.Str += this.minut + " " +  this.minutStr[0];
            } else
            if (this.minut%10 === 2 || this.minut%10 === 3
                || this.minut%10 === 4) {
                this.Str += this.minut + " " +  this.minutStr[1];
            } else {
                this.Str += this.minut + " " +  this.minutStr[2];
            }
        return this.Str;
        },
    };

    var now = new Date();
    var nextyear = now.getFullYear() + 1;
    var happyNewYear = Date.parse(nextyear+"-01-01T00:00:00");
    var msForNY = happyNewYear - now.getTime();
    var minsForNY = parseInt(msForNY/60000);

    ny.day = parseInt(minsForNY/1440);
    ny.hour = parseInt(minsForNY%1440/60);
    ny.minut = parseInt(minsForNY%(1440/24));

    return ny.convertStr();

}







