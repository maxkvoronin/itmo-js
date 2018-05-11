/*
1 Построить объект студент:
- свойства: Имя, Фамилия, Возраст, Интересы (в виде массива), Место обучения.
- метод выводящий в консоль биографическую справку в виде, например: 
«Иван Петров. 21 год. Интересы: программирование, музыка, аниме. Учится в ИТМО.
*/

var student = {
    name: "Иван",
    surname: "Петров",
    age: 18,
    ageStr: function() {
        return (this.age%10 < 5 && this.age%10 > 2) ? "года" : 
        (this.age < 20 && this.age > 10 ) ? "лет" :
        (this.age%10 === 1) ? "год": "лет";
    },
    interests: ["футбол", " история"],
    placeOfStudy: "ИТМО",
    showBio: function() {
        console.log(`\t\t${this.name} ${this.surname}. ${this.age} ${this.ageStr()}. 
        Интересы: ${this.interests.toString()}.  Учится в ${this.placeOfStudy}.`);
    },
};

//student.showBio();

/**
 * 2 Написать функцию вычисляющую факториал числа с использованием рекурсии.
Факториал числа - это число, умноженное на себя минус один, затем на себя 
минус два и так далее, до единицы. Обозначаетс n!
Определение факториала можно записать как: 
n! = n * (n - 1) * (n - 2) * ...*1
2! = 2 * 1
3! = 3 * 2 * 1
 */

 function fak(n) {
    if(n < 0) throw new Error("negative input value");
    return n <= 1 ? 1 : n*fak(n-1);
 }

 //console.log(fak(5));

/*
 3 Сделайте функцию, каждый вызов который будет генерировать случайное число 
от 1 до 100, но так, чтобы оно не повторялось, пока не будут перебраны все 
числа из этого промежутка. Решите задачу через замыкания - в замыкании должен 
хранится массив чисел, которые уже были сгенерированы функцией.  
*/

function random100 () {
    var arr = [];  
    
    return function inner() {
        var Num;
        while(arr.length!=100) {
            rNum = Math.floor( Math.random()*100 + 1 );      
            if (arr.indexOf(rNum) === -1) {
                arr.push(rNum);
                return rNum;
            }
        }
        return undefined;
    }
}

var rand = random100();
console.log(rand());


