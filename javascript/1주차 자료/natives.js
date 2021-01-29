var a = 'abc';

console.log(typeof a); // string

var b = new String('abc');

console.log(typeof b);

console.log(Object.prototype.toString.call(b));