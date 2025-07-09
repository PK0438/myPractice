/**
 *      this = reference to the object where THIS is used
 *              (the object depends on the immediate context)
 *              person.name = this.name
 * 
 */

const person1 = {
    name: "Tony",
    favFood: "biryani",
    sayHello: function(){console.log(`Hello, I am ${this.name}, and my favourite food is ${this.favFood}`)},
    eat: function() {console.log(`${this.name} is eating ${this.favFood}`)}
};

person1.sayHello();
person1.eat();


const person2 = {
    name: "VK",
    favFood: "Pizza",
    sayHello: function(){console.log(`Hello, I am ${this.name}, and my favourite food is ${this.favFood}`)},
    eat: function() {console.log(`${this.name} is eating ${this.favFood}`)}
}

person2.sayHello();
person2.eat();