# Hoisting

What it does is take some of your code and autoatically moves it to the top of the file.

## Hoisting for "function" and "const" keyword

Works for **function** keyword but not for **const** keyword, i.e **arrow function**.

```javascript
// Hoisting
console.log(`sumFunc => ${someFunc(5, 4)}`);
console.log(`sumConst => ${someConst(5, 4)}`);

const sumConst = (a,b) => a+b;

function someFunc(a, b){
    return a+b;
}
```

For the above code, we get

```
sumFunc => 9
Uncaught ReferenceError: someConst is not defined
    at playground.js:8:13
```

## Hoisting for "var" keyword

```javascript
// Hoisting
console.log(`someFunc => ${someFunc(5, 4)}`);
console.log(`someConst => ${someConst(5, 4)}`);

var someConst = (a,b) => a+b;

function someFunc(a, b){
    return a+b;
}

```

For the above code, we get

```
sumFunc => 9
playground.js:3 
Uncaught ReferenceError: someConst is not defined
    at playground.js:3:13
(anonymous) @ playground.js:3

```

What happens inside, the code is converted to something like this

```javascript
var a = undefined;

console.log(a);
a = 2;
```

`O/P: undefined`