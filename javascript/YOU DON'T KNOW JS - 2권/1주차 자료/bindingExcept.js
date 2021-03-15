// function foo() {
//     console.log(this.a);
// }

// var a = 2;
// foo.call(null); // 2

// function foo(a, b) {
//     console.log("a:" + a + ", b:" + b);
// }

// // DMZ 객체 생성
// var ø = Object.create(null);

// // 인자들을 배열 형태로 펼친다
// foo.apply(ø, [2, 3]); // a:2, b:3

// // bind()로 커링한다
// var bar = foo.bind(ø, 2);
// bar(3); // a:2, b:3

// function foo() {
//     console.log(this.a);
// }

// var a = 2;
// var o = {a: 3, foo: foo};
// var p = {a: 4};

// o.foo(); // 3
// (p.foo = o.foo)(); // 2

if (!Function.prototype.softBind) {
    Function.prototype.softBind = function(obj) {
        var fn = this;
        // 커링된 인자는 모두 포착한다
        var curried = [].slice.call(arguments, 1);
        var bound = function() {
            return fn.apply(
                (!this || this === (window || global)) ?
                    obj: this
                curried.concat.apply(curried, arguments)
            );
        };
        bound.prototype = Object.create(fn.prototype);
        return bound;
    };
}