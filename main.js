// DOM manipulation

const ul = document.querySelector('.items');

console.log(ul)
// ul.lastElementChild.remove();
// ul.lastElementChild.remove();
// ul.lastElementChild.remove();

ul.firstElementChild.textContent = 'Hello world';

ul.children[1].innerText = 'Mark';
ul.children[1].style.background = 'black';

ul.children[1].style.color = 'orange';



ul.lastElementChild.innerHTML = '<h1>Dummy text</h1><p> aklsdjfklhjweiohfio iasdOHJFIOAWEHIOFAS DLIFJIASD FJOIj sidjfai k</p>'

button = document.querySelector('.btn');

button.style.background = 'green'