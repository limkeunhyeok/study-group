// function foo(a) {
//     console.log(a + b);
//     b = a;
// }

// foo(2); // ReferenceError

var c = 42;
c(); // TypeError


// 'use strict'

// function foo() {
//     a = 2;
//     console.log(a);
// }

// foo(2);