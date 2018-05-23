/*2. Создать шаблон объектов «Человек».
Свойства «Имя», «Возраст», «Пол», «Интересы».
Метод преобразования к строке вида: «Человек: 
Иван. Возраст: 25 лет. Пол: м. Интересы: 
музыка, программирование.»
Создать шаблон объектов «Студент».
Свойства от наследованные от шаблона объектов 
«Человек» и добавить «Институт».
Переопределить метод преобразования к строке 
вида: «Студент: Иван. Возраст: 25 лет. Пол: м. 
Интересы: музыка, программирование. 
Обучается в ИТМО.»*/

function Human(name, age, sex, ...interests) {
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.interests = [interests];

    this.ageStr = function () {
        return (this.age%10 < 5 && this.age%10 > 2) ? "года" : 
        (this.age < 20 && this.age > 10 ) ? "лет" :
        (this.age%10 === 1) ? "год": "лет";
    }

    this.toString = function () {
        return `Человек: ${this.name}. Возраст: ${this.age} ${this.ageStr()}. Пол: ${this.sex}. Интересы: ${this.interests}.`;
    }
}

function Student (name, age, sex, placeOfStudy, ...interests) {
    Human.call(this, name, age, sex, interests);
    this.placeOfStudy = placeOfStudy;

    this.toString = function () {
        return `Студент: ${this.name}. Возраст: ${this.age} ${this.ageStr()}. Пол: ${this.sex}. Интересы: ${this.interests}. Обучается в: ${this.placeOfStudy}.`;
    }
}

//let a = new Human("иван", 18, "м", "футбол", "история");
//console.log(a.toString());
//let b = new Student("иван", 18, "м", "ИТМО", "футбол", "история");
//console.log(b.toString());
