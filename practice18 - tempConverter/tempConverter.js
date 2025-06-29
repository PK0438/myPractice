//Temperature Conversion program

const input = document.getElementById("tempInput");
const toFahrenheit = document.getElementById("cToF");
const toCelcius = document.getElementById("fToC");
const result = document.getElementById("result");
let temp;


function convert(event) {
    if (event) event.preventDefault(); // Prevent form submission if used in a form

    if (toFahrenheit.checked) {
        temp = parseFloat(input.value);
        if (isNaN(temp)) {
            result.textContent = "Enter a valid number";
            return;
        }
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "°F";
    } else if (toCelcius.checked) {
        temp = parseFloat(input.value);
        if (isNaN(temp)) {
            result.textContent = "Enter a valid number";
            return;
        }
        temp = (temp - 32) * 5 / 9;
        result.textContent = temp.toFixed(1) + "°C";
    } else {
        result.textContent = "Select a unit";
    }
}