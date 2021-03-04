var a = [42];
var b = ["43"];
console.log(a < b); // true

var c = ["42"];
var d = ["043"];
console.log(c < d); // false

var e = [4, 2];
var f = [0, 4, 3];
console.log(e < f); // false

var g = {b: 42};
var h = {b: 43};

console.log(g < h); // false
// 두 객체가 정확히 똑같은 값에 대한 레퍼런스일 경우에만 동등
console.log(g == h); // false
console.log(g > h); // false

console.log(g <= h); // true
console.log(g >= h); // true