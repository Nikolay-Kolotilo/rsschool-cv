// Задание №1   'Hello John!'
const details = {
    name: 'John',
}
function getMessage(message) {
    return `${message} ${this.name}`;
}

console.log(getMessage.apply(details, ['Hello']));

// Задание №2 undefined
console.log(message);
var message = 'Hello';

// Задение №3
function foo() { console.log(this); }
foo.call(null);

// Задаение №4  undefined 
"use strict";
function getThis() {
    return this;
}
console.log(getThis());

// Задаение №5 \\ 1
var a = 1, b = function a(x) { x && a(--x); };
console.log(a);

// Задаение №6 \\  ReferenceError: number is not defined
const foo = bar();
const number = 2;
function bar() { return number; }

// Задаение №7 \\\ number
function foo() { 
    return { bar: 1 };
 }
console.log(typeof foo().bar);

// Задаение №8 \\\ Возникнет ошибка!
let f = function g() { return 23; };
console.log(typeof g());

// Задаение №9  \\\\ 10
for (var i = 0; i < 10; i++) {
    // ...
}
console.log(i);

// Задаение №10 \\\\ Peter
let name = 'John';
function printName() {
    let name = 'Peter';
    console.log(name);
}
printName();

// Задаение №11 \\\ Hello
"use strict";
const details = {
    message: 'Hello',
}
function getMessage() {
    return this.message;
}
console.log(getMessage.call(details));

// Задаение №12 \\\ SyntaxError: redeclaration of const foo
function foo(a, b) {
    return a * b;
}

const bar = foo.bind(null, 2);
bar(2);

// Задаение №13 \\\\ ReferenceError
console.log(message);
let message = 'Hello';

// Задаение №14 \\\ undefined Peter
var name = 'John';
function printName() {
    console.log(name)
    var name = 'Peter';
    console.log(name);    
}
printName();

// Задаение №15 \\\ 333
for (var i = 0; i < 3; i++) {
    setTimeout(function () {
        console.log(i)
    }, 1000)
}

// Задаение №16 \\\ Hello
printMessage();
function printMessage() {
    console.log('Hello');
}

// Задаение №17 \\\ John
let name = 'John';
function printName() {
    console.log(name)
}
setTimeout(() => {
    let name = 'Peter';
    printName();
}, 1000);

// Задаение №18 \\\ 10
(
    function (a) {
        arguments[0] = 10;
        return a;
    }
)(5);

// Задаение №19 \\\ 333
for (var i = 0; i < 3; i++) {
    setTimeout(function () {
        console.log(i)
    }, 1000)
}

// Задаение №20
function foo() {
    console.log(arguments);
}
foo(10, 20, 30, 40);

// Задаение №21 \\\ undefined
function getThis() {
    return this;
}
console.log(getThis());




