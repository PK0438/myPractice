/* 
function = a block of code that performs a specific task
// Function is used to encapsulate code that can be reused multiple times
// Function is used to avoid code duplication
// Function is used to make code more organized and easier to read 
// Function is defined using the function keyword, followed by a name, parentheses, and a block of code
// Function can take parameters, which are values passed to the function when it is called
// Function can return a value, which is the result of the function's execution
// Function can be called multiple times with different arguments
// Function can be defined using function declaration or function expression
// Function declaration is a named function that can be called before it is defined
// Function expression is an anonymous function that is assigned to a variable and can only be called after it is defined
*/

function happyBirthday(name, age) {
    console.log(`Happy Birthday, ${name}!`);
    console.log(`You are ${age} years old now!`);
}       

happyBirthday("Tony", 32);
happyBirthday("Pablo", 25);

let answer = add(2, 10);

function add (x, y) {
    let result = x + y ;
    return console.log(result);
}


function isEven(num) {

    num % 2 === 0 ? console.log("even") : console.log("odd"); // This will return true if num is even, false if odd
    // if (num % 2 === 0) {
    //     return true;
    // } else {
    //     return false;
    // }
} 

isEven(10);
isEven(11);


function isValidEmail(email) {
   return email.includes("@") ? true : false;
}

console.log(isValidEmail("kmar@fadsa.com"));


// variable scope =  the visibility of a variable in a program
// variable scope is determined by where the variable is declared   
// variable scope can be global or local
// global variable = a variable that is declared outside of any function and can be accessed from anywhere
// local variable = a variable that is declared inside a function and can only be accessed from within that function



let x = 3; // Global variable

check1();


function check1() {
    // let x = 1; // Local variable
    console.log(x);
}

function check2() {
    let x = 2; // Local variable
    console.log(x);


}