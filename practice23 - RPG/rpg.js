// RANDOM PASSWORD GENERATOR

    const generatedPw = document.getElementById("pwd");
    const generateButton = document.getElementById("generateBtn");

function generatePassword (length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
    
    // Define all possible characters for each category
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$*_-?+=/|\\.,~%^"

    // Initialize variables for building the password
    let allowedChars = "";
    let password = "";

    // Build the 'allowedChars' string based on user choices (booleans)
    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    // Input Validation - Check for invalid length or no character sets
    if(length <= 0) {                                                   // If the requested length is 0 or less
        return `(password length must be at least 1)`                   // Stop and return an error message
    }
    if(allowedChars.length === 0) {                                     // If no character types were selected
        return `(At least 1 set of characters needs to be selected)`    // Stop and return an error message
    }

    // Generate the password character by character using a loop
    for(let i = 0; i < length; i++) {                                           // Loop 'length' number of times
        const randomIndex = Math.floor(Math.random() * allowedChars.length);    // Randomly pick an index from the 'allowedChars' string
        password += allowedChars[randomIndex];                                  // Add the character at that random index to our 'password' string
    }
    
    generatedPw.textContent = password; // Display the generated password in the HTML element

    return password;            //Return the generated password string
}

// Define the options (inputs) for the password generation
const passwordLength = 15;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

generateButton.addEventListener('click', () => {                // Add a click listener
    const password = generatePassword(                          // Call the function with your defined options
        passwordLength,
        includeLowercase,
        includeUppercase,
        includeNumbers,
        includeSymbols
    );
    
    // You can also log here if you want to see it in the console on button click
    console.log(`Generated password: ${password}`);
});
