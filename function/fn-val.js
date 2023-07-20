const fn = function() {
    console.log("test")
    return 0
}


//
// 当对象的key和定义的函数名相同时，可以直接省略函数关键字和key，直接定义函数名和函数体

const obj = {
    test: fn,
    sing() {
        console.log('唱首歌')
    }
    // sing: function sing() {

    // }
}

const fromObjMethod = obj.test
fromObjMethod()
console.log(fromObjMethod())
obj.sing()