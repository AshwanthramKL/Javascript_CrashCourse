// Examine the document object
// console.dir(document)

// console.log(document.domain)
// console.log(document.title)

// document.title = "Javascript NOOB course"
// console.log(document.all)

// console.log(document.forms[0])
// console.log(document.images)

// document.all[12].textContent = 'Wassup' // changes heading from Item Lister to Wassup

// Accessing elements

// getElementbyId

// console.log(document.getElementById('header-title'))

// var title = document.getElementById('header-title');
// console.log(title)

// document.getElementById('header-title').textContent = 'Ba la la lah'
// document.getElementById('header-title').innerText = 'Oops'

// console.log(title.textContent) // disregards the style
// console.log(title.innerText) // Takes the style into account
// title.innerHTML = '<h3>Hola</h3>' // adds h3 inside the h1, doesn't replace it

// title.style.color = 'gray'

// getElementsByClass

// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// items[1].style.backgroundColor = 'yellow';
// items[1].style.fontWeight = 'bold';

// // items.style.backgroundColor = '#f4f4f4'; // Gives error

// for(var i = 0; i< items.length; i++){
//     items[i].style.backgroundColor = '#f4f4f4';
// }

// getElementByTagName


// var li = document.getElementsByTagName('li');
// console.log(li);
// li[1].textContent = 'hjkfghkk';
// li[1].style.backgroundColor = 'yellow';
// li[1].style.fontWeight = 'bold';

// // items.style.backgroundColor = '#f4f4f4'; // Gives error

// for(var i = 0; i< li.length; i++){
//     li[i].style.backgroundColor = '#f4f4f4';
// }


// QuerySelector - Works pretty much like jquery

// var header = document.querySelector('#main-header'); // can pass any css query as parameter

// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input'); // grabs only the first one

// input.value = 'Hello World';

// var submit = document.querySelector('input[type="submit"]');
// submit.value = 'SEND';

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'brown';


// querySelectorAll

// var titles = document.querySelectorAll('.title');
// console.log(titles);

// titles[0].textContent = 'New title';

// var oddList = document.querySelectorAll('li:nth-child(odd)');
// var evenList = document.querySelectorAll('li:nth-child(even)');


// for(var i = 0; i<oddList.length; i++)
// {
//     oddList[i].style.backgroundColor = '#f4f4f4';
//     evenList[i].style.backgroundColor = '#ccc';

// }

// Traversing the DOM

const itemList = document.querySelector('#items')
console.log(itemList)

// parentNode

// console.log(itemList.parentNode)
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode)

// parentElement - For the most part is the same as parentNode

console.log(itemList.parentElement)
itemList.parentElement.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentElement.parentElement.parentElement)

