var a = 42;
var b = "abc";
var c = null;

console.log(a || b); // 42
console.log(a && b); // abc

console.log(c || b); // abc
console.log(c && b); // null

