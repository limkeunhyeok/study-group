// function foo() {
//     try {
//         return 42;
//     }
//     finally {
//         console.log('hello');
//     }
//     console.log('실행되지 않는다');
// }

// console.log(foo());
// // hello
// // 42


// function foo() {
//     try {
//         return 42;
//     }
//     finally {
//         throw "에러!"
//     }
//     console.log('실행되지 않는다');
// }

// console.log(foo());
// // 에러!


function foo() {
    try {
        return 42;
    }
    finally {}
}

function bar() {
    try {
        return 42;
    }
    finally {
        return;
    }
}

function baz() {
    try {
        return 42;
    }
    finally {
        return 'Hello'
    }
}

console.log(foo()); // 42
console.log(bar()); // undefined
console.log(baz()); // Hello

