//     =  Assignment operator
//    ==  Comparison Operator (compare if two values are equal)
//    === Strict Equality Operator (compare if two values are equal and of the same type)
//    !== Strict Inequality Operator (compare if two values are not equal or not of the same type)
//    !=  Inequality Operator (compare if two values are not equal)


const PI = 3.14;

// if( PI == "3.14" ) {
//     console.log("That is PI");
// } else {
//     console.log("That is NOT PI");
// }

// if( PI === "3.14" ) { //a number cannot be equal to a string when strictly compared
//     // This will not execute because PI is a number and "3.14" is a string
//     // Strict equality checks both value and type
//     console.log("That is PI");
// } else {
//     console.log("That is NOT PI");
// }

// if( PI != "3.14" ) {
//     console.log("That is NOT PI");
// } else {
//     console.log("That is PI");
// }

if( PI !== "3.14" ) {
    console.log("That is NOT PI");
} else {
    console.log("That is PI");
}