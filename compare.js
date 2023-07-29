// == 存在数据类型转换，如果类型不同，先转换类型，再比较
// === 严格相等

console.log(undefined === null) //false
console.log(undefined == null)  //true

console.log('1' + 0)    //按字符串处理
console.log('1' - 1)    //按数字处理