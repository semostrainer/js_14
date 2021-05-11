// assignment operators
/*
    = -> assign value
    += -> add and assign value
    -= - subtract and assign value
    *= - multiply and assign value
    /= - divide and assign value
    %= - find module and assign value
*/

// example
// Task 01
// Implement one of the given assignemnt operators
let x = 2;
// x = x + 3;
x += 3;
console.log('x = ', x);

// Conditional statements
// example
/* let a = -5;
let b = -7; */
let a = 5;
let b = 7;

// let sum = a + b;
let sum = 0;
console.log('sum = ', sum);

// if else 

if(a >= 0 && b >= 0) {
    sum = a + b;
    console.log('The sum of the nubmers is ', sum);
} else {
    console.error('The numbers must be positive.');
}

a = 0;

if(a > 0) {
    console.log('a is a positive number');
} else if (a < 0) {
    console.log('a is a negative number');
} else {
   console.log('a equals zero');
}

// Task 02
// Define variable and assign value to it. Check if the value is even or odd

let number = 5;

if(number % 2 === 0) {
    console.log('The number is even');
} else {
    console.log('The number is odd');
}

// Alerts
// 1. alert
// alert('Hello world!');
// 2. alert with confirmation
// let result = confirm('Do you really want to leave?');
// console.log('confirm result', result);

/* if(result) {
    console.log('The user wants to leave');
} else {
    console.log('The user wants to stay');
} */

// switch - case
let variable = 'namesf';
switch (variable) {
    case 'name':
        console.log('The variable has value name');
        break;
    case 'age': // variable === 'age'
        console.log('The variable has value age');
        break;
    case 'lastName':
        console.log('The variable has value lastName');
        break;
    case 'name':
        console.log('The variable has value name');
        break;
    default: 
        console.log('The variable has unknown value');
}

// Task 03
// Define variable and assign value to it. Check if the value is even or odd
// with switch-case
number = 12;

switch (number) { // 12
    case (number % 2 === 0): // true
        console.log('The number is even');
        break;
    default:
        console.log('The number is odd');
}

switch (number % 2) { // 0 or 1
    case 0: // 0
        console.log('The number is even');
        break;
    default:
        console.log('The number is odd');
}

/*
    Homework 03
    1. Declare variables and use the assignment operators ( print the results)
    2. Write a JavaScript conditional statement to sort three numbers. Print the result.
    3. Compute the average marks of the following students. Then, use the average to determine the corresponding grade. 
    Student_Name	Marks
    David	        80
    Vinoth	        77
    Divya	        88
    Ishitha	        95
    Thomas	        68

    Range	Grade
    <60	    F
    <70	    D
    <80	    C
    <90	    B
    <100	A

    4. For a given day, print out whether it is a day of the work week or weekend.
    5. For a given month, print out in which season it belongs.
*/