// Logical Operators - Used to combine multiple boolean expressions (true or false)
// AND (&&) - Returns true if both operands are true
// OR (||) - Returns true if at least one operand is true  
// NOT (!) - Returns true if the operand is false, and vice versa

const temp = -300;

// if (temp > 0 && temp <= 30) {
//     console.log("The weather is GOOD");
// } else {
//     console.log("The weather is BAD");
// }

if (temp <= 0 || temp > 30) {
    console.log("The weather is BAD");
} else {
    console.log("The weather is GOOD");
}


const isSunny = false;

if(!isSunny) {
    console.log("It's not sunny, you should take an umbrella.");
} else {
    console.log("It's sunny, you can leave the umbrella at home.");
}