uj/*
        Closure =  A function defined inside an another function, 
                   The inner function has access to the variables and scope of the outer function. 
                   Allow for private variables ans state maintenance
                   Used freequently in JS frameworks: React, Vue, Angular
*/

function outer() {
  let userName = "Tony";

  function inner() {
    console.log(
      `We can access the userName variable from here, that is ${userName}`
    );
  }

  inner();
}

userName = "Greg"; //we can't manipulate this variable, because its a different scope.  outside of the outer function.

outer();

//counter program to maintain the state.

function increment() {
  let count = 0;
  count++;

  console.log(`count increased to ${count}.`);
}

//  increment();
//  increment();
//  increment();
//  increment();  //We are resetting the count variable everytime we call the function, that way the value of count will not change.

//
let count1 = 0;

function increment1() {
  count1++;
  console.log(`count increased to ${count1}.`);
}

// increment1();
// increment1();   //we declared the count1 variable outside of the function scope. It works but the count1 variable doesn't have any security.
// We can easily reset the value of count1 variable to 1000 and this method is not recommended.

//

function createCounter() {
  let count2 = 0;

  function increment2() {
    count2++;
    console.log(`count increased to ${count2}.`);
  }

  //closures can hold multiple functions.
  function getCount() {
    return count2;
  }

  return { increment2, getCount }; //here we are returning the above object with a method increment2
}

const counter = createCounter();

counter.increment2(); // here we are acessing the value of the incerement2 with in the createcoutner method.
counter.increment2(); // here our closure will maintain the state of that variable count2. it will not reset everytime we call the function.
counter.increment2();
counter.increment2();
counter.increment2();

// counter.count2 = 0;  //try changing the count2 variable.
// console.log(count2); //it will trow a reference error.

console.log(counter.count2); //it gives undefined, because we doesn't know what counter2 variable holds. It's hidden inside the closure.

console.log(`the current count is ${counter.getCount()}`);

//example.

function calculateScore() {
  let score = 0;

  function increaseScore(points) {
    score += points;

    console.log(`+${points} pts`);
  }

  function decreaseScore(points) {
    score -= points;

    console.log(`-${points} pts`);
  }

  function getScore() {
    return score;
  }

  return { increaseScore, decreaseScore, getScore };
}

const scoreCard = calculateScore();

scoreCard.increaseScore(5);
scoreCard.increaseScore(12);
scoreCard.decreaseScore(7);
scoreCard.getScore();

//Bank account example

function createBankAccount(initialBalance) {
  let balance = initialBalance;

  function credit(amount) {
    if (amount > 0) {
      balance += amount;
      console.log(`Credited: $${amount}, Balance: $${balance}`);
    }
  }

  function debit(amount) {
    if (amount > 0 && amount < balance) {
      balance -= amount;
      console.log(`Debited: $${amount}, Balance: $${balance}`);
    } else {
      console.log(`Insufficient funds`);
    }
  }

  function getFinalBal() {
    console.log(`Final balance is $${balance}`)
  }

  return { credit, debit, getFinalBal };
}

const viratAccount = createBankAccount(100);
const rahulAccount = createBankAccount(250);

viratAccount.credit(239);
rahulAccount.credit(523);

viratAccount.debit(113);
rahulAccount.debit(900);

rahulAccount.debit(472);

viratAccount.getFinalBal();
rahulAccount.getFinalBal();

//

