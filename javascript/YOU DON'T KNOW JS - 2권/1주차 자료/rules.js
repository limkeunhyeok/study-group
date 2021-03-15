// function foo() {
//     console.log(this.a);
// }

// var a = 2;
// foo(); // 2
// // 실제론 undefined 출력

// function foo() {
//     console.log(this.a);
// }

// var obj = {
//     a: 2,
//     foo: foo
// }

// obj.foo(); // 2

// function foo() {
//     console.log(this.a);
// }

// var obj = {
//     a: 2,
//     foo: foo
// };

// var bar = obj.foo;
// var a = '전역';
// bar(); // 전역
// // 실제론 undefined 출력

// function foo() {
//     console.log(this.a);
// }

// var obj = {
//     a: 2
// };

// foo.call(obj); // 2

// function foo() {
//     console.log(this.a);
// }

// var obj = {
//     a: 2
// };

// var bar = function() {
//     foo.call(obj);
// };

// bar(); // 2
// setTimeout(bar, 100); // 2

// // 하드 바인딩된 bar에서 재정의된 this는 의미 없다
// bar.call(window); // 2

function foo(a) {
    this.a = a;
}

var bar = new foo(2);
console.log(bar.a); // 2