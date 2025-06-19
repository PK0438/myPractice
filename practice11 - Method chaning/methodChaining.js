// Method chaining is a technique in JavaScript that allows you to call multiple methods on an object in a single statement. This is possible because many methods return the object itself, allowing you to chain further method calls.

let userName = window.prompt("Enter your name: ");

//---- No Method Chaining ----

userName = userName.trim(); // Removes whitespace from both ends of a string.
let letter = userName.charAt(0); // Returns the character at the specified index. If the index is out of range, it returns an empty string.
letter = letter.toUpperCase(); // Converts the string to lowercase.

let extraChars = userName.slice(1); // Extracts a section of a string and returns it as a new string. The original string is not modified. The first argument is the starting index, and the second argument is the ending index (not included).
extraChars = extraChars.toLowerCase(); // Converts the string to lowercase.

userName = letter + extraChars; // Combines the first letter with the rest of the string.


// console.log(userName) 


//---- Method Chaining ----

userName = userName.trim().charAt(0).toUpperCase() + userName.slice(1).toLowerCase();


console.log(userName) 