
function p1Selection() {
    document.getElementById("player1Choice").textContent = '';
    document.getElementById("player2Choice").textContent = '';
    document.getElementById("winner").textContent = '';
    const choices = ['rock', 'paper', 'scissors'];
    const p1selection =  choices[Math.floor(Math.random() * choices.length)];
    return p1selection;
}
document.getElementById("p1").onclick = function() {
    document.getElementById("player1Choice").textContent = p1Selection();
};

function p2Selection() {
    const choices = ['rock', 'paper', 'scissors'];
    const p2selection =  choices[Math.floor(Math.random() * choices.length)];
    return p2selection;
}
document.getElementById("p2").onclick = function() {
    document.getElementById("player2Choice").textContent = p2Selection();
    determineWinner();
};



function clearChoices() {
    document.getElementById("player1Choice").textContent = '';
    document.getElementById("player2Choice").textContent = '';
    document.getElementById("winner").textContent = '';
    document.getElementById("nOfGames").textContent = '';
    document.getElementById("player1Points").textContent = '';
    document.getElementById("player2Points").textContent = '';
    document.getElementById("finalWinner").textContent = '';
}


function determineWinner() {
    const p1Choice = document.getElementById("player1Choice").textContent;
    const p2Choice = document.getElementById("player2Choice").textContent;

    if (p1Choice === p2Choice) {
        document.getElementById("winner").textContent = "It's a tie!";
    } else if (
        (p1Choice === 'rock' && p2Choice === 'scissors') ||
        (p1Choice === 'paper' && p2Choice === 'rock') ||
        (p1Choice === 'scissors' && p2Choice === 'paper')
    ) {
        document.getElementById("winner").textContent = "Vicky Won!";
    } else {
        document.getElementById("winner").textContent = "Pramod Won!";
    }

}

let p1Points = 0;
let p2Points = 0;
let gamesPlayed = 0;

function updatePoints() {
    const winnerText = document.getElementById("winner").textContent;
    if (winnerText === "Vicky Won!") {
        p1Points++;
    } else if (winnerText === "Pramod Won!") {
        p2Points++;
    }
    gamesPlayed++;
    document.getElementById("player1Points").textContent = p1Points;
    document.getElementById("player2Points").textContent = p2Points;

    if (gamesPlayed === 10) {
        if (p1Points > p2Points) {
            document.getElementById("finalWinner").textContent = "Vicky is the overall winner!";
            console.log("Vicky is the overall winner!");
        } else if (p2Points > p1Points) {
            document.getElementById("finalWinner").textContent = "Pramod is the overall winner!";
            console.log("Pramod is the overall winner!");
        } else {
            document.getElementById("finalWinner").textContent = "It's an overall tie!";
            console.log("It's an overall tie!");
        }
        // Optionally reset for next round
        p1Points = 0;
        p2Points = 0;
        gamesPlayed = 0;
    }
}

// Call updatePoints after determining the winner
const originalDetermineWinner = determineWinner;
determineWinner = function() {
    originalDetermineWinner();
    updatePoints();
};

function updateGameCount() {
    const nOfGamesElem = document.getElementById("nOfGames");
    nOfGamesElem.textContent = `Round: ${gamesPlayed}`;
}

// Update determineWinner to also update the game count
const prevDetermineWinner = determineWinner;
determineWinner = function() {
    prevDetermineWinner();
    updateGameCount();
};

// Function to generate a random number between 50 and 100
// const min = 50;
// const max = 100;

// function generateRandomNum(min, max) {
// let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
// console.log(randomNum);
// }

// generateRandomNum(min, max);