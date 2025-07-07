/**
 *      .reduce() = reduce the elements of an array to a single value
 * 
 */

const prices = [10, 12.59, 8, 14.94, 24.99 ];

const total = prices.reduce(calTotal);

console.log(`Your bill is $${total.toFixed(2)}.`);

/**
 * Calculates the sum of two numbers, typically used as a callback for Array.prototype.reduce.
 *
 * @param {number} accumulator - The accumulated value from previous iterations. On the first call, it is either the initial value provided to reduce or the first element of the array.
 * @param {number} element - The current element being processed in the array.
 * @returns {number} The sum of the accumulator and the current element.
 */ 


function calTotal(accumulator, element) {
    return accumulator + element;
}

//
const grades = [78, 65, 83, 94, 78, 54];

const max = grades.reduce(getMax);
const min = grades.reduce(getMin);

console.log(`The maximum value is ${max}`);
console.log(`The minimum value is ${min}`);

function getMax (accumulator, element) {
    return Math.max(accumulator, element)
}

function getMin (accumulator, element) {
    return Math.min(accumulator, element)
}