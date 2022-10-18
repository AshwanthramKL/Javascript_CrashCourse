// Loops

const persons = [{
    firstName: 'Mark',
    lastName: 'Zuckerberg',
    age: 23,
    hobbies: ['mma', 'fencing'],
    isEntrepreneur: true
}, 
{
    firstName: 'Max',
    lastName: 'Levchin',
    age: 25,
    hobbies: ['yoga', 'boxing'],
    isEntrepreneur: false
}]

// For loop

// for(let i=0; i<10; i++)
// {
//     console.log(`For loop no : ${i}`);
// }

// While loop 

let k =1;

while(k< 10)
{
    console.log(`While loop : ${k}`);
    k++;
}

// Looping through arrays

for( let i = 0; i < persons.length; i++)
{
    console.log(persons[i].lastName);
}

// Some special for loop
for(let person of persons)
{
    console.log(person.firstName);
}

// For Each
persons.forEach(function(person) {
    console.log(person.age)
})

// map
const lastNames = persons.map(function(person){
    return person.lastName;
})

console.log(lastNames);

// filter

entrepreneurs = persons.filter(function(person){
    return person.isEntrepreneur === true;
});


entrepreneursFN = persons.filter(function(person){
    return person.isEntrepreneur === true;
}).map(function(person){
    return person.firstName
});
console.log(entrepreneursFN);