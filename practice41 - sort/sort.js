/*
    sort() = method is used to sort elements of an array in place. 
             Sorts elements as strings in lexographic order, not alphabetical order.
             lexographic = (alphabet + numbers + symbols) as string. 
*/

let fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.sort();

console.log(fruits); // ["Apple", "Banana", "Mango", "Orange"]


// 
let numbers = [1, 10, 9, 3, 2, 5, 4, 6, 8, 7];
numbers.sort();

console.log(numbers); // [1, 10, 2, 3, 4, 5, 6, 7, 8, 9]

const orderedNumbers = numbers.sort((a, b) => a - b);

console.log(orderedNumbers); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const reversedNumbers = numbers.sort((a,b) => b - a);

console.log(reversedNumbers); // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

//
const people = [{name: "Rohit", age: 30, gpa: 3.4}, 
                {name: "Anil", age: 25, gpa: 3.8},
                {name: "Harsh", age: 28, gpa: 3.6},
                {name: "Vinaya", age: 22, gpa: 3.9}];

const ageSort = people.sort((a,b) => a.age - b.age);
console.log(ageSort);

const gpaSort = people.sort((a,b) => b.gpa - a.gpa);
console.log(gpaSort);

const nameSort = people.sort((a,b) => a.name - b.name); //this does not work as expected because it tries to subtract strings
console.log(nameSort);

//there is a seperate method for sorting strings

/*
        What is localeCompare()?
        localeCompare() compares strings according to the current locale (language and region settings). 
        It's much smarter than regular string comparison because 
        it understands different languages, accents, and sorting rules.
*/

const nameSort2 = people.sort((a, b) => a.name.localeCompare(b.name));
console.log(nameSort2); 


//
let cities = ["New York", "london", "PARIS", "tokyo", "Berlin"];

const citySort = cities.sort((a, b) => a.localeCompare(b, undefined, {sensitivity: 'base'  })); // This will sort cities in a case-insensitive manner
// The 'undefined' parameter means it will use the default locale, and 'sensitivity: base' means it will ignore case differences
console.log(citySort)

const revCitySort = cities.sort((a,b) => b.localeCompare(a, undefined, {sensitivity: 'base'}));
console.log(revCitySort); 