/*1. Создать шаблон объектов «Товар».
Свойства товара «Имя» и «Цена». Создать шаблон объектов «Корзина товаров». 
Приватные свойства объекта:
- Массив товаров;
- Количество товаров;
- Сумма товаров.
Методы объекта:
- Добавить товар;
- Вернуть сумму товара;
- Вернуть количество товара.*/

function Product (pname, price) {
    this.pname = pname;
    this.price = price;
}

function ProductCart () {
    var _products = [];
    var _productsQuantity = 0;
    var _productsTotalPrice = 0;

    this.add = function (pname, price) {
        Product.call(this, pname, price);
        _products[this.pname] = this.price;
        _productsQuantity++;
        _productsTotalPrice+=this.price;
    }

    this.getProductsTotalPrice = function () {
        return  _productsTotalPrice;
    }

    this.getProductsQuantity = function () {
        return  _productsQuantity;
    }
    
}
//var a = new ProductCart()
//a.add("keyb1", 1000);
//a.add("keyb2", 2000);
//a.add("keyb3", 3000);

//console.log(a.getProductsTotalPrice());
//console.log(a.getProductsTotalPrice());
//console.log(a.getProductsQuantity());s