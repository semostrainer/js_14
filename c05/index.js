// Objects
/* let car1_type = 'Audi';
let car2_type = 'BMW';
let car3_type = 'Mercedes'; */

let car = {
    color: 'black',
    year: 2018,
    type: 'Audi',
    model: 'A4'
};

console.log(car);

// dot operator
console.log('car type', car.type);

// Task 01
// Print the year of the car
console.log('car year', car.year);
console.log('car year', car['year']);

let carYear = car.year;

// car.doors = 5;
car['doors'] = 5;
console.log('car ', car);

// Arrays
let carA = {
    color: 'black',
    year: 2018,
    type: 'Audi',
    model: 'A4'
};

let carB = {
    color: 'red',
    year: 2016,
    type: 'BMW',
    model: 'x6'
};

let cars = [carA, carB];

console.log('cars', cars);
console.log('cars color', cars[1].color);
console.log('cars color', cars[1]['color']);
console.log('array length', cars.length - 1);

// Task 02
// In the cars array on the first element add the doors property
cars[0]['doors'] = 5;
cars[1]['doors'] = 2;
/* cars[0].doors = 5;
cars[1].doors = 2; */
console.log('cars', cars);

// pop
// push

//forEach method
cars.forEach(car => {
    /* console.log(car.type);
    console.log(car.model); */
    console.log(`${car.type} ${car.model}`);
});

// Task 02 - Homework 03
/* let x = 3;
let y = 1;
let z = 2;

if(x <= y && y <= z) {
    console.log(`${x} ${y} ${z}`);
} else if (y <= x && x <= z) {
    console.log(`${y} ${x} ${z}`);
}
..... */

// Task 03 - Homework 03
/* let average = (80 + 77 + 33) / 3;

if (average < 60) {
    console.log('Grade: F');
} else if (average < 70) {
    console.log('Grade: D');
}
.... to continue */

// Task 04 - Homework 03
/* let day = 'Tuesday';

switch(day) {
    case 'Monday':
        console.log('Week day');
        break;
    case 'Tuesday':
        console.log('Week day');
        break;
        .
        .
        .
    case 'Saturday':
        console.log('weekend');
        .
        .        
} */

/*switch(day) {
    case 'Monday':
    case 'Tuesday':
    case 'Wednesday':
        console.log('Week day');
        break;
        .
        .
        .
    case 'Saturday':
    case 'Sunday':
        console.log('weekend');
        .
        .        
} */

/*  Homework 04
1. Create three person objects with properties firstName and lastName and add coresponding values. Print the values of the properties of the objects. Use both approaches.
2. Add the property age and coresponding value to the objects. Use both approaches.
3. Find out which person is older.
4. Create array people. Populate the array with the three person objects.
5. Find the sum of the years of the people. (hint: use forEach)
6. Find the average of the years of the people.
7. Find and understand the documentation about the following methods:
    - pop
    - push
    - map
    - filter
    - sort
*/