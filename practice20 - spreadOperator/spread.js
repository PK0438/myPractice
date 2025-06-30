/* Spread Operator - ...
                    allows an iterable such as an array or string to be expanded into seperate elements
                    (unpacks the elements)
*/

let numbers = [1, 2, 3, 4, 5,]

console.log(0, ...numbers) 

let maximum = Math.max(numbers)
console.log("maximum value => ", maximum)


//unpacking the elements with spread operator
maximum = Math.max(...numbers);
console.log("maximum value => ", maximum)

minimum = Math.min(...numbers)
console.log("minimum value => ", minimum)

let userName = "Pramod Kumar";
console.log("to simple and single element array =>", [userName]);
console.log("unpacking using spread operator => ", [...userName]); //it unpacks the each letter in the string into a seperate element in the array.

console.log("join with - => ", [...userName].join("-")); //join 

//creating a shallow copy
let fruits = ["apple", 'banana', "mango"];
let newFruits = [...fruits] //contains the same elements that fruits array has
console.log("newFruits =>", newFruits);

let veggies = ["carrots", "cucumbers", "potatoes"];

//lets add fruits and veggies arrays

let homeNeeds = [...fruits, ...veggies, "eggs", "milk"] //adding more elements along with the above two arrays
console.log("combined array => ", homeNeeds)
