// FUNCTIONS
// traditional functions

console.log('Hello world');
console.log('Hello again');
console.log('Hello hello');

/* function print() {
    console.log('Hello world from function');
} */

function print(message = 'Hello world', name = 'Ivana') {
    console.log(message + ' ' + name);
};

// invoke
print('Hello again');
print('My name is');

// fat arrow function
let print_msg = (message = 'Hello world', name = 'Ivana', age = 18) => {
    console.log(message + ' ' + name + ' ' + age);
};

print_msg('My name is', 'Kristina', 16);

// Task 01
// Create a function that will return the sum of two numbers. Execute the function.
let sum = (x = 0, y = 0) => {
    let s = x + y;
    return s;
};

let sum_two_numbers = sum(3, 5);
// let sum_two_numbers = sum(3 + 5);
console.log(sum_two_numbers);
console.log('======================================');
// asynchronous code execution
/* console.log('Start');
setTimeout(() => {
    console.log('TIMEOUT');
}, 2000);
console.log('End'); */

// Promise
let timeout_func = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('TIMEOUT');
            // return resolve('finished');
            return reject('not finished');
        }, 2000);
    });
};

// 1. async and await commands
let wait_for_response = async () => {
    try {
        console.log('try');
        let response = await timeout_func();
        console.log('success');
        console.log('response', response);
    } catch(error) {
        console.log('catch');
        console.log(error);
    }
};

wait_for_response();

// 2. .then and .catch
timeout_func()
    .then(response => { // callback
        console.log('then');
        console.log('success');
        console.log('response', response);
    })
    .catch(error => {
        console.log('catch');
        console.log(error);
    });

/*
    Homework 07
    1. Write functions to calculate the perimeter and the area of a rectangle
    2. Write functions to calculate the perimeter and the area of a circle

    async await, promises, .then .catch 
    3. Write a function that compares two numbers. The function should return the bigger number. Wait for the function to return the result. 
    If some of the parameters is not a number, reject the call and return appropriate error. Print the result.
    4.  Write a function that compares range of a given number. The function should return whether the number is smaller or bigger than 25. 
    Wait for the function to return the result. If the number is smaller than 25, reject the call and return appropriate error. Print the result.
    5.  Write a function that will transform the elements from a given array to upper cases (hint: word.toUpperCase()). 
    The array can contain elements from all types. If that's the case, reject the call and return appropriate error. Print the result.
    Example array:
    const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
    const complicatedArray = ['cucumber', 44, true];
*/