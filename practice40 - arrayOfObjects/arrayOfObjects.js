/*
        Array of objects = An array that contains objects.
                        Allows you to store multiple objects in a single array.
*/

const fruits = [{ name: "Apple", color: "Red", price: 1.2 },   
                { name: "Banana", color: "Yellow", price: 0.5 },
                { name: "Cherry", color: "Red", price: 2.0 },
                { name: "Grapes", color: "Purple", price: 3.0 },
                { name: "Orange", color: "Orange", price: 1.0 }];

fruits.push({ name: "Mango", color: "Yellow", price: 1.5 }); // Add a new fruit object
fruits.pop(); // Remove the last fruit object
fruits.shift(); // Remove the first fruit object
fruits.unshift({ name: "Pineapple", color: "Brown", price: 2.5 }); // Add a new fruit object at the beginning

fruits.splice(2, 1); // Remove the third fruit object (Cherry)

console.log(fruits);

console.log(fruits[2].name);
console.log(fruits[0].price);

// Loop through the array of objects
for(const fruit of fruits){
    console.log(`Name: ${fruit.name}, color: ${fruit.color}, price: $${fruit.price} /lb`);
}

//--------------forEach------------------
// Loop through the array of objects using forEach
fruits.forEach((fruits, index) => {
    console.log(fruits);
})

fruits.forEach((fruits, index) => console.log(fruits.name))
fruits.forEach((fruits, index) => console.log(fruits.color))
fruits.forEach((fruits, index) => console.log(fruits.price))


//--------------map------------------
// Create a new array of fruit names using map
const fruitNames = fruits.map(fruit => fruit.name);
console.log(fruitNames);

const fruitColors = fruits.map(fruit => fruit.color);
console.log(fruitColors);

const fruitPrices = fruits.map(fruit => fruit.price);
console.log(fruitPrices);

//--------------filter------------------
// Filter the array to get only red fruits

const yellowFruits = fruits.filter(fruit => fruit.color === "Yellow");
console.log(yellowFruits);

const cheapFruits = fruits.filter(fruit => fruit.price < 2.0);
console.log(cheapFruits);

const expensiveFruits = fruits.filter(fruit => fruit.price > 2.0);
console.log(expensiveFruits);

//--------------find------------------
// Find a specific fruit by name    
const findBanana = fruits.find(fruit => fruit.name === "Banana"); // case sensitive
console.log(findBanana);

//--------------reduce()------------------
// Calculate the total price of all fruits using reduce

function getTotalprice(accumulator, fruit) {
    return accumulator + fruit.price;
}
const totalPrice = fruits.reduce(getTotalprice, 0);
console.log(`Total price of all fruits: $${totalPrice}`);

const expensiveFruit = fruits.reduce((max, fruit) => fruit.price > max.price ? fruit : max);  //max is an accumulator here
console.log(`Most expensive fruit: ${expensiveFruit.name} at $${expensiveFruit.price}`);

const cheapFruit = fruits.reduce((min, fruit) => fruit.price < min.price ? fruit : min);
console.log(`Cheapest fruit: ${cheapFruit.name} at $${cheapFruit.price}`);