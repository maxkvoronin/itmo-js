/*1. Используя прототипы:
Создать шаблон объектов «Товар».
Свойства товара «Имя» и «Цена».
Создать шаблон объектов «Корзина товаров». 
Cвойства объекта:
- Массив товаров;
- Количество товаров;
- Сумма товаров.
Методы объекта:
- Добавить товар;
- Вернуть сумму товара;
- Вернуть количество товара.*/


function Product (pname, price) {
    this.name = pname;
    this.price = price;
}

function ProductCart () {
    this._products = [];
    this._totalCartProducts = 0;
    this._totalCartPrice = 0;
}

ProductCart.prototype.add = function (newProduct) {
    this._products.push(newProduct);
    this._totalCartProducts++;
    this._totalCartPrice+=newProduct.price
}

ProductCart.prototype.getTotalCartPrice = function () {
    return this._totalCartPrice;
}

ProductCart.prototype.getAmountOfProducts = function () {
    return  this._totalCartProducts;
}

ProductCart.prototype.getPriceOfProduct = function (productName) {
    for (let iProduct of this._products) {
        if(productName === iProduct.name)  {
            return iProduct.price;
        }
    }
}


var product1 = new Product('клавиатура',1000);
var product2 = new Product('монитор',5000);

var pCart = new ProductCart();

pCart.add(product1);
pCart.add(product2);

// console.log(pCart._products);
// console.log(pCart.getPriceOfProduct('монитор'));
// console.log(pCart.getTotalCartPrice());
// console.log(pCart.getAmountOfProducts());