/**
 *      Arrow functions =  a concise way to write function expressions good for simple functions
 *                          that you use only once.
 *                          (parameters) => some code
 */


//function expression
const hello = function (name) {
    console.log(`Hello ${name}`)
};

hello("Kumar");


//arrow function
setTimeout((name = "Kumar") => {
    console.log(`Good bye ${name}`)
}, 3000)


//
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const squares = nums.map((element) => element * 2);
const cubes = nums.map((element) => element * 3);
const even = nums.filter((element) => element % 2 === 0);
const odd = nums.filter((element) => element % 2 !== 0)
const total = nums.reduce((accumulator, element) => accumulator + element);

console.log("Squares => ", squares);
console.log("Cubes => ", cubes);
console.log("Even => ", even);
console.log("Odd => ", odd);
console.log("Total => ", total);