
const submitBtn = document.getElementById("submitBtn");

if (submitBtn) {
    submitBtn.onclick = function(event) {
        event.preventDefault();
        const fName = document.getElementById("fname");
        const lName = document.getElementById("lname");
        const email = document.getElementById("email");
        const phone = document.getElementById("phone");
        const address = document.getElementById("address");
        const visa = document.getElementById("visa");
        const masterCard = document.getElementById("mastercard");
        const discover = document.getElementById("discover");
        const paypal = document.getElementById("paypal");
        const terms = document.getElementById("terms");

        const user = {
            firstName: fName?.value ?? "",
            lastName: lName?.value ?? "",
            email: email?.value ?? "",
            phone: phone?.value ?? "",
            address: address?.value ?? "",
            paymentMethods: {
                visa: visa?.checked ?? false,
                masterCard: masterCard?.checked ?? false,
                discover: discover?.checked ?? false,
                paypal: paypal?.checked ?? false
            },
            termsAccepted: terms?.checked ?? false
        };

        console.log(user);
    }
}