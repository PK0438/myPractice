/**
 *     getter = special method that makes a property readable
 *     setter = special method that makes a property writable
 *
 *      validare and modify a value when reading/writing a property
 */

class Reactangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  set width(value) {
    if (value > 0) {
      this._width = value;
    } else {
      console.error("Width should be a positive number.");
    }
  }

  set height(value) {
    if (value > 0) {
      this._height = value;
    } else {
      console.error("Height should be a positive number.");
    }
  }

  get width() {
    return `${this._width.toFixed(1)} cm`;
  }

  get height() {
    return `${this._height.toFixed(1)} cm`; // Returns height with 1 decimal places
  }

  area() {
    const area = this._width * this._height;
    return `${area.toFixed(1)} cm²`;
  }
} 

const myReatangle = new Reactangle(-1000000, "pizza"); //height and width should be positive numbers

myReatangle.width = 10; // Valid width
myReatangle.height = 20; // Valid height //though we reassign the vales of width and height, it will not assign the values, we need a getter method to access the values.

console.log(myReatangle.width);
console.log(myReatangle.height);
console.log("area =>", myReatangle.area());

//

class Person{
    constructor(fName, age){
        this.fName = fName;
        this.age = age;
    }

    set fName(value){
        if(value && typeof value === 'string'){
            this._fName = value;
        } else {
            console.error("Name shoube a string")
        }
    }

    get fName() {
        return this._fName;
    }

    set age(value) {
        if(value && value >= 0) {
            this._age = value;
        } else {
            console.error("Age should be a positive number.")        
        }
    }

    get age() {
        return `${this._age} years old`;
    }
}

class Student extends Person {
    constructor(fName, age, grade){
        super(fName, age);
        this.grade = grade;
    }

    set grade(value) {
        if(value >= 0) {
            this._grade = value;
        } else {
            console.error("Grade should be a positive number.")
        }
    }

    get grade() {
        return this._grade;
    }
}

const student1 = new Student(40, -20, -5);
const student2 = new Student("Stanky", 28, 3);

student1.fName = "John";
student1.age = 20;
student1.grade = 5;

console.log(student1.fName);
console.log(student1.age);
console.log(student1.grade);

console.log(student2.fName);
console.log(student2.age);
console.log(student2.grade);