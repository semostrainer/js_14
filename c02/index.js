/* declare variable */
let myName = 'Ivana';
/* operator = -> assign value */

console.log('Hello World');

// Task 01
// Declare variable with your name. Print the value of the
// variable in the console.
let name = 'Ivana';
console.log(name);

name = 'Tamara';
console.log(name);

const pi = 3.14;
console.log(pi);

// Task 02
// Change the value of the variable pi. Print its value.
// What happens?

// pi = 5;
console.log(pi);

let year = 2021;

// primitive types
/*
    string ''
    number 12
    boolean true/false
    undefined
    null
*/

let isWinter = false;
let isSpring = true;

/* let lastName;
console.log(lastName); */

let lastName = null;
console.log(lastName);

console.log(typeof isWinter);

// Task 03
// Print the type of the year variable.
console.log(typeof year);

// reference types
/*
    object {}
    array []
*/

let fName = 'Rachel';
let lName = 'Taylor';
let age = 35;

let person = {
    fName: 'Rachel',
    lName: 'Taylor',
    age: 35
}; // good example !!!

let person1 = {
    fName: 'Steve',
    lName: 'West',
    age: 35
}; // good example !!!

let person2 = {
    fName: 'Rachel',
    age: 35
}; // bad example !!!

let people = [person, person1]; // good example !!!
let people1 = [person, person2]; // bad example !!!
let people2 = [person, 'orange'];  // bad example !!!

// Task 04
// Make the bad example good :)
// before 
let people2 = [person, 'orange'];  // bad example !!!
//after
let fruits = ['apple', 'orange'];  // bad example !!!

/*
Homework 01
1. For all the primitive types - Declare variables. Assign values on the variables.
2. Print the values of the variables.
3. Print the type of the variables.
4. Create a constant. Assign value to the constant. 
5. Try to assign another value to the constant. What happens?
6. For all the reference types - Declare variables. Assign values on the variables.
7. Print the values of the variables.
8. Print the type of the variables.
*Bonus: What is the type of the array variable? 
*/