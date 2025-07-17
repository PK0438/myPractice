/*
        Destructuring = extract values from an array or an object,
                        then assign them to variables in a convenient way.
                        [] = to perform array destructuring
                        {} = to perform object destructuring
 */

// ----- EXAMPLE 1: SWAP THE VALUES OF TWO VARIABLES -----

let a = 10;
let b = 20;

[a, b] = [b, a];

console.log("a: ", a);
console.log("b: ", b);


// ----- EXAMPLE 2: SWAP 2 ELEMENTS IN AN ARRAY -----

const cars = ["BMW", "Mercedes", "Audi", "Toyota", "Honda", "Hyundai"];

[cars[0], cars[5]] = [cars[5], cars[0]]

console.log("cars: ", cars);


// ----- EXAMPLE 3: ASSIGN ARRAY ELEMENTS TO VARIABLES -----
//lets use the cars array from the previous example

const [firstCar, secondCar, thirdCar, ...otherCars] = cars;
console.log("firstCar: ", firstCar);
console.log("secondCar: ", secondCar);
console.log("thirdCar: ", thirdCar);
console.log("otherCars: ", otherCars);


// ----- EXAMPLE 4: EXTRACT VALUES FROM OBJECTS -----

const player1 = {
    fName : "Virat",
    lName : "Kohli",
    age : 35,
    position: "opener"
}

const player2 = {
    fName : "Rohit",
    lName : "Sharma",
    age : 35,
}

// const {fName, lName, age, position} = player1;
// console.log("fName: ", fName);
// console.log("lName: ", lName);
// console.log("age: ", age);
// console.log("position: ", position);

const {fName, lName, age, position = "Not in the squad"} = player2; //assigning a default value to a variable if its not specified in the object
console.log("fName: ", fName);
console.log("lName: ", lName);
console.log("age: ", age);
console.log("position: ", position);

// ----- EXAMPLE 5: DESTRUCTURE IN FUNCTION PARAMETERS -----
// lets use the player1 and player 2 object from the previous example

function displayPlayerInfo({fName, lName, age, position = "Not in the squad"}) {
    console.log(`Player ${fName} ${lName}, of age ${age} is ${position}`);
}

displayPlayerInfo(player1);
displayPlayerInfo(player2);

//-----------------------------------------------------------------------------------------

//
const person1 = {
    fullName: "John Doe",
    age: 30,
};

function intro({fullName, age}) {
    console.log(`The person ${fullName} is ${age} years old.`);
}

intro(person1);

//
const apiResponse = {
    data: {
        users: ["Alice", "Bob", "Charlie", "Doe", "Eve"],
        status: "success",
    }
}

const {data: {users, status}} = apiResponse;
console.log("Users: ", users);
console.log("Status: ", status);

const [firstUser, seconduser, thirdUser, ...remainingUsers] = users;
console.log("First User: ", firstUser);
console.log("Second User: ", seconduser);
console.log("Third User: ", thirdUser);
console.log("Remaining Users: ", remainingUsers);

//
const students = [
    {name: "Alice", age: 20, grade: "A"},
    {name: "Bob", age: 22, grade: "B"},
    {name: "Charlie", age: 21, grade: "C"},
]

students.forEach(({name, grade}) => {
    console.log(`Student ${name} has grade ${grade}.`);
})

//

const movie = {
    title: 'The Matrix',
    year: 1999,
    director: 'Wachowski Sisters',
    actors: ['Keanu Reeves', 'Laurence Fishburne']
};

const {title, year, director, actors: [mainActor, ...supportingActors]} = movie;
console.log(`Movie: ${title} (${year}), directed by ${director}. Main actor: ${mainActor}. Supporting actors: ${supportingActors.join(', ')}.`);


//REAL TIME SHOPPING CART EXAMPLE

const cartApiResponse = {
    success: true,
    data: {
        user: {
            id: 12345,
            name: 'Sarah Johnson',
            email: 'sarah@email.com',
            address: {
                street: '123 Main St',
                city: 'New York',
                zipCode: '10001'
            }
        },
        cart: {
            items: [
                { id: 1, name: 'iPhone 15', price: 999, quantity: 1 },
                { id: 2, name: 'AirPods Pro', price: 249, quantity: 2 },
                { id: 3, name: 'Phone Case', price: 29, quantity: 1 }
            ],
            total: 1526,
            tax: 152.60,
            shipping: 15.99
        }
    }
};

//old painfull way. 

// function processOrder(response) {
//     // Lots of repetitive typing and deep nesting
//     const userName = response.data.user.name;
//     const userEmail = response.data.user.email;
//     const userStreet = response.data.user.address.street;
//     const userCity = response.data.user.address.city;
//     const userZip = response.data.user.address.zipCode;
    
//     const cartItems = response.data.cart.items;
//     const cartTotal = response.data.cart.total;
//     const cartTax = response.data.cart.tax;
//     const cartShipping = response.data.cart.shipping;
    
//     // Display order summary
//     console.log(`Order for: ${userName} (${userEmail})`);
//     console.log(`Shipping to: ${userStreet}, ${userCity} ${userZip}`);
//     console.log(`Items: ${cartItems.length}`);
//     console.log(`Total: $${cartTotal + cartTax + cartShipping}`);
// }

function processOrder(response) {
    const {
        data: {
            user: {
                id, 
                name, 
                email,
                address: {
                    street,
                    city,
                    zipCode
                }
            },
            cart: {
                items,
                total, 
                tax,
                shipping
            }
        }
    } = response;

    // Display order summary using destructured variables
    console.log(`Order for: ${name} (${email})`);
    console.log(`Shipping to: ${street}, ${city} ${zipCode}`);
    console.log(`Items: ${items.length}`);
    console.log(`Total: $${total + tax + shipping}`);
}

processOrder(cartApiResponse);