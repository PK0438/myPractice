// while loop
// while loop is used to repeat a block of code as long as a specified condition is true
// while loop is used to repeat a block of code until a specified condition is false
// while loop is useful when the number of iterations is not known beforehand

// let userName = "";

// while (userName == "" || userName == null) 
//     {
//         userName = prompt("Please enter your username:");
// }

// console.log(`Welcome, ${userName}!`);



// do-while loop is similar to while loop, but it guarantees that the block of code will be executed at least once before checking the condition
// do-while loop is used to repeat a block of code at least once and then continue
// let operatorName;

// do{
//     operatorName = prompt("Please enter your operator name:");
// } while(operatorName == "" || operatorName == null);

// console.log(`Welcome, ${operatorName}!`);


let loggedin = false;
let username;
let password;

do {
 username = window.prompt("Please enter your username:");
 password = window.prompt("Please enter your password:"); 

if(username === "Tony" && password === "1234") {
    loggedin = true;
    console.log(`Welcome, ${username}! You are now logged in.`);
} else {
    console.log("Invalid username or password. Please try again.");
}

} while(!loggedin)
