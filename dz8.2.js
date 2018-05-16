/** JS Занятие 8. Задача 2.
 * Создать объект «Товар» включающий:
 * - свойства, такие как фото, артикул, 
 * описание и т.п.;
 * - метод, которому при вызове передается 
 * id пустого div элемента и в этот html 
 * элемент данный метод создаст и внесёт 
 * все необходимые html элементы, стили, 
 * и содержание для отображения 
 * всей информации хранящихся в свойствах 
 * объекта о данном товаре. Дизайн оформления 
 * информации в html о товаре – 
 * это ваше творчество.
 */

 //см dz8.2.html
 
 var product = {
     photourl: "http://economic-definition.com/images/2856010039_480.jpg",
     art: 111,
     name: "Lorem ipsum",
     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
     put:   function () {
        var elem = document.getElementById("clearElem");
        elem.style.width = "200px";
        elem.innerHTML = `<strong>${this.name}</strong><img width="100%" src=${this.photourl}><p>${this.art}</p><p>${this.description}</p>`;
     }
 };

 product.put();