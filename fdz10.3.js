/*3. Создать шаблон объектов «Пользователь».
Метод преобразования к строке выводит имя пользователя.
Два фабричных метода:
- «Создать анонимного пользователя» не получает аргументов,
 в качества имя пользователя устанавливает «Аноним».
- «Создать пользователя из данных» в качества аргументов 
получает объект с именем и возрастом пользователя.*/

function User() {
    this.toString = function() {
        return this._name;
    }
}

User.buildAnonymous = function () {
    let user = new User();
    user._name = "Аноним";
    return user;
}

User.buildUserFromData = function(obj) {
    let user = new User();
    user._name = obj.name;
    user._age = obj.age;
    return user;
}

//let a = new User.buildAnonymous();
//let b = new User.buildUserFromData({name: "Иван", age: 18});
//alert(a);
//alert(b);
