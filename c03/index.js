console.time('script');
// Taks 01
// Declare two variables (type number). Assign values 
// to the variables.
let x = 5;
let y = 3;
let z = '5';

// Arithmetic operators
/*
    + -> addition
    - -> subtraction
    * -> multiplication
    / -> division
    % -> modulus (remainder)
    ++ -> increment (add +1 on the value of the variable)
    -- -> decrement (subtract -1 of the value of the variable)
*/

console.log(5 - 3);

let sum = x + y;
console.log(sum);

sum = x + z;
console.log(sum);
console.log(typeof sum);

x = x + 1;
console.log(x);

x++;
console.log(x);

//Task 02
// Decrease the value of the variable x by 1

x = (x - 1 + 4 + 4) / 6;
console.log(x);

x--;
console.log(x);

// Task 03 
// Choose two operators and implement it over the variables

// Comparison operators
/*
    == -> equals to (only by value)
    === -> equals to (by value and by type)
    != -> not equal to (only by value)
    !== -> not equal to (by value and by type)
    > -> greater than
    >= -> greater or equal to
    < -> smaller than
    <= -> smaller or equal to
*/

x = 5;
z = '2';
// z = '6';
console.log('does x equals to z', x == z);
console.log('does x equals to z', x === z);

// x > z
// z > x

// Task 04 
// Use some comparison operator over the varialbes

console.log(x >= z);

// Logical operators
/*
    || -> or
    && -> and
    ! -> not
*/

x = 6;
y = 3;
console.log(x < 10 && y > 1);

y = 0;

console.log('x', x);
console.log('y', y);
console.log('x < 10 && y > 1', x < 10 && y > 1);
console.log('x < 10 && y > 1 with not operator', !(x < 10 && y > 1));
console.log('x < 10 || y > 1', x < 10 || y > 1);
console.log('x < 10 || y > 1 with not operator', !(x < 10 || y > 1));

// =================================================================

console.error('The user is not logged in!'); // outputs an error message
console.table(['apples', 'oranges', 'bananas']); // displays data as a table
console.log(['apples', 'oranges', 'bananas']);
let person = { name: 'Ivana', year: 2021 };
console.dir(person);
console.dir(location); // dislays interactive list of the properties of the specified object
console.log(location);
console.info('Semos course: JavaScript basics.');

setTimeout(() => {
    console.timeEnd('script');
}, 5000);

/*
Homework 02
1. Declare variables and use all the different operators that were shown ( print the results)
2. Try out the different types of loggings in the console
* Bonus: Try and find out new types of loggings in the console
*/