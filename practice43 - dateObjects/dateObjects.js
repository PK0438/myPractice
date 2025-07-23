/*
        Date Objects = Objects that contain values that represent dates and times.
                       These date objects can be changed and formatted. 
*/

const date = new Date();
console.log("Current Date and Time: " + date);

//custom date object - pass parameters to the Date constructor
const customDate = new Date(2023, 3, 29, 10, 30, 40); // Year, Month (0-11), Day, Hours, Minutes, Seconds
console.log("Custom Date: " + customDate);

//string time
const stringTime = new Date("2025-03-13T12:25:45Z  ");
console.log("String Time: " + stringTime);

// passing milliseconds
console.log(new Date(0)) 
console.log(new Date(1700000000000))

//
const today = new Date();
console.log(today);

const year = today.getFullYear();
const month = today.getMonth() + 1; // month indexing starts  from 0
const date1 = today.getDate();
const hours = today.getHours();
const minutes = today.getMinutes();
const seconds = today.getSeconds();
const ms = today.getMilliseconds();
const dayOfWeek = today.getDay();

const setYear = today.setFullYear(1993);
const setMonth = today.setMonth(2);
const setDate = today.setDate(29); //same setHours, Setminutes, setSeconds 
 

console.log(year);
console.log(month);
console.log(date1);
console.log(hours);
console.log(minutes);
console.log(seconds);
console.log(ms);
console.log(dayOfWeek);
console.log(today);


const dateOne = new Date("2023-12-31");
const dateTwo = new Date("2024-01-01");

if(dateTwo > dateOne) {
    console.log("Happy new year!")
}