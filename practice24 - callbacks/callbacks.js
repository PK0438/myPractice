// callback = a function that is passed as an argument to another function. 

/*
    Used to handle asynchronous operations:
    1. Reading a file
    2. Network requests
    3. Interacting with databases. 

    "Hey, when you're done, call this next! "
*/

hello(wait);

function hello(callback) {
    console.log("Hello!");
    console.log(callback)
    callback()
}

function goodMorning() {
    console.log("Good Morning. ")
}

function wait() {
    console.log("wait");
}

function goodBye() {
console.log("goodbye!")
}

// Call the sum function with displayConsole as the callback and 8, 2 as arguments
sum(displayConsole, 8, 2)

sum(displayPage, 5, 2)

// sum takes a callback function and two numbers, adds the numbers, and passes the result to the callback
function sum(callback, x, y) {
    let result = x + y;
    callback(result);
}

// displayConsole logs the result to the console
function displayConsole(param) {
    console.log(param)
}

function displayPage(param) {
    document.getElementById("myH1").textContent = param; 
}