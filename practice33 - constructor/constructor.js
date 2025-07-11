/** 
 *      constructor = special method for defining the properties and methods of objects
 * 
 */

function Car(make, model, year, isVerified, greet) {
    this.make = make,
    this.model = model,
    this.year = year,
    this.isVerified = isVerified,
    this.greet = function() {console.log(`Hello ${this.make}`)}
}

const car1 = new Car("Hyndai", "Tucson", 2025, true);
const car2 = new Car("Tesla", "X", "2024", true)
const car3 = new Car("Dodge", "Charger", "2025", false)

console.log(car1);
console.log(car2);
console.log(car3);

car1.greet();
car2.greet();


function Employee(fName, lName, id, location, isContractor) {
    this.fName = fName;
    this.lName = lName;
    this.id = id;
    this.location = location;
    this.isContractor = isContractor;
}

const emp1 = new Employee("Mahendrs", "Singh", "3827He2", "Dallas, TX", false);
const emp2 = new Employee("Will", "Smith", "ws745h", "Sacramento, CA", true)

console.log(emp1);
console.log(emp2);