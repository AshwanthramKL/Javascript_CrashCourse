// import {square, diag} from './lib.js';

// // named imports
// // IMPORTS PART OF THE MODULE

// console.log(square(11));
// console.log(diag(4,3));

// To IMPORT the COMPLETE MODULE

// import * as lib from './lib.js';

// console.log(lib.sqrt(121));
// console.log(lib.diag(12,5));


// IMPORTING WITH A CONVINIENT ALIAS NAME

// import {ReallyLongModuleMemberName as ShortName} from './lib.js' 

// console.log(ShortName);

// SINGLE DEFAULT EXPORT

import myFunc from './lib.js';

console.log(myFunc());