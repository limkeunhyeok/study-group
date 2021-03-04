function foo(a = 42, b = a + 1) {
    console.log(a, b);
}

foo(); // 42, 43
foo(undefined); // 42, 43
foo(5); // 5, 6
foo(void 0, 7); // 42, 7
foo(null); // null 1

function bar(a) {
    a = 42;
    console.log(arguments[0]);
}

bar(2); // 42, 연결된다
bar(); // undefined, 연결되지 않는다

