/*
    forEach() = Method used to iterate over the elements of an array and 
                apply a specified function (callback) to each element. 

                array.forEach(callback);
                element, index, array are provided. 
*/

// let numbers = [1, 2, 3, 4, 10, "50"];
// let array2 = [];
// let squaresArray = numbers.forEach(e => {
//      let result = e * e;
//      array2.push(result);
// //  console.log(result)
// });

// console.log(array2)


let evenNumbers = [2, 4, 6, 8, 10];

evenNumbers.forEach(addTen);

function addTen(element, index, array){
    
    // console.log(element, index, array)
    
    array[index] = element + 10; 
}

console.log(evenNumbers);



let allNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let even = [];
let odd = [];

allNumbers.forEach(findEven);

function findEven(element, index) {
    if(element % 2 == 0) {
        even.push(element);
    } else {
        odd.push(element);
    }
}

console.log("even => ", even);
console.log("odd => ", odd);     

let fruits = ["apple", "banana", "mango"] ;

// fruits.forEach(show);
// fruits.forEach(caps);
fruits.forEach(camelCase);

function show(element) {
    console.log(element);
};

function caps(element, index, array) {
    array[index] = element.toUpperCase();
}

function camelCase(element, index, array) {
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}

console.log(fruits);