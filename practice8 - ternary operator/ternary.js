const ageInput = document.getElementById("age");
const check = document.getElementById("check");
const result = document.getElementById("result");

// check.onclick = function(event) {
//     const age = Number(ageInput.value);
//     result.innerHTML = age >= 18 ? "You are eligible to vote." : "You are not eligible to vote.";
// }

// let time = 14;
// result.innerHTML = time < 12 ? "Good Morning!" : "Good Afternoon!";

// let isEmployee = true;
// result.innerHTML = isEmployee ? "Open the door." : "Do not open the door.";

let purchaseAmount = 200;
let discount = purchaseAmount > 99 && purchaseAmount < 199 ? 10 : purchaseAmount >= 200 ? 15 : 0;
let total = purchaseAmount - purchaseAmount * (discount / 100);
result.textContent = `Your total purchase amount is $${total}. You received a discount of ${discount}%.`;