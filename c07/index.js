// DOM manipulation
// Element selection
// 1. document.getElementById('element_id');

let element = document.getElementById('main');
console.log(element.innerHTML);
element.innerHTML = 'New paragraph text';
console.log(element.innerHTML);

// 2. document.getElementsByName('element_name');
let elements_input = document.getElementsByName('first_name');
console.log(elements_input);
console.log('My first name is ', elements_input[0].value);

// 3. document.getElementsByClassName('class_name');
let elements_class = document.getElementsByClassName('colors');
console.log(elements_class);

// 4. document.querySelector('.class_name');
let element_qs = document.querySelector('.colors');
console.log(element_qs);

// 5. document.querySelectorAll('.class_name');
let element_qs_all = document.querySelectorAll('.colors');
console.log(element_qs_all);

// Element creation
// 1. document.createElement('ELEMENT_TYPE');
let p = document.createElement('p');
// console.log(p); !!!
p.innerHTML = 'Some text here';
console.log(p);

// 2. element.appendChild()
document.body.appendChild(p);

let lemon = document.createElement('li');
lemon.innerHTML = 'Lemon';
let ul_fruits = document.getElementById('fruits');
// document.body.appendChild(lemon);
ul_fruits.appendChild(lemon);

// Element styling
// 1. element.style.css_property
let paragraph = document.getElementById('main') ;
paragraph.style.backgroundColor = 'red';
paragraph.style.color = 'white';
paragraph.style.width = '150px';

// 2. element.classList.add('class_name');
let list = document.getElementById('fruits');
list.classList.add('style');

// Event listeners
// click
// mouse over
// mouse out
let mouse_over = () => {
    list.style.backgroundColor = 'MediumSeaGreen';
};

let mouse_out = () => {
    list.style.backgroundColor = 'coral';
};

let click = () => {
    alert('Hello user!');
    // list.removeEventListener('click', click);
};

list.addEventListener('mouseover', mouse_over);
list.addEventListener('mouseout', mouse_out);
list.addEventListener('click', click);

/*
    Homework 06
    1. Create an array of objects (objects to represent book details). 
    For each book create a paragraph that will contain information about the title of the book and the author. 
    Add those elements to the page. 
    Use ul and li to display the book details. 
    2. Change the style of the book, depending on whether you have read the book. (hint: use loops)
    3. On hover of the book details, change the style of the element.

    Bonus:
    <!DOCTYPE html>
    <html>
    <head>
    <meta charset="utf-8"/>
    <title>About Me</title>
    </head>
    <body>
    <h1>About Me</h1>
    
    <ul>
        <li>Nickname: <span id="nickname"></span></li>
        <li>Favorites:  <span id="favorites"></span></li>
        <li>Hometown: <span id="hometown"></span></li>
    </ul>
    
    </body>
    </html>
    
    This changes need to be applied to the code above
    1. Set the following body style - font-family to 'Arial, sans-serif'.
    2. Fill in the values ​​in the span tags.
    3. Add the listItem class to each li tag. (hint: use loops)
    All elements with the listItem class should have white font color, red background color, and font size 14.
*/