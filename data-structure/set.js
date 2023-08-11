//set,集合数据类型
// 集合是由一组无序且唯一（即不能重复）的项组成
const set = new Set();

//set.add()
set.add(1);
set.add(2);
set.add(2);
set.add(2);
set.add(2);

// set.clear() Set(0) {}
// set.clear()

// set.delete()
// set.delete(2)

// set.has()
console.log(set.has(3));
console.log(set);

// 数组
const arr = [1, 2, 2, 3, 4, 5, 5];
// 将数组中的重复元素取出
// => [1, 2, 3, 4, 5]
const arrUniqueSet = new Set(arr);
// 将set转换成数组
const arrUnique = Array.from(arrUniqueSet);
console.log('set:',arrUniqueSet);
console.log('arr:',arrUnique);


