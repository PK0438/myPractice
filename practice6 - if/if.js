const form = document.querySelector("form");
const ageInput = document.getElementById("userAge");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let result = "";
  const resultElement = document.getElementById("eligabilityCheck");
  const ageValue = parseInt(ageInput.value, 10);
  console.log(ageValue);
  // Retrieve the license input value (assuming radio buttons with name="license")
  const licenseValue = document.querySelector('input[name="license"]:checked');
  if (ageValue < 0 || isNaN(ageValue)) {
    result = "Please enter a valid age.";
  } else if (ageValue < 16) {
    result = "You are too young to drive.";
  } else if (ageValue < 100 && ageValue >= 16) {
    if (licenseValue && licenseValue.value === "yes") {
      result = "You are eligible to drive.";
    } else {
      result = "You are not eligible to drive.";
    }
  } else if (ageValue >= 100) {
    result = "You are too old to drive.";
  }
  
  if (resultElement) {
    resultElement.innerHTML = result;
  } else {
    console.error('Element with id "eligibilityCheck" not found.');
  }
});


