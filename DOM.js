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



