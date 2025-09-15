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
let m = 10
console.log(m += 23)

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
let x = ""; // Use empty string to demonstrate falsy value

x = Boolean(x); // Converts to boolean, empty string is falsy
console.log(x); // Output: false

let y = 0; // Use number 0 to demonstrate falsy value
console.log(Boolean(y)); // Output: false

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

  //
  let phoneNumber = "123-456-7890";
  phoneNumber = phoneNumber.replaceAll("-", "");
  console.log(phoneNumber);

  areaCode = phoneNumber.slice(0, 3);
  console.log(areaCode);

  //
//   let userName = window.prompt("Enter your name: ");

//   userName = userName.trim().charAt(0).toUpperCase() + userName.trim().slice(1).toLowerCase();
//     console.log(userName);


//??

function greetName(name) {
    const greeting = name || 'Guest';
    console.log(`Hello, ${greeting}!`);
}

greetName("Alice"); 
greetName("");
greetName(null);
greetName(undefined);


function showMarks(marks) {
    const message = marks ?? 'absent';
    console.log(`Marks: ${message}`)
}

showMarks(90);
showMarks(0);
showMarks(null);
showMarks(undefined);   

//
// let userNum = window.prompt("Enter a number: ");
console.log(typeof userNum); // Check the type of userNum
// if (userNum !== null && userNum !== "") {
//     // userNum = Number(userNum);
//     if (isNaN(userNum)) {
//         console.log("Invalid input. Please enter a valid number.");
//     } else {
//         if (userNum % 2 === 0) {
//             console.log(`${userNum} is even.`);
//         } else {
//             console.log(`${userNum} is odd.`);
//         }
//     }
// }

//

let userName;

do {
    // userName = window.prompt("Enter your name: ");   
} while (userName === "" || userName === null) ;

console.log(`Hello ${userName}!`);

//
// let loggedIn = false;
// let username;
// let password;

// while (!loggedIn) {
//     username = window.prompt("Enter your username: ");
//     password = window.prompt("Enter your password: ");

//     if (username === 'myUsername' && password === 'myPassword') {
//         loggedIn = true;
//         console.log("You are logged in!");
//     } else {
//         console.log("Invalid credentials. Please try again.");
//     }
// }

//

let evenArray = [];
for(let i = 1; i <= 15; i++) {
    if (i % 2 === 0) {
        console.log(`${i} is even.`);
        evenArray.push(i);
    }
}
console.log("Even numbers:", evenArray);

//

let sum = 0;
const N = 20; 
for (let i = 1; i <= N; i++) {
    sum += i;
}
console.log(`The sume of the first ${N} natural numbers is ${sum}.`);

//
let fruits = ['Apple', 'Banana', 'Cherry', 'Date'];

for(let fruit of fruits) {
    fruit = fruit.charAt(0).toLowerCase() + fruit.slice(1).toUpperCase();
    console.log(fruit);
}

//

let num = 15;
for(let i = 1; i <= 10; i++) {
    console.log(`${num} X ${i} = ${num * i}`);
}

//

for (let i = 1; i <= num; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "*";
    }
    console.log(row);
}

//
for (let i = num; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "*";
    }
    console.log(row);
}

//
let arr = [1,2,3,4];
for (let i = 0; i < arr.length; i++) {
    arr.pop(); // ❌ may skip elements or behave unexpectedly
}
 console.log(arr); // []

//
for (let i = 1; i <= 5; i++) {
    if(i ===2) continue;
    console.log(i);
}

//

for(let i = 1; i <= 5; i ++) {
    console.log("*".repeat(i));
}

for(let i = 5; i >= 1; i--) {
    console.log("$".repeat(i));
}

for(let i = 1; i <= 5; i++) {
    console.log("#".repeat(i).padStart(5));
}

for(let i = 5; i >= 1; i--) {
    console.log("@".repeat(i).padStart(5));
}

for(let i = 1; i <= 5; i++) {
    console.log("#".repeat(i).padEnd(5));
}

for(let i = 5; i >= 1; i--) {
    console.log("@".repeat(i).padEnd(5));
}

for(let i = 1; i <= 5; i++) {
    console.log(" ".repeat(5 - i) + "* ".repeat(i));
}

for(let i = 5; i >= 1; i--) {
    console.log(" ".repeat(5 - i) + "$ ".repeat(i));
}

//

let minNum = 1;
let maxNum = 100;
let randomNum = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
console.log("Random Number (for testing): ", randomNum);

let attempts = 0;
let guess;
let running = true;

// while(running) {
     
//     guess = window.prompt(`Guess a number between ${minNum} and ${maxNum}:`)
//     guess = Number(guess);

//     if(isNaN(guess)) {
//         window.alert("Please enter a valid number.");
//     } else if (guess <minNum || guess > maxNum) {
//         window.alert(`Please enter a number between ${minNum} and ${maxNum}.`);
//     } else {
//         attempts++;
//         if(guess === randomNum) {
//             window.alert('Congratulations! You guessed the number in ' + attempts + ' attempts.');
//             running = false;
//         } else if(guess < randomNum) {
//             window.alert("Too low! Try again.");
//         } else {
//             window.alert("Too high! Try again.");
//         }
//     }

// }

//
let nums = [34, 67, 23, 89, 2, 45, 90];
console.log("Max => ", Math.max(...nums));
console.log("Min => ", Math.min(...nums));

//
let animals = ['cat', 'dog', 'elephant', 'bee', 'ant'];

animals = ['horse', ...animals, 'zebra'];
console.log(animals.sort());

//
function avarageOfNums(a, b, c) {
    return (a + b + c) / 3;
}

let scores = [90, 85, 88];
console.log("Avarage Score => ", avarageOfNums(...scores));

//rest operator

function printFoods(...foods){
    console.log("Foods: ", foods);
    console.log("Foods: ", ...foods);
}

let food1 = "Pizza";
let food2 = "Burger";   
let food3 = "Pasta";

printFoods(food1, food2, food3);

//
let a = 25;
let b = 20;

// Swap without using a temporary variable
a = a + b;
b = a - b;
a = a - b;

console.log("a => ", a);
console.log("b => ", b);

//
let lang = "python"
console.log(lang[1]);

//spread operator

let numbers = [1,2,3,4,5];
let newNumbers = [...numbers, 6, 7, 8]

let maxNumber = Math.max(...newNumbers);
console.log("Max Number => ", maxNumber);

//
let pLang = "javascript";
let charArray = [...pLang].join("-");
console.log(charArray);

//rest operator

function openFridge(...foods) {
    console.log(...foods);
}

let food_1 = 'Milk';
let food_2 = 'Eggs';
let food_3 = 'Butter';
openFridge(food_1, food_2, food_3, "rice");

//
function sumAll(...numbers) {
    let result = 0;
    for(let number of numbers) {
        result += number;
    }
    return result;
}

let total = sumAll(1,2,3,4,5);
console.log("Total => ", total);

total = sumAll(10,20,30);
console.log("Total => ", total);    