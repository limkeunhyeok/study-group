function baz() {
    // 호출 스택: baz
    // 따라서 호출부는 전역 스코프 내부이다
    console.log('baz');
    bar(); // bar의 호출부
}

function bar() {
    // 호출 스택: baz -> bar
    // 따라서 호출부는 'baz' 내부이다
    console.log('bar');
    foo(); // foo의 호출부
}

function foo() {
    // 호출 스택: baz -> bar -> foo
    // 따라서 호출부는 bar 내부이다
    console.log('foo');
}

baz(); // baz의 호출부


function baz() {
    console.log('baz');
    bar();
}

function bar() {
    console.log('bar');
    foo();
}

function foo() {
    console.log('foo');
}

baz();

