// pop,push,shift
const arr = [1, 2, 3, 4, 5]
const arr1 = [{name: 1}, {name: 2}, {name: 3}]

// 1.数组遍历
const callback = function (item, index, arr) {
    console.log(item, index, arr)
}

// 引用类型在坐copy时，只是copy了引用地址：浅拷贝
// 深拷贝的意思为：新建一个对象，把原对象的属性值copy过来

// arr.forEach(callback)

// 1.forEach中的return没有影响
// arr1.forEach(function(item) {
//     // 如果原数组中的item时是引用数据类型，那对引用数据类型的修改
//     // 会影响原数组中的数据
//     // 一般情况下不这么做
//     item.name = item.name + 1
//     console.log(item.name)
// })

// 2.map 中return会修改数组的值
const newArr1 = arr1.map(function (item) {
    return {name: item.name + 1}
})

console.log(newArr1)
console.log(arr1)

// 3.Array.isArray 判断是否是数组

// 4.every
const result = arr.every(function (item){
    return item < 5
})
console.log(result)

// 5.find找出第一个满足条件的元素
const arr5 = [{name: 'pjw'}, {name: 'xxx'}, {name: 'ttt'}]
const arr5Result = arr5.find(function (item) {
    return item.name === 'pjw'
})
console.log(arr5Result)

// 5.1 findIndex~~~
const arr5_1Result = arr5.findIndex(function (item) {
    return 
})

// 6.filter
const arr6 = [{name: '1', isVip: true}, {name: '2', isVip: false}]
const arr6Result = arr6.filter(function (item) {
    return item.isVip
})

console.log(arr6Result)


// 7.数组扁平化， 面试
const arr7 = [1, 2, 3, [4, 5, 6, [7, 8, 9]]]
// TODO:递归函数实现扁平化
// TODO:将一个对象深拷贝
const arr7Result = arr7.flat(1)
console.log(arr7Result)


