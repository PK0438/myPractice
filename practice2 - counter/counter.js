
let count  = document.getElementById("counter").textContent;

count = 0;

const decrementBtn = document.getElementById("decrement");
const incrementBtn = document.getElementById("increment");
const counterDisplay = document.getElementById("counter");
const resetBtn = document.getElementById("reset");

decrementBtn.onclick = function() {
    count--;
    counterDisplay.textContent = count;
}

incrementBtn.onclick = function() {
    count++;
    counterDisplay.textContent = count;
};

resetBtn.onclick = function() {
    count = 0;
    counterDisplay.textContent = count;
};