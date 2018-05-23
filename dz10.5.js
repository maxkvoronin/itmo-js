/*5.** Перенести в ООП-код следующий пример из реального мира:
- есть курсы, учителя и ученики
- у каждого курса есть свой учитель
- у каждого учителя есть своя группа учеников
Определите какие объекты есть в этом примере, какие у них 
свойства и какие методы, как эти объекты будут между собой 
взаимодействовать, например, к курсу можно добавить учителя.
Создайте все необходимые шаблоны объектов (классы) и приведите 
пример их использования.*/


function Cource (name) {
    this.name = name;

    //у каждого учителя свой уникальный айдишник который в массиве teachers соответствует его индексу
    //если учителя удалить и добавить нового, айдишник будет другой
    this.teachers = [];
    this.groups = [];
    this.lastTeacherId = 0; 
    this.lastGroupId = 0; 

    /*
    _deps матрица зависимостей учителей и групп 
    например: дано три группы 
        группа2017 , её id 0 (индекс в массиве groups)
        группа2018 , id: 1
        группа2019 , id: 2

        дано четыре учителя 
        сидоров, id 0 
        петров, id 1
        матвеев, id 2
        иванов, id 3 (т.е. в массиве teachers это teachers[3])

            сидоров обучает группа2018 и группа2017 т.е. [1,0]
            петров обучает группа2017 т.е. [0]
            матвеев никого не обучает т.е. []
            иванов обучает группа2019 и группа2017 т.е. [2,0]
            
            матрица зависимостей будет такой = [teacherId[groupId, ...], ...]
            
            [[1,0],[0], ,[2,0]]
        */
    this._deps = []; 

    this.addTeacher = function (nameOfTeacher) {
        var newTeacher = new Teacher(nameOfTeacher, this.lastTeacherId++);
        this.teachers.push(newTeacher.name);
        return newTeacher;
    }

    this.removeTeacher = function (nameOfTeacher) {
        var i = this.teachers.indexOf(nameOfTeacher)
        if (i !== -1) {
            //удаляем имя учителя, в массиве teachers останется пустое поле, именно для этого delete использую, но индексация остается прежней
            delete this.teachers[i]; 
        }
        else
            console.log(`Нет такого учителя: ${nameOfTeacher}`);
    }

    this.addGroup = function (nameOfGroup) {
        var newGroup = new Group(nameOfGroup, this.lastGroupId++);
        
        if (this.groups.includes(nameOfGroup)) {
            console.log(`Уже есть такая группа: ${nameOfGroup}`);
        }
        else {
            this.groups.push(newGroup.name);
            return newGroup;
        }
    }

    this.removeGroup = function (nameOfGroup) {
        var i = this.groups.indexOf(nameOfGroup)
        if (i !== -1) {
            delete this.groups[i];
        }
        else {
            console.log(`Нет такой группы: ${nameOfGroup}`);
        }
    }

    this.addTeacherToGroup = function (nameOfTeacher, nameOfGroup) {
        var teacherId =  this.teachers.indexOf(nameOfTeacher);
        var groupId = this.groups.indexOf(nameOfGroup);

        if (teacherId === -1 || groupId === -1) {
            console.log(`Нет такого учителя или группы: ${nameOfTeacher} ${nameOfGroup}`); 
        }
        else {
            if (this._deps[teacherId] === undefined) {
                this._deps[teacherId] = new Array();
            }
            this._deps[teacherId].push(groupId);      
        }         
    }   

    this.removeTeacherFromGroup = function (nameOfTeacher, nameOfGroup) {
        var teacherId =  this.teachers.indexOf(nameOfTeacher);
        var groupId = this.groups.indexOf(nameOfGroup);

        if (teacherId === -1 || groupId === -1) {
            console.log(`Нет такого учителя или группы: ${nameOfTeacher} ${nameOfGroup}`); 
        } 
        else {
            var i = this._deps[teacherId].indexOf(groupId);
            if (i === -1) {
                console.log(`Сейчас ${nameOfTeacher} не обучает группу ${nameOfGroup}`); 
            } else
                this._deps[teacherId].splice(i, 1);  
        }
    } 

    this.getAllGroupsOfTeacher = function (nameOfTeacher) {
        var teacherId = this.teachers.indexOf(nameOfTeacher);
        var out=[];
        
        if (teacherId === -1) {
            console.log(`Нет такого учителя ${nameOfTeacher}`); 
        } 
        else {
            if (this._deps[teacherId] !== undefined) {
                for (i of this._deps[teacherId]) {
                    out.push(this.groups[i]);
                }
                return out;
            }
            else {
                console.log(`Учитель ${nameOfTeacher} сейчас никого не обучает`); 
            }
        }
    }

    this.getAllTeachersOfGroup = function (nameOfGroup) {
        var groupId = this.groups.indexOf(nameOfGroup);
        var out=[];

        for (teacherId in this._deps) {
            for (i of this._deps[teacherId]) {
                if (i === groupId) {
                    out.push(this.teachers[teacherId]);
                }
            }            
        }
        if (out.length !== 0) {
            return out;
        }
        else {
            console.log(`Группу ${nameOfGroup} никого не обучает`); 
        }
    }
}

function Teacher (name, teacherId) {
    this.name = name;
    this.teacherId = teacherId;
}

function Group(name, groupId) {
    this.name = name;
    this.groupId = groupId;
}


// var cource = new Cource('C++');
// cource.addTeacher('иванов');
// cource.removeTeacher('иванов');
// cource.addGroup('лето2018');
// cource.removeGroup('лето2018');
// cource.addTeacher('петров');
// cource.addGroup('лето2018');
// cource.addGroup('зима2018');
// cource.addGroup('осень2018');
// cource.addTeacher('сидоров');
// cource.addTeacher('достоевский');
// cource.addTeacher('ломоносов');
// cource.addTeacherToGroup('ломоносов', 'лето2018');
// cource.addTeacherToGroup('достоевский', 'лето2018');
// cource.addTeacherToGroup('достоевский', 'зима2018');
// cource.addTeacherToGroup('достоевский', 'осень2018');
// cource.addGroup('второгодки2017');
// cource.addTeacherToGroup('петров', 'осень2018');
// cource.removeTeacherFromGroup('достоевский', 'зима2018');

// console.log(cource.getAllGroupsOfTeacher('достоевский'));
// console.log(cource.getAllTeachersOfGroup('лето2018'));

