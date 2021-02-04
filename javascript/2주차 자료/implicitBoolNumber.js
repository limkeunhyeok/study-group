// function onlyOne(a, b, c) {
//     return !!((a && !b && !c) || (!a && b && !c) || (!a && !b && c));
// }

// var a = true;
// var b = false;

// console.log(onlyOne(a, b, b)); // true
// console.log(onlyOne(b, a, b)); // true
// console.log(onlyOne(a, b, a)); // false


function onlyOne() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        // falsy 값은 0으로 취급되어 건너뛴다.
        // NaN은 피해야 한다.
        if (arguments[i]) {
            sum += arguments[i];
        }
    }
    return sum == 1;
}

var a = true;
var b = false;

console.log(onlyOne(b, a)); // true
console.log(onlyOne(b, a, b, b, b)); // true

console.log(onlyOne(b, b)); // false
console.log(onlyOne(b, a, b, b, b, a)); // false

// 명시적
// function onlyOne() {
//     var sum = 0;
//     for (var i = 0; i < arguments.length; i++) {
//         sum += Number(!!arguments[i]);
//     }
//     return sum === 1;
// }