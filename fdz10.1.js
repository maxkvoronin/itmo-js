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
    this.name = pname;
    this.price = price;
}

function ProductCart () {
    this._products = [];
    this._totalCartProducts = 0;
    this._totalCartPrice = 0;
   
    this.add = function (newProduct) {
        this._products.push(newProduct);
        this._totalCartProducts++;
        this._totalCartPrice+=newProduct.price
    }

    this.getTotalCartPrice = function () {
        return this._totalCartPrice;

        /* другая реализация если в методе add не будем увеличивать цену таким образом: this._totalCartPrice+=newProduct.price
        for (let iProduct of this._products) {
            this._totalCartPrice+=iProduct.price;
        }
        return  this._totalCartPrice;
        */
    }

    this.getAmountOfProducts = function () {
        return  this._totalCartProducts;

        /* другая реализация если в методе add не инкримент счетчика товаров делать this._totalCartProducts++;
        return this._products.length;
        */
    }

    this.getPriceOfProduct = function (productName) {
        for (let iProduct of this._products) {
            if(productName === iProduct.name) 
                return iProduct.price;
        }
    }
}

var product1 = new Product('клавиатура',1000);
var product2 = new Product('монитор',5000);

var pCart = new ProductCart();

pCart.add(product1);
pCart.add(product2);

//console.log(pCart._products);
//console.log(pCart.getPriceOfProduct('монитор'));
//console.log(pCart.getTotalCartPrice());
//console.log(pCart.getAmountOfProducts());