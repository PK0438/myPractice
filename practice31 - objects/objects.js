/**
 *      Objects =  A collection of related properties and/or methods
 *                 Can represent real world objects (people, product, places)
 *           
 *         object = {
 *                      key: value,
 *                      function()
 *                  }
 */

const person1 = {
    firstName: "Josh",
    lastName: "Manuel",
    age: 28,
    isEmployed: true,
    sayHello: function() {console.log("Hi, I am Josh!")},
    eat: () => console.log("I'm eating a Pizza")
}

const person2 = {
    firstName: "Virat",
    lastName: "Kohli",
    age: 41,
    isEmployed: false,
    sayHello: () => console.log("Hey, I'm VK!"),
    eat: () => console.log("I'm eating a Biryani")
}

//accessing the values with the object.key notation
console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);
person1.sayHello();
person1.eat();

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed);
person2.sayHello();
person2.eat();