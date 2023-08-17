// 闭包     横向类比Java
const obj = {
    name: 1
}

// 此函数执行时一定要有obj，一定要有外部数据（环境）
function closure() {
    console.log(obj)
}

const val1 = closure    //val1 = function + environment

//
function simpleFn(obj) {
    console.log(obj)
}

const val2 = closure    //val2 = function


//arr相当于六个配置文件，闭包相当于

const arr = [1, 2, 3, 4, 5, 6]
function wrapper(i) {       //@zgyjava类
    return function() {     //@zgyjava方法
        return i
    }
}
const result = []
for (var i = 0; i < arr.length; i++) {
    // const clo = function () { return arr[i] }  //function + env
    
    // 立即执行函数iife
    const clo = (function (i_inner) {
        return function() {
            return i
        }
    })
    result.push(clo)
}
// 闭包是语言的特性
console.log(result)
console.log(result[5]())

console.log(result[0] === result[1])


// 闭包的问题
// 1.内存泄漏

// 函数currying， 柯里化
// 一个函数只有一个参数 y=f(x)
// lambda
// 一个函数有多个参数 y=f(x, y, m, n)
// addMulParam(1, 2, 3)
function addMulParam(a, b, c) {
    return add(a)(b)(c)
}
function add(a) {
    return function (b) {
        return function (c) {
            return a + b + c
        }
    }
}

console.log(addMulParam(2, 3, 4))






// mul(a, b)
// function currying() {
    
// }


// const addCurrying = currying(add)
// const mulCurrying = currying(mul)
// addCurrying(a)(b)(c)(d)
// mulCurrying(a)(b)
function add1(a, b, c, d) {
    return addCurrying(a)(b)(c)(d)
}
function addCurrying(a) {
    return function (b) {
        return function (c) {
            return function (d) {
                return a + b + c + d
            }
        }
    }
}
console.log(add1(1, 2, 3, 4))
