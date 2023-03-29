# Scoping

4 types of Scopes in JS  

    1. Global Scope
    2. Module Scope
    3. Function Scope
    4. Block Scope

## What is scope?

Code boundaries within which some variable are accessible.

## Global Scope

Scope ranges across different modules/files.

`main.js`
```javascript
var x = 10;
```

`print.js`
```javascript
console.log(x);
```
`O/P: 10`

## Module Scope

Scope ranges only inside that module/file.  

Have to export the variable to access it outside the module where it is initialised.

`main.js`
```javascript
var x = 10;
console.log(x);

export const exportedVar = 0;
```
`O/P: 10`

`print.js`
```javascript
import {exportedVar} from './main.js'
console.log(exportedVar);
```
`O/P: 0`


## Block Scope

Scope range exists between `{` and `}`
```javascript
function test(){
    var b = 2;

    if(true){
        const c = 3;
        console.log('if statement', c);
    }

        console.log('function scope', b, c);

}

test();
```
`O/P:`
```
    if statement 3
    ReferenceError: c is not defined
```

## Function Scope

Scope ranges inside a function only.  

Variables defined with `var` keyword are function scoped, but `let` and `const` are block scoped.
```javascript
function test(){
    var b = 2;

    if(true){
        var c = 3;
        console.log('if statement', c);
    }

        console.log('function scope', b, c);

}

test();
```
`O/P:`
```
    if statement 3
    function scope 2 3
```

## Advantages

Ability to use different variables with the same name.