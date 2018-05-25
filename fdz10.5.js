/*5.** Перенести в ООП-код следующий пример из реального мира:
- есть курсы, учителя и ученики
- у каждого курса есть свой учитель
- у каждого учителя есть своя группа учеников
Определите какие объекты есть в этом примере, какие у них 
свойства и какие методы, как эти объекты будут между собой 
взаимодействовать, например, к курсу можно добавить учителя.
Создайте все необходимые шаблоны объектов (классы) и приведите 
пример их использования.*/


function Human (name, age) {
	this._name = name;
	this._age = age;	
	
    this.getName = function () {
		return this._name;
	}
	this.getAge = function () {
		return this._age;
	}

	this.goOutFromCource = function (course){
        course.selfAway(this);
	}
}

function Teacher (name, age, course) {
	Human.apply(this, arguments);
	this.course = course.getNameOfCourse();
}

function Student (name, age, group) {
    Human.apply(this, arguments);
    this.group = group;
}

function Course (name) {
	this._name = name;
	this._teachers = [];
	this._students = [];
	this._id = 0;
	    
	this.addId = function () {
		return this._id++;
	}
	
	this.getNameOfCourse = function () {
		return this._name;
	}

	this.addTeacher = function (teacher) {
		this._teachers[this.addId()] = teacher.getName();
	}
	
	this.addStudent = function (student) {
        this._students[this.addId()] = student.getName();
        
	}
	
	this.deleteTeacher = function (teacher) {
		this._teachers = this._teachers.filter((iTeacher) => {
			return iTeacher!==teacher.getName();
        });
	}

	this.deleteStudent = function (student) {
        this._students = this._students.filter((iStudent) => {
            return iStudent!==student.getName();
        });
	}
	
	this.selfAway = function(somebody) {
		if (somebody instanceof Teacher) 
			this.deleteTeacher(somebody);
		else
			this.deleteStudent(somebody);
	}
}

function Admin (name) {
	this._name = name;
    var _currnetFreeGroup = 'лето2018'; //предолагаем что у админа на столе листок с именем группы

	this.acceptToCourse = function (someBody, someСourse) {
		if (this.isTeacher(someBody)) {
			someСourse.addTeacher(someBody);
			return someBody;

		}  else {
			var nwstud = new Student(someBody._name, someBody._age, _currnetFreeGroup);
			someСourse.addStudent(nwstud); 
			return nwstud;   
		}
	}

	this.kickFromCource = function (someBody, someСourse) {
		someСourse.selfAway(someBody);
	}

	this.makeNewCource = function (name) {
		var crs =  new Course(name); 
		return crs;
	}

	this.isTeacher = function (someBody) {
		if (someBody instanceof Teacher)
			return true;
		else
			return false;
	}
}


var vitaly = new Admin('Vitaly');
var noda = vitaly.makeNewCource('NodeJS');

var sasha = new Teacher('Sasha', 30, noda);

var nariman = new Human('Nariman', 30);
var evgen = new Human('Evgeny', 30);
var vasya = new Human('Vasya', 18);

sasha = vitaly.acceptToCourse(sasha, noda);

nariman = vitaly.acceptToCourse(nariman, noda);
vasya = vitaly.acceptToCourse(vasya, noda);
evgen = vitaly.acceptToCourse(evgen, noda);
evgen.goOutFromCource(noda);
vitaly.kickFromCource(vasya, noda);