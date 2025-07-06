/**
 *      .filter() = creates a new array by filtering out elements
 * 
 */

//
const nums = [1, 2, 3, 4];

let even = nums.filter(isEven);
let odd = nums.filter(isOdd);

console.log(even);
console.log(odd);

function isEven(element) {
    return element % 2 === 0;
}

function isOdd(element) {
    return element % 2 !== 0;
}


//
const ages = [16, 17, 18, 18, 19, 20, 60];

const adults = ages.filter(isAdult);
const child = ages.filter(isChild);

console.log(adults);
console.log(child);

function isAdult(element) {
    return element >= 18;
}

function isChild(element) {
    return element < 18;
}



//
const fruits = ["apple", "mango", "banana", "kiwi", "pomogranate", "orange"];

const small = fruits.filter(shortFruits);
const large = fruits.filter(longFruits);

console.log(small);
console.log(large);

function shortFruits(element) {
    return element.length <= 5;
}

function longFruits(element) {
    return element.length > 5;
}