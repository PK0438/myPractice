
// document.getElementById("generate").onclick = function () {
//     let num = Math.floor(Math.random() * 6) + 1;
//     let dice = document.getElementById("dice");
//     dice.innerHTML = ""; // Clear previous dots 
//     for (let i = 0; i < num; i++) {
//         let dot = document.createElement("div");
//         dot.className = "dice-dot";
//         // Calculate position based on the number rolled
//         let row = Math.floor(i / 3) + 1;
//         let col = (i % 3) + 1;
//         dot.style.gridRow = row;
//         dot.style.gridColumn = col;
//         dice.appendChild(dot);
//     }
// }\

const btn = document.getElementById("generate");
const myLabel1 = document.getElementById("label1");
const myLabel2 = document.getElementById("label2");
const myLabel3 = document.getElementById("label3");
const min = 1;
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;

btn.onclick = function () {
    randomNum1 = Math.floor(Math.random() * (max - min + 1)) + min;
    randomNum2 = Math.floor(Math.random() * (max - min + 1)) + min;
    randomNum3 = Math.floor(Math.random() * (max - min + 1)) + min;
    myLabel1.innerHTML = "Tony rolled a " + randomNum1;
    myLabel2.innerHTML = "Mary rolled a " + randomNum2;
    myLabel3.innerHTML = "Yani rolled a " + randomNum3;
}