//Number Guessing Game

const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() *(maxNum - minNum +1) + minNum);

console.log("Answer ->", answer);

let attempts = 0;
let guess;
let running = true;

while(running) {
    // TODO: uncomment the line below
    // guess = parseInt(prompt(`Guess a number between ${minNum} and ${maxNum}:`));

if(isNaN(guess)) {
     window.alert("Invalid input! Please enter a valid number!")
    } else if( guess <minNum || guess > maxNum) {
        window.alert(`Please enter a number between ${minNum} and ${maxNum}.`);
    } else {
        attempts++;
        if (guess > answer) {
            window.alert("Too high! Try again.");
        } else if (guess < answer) {
            window.alert("Too low! Try again.");
        } else {
            window.alert(`Congratulations! You guessed the number ${answer} in ${attempts} attempts.`);
            running = false; // End the game when the correct guess is made
        }
    }
    
}