// Single element selectors

// const form = document.getElementById('my-form');

// console.log(form);

// console.log(document.querySelector('h1'));

// console.log(document.querySelectorAll('.item')); // Can use array methods

// console.log(document.getElementsByClassName('item'));// Can't use array methods

// console.log(document.getElementsByTagName('li'))

const items = document.querySelectorAll('.item');

items.forEach((item) => {
    console.log(item);
})