// Objects

const person = [{
    firstName: 'Mark',
    lastName: 'Zuckerberg',
    age: 23,
    hobbies: ['mma', 'fencing']
}, 
{
    firstName: 'Max',
    lastName: 'Levchin',
    age: 25,
    hobbies: ['yoga', 'boxing']
}]


const personJSON = JSON.stringify(person);

console.log(personJSON);