// 变量提升问题
// 编译器允许未定义先使用
// es2015，块级别作用域
// 不允许未定义先使用
var a = 1

function test() {
    console.log(a)
    // 暂时性死区
    // 其他语言如果报错， 是因为a没有定义，编译器报的错
    let a = 2
}

// 函数优先级比变量优先级高
// var x 覆盖了function x
var x = 1;
function x() {}
console.log(typeof x);
// number

// test()