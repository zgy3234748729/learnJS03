const a = 2;
a = 1;  //每一个赋值的数据，需要新的内存空间保存

const test = {
    name: 1,
    age: 2,
}

test.name = 'test'

// 不行
// test = {
//     name: 2,
//     age: 2,
// }
console.log('name: ' + test.name);