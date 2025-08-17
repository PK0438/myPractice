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
favSport = window.prompt("Enter your favorite sport: ");
console.log(favSport);