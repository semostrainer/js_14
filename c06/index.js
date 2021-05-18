
// Arrays
let carA = {
    color: 'black',
    year: 2018,
    type: 'Audi',
    model: 'A4'
};

let carB = {
    color: 'red',
    // year: 2016,
    type: 'BMW',
    model: 'x6'
};

let cars = [carA, 'test', carA, carB, carA, carB, carA, carB];

console.log('cars', cars);
console.log('cars color', cars[1].color);
console.log('cars color', cars[1]['color']);
console.log('array length', cars.length - 1);

//forEach method
cars.forEach(car => {
    /* console.log(car.type);
    console.log(car.model); */
    console.log(`${car.type} ${car.model}`);
});

console.log('car color', cars[0].color);
console.log('car color', cars[1].color);
console.log('car color', cars[2].color);
console.log('car color', cars[3].color);
// .....

cars.forEach(car => {
    console.log(`${car.color}`);
});

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => {
    if(word.length > 5) {
        return true;
    } else {
        return false;
    }
});

let ages = [32, 25, 30, 33, 16, 40];

let r = ages.filter(age => {
   if(age > 30) {
       return true;
   } else {
       return false;
   }
});

console.log(ages);
console.log(r);

let sum = 0;
ages.forEach(age => {
    // console.log(`${age}`);
    sum += age;
});

console.log(sum);
console.log(sum / ages.length);
cars.forEach(car => {
    // console.log(`${age}`);
    sum += car.year;
});
console.log(sum);

// Loops
// 1. for loop

// let ages = [32, 25, 30, 33, 16, 40];
sum = 0;
for(let i = 0; i < ages.length; i++) {
    console.log("i = ", i);
    // ages[0]
    // ages[1];
    // ages[2];
    console.log(`ages[${i}] = `, ages[i]);
    sum += ages[i];
}

// console.log(cars[100].type); !!! 

console.log('sum = ', sum);

// 2. for of loop
sum = 0;
for (let age of ages) {
    // console.log(age);
    sum += age;
}

console.log('sum = ', sum);

// 3. while loop
let counter = 0; // 100
sum = 0;
while(counter < ages.length) {
    sum += ages[counter];
    counter++; // !!!
}

// 4. do while loop
counter = 0; // 100
sum = 0;
do {
    sum += ages[counter];
    counter++; // !!!
} while(counter < ages.length);


/*
    Homework 05
    let fruits = ['Apple', 'Banana', 'Orange'];
    let students = [
        {
            firstName: 'John',
            lastName: 'Doe',
            index: 20201
        },
        {
            firstName: 'Jane',
            lastName: 'Doe',
            index: 20202
        },
        {
            firstName: 'David',
            lastName: 'Vinoth',
            index: 20203
        },
        {
            firstName: 'Divya',
            lastName: 'Ishitha',
            index: 20204
        },
        {
            firstName: 'Thomas',
            lastName: 'Edgardson',
            index: 20205
        }
    ];
    1. Loop through the arrays and print the elements.
    2. Loop through the students array and print the details of the students
    3. Create a loop and print the first 10 numbers.
    4. Create a loop and print the first 10 numbers (even only - hint start from 0 and increase the counter for 2).
        a. starting from 0 && using a conditional statement (increase the counter for 1)
    5. Create a loop and print the first 10 numbers (odd only - hint start from 1 and increase the counter for 2).
        a. starting from 0 && using a conditional statement (increase the counter for 1)
*/