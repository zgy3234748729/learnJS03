// 函数
// y=f(x)  x -> y
// x当作入参
// y当作输出

// 函数的定义
function add(a, b, c) {
    // 各种各样的表达式
    // 返回单个值

    var d = a + b + c
    return d
    // 隐式返回值 undefined
}

function add() {
    return "a * b * c"
}

// 函数调用 函数名() 组成的
var result = add(1, 2, 3)
console.log(result)
// js里面没有函数重载
// js只有函数的覆盖（谁在后面听谁的）

