// string methods = A collection of methods that can be used to manipulate strings in JavaScript.

let userName = "   Pramod Kumar";

console.log(userName);

console.log("charAt => ", userName.charAt(10)); // Returns the character at the specified index. If the index is out of range, it returns an empty string.

console.log("indexOf => ", userName.indexOf("m")); // Returns the index of the first occurrence of a specified value in a string. If not found, it returns -1.

console.log("lastIndexOf => ", userName.lastIndexOf("m")); // Returns the index of the last occurrence of a specified value in a string. If not found, it returns -1.

console.log("length => ", userName.length); // Returns the length of the string.

console.log("trim => ", userName.trim()); // Removes whitespace from both ends of a string.

console.log("toLowerCase => ", userName.toLowerCase()); // Converts the string to lowercase.

console.log("toUpperCase => ", userName.toUpperCase()); // Converts the string to uppercase.

console.log("repeat => ", userName.repeat(3)); // Returns a new string with a specified number of copies of the string.

console.log("startsWith => ", userName.startsWith("P")); // Checks if the string starts with a specified value. Returns true or false. the above string starts with white spaces, so it returns false.

console.log("endsWith => ", userName.endsWith("r")); // Checks if the string ends with a specified value. Returns true or false.

console.log("includes => ", userName.includes("q")); // Checks if the string contains a specified value. Returns true or false.

console.log("replaceAll => ", userName.replaceAll("m", "M")); // Replaces all occurrences of a specified value in a string with another value.

console.log("padStart => ", userName.padStart(20, "0")); // Pads the current string with another string (the second argument) until the resulting string reaches a given length (the first argument). The padding is applied at the start of the current string.

console.log("padEnd => ", userName.padEnd(20, "0")); // Pads the current string with another string (the second argument) until the resulting string reaches a given length (the first argument). The padding is applied at the end of the current string.

console.log("slice => ", userName.slice(3, 10)); // Extracts a section of a string and returns it as a new string. The original string is not modified. The first argument is the starting index, and the second argument is the ending index (not included).

console.log("substring => ", userName.substring(10, 15)); // Similar to slice, but it does not accept negative indices. It extracts a section of a string and returns it as a new string.

console.log("split => ", userName.split(" ")); // Splits a string into an array of substrings.

console.log("concat => ", userName.concat(" Singh")); // Combines the text of two strings and returns a new string.

console.log("match => ", userName.match(/m/g)); // Retrieves the result of matching a string against a regular expression.

console.log("matchAll => ", [...userName.matchAll(/m/g)]); // Returns an iterator of all results matching a string against a regular expression.

console.log("search => ", userName.search("Kumar")); // Searches for a match between a regular expression and this string.

console.log("replace => ", userName.replace("m", "M")); // Replaces the first occurrence of a specified value in a string.

console.log("localeCompare => ", userName.localeCompare("Pramod Kumar")); // Compares two strings in the current locale.

console.log("normalize => ", userName.normalize()); // Returns the Unicode Normalization Form of the string.

console.log("codePointAt => ", userName.codePointAt(3)); // Returns a non-negative integer that is the Unicode code point value at the given position.

console.log("fromCharCode => ", String.fromCharCode(80, 114, 97)); // Returns a string created from the specified sequence of UTF-16 code units.

console.log("fromCodePoint => ", String.fromCodePoint(80, 114, 97)); // Returns a string created by using the specified sequence of code points.

console.log("at => ", userName.at(3)); // Returns the character at the specified index (can use negative indices).

console.log("valueOf => ", userName.valueOf()); // Returns the primitive value of a String object.

console.log("toString => ", userName.toString()); // Returns a string representing the specified object.

console.log("charCodeAt => ", userName.charCodeAt(3)); // Returns the UTF-16 code unit at the specified index.



const email = "kumar213@gmail.com";
console.log("Username => ", email.substring(0, email.indexOf("@"))); // Extracts the username from an email address.
console.log("Username => ", email.slice(0, email.indexOf("@")));