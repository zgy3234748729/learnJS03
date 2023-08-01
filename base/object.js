// 创建，属性读取，属性修改，属性删除
// 1. 对象类型是引用类型
// 2. 创建对象
var obj = { name: 'jyt', age: 18 }      // 简单对象

// 增加属性
obj.value = true;

// 读取属性
console.log(obj)


// 设置属性
obj.age = 20;
console.log(obj)


// 删除属性
delete obj.value
console.log(obj)

// 读取属性2
console.log(obj['name'])
// 设置属性2
obj['name'] = 'jet'
console.log(obj)
var str = 'desc'
obj[str] = 'this is a desc'
console.log(obj)

// Symbol对象
var unique = Symbol('key')
obj[unique] = 'this is symbol'
console.log(obj)
// 取值
console.log(obj[unique])
// 私有属性
// 如果不给unique变量，这个属性谁也无法获取

// 面向对象编程，封装（数据，方法）
// golang没有class，只有struct
// 函数式编程
