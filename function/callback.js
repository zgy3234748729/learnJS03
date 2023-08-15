// 回调函数（和api没任何关系，和异步没有任何关系)
// 函数作为参数传递给另一个函数

// platform平台api
// 我们自己传递的函数

// platform 执行完会得到一个数字1
function platform(/*a变量要传递函数*/a) {
    a()
}

// 回调函数
const fn = function () {console.log('我是一个函数')}

// 作为参数传递给第三方
const result = platform(fn)

// 平台函数不通过return返回值，而是通过回调函数的参数传递返回值

const add = function (a, b) {
    console.log('callback')
    return a + b
}
/* @zgy重写函数之后，为什么会多一个undefined */
function platform1(add) {
    const result = add(1, 2)
    console.log(result)
}
platform1(add)

// 传入参数为对象，对象里有一个属性，值为一个函数
function platform2(mul) {
    mul.fn()    
}
const result2 = platform2(params)


// callback函数最大的用处跟异步有关