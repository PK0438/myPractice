/**
 *  * inheritance = allows a new class to inherit properties and methods 
 *                  from an existing class. (parent -> child). Helps with code reusability.
 * *  * The child class can access the properties and methods of the parent class.
 * *  * The child class can also have its own properties and methods.
 * * *  * The child class can override the methods of the parent class.
 * 
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

 class Fish extends Animal{
    name = "fish";
 }

const dog1 = new Dogs();
const cat1 = new Cats();
const fish1 = new Fish();

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
}

class Dog extends Pet {
    constructor(name, age, breed){
        super(name, age);
        this.breed = breed;
    }

    bark() {
        console.log(`The dog ${this.name} of breed ${this.breed} is barking like Woof! Woof!.`);
    }

    fetch() {
        console.log(`the dog ${this.name} is fetching the ball.`);
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

const myDog = new Dog("Benze", 3, "Labrador");
const myCat = new Cat("Mittens", 2, "Black");

myDog.eat();
myDog.bark();
myDog.fetch();
myDog.sleep();
myCat.eat();
myCat.meow();
myCat.climb();
myCat.sleep();
myCat.bark();  //Throws an error: myCat.bark is not a function at inheritance.js:154:7