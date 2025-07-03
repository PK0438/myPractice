/* 
        .map() = accepts a callback and applies that function to each element of an array, then
                returns a new array.
*/

const numbers = [1, 2, 3, 4, 5];

const squaresArray = numbers.map(squares);
const cubesArray = numbers.map(cubes);

console.log(squaresArray);
console.log(cubesArray);

function squares(element) {
    return Math.pow(element, 2);
}

function cubes(element) {
    return Math.pow(element, 3);
}

const students = ["nICky", "vicKy", "Jay"]

const lowerCaseStudents = students.map(lowerCase);
const upperCaseStudents = students.map(upperCase);
const camelCaseStudents = students.map(camelCase);

console.log(lowerCaseStudents);
console.log(upperCaseStudents);
console.log(camelCaseStudents);

function lowerCase(element) {
    return element.toLowerCase();
}

function upperCase(element) {
    return element.toUpperCase();
}

function camelCase(element) {
    return element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
}

const dates = ["1993-3-29", "1992-9-19", "2019-1-3", "2023-3-13 "]

const formatted = dates.map(formatDates);

console.log(formatted);

function formatDates(element){
    const parts = element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}}`;
}