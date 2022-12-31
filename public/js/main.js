

function foo() {
    var a = 2;
    function b() {
        console.log( a );
    }
    return b;
}

var c = foo();

c(); // 2, 函数b能够访问到foo的作用域，将b函数本身作为一个值进行传递
// 执行后，

// foo(); // TypeError ,而不是ReferenceError, 因为已经声明，但是没有赋值

// var foo = function bar() { //如果这是一个函数声明而不是一个表达式，那么就会赋值
// }


// foo();// 报错undefined, 
// function foo() {
//     var a;
//     console.log( a );
//     a = 2;
// }


// console.log( s );
// var s = 2;
// a = 2;
// var a;
// console.log( a ); // 2

// 立即实行函数表达式，IIFE Immediately invoked function expression

// setTimeout(function timeoutHandler() { // 给函数添加名字是一个最佳实践
//     console.log("wait for 2 seconds")
// }, 2000)


// function foo() {
//     function bar(a) {
//         i = 3;
//         console.log( a + i )
//     }
//     for (let i = 0; i < 10; i++) {
//         bar( i * 2 ); //死循环，bar的声明掩盖了i的值
//     }
// }




// var b = 2;

// foo("var b = 3", 1)

// function foo(str, a) {
//     eval(str);
//     console.log(a, b)

//     // var b = a * 2
//     // function bar(c) {
//     //     console.log(a, b, c)
//     // }

//     // bar(b * 3)
// }

