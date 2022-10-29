// // functions

// const printNums = (a = 421, b=73) => {
//     console.log(`${a} and ${b}`)
// }


// printNums(1);

// function person(firstName, lastName, dob){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
//     this.getFullName = function(){
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// person.prototype.getBirthYear = function() {
//     return this.dob.getFullYear();
// }

// person.prototype.getFullName = function() {
//     return `${this.firstName} ${this.lastName}`;
// }


// Classes

class Person{
    constructor(firstName, lastName, dob)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear()
    {
        return this.dob.getFullYear();
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}


const person1 = new Person('alice', 'smith', '12-19-2002');
const person2 = new Person('John', 'Jacobs', '1-12-2012');


console.log(person1.getBirthYear());
console.log(person2.getFullName());
