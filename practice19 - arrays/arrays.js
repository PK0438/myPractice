// array = a variable like structure that can hold more than 1 value

let fruits = ["apple", "banana", "mango"]

console.log(fruits);
console.log("0th index value => ", fruits[0]);
console.log("1st index value => ", fruits[1]);

fruits[0] = 'orange';

console.log(fruits);
console.log("0th index value => ", fruits[0]);

fruits[3] = 'melon'
console.log(fruits);
console.log("0th index value => ", fruits[3]);

let lengthOfFruits = fruits.length;
console.log(lengthOfFruits);

let index = fruits.indexOf("mango");  
console.log(index)

let indexChk = fruits.indexOf("cherry");  
console.log(indexChk)

for(let i = 0; i < fruits.length; i++) {
    console.log(`Fruit at index ${i} is ${fruits[i]}`)
}


console.log("Reverse order => ")

for(let i = fruits.length-1; i >= 0; i--) {
    console.log(`Fruit at index ${i} is ${fruits[i]}`)
}


console.log(fruits)

fruits.sort().reverse();

for(let fruit of fruits) {
    console.log(fruit)
}

