/**
 * 
 *  function declaration = define a reusable block of code that performs a specific task;
 *  function expression = a way to define function as values or variables. 
  * 
 *      1. Callsbacks in asynchronous operations
 *      2. Higher-order functions
 *      3. Closures
 *      4. Event Listeners
 */

//function delaration

// function hello() {
//     console.log("Hello");
// }

// hello();

//function expression

const hello = function() {
    console.log("Hello");
}

// Call the 'hello' function after a delay of 3 seconds (3000 milliseconds)
setTimeout(hello, 3000);


//
setTimeout(function() {
    console.log("This is a callback function set inside a setTimeout function and it will executing after 3 seconds")
}, 3000); 

//
const nums = [1, 2, 3, 4, 5, 6, 7]; 

const squaredArray = nums.map(function (element){
    return Math.pow(element, 2);
})

const cubedArray = nums.map(function (element){
    return Math.pow(element, 3);
})

console.log("Squares => ",squaredArray);
console.log("Cubes => ",cubedArray);


//
const evens = nums.filter(function (element) {
    return element % 2 === 0;
})

const odds = nums.filter(function (element){
    return element % 2 !== 0;
} )

console.log("Evens => ", evens);
console.log("Odds => ", odds);


//
const total = nums.reduce(function (accumulator, element) {
    return accumulator + element;
});

console.log("Total => ", total);