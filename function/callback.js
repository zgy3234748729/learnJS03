// 回调函数（和api没任何关系，和异步没有任何关系
// 函数作为参数传递给另一个函数

// platform平台api
// 我们自己传递的函数

// platform 执行完会得到一个数字1
function platform(/*a变量要传递函数*/a) {
    a()
    return 1
}

// 回调函数
const fn = function() {console.log('我是一个函数')}

// 作为参数传递给第三方
const result = platform(fn)

// 平台函数不通过return返回值，而是通过回调函数的参数传递返回值




// callback函数最大的用处跟异步有关