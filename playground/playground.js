// Hoisting
console.log(`someFunc => ${someFunc(5, 4)}`);
console.log(`someConst => ${someConst(5, 4)}`);

var someConst = (a,b) => a+b;

function someFunc(a, b){
    return a+b;
}
