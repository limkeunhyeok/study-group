var a = 'abc';
var b = a;
b.concat('d');

console.log(a); // 2
console.log(b); // 3

var c = [1, 2, 3];
var d = c;
d.push(4);

console.log(c); // [1, 2, 3, 4]
console.log(d); // [1, 2, 3, 4]

