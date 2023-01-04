// Rest Operator expands elements of an array
var certsToAdd = ['Algorithms and DS', 'frontend'];

var certfications = ['Data Visualisation', ...certsToAdd, 'Responsive Web Design'];
// ... is the spread operator, it spreads the elements in the certsToAdd array as individual elements in cerifications array rather than as an array.

console.log(certfications)


// pass elements as arguments to functions

function addThreeNos(x, y, z)
{
    console.log(x+y+z);
}

var args = [1,3,2,5];
addThreeNos(...args); // though there are 4 elements, it only takes first 3 and igonores the 4th

// copy arrays

var arr = [1,3,2,3]
var arr2 = [...arr]
var arr3 = arr
console.log('before:\n', arr);
console.log(arr2);
console.log(arr3);

arr2.push(4);
console.log('after arr2 push:\n', arr);
console.log(arr2);
console.log(arr3);

arr3.push(4);// here arr3 references arr
console.log('after arr3 push:\n', arr);
console.log(arr2);
console.log(arr3);

// concatenate arrays

var arrA = [1,2,3,4];
var arrB = [5,6,7,8];

arrA = [...arrA, 0,...arrB];
console.log('After concatenation:', arrA);
// Gives more flexibilty than the concat()

// Rest Operator condenses multiple elements into an array

function multiply(multiplier, ...theArgs)
{
    return theArgs.map(function(ele){
        return ele * multiplier;
    });

}

var arr = multiply(2,1,3,4);
console.log('Rest operator:\n', arr);