/**
 * getter and setter
 * They are special method
 */

// Getter and Setter

class Product{
    set SetPrice( value ){
        this.price = value
    }

    get GetPrice(){
        return this.price;
    }
}

let productObj = new Product();
productObj.SetPrice = 100;

console.log(productObj.GetPrice);