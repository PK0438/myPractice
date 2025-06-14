// console.log("Hello, World!");

// function alertMsg(txt) {
//     alert(txt);
// }
// alertMsg("This is an alert message from the script.js file!");

// function promptMsg(txt) {
//   const userInput =  prompt(txt);
//     console.log(userInput);

// }
// promptMsg("How old are you?");

// function confirmMsg(txt) {
//   const userConfirmation = confirm(txt);
//   if (userConfirmation) {
//     console.log("User confirmed the action.");
//   } else {
//     console.log("User canceled the action.");
//   }
// }
// confirmMsg("Do you want to proceed with the action?");

// function printNum(){
//     console.log(Math.random().toFixed(1)*100);
// }
// window.alert(`I like food!`);

// function checkUser() {
//     const userName = prompt("Please enter your name:");
//     if (userName) {
//        document.getElementById("myH1").innerHTML = `Hello, ${userName}!`;
//        document.getElementById("myP").innerHTML = `Welcome to the site, ${userName}!`;
//     } else {
//         document.getElementById("myH1").innerHTML = "User not found!";
//         document.getElementById("myP").innerHTML = "Please enter a valid name.";
//     }
// }

// checkUser();

//         document.getElementById("myH1").innerHTML = "Hello";
//         document.getElementById("myP").innerHTML = "How are you?";

// let fullName = "Vicky";
// let age = 6;
// let isStudent = true;

// document.getElementById("p1").textContent = `Your name is ${fullName}`;
// document.getElementById("p2").textContent = `You are ${age} years old`;
// document.getElementById("p3").textContent = `Enrolled: ${isStudent}`;


// let students = 30;
// students = students + 1; 
// students = students - 1;
// students = students * 2;
// students = students /2;
// students = students ** 3; // Exponentiation operator
// students = students % 2; // Modulus operator    

// students += 1;
// students -= 1;
// students *= 2;
// students /= 2;
// students **= 3; // Exponentiation operator
// students %= 2; // Modulus operator

// students++; // Increment operator
// students--; // Decrement operator


// console.log(students);

        /* 

        Operator precedence:
        1. Parentheses ()
        2. Exponentiation (**)
        3. Multiplication (*), Division (/), Modulus (%)
        4. Addition (+), Subtraction (-)

        */

// let result  = 6 / 2 ** 7;
// console.log(result); // Output: 0.046875

// let userName;

// userName = window.prompt("Please enter your name:");
// console.log(userName);

// document.getElementById("p1").textContent = `Your name is ${userName}`;

// let userName;

// document.getElementById("myButton").onclick = function() {
//     userName = document.getElementById("myInput").value;
//     console.log(userName);
//     document.getElementById("greeting").textContent = `Hello, ${userName}! Welcome to our site!`;
// }


// // Step 1: Get a reference to the text box element
// const myTextBox = document.getElementById('myInput');

// myTextBox.addEventListener('input', (e) => {
// const userInput = e.target.value;
// console.log("User input:", userInput);
// })


// myTextBox.addEventListener('keyup', (e) => {
//     const currentText = e.target.value;    
//     console.log("Keyup event - Current text:", currentText);
// })


// let idNum = "234332";
// console.log(Number()); 

// let age = window.prompt("How old are you?");
// console.log(typeof(age)); 
// age = Number(age);
// age += 1;
// console.log(age);

// let a =  "red";

// console.log(Number(a)); // NaN (Not a Number)
// console.log(Boolean(a)); // true (non-empty string is truthy)   
// console.log(String(a)); // "red" (string remains unchanged)

// let x = "Pizza";
// let y = "Pasta";
// let z = "Burger";

// x= Number(x); // NaN (Not a Number)
// y= Boolean(y); // true (non-empty string is truthy)
// z= String(z); // "Burger" (string remains unchanged)

// console.log(x, typeof x); // NaN
// console.log(y, typeof y); // true     
// console.log(z, typeof z); // "Burger"

const PI = 3.14;
let radius;
let circumference;

// radius =  window.prompt("Enter the radius of the circle:");
document.getElementById("myButton").onclick = function circumferenceOfCircle() {
    let radius = document.getElementById("myText").value;
    if (radius !== null && radius !== "") {
        radius = Number(radius);
        if (!isNaN(radius) && radius > 0) {
            circumference = 2 * PI * radius;
            document.getElementById("myh3").textContent = `The circumference of the circle with radius ${radius} is ${circumference.toFixed(2)} cm.`;
        } else {
            document.getElementById("myh3").textContent = "Please enter a valid positive number for the radius.";
        }
    }
};


document.getElementById("clearBtn").onclick = function clearInput() {
    document.getElementById("myText").value = "";
    console.log("Input cleared.");
}