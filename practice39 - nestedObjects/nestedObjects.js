/**
    nested objects = Objects inside other objects.
                     Allows you to represent more complex data structures.
                     Child object is enclosed by a parent object.

                     Person{Address{}, ContactInfo{}}
                     ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}
 */


const person = {
    fullName: "John Doe",
    age: 30,
    isStudent: true,
    hobbies: ["reading", "gaming", "coding"],
    address: {
        street: "123 Main St",
        city: "Alpharetta",
        country: "USA"
    }
}


console.log(person.fullName);
console.log(person.hobbies);
console.log(person.hobbies[2]);
console.log(person.address);
console.log(person.address.city);

// Loop through the properties of the address object

for(const property in person.address) {
    console.log(`${property} : ${person.address[property]}`);
}


//

class Person {
    constructor(fullName, age, ...address) {
        this.fullName = fullName;
        this.age = age;
        this.address = new Address(...address); // Address object
    }
}
class Address {
    constructor(street, city, country) {
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person("John Doe", 30, "123 Main St", "Alpharetta", "USA");
const person2 = new Person("Jane Smith", 25, "456 Elm St", "New York", "USA");
const person3 = new Person("Bob Johnson", 40, "789 Oak St", "Los Angeles", "USA");

console.log(person1.address.street);