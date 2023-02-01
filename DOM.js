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

// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

// parentElement - For the most part is the same as parentNode

// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

// childNode - kinda useless as it takes line breaks into consideration

// console.log(itemList.childNodes);
// console.log(itemList.childNodes[1])

// itemList.childNodes[1].style.backgroundColor = 'maroon';
// console.log(itemList.childNodes[1].childNodes[0]);

// itemList.childNodes[1].childNodes[0].textContent = 'white';

// firstChild - kinda useless as it takes line breaks into consideration

// console.log(itemList.firstChild)
// itemList.firstChild.textContent = 'surprise';

// firstElementChild

// console.log(itemList.firstElementChild)
// itemList.firstElementChild.style.backgroundColor = '#f4f4f4';

// lastChild - kinda useless as it takes line breaks into consideration

// console.log(itemList.lastChild);
// itemList.lastChild.textContent = 'asdfs';

// lastElementChild

// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Here we are';


// nextSibling - kinda useless as it takes line breaks into consideration

// console.log(itemList.nextSibling)

// nextElementSibling

// console.log(itemList.nextElementSibling);

// itemList.nextElementSibling.textContent = 'Surprise';

// previousSibling - kinda useless as it takes line breaks into consideration
// console.log(itemList.previousSibling)

// previousElementSibling

// console.log(itemList.previousElementSibling)
// itemList.previousElementSibling.style.backgroundColor = '#f3a4e1';

// CREATING ELEMENTS

// createElement

// var newDiv = document.createElement('div');
// console.log(newDiv);

// add class
// newDiv.className = 'Hello';

// add id
// newDiv.id = 'Hello1';

// add title

// newDiv.setAttribute('title', 'hello div');
// add text using textNode

// var newDivText = document.createTextNode('Hello World');

// add text to div

// newDiv.appendChild(newDivText);
// console.log(newDiv);


// insert created elements into DOM

// var header_container = document.querySelector('header .container');
// console.log(header_container);
// var heading1 = document.querySelector('header h1');
// console.log(heading1);

// newDiv.style.fontSize = '25px';
// newDiv.style.color = 'Orange';

// header_container.insertBefore(newDiv, heading1);

// EVENTS

// EventListener
// var button = document.querySelector('#button');

// button.addEventListener('click', function() {
// document.querySelector('#header-title').textContent = 'Dandanaka';
// document.body.style.backgroundColor = '#f6a3f4';
// });

// button.addEventListener('click', ButtonClick);
// var x = 0;
// function ButtonClick(e){
//     console.log(e.target);
//     console.log(e.target.id);
//     console.log(e.target.classList[0]);

    var output = document.querySelector('#output');
//     output.innerHTML = `${e.target.id} is clicked ${x++} times`;

//     console.log(e.type);

//     offset - distance from the element borders
//     console.log(e.offsetX, e.offsetY);

//     client - distance from the browser window
//      console.log(e.clientX, e.clientY);

//     console.log(e.altKey);
//     console.log(e.ctrlKey);
//     console.log(e.shiftKey);

// }

// var button = document.querySelector('#button');
// var box = document.querySelector('#box');
// button.addEventListener('click', runEvent );
// button.addEventListener('dblclick', runEvent );
// button.addEventListener('mousedown', runEvent );
// button.addEventListener('mouseup', runEvent );

// over entire div
// box.addEventListener('mouseenter', runEvent);
// box.addEventListener('mouseleave', runEvent);

// over the contents of the div such as heading, text etc...
// box.addEventListener('mouseover', runEvent);
// box.addEventListener('mouseout', runEvent)


// disco div
// document.body.addEventListener('mousemove', runEvent);
// dummy_heading = document.querySelector('#heading-dummy');
// console.log(dummy_heading)
// function runEvent(e){
//     console.log(`Event type : ${e.type}`);

//     // output.innerHTML = '<h3>MouseX: '+e.offsetX+'</h3><br><h3>MouseY: '+e.offsetY+'</h3>';
//     dummy_heading.style.color = "white";
//     box.style.backgroundColor = "rgb("+e.offsetX+", "+e.offsetY+", 35)";

// }

