// function identify() {
//     return this.name.toUpperCase();
// }

// function speak() {
//     var greeting = "Hello, I'm " + identify.call(this);
//     console.log(greeting);
// }

// var me = {
//     name: "Kyle"
// };

// var you = {
//     name: 'Reader'
// };

// console.log(identify.call(me)); // KYLE
// console.log(identify.call(you)); // READER

// speak.call(me); // Hello, I'm KYLE
// speak.call(you); // Hello, I'm READER

// function identify(context) {
//     return context.name.toUpperCase();
// }

// function speak(context) {
//     var greeting = "Hello, I'm " + identify(context);
//     console.log(greeting);
// }

// var me = {
//     name: "Kyle"
// };

// var you = {
//     name: 'Reader'
// };

// console.log(identify(you)); // READER
// speak(me); // Hello, I'm KYLE


// function foo(num) {
//     console.log("foo: " + num);
//     this.count++;
// }

// foo.count = 0;

// var i;

// for (i = 0; i < 10; i++) {
//     if (i > 5) {
//         foo(i);
//     }
// }

// console.log(foo.count);

function foo() {
    var a = 2;
    this.bar();
}

function bar() {
    console.log(this.a);
}

foo();