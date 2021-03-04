// var a = String('abc');
// console.log(a.length); // 3
// console.log(a.indexOf('c')); // 2
// console.log(a.toUpperCase()); // ABC

function isThisCool(vals, fn, rx) {
    vals = vals || Array.prototype;
    fn = fn || Function.prototype;
    rx = rx || RegExp.prototype;
    console.log(rx);
    return rx.test(
        vals.map(fn).join("")
    );
}

isThisCool();

console.log(isThisCool(
    ['a', 'b', 'c'],
    function(v) { return v.toUpperCase() },
    /ABC/
));

console.log(Array.prototype);
console.log(Function.prototype);

function temp() {
    var a = Array.prototype;
    // 로직;
}