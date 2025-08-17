const userDetails = {
    name: "Alice",
    age: 30
};

const message = "Welcome to the revised HTML page!";
const today = new Date();

let timeGreet = "";
if (today.getHours() < 12) {
    timeGreet = "Good Morning";
} else if (today.getHours() < 18) {
    timeGreet = "Good Afternoon";
} else {
    timeGreet = "Good Evening";
}

document.getElementById("myHeading").innerText = `Hello, ${userDetails.name}, ${timeGreet}!`
document.getElementById("myPara").innerText = message;


//  Multiplication Table Example
// let n = Number(window.prompt('Enter a number: '));
for (let i = 1; i <= 10; i++) {
    // console.log(`${n} * ${i} = ${n * i}`);
}

//
console.log(5 ** 2) // 25   
console.log(9 / 3) // 3
console.log(10 % 3) // 1
let n = 10
console.log(n += 23)

//
let favSport;
// favSport = window.prompt("Enter your favorite sport: ");
console.log(favSport);

//

function printInput() {
    let input = document.getElementById("myInput").value;
    console.log(`Hello, ${input}!   `);
    console.log(typeof input);
    console.log(typeof Number(input)); // Converts input to a number, if possible
}

// 
let x = "0";

x =  Boolean(x); // Converts string to number, if possible
console.log(x);

//circumference of circle

const PI = 3.14159;
let radius;
let circumference;

// radius = window.prompt("Enter the radius of the circle: ");
if (radius !== null && radius !== "") {
    radius = Number(radius);
    circumference = 2 * PI * radius;
    console.log(`The circumference of the circle with radius ${radius} is ${circumference}.`);
}

//counter
let count = 0;

let counterDisplay = document.getElementById("counterDisplay");

function incrementCounter() {
    count++;
    counterDisplay.innerText = count;
}

function decrementCounter() {
    count--;
    counterDisplay.innerText = count;
}

function resetCounter() {
    count = 0;
    counterDisplay.innerText = count;
}

//Math

console.log(Math.PI);
console.log(Math.sqrt(16)); // 4
console.log(Math.pow(2, 3)); // 8
console.log(Math.floor(4.4))
console.log(Math.ceil(4.1)); 
console.log(Math.round(4.3)); 
console.log(Math.round(4.5)); 
console.log(Math.round(4.7)); 
console.log(Math.trunc(4.9)); // 4
console.log(Math.random()); // Random number between 0 and 1
console.log(Math.log(10)); // Natural logarithm of 10
console.log(Math.sin(0));
console.log(Math.cos(0));
console.log(Math.tan(0));
console.log(Math.abs(-18));

console.log(Math.sign(-1.343))
console.log(Math.sign(1.343))
console.log(Math.sign(0))

console.log(Math.min(10, -26, 23, 0, 15));
console.log(Math.max(10, -26, 23, 0, 15));

//random number generation

function generateRandomNumber() {
    let randomNumber = (Math.floor(Math.random() * 100) + 1);
    document.getElementById("displayNum").textContent = randomNumber;
}


//unique random number generation
let generatedNumbers = new Set();

function generateUniqueRandomNumber() {
    if (generatedNumbers.size === 10) {
        document.getElementById("displayNum").textContent = "All numbers generated: " + Array.from(generatedNumbers).join(", ");
        return;
    }
    let randomNumber;
    do {
        randomNumber = Math.floor(Math.random() * 10) + 1;
    } while (generatedNumbers.has(randomNumber));
    generatedNumbers.add(randomNumber);
    document.getElementById("displayNum").textContent = randomNumber;
}

//nullish coalescing operator
function printMarks(marks) {
    const print = marks ?? "absent";
    console.log(`Marks: ${print}`);
}

printMarks(0); // Outputs: Marks: 0
printMarks(null); // Outputs: Marks: absent 
printMarks(undefined); // Outputs: Marks: absent


//switch
let day = 9;

switch(day) {
    case 1: 
        console.log("Monday");
        break;
    case 2: 
        console.log("Tuesday");
        break;
    case 3: 
        console.log("Wednesday");
        break;
    case 4: 
        console.log("Thursday");
        break;
    case 5: 
        console.log("Friday");
        break;
    case 6: 
        console.log("Saturday");
        break;
    case 7: 
        console.log("Sunday");
        break;
    default: 
        console.log("Invalid entry");
        break;
}