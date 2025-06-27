// for loop - for loop is used to repeat a block of code a specified number of times
// for loop is used when the number of iterations is known beforehand

// for (let i = 0; i<5; i++) {
//     console.log(`Iteration ${i}`);
// }

// for (let i  = 0; i < 5; i++) {
//     for(let j = 0; j <= i; j++){
//         console.log(`i${i} , j${j}`);
//     }
// }

// for(let i = 0; i < 20; i++) {
//     let output = "";   
//     for(let j = 1; j <= i; j++) {
//         output += "*";
//     }
//     console.log(output);

// }


// for(let i = 20; i > 0; i--) {
//     let output = "";   
//     for(let j = 1; j <= i; j++) {
//         output += "*";
//     }
//     console.log(output);

// }

// let date = new Date();
// console.log(`Current Date: ${date}`);
// console.log(date.getSeconds());

// let greet = document.getElementById("greetings");
// greet.innerHTML = date.getSeconds();

// if(date.getHours() < 12) {
//     greet.innerHTML = "Good Morning!";
// }

// console.log("Skipping iteration 5");
// for (let i = 0; i < 10; i++){
//     if (i === 5) {

//         continue; // Skip the rest of the loop when i is 5
//     }
//     console.log(`Iteration ${i}`);
// }

// console.log("Breaking the loop at iteration 5");
// for (let i = 0; i < 10; i++){
//     if (i === 5) {

//        break; // break the rest of the loop when i is 5
//     }
//     console.log(`Iteration ${i}`);
// }