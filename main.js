// Arrays

const fruits = ['apples', 'oranges', 'mangoes'];

fruits.push('grapes');
console.log(fruits[fruits.length-1]);

fruits.unshift('bananas');
console.log(fruits);

fruits.pop()
console.log(Array.isArray(fruits))