const arr = [1, 2, 3, 4, 5];
console.log(arr);

console.log('arr[0]:',arr[0],'\narr[4]:',arr[4]);

const index = 3 // number
console.log('arr[index]:',arr[index]);

// 多维数组
const arr1 = [[1], [2], [3], [4], [5]]

// 数组并不要求数据类型一致
// 但是一般情况下，我们不会这么做
// 一般情况下，我们会把数据类型一致
// 元组
const arr2 = [1, '2', true, {name: 'zgy',value: 2}, [1,2,3], null, undefined]
console.log(arr2);

// 稀疏数组
const arr3 = [1];
arr3[100] = 100;
console.log(arr3)