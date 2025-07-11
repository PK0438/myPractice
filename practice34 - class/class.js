/**
 *      class = (ES6 feature) provides a more structured and cleaner way to 
 *              work with objects compared to traditional constructor functions.
 *              Ex: static keyword, encapsulation, inheritance. 
 */


class Product{

    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    displayProduct() {
        const total = this.price + this.salesTax()
        console.log(`The price for the ${this.name} is $${this.price.toFixed(2)} plus sales tax of $${this.salesTax().toFixed(2)}. Which totals the item bill $${total.toFixed(2) }!`)
    }

    salesTax() {
        const sTax = this.price * 7 / 100;
        return sTax;
    }
}


const product1 = new Product("rice", 16.49);
product1.displayProduct();

console.log(product1);

const product2 = new Product("Cheese", 7.99);
product2.displayProduct();

console.log(product2)

const product3 = new Product("cake", 12.3);
product3.displayProduct();

console.log(product3);

