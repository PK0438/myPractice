/**
 *  * inheritance = allows a new class to inherit properties and methods 
 *                  from an existing class. (parent -> child). Helps with code reusability.
 * *  * The child class can access the properties and methods of the parent class.
 * *  * The child class can also have its own properties and methods.
 * * *  * The child class can override the methods of the parent class.
 * 
 * 
 *  *  super = keyword is used in classes to call the constructor or
 * *          access the properties and methods of a parent (superclass) class.
 *            this = this object
 * *          super = the parent
 * 
 */

 class Animal{
    alive = true;

    constructor(animalName, legs){
        this.animalName = animalName;
        this.legs = legs;
    }

    eat(){
        console.log(`This ${this.name} is eating.`)
    }

    sleep(){
        console.log(`This ${this.name} is sleeping.`)
    }
 }

 class Dogs extends Animal{
    name = "dog";
    constructor(animalName, legs, hasTail) {
        super(animalName, legs);
        this.hasTail = hasTail;
    }
 }

 class Cats extends Animal{
    name = "cat";
 }

 class Fishes extends Animal{
    name = "fish";
 }

const dog1 = new Dogs();
const cat1 = new Cats();
const fish1 = new Fishes();

cat1.alive = false;

console.log(dog1.alive);
console.log(cat1.alive);




//
class Vehicle {
    constructor(brand, model){
        this.brand = brand;
        this.model = model;
    }

    start(){
        console.log(`The ${this.brand} ${this.model} is starting.`);
    }

    move(){
        console.log(`The ${this.brand} ${this.model} is moving.`);
    }
}

class Car extends Vehicle {
    constructor(brand, model, doors){
        super(brand, model);
        this.doors = doors;
    }
}

class Bike extends Vehicle {
    constructor(brand, model, type){
        super(brand, model);
        this.type = type;
    }

    stop() {
        console.log(`The ${this.brand} ${this.model} with ${this.type} engine is stopping.`)
    }
}

const car1 = new Car("Toyota", "Corolla", 4);
const bike1 = new Bike("Yamaha", "FZ16", "150CC");
const bike2 = new Bike("")

car1.start();
bike1.move();
bike1.stop();

//

class Pet{
    constructor(name, age){
        this.name = name;
        this.age = age;
        this.hunger = 50;
    }

    eat() {
        console.log(`The pet ${this.name} is ${this.age} years old and is eating. `);
    }

    sleep() {
        console.log(`The pet ${this.name} is ${this.age} years old and is sleeping. `);
    }

    run(speed) {
        console.log(`The pet ${this.name} is ${this.age} years old and is running with a speed of ${speed} mph`);
    }
}

class Dog extends Pet {
    constructor(name, age, breed){
        super(name, age); // Calls the constructor of the Pet class (parent class)
        this.breed = breed;
    }

    bark() {
        console.log(`The dog ${this.name} of breed ${this.breed} is barking like Woof! Woof!.`);
    }

    fetch() {
        console.log(`the dog ${this.name} is fetching the ball.`);
        super.run(30) // Calls the run method from the Pet class (parent class)
    }
}

class Cat extends Pet {
    constructor(name, age, color){
        super(name, age);
        this.color = color;
    }
    meow() {
        console.log(`The cat ${this.name} of color ${this.color} is meowing like Meow! Meow!.`);
    }

    climb() {
        console.log(`The cat ${this.name} is climbing the tree.`);
    }
}

class Fish extends Pet {
    constructor(name, age, swimSpeed){
        super(name, age);
        this.swimSpeed = swimSpeed;
    }

    swim(){
        super.run(this.swimSpeed)
    }

}

const myDog = new Dog("Benze", 3, "Labrador");
const myCat = new Cat("Mittens", 2, "Black");
const myFish = new Fish("Nemo", 1, 10);

myDog.eat();
myDog.bark();
myDog.run(45);
myDog.fetch();
myDog.sleep();
myCat.eat();
myCat.meow();
myCat.climb();
myCat.sleep();
myFish.swim();
// myCat.bark();  //Throws an error: myCat.bark is not a function at inheritance.js:154:7