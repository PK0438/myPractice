// rest operator = (...rest) allow a function work with a variable number of arguments by bundling them into an array

// spread = expands an array into seperate elements 
// rest   = bundles seperate elements into an array.

function openFridge(...foods) {  //used rest operator to combine all the elements below
    console.log(foods)

    console.log( "spread operator => ", ...foods)  //used spread operator to unpack each element of the array. 

}

function getFood(...foods) {
    return foods; 
}

const food1 = "Biryani";
const food2 = "Maggy";
const food3 = "Sushi";
const food4 = "Shawarma";
const food5 = "Sandwich";

openFridge(food1, food2, food3, food4, food5);

const foods = getFood(food1, food2, food3, food4, food5);

console.log(foods);


/*
avaScript differentiates between the rest operator and the spread operator based on where the ... is used:

Rest Operator (...)
Used in function parameter lists
Collects multiple arguments into a single array

Spread Operator (...)
Used in function calls, array literals, or object literals
Expands an array or object into individual elements
*/


//calculating sum
function sum(...numbers) {
    
    let result = 0;

    for (let number of numbers) {
        result += number;
    }
    
    return result;
};

const total = sum(1,2)
console.log(`Your total is $${total}`);


//calculating avarage
function avg(...numbers) {
    
    let result = 0;
    let avgResult;

    for (let number of numbers) {
        result += number;
    }
    
    avgResult = result/numbers.length;

    return avgResult;
};

const avarage = avg(75, 85,60, 73, 92)

console.log(`Your avarage is ${avarage}`)


//combining strings

function combineStrings(...names) {
    console.log(...names)
    console.log(names.join(" "));
}

const fullName = combineStrings( "Mr.", "Mahendra", "Singh", "Dhoni");
