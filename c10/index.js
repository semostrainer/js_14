/* let person = {
    name: 'Ivana',
    lname: 'Kozolovska',
    year: 2021
}; */

// console.log(person);

class Person {
    // constructor
    constructor(name = '', lname = '', year = 0) {
        this.name = name;
        this.lname = lname;
        this.year = year;
        // this.getName = this.getName.bind(this);
    }

    // methods
    fullName() {
        console.log('this', this === window);
        return this.getName(this.name) + ' ' + this.getLName(this.lname);
    }

    getName(name) {
        console.log('this', this);
        return name;
    }

    getLName() {
        console.log('this', this);
        return this.lname;
    }

    setName = (name) => {
        this.name = name;
    }
}

let p = new Person('Ivana', 'K', 2021);
console.log(p);
console.log('this', this);
console.log('window', window);
console.log(this === window);
p.setName('Test');
console.log(p.fullName());

let a = 4;
let b = a;

console.log(a);
console.log(b);

let personA = {
    name: 'Ivana',
    lname: 'Kozolovska',
    year: 2021
}; 
let personB = personA; /// !!!

console.log(personA);
console.log(personB);

a = 10;

console.log(a);
console.log(b);

personA.lname = 'K';
personB.lname = 'lasdkfjlksa';

console.log(personA);
console.log(personB);

// extends 
class Animal {
    constructor(name) {
        this.name = name;
    }

    action = () => {
        console.log(`${this.name} makes a noise`);
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }

    /* bark = () => {
        console.log(`${this.name} barks.`);
    } */

    // override 
    action = () => {
        console.log(`${this.name} barks`);
    }
}

let dog = new Dog('Kovu');
dog.action();
console.log(dog);