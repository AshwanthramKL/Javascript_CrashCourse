// Arrow function

function sum(a,b){ // 2 args
    return a+b;
}

// Arrow representation of the above function
let sum2 = (a,b) => {
    return a+b;
}

function isPositive(number){ // 1 args
    return number>=0;
}

// Arrow representation of the above function
let isPositive2 = num => num>=0;

function randomNumber(){ // 0 args
    return Math.random
}

// Arrow representation of the above function
let randomNumber2 = () => Math.random

document.addEventListener('click', function(){ // Anonymous functions, best use case for arrow functions
    console.log('click');
})

// Arrow representation of the above function
document.addEventListener('click', () => console.log('click'))


// Whats truly interesting about arrow functions is their use of this keyword.


class Person
{
    constructor(name)
    {
        this.name = name;
    }

    printNameArrow()
    {
        setTimeout(()=>{
            console.log('Arrow: '+this.name) // this within the scope of arrow function
        }, 100)
    }

    printNameFunction()
    {
        setTimeout(function(){
            console.log('Function: '+this.name) // this is of global scope becuase it is called in line 62 which is of global scope
        }, 100)
    }
}

let person = new Person('Zach');

person.printNameArrow();
person.printNameFunction();

console.log(this.name) // this is of global scope