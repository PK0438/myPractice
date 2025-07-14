/**
 *      statis = Keyword that defines properties or methods that belong
 *               to a class itself rather than the objects created 
 *               from that class (class owns anything statis, not the objects)
 * 
 */

class MathUtil{
    static PI = 3.14159;

    static getDiameter(radius){
        return 2 * radius
    }

    static getCircumference(radius) {
        return 2 * this.PI * radius;
    }

    static getArea(radius) {
        return this.PI * radius * radius;
    }
}

console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(2));
console.log(MathUtil.getCircumference(10));
console.log(MathUtil.getArea(10));

//
class User{
    static userCount = 0;
    // "userCount" makes sense to be "static" because it tracks how many total User objects exist.
    // Every new user created shares that same counter.

    constructor(userName) {
        this.userName = userName;  //"this.userName" is not static because it’s different for each user.
        User.userCount++;
    }

    static getUserCount() {
        return console.log(User.userCount); 
    }

    sayHello() {
        console.log(`Hello, ${this.userName}!`)
    }
}

const user1 = new User("Smith"); //one instance of User class
// "user1" is an instance of the User class, and it has its own "userName" property.

console.log(user1);
console.log(User.userCount);
user1.sayHello();

const user2 = new User("Vicky");

console.log(user2.userName);
console.log(User.userCount);
user2.sayHello();

User.getUserCount(); // This will return the total number of users created
//it belongs to the User class itself, not to any specific user instance.

// user1.getUserCount(); 
// getUserCount is a static method, and is belongs to the User class
// so it should be called on the class itself, like line no 62, not as an instance method.
//It will throw an error if you try to call it on an instance like user1.getUserCount().



//
class Car{
    static carCount = 0;

    constructor(make, model, year, isServiced) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.isServiced = isServiced;
        Car.carCount++;
    }

    static getCarCount() {
        return console.log(`Total number of available cars in the inventory: ${Car.carCount}`);
    }

    displayCar() {
        console.log(`This car is a ${this.year}, ${this.make}, ${this.model} and is ${this.isServiced ? "serviced" : "not serviced"}.`);
    }
}

const car1 = new Car("Hyndai", "Tuscon", 2022, true);
const car2 = new Car("Tesla", "Model X", 2023, false);
const car3 = new Car("Dodge", "Charger", 2024, true);


console.log(car1);
car1.displayCar();

console.log(car2);
car2.displayCar();  

console.log(car3);
car3.displayCar();

Car.getCarCount();


