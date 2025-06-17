const termsCheckbox = document.getElementById("terms");
const visaBtn = document.getElementById("visaBtn");
const masterCartbtn = document.getElementById("masterCartbtn");
const paypalBtn = document.getElementById("paypalBtn");
const submitBtn = document.getElementById("submitBtn");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");


submitBtn.onclick = function (e) {
    e.preventDefault();
    if (termsCheckbox.checked) {
        subResult.textContent = "You have agreed to the terms and conditions.";
    } else {
        subResult.textContent = "You must agree to the terms and conditions.";
    }

    if (visaBtn.checked) {
        paymentResult.textContent = "You have selected Visa payment method."
    } else if (masterCartbtn.checked) {
        paymentResult.textContent = "You have selected Master Card payment method."
    } else if (paypalBtn.checked) {
        paymentResult.textContent = "You have selected Paypal payment method."
    } else {
        paymentResult.textContent = "You must select a payment method.";
    }

}


