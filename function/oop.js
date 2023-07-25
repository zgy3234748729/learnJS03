// js中的面向对象编程
// 1.封装(隐藏数据，暴露方法)
// 2.继承
// 函数作为构造函数，函数中包括属性和方法

function Person(name, age) {
  // 构造函数中的this指向实例对象
  this.name = name;
  this.age = age;
  this.getName = function () {
    console.log(this.name);
    return this.name;
  };

  this.setName = function (name) {
    this.name = name;
  };
}

Person.prototype.who = function () {
  console.log(this.name);
};

const obj1 = new Person("zgy", 20);
obj1.setName("jet");
// obj1.getName();
obj1.who();

// 请仿写数组的forEach方法
const arr = [1, 2, 3];
// TODO: arr.myselfForEach((item) => (console.log(item)))
// arr.forEach((item) => (console.log(item)))

Array.prototype.myselfForEach = function (fn) {
  for (i = 0; i < this.length; i++) {
    fn(this[i]);
  }
};
arr.myselfForEach((item) => {
    // console.log(item)
    return item + 1
});
console.log(arr)    // 1, 2, 3


// map
Array.prototype.myMap = function (fn) {
  const arr = []
  for (i = 0; i < this.length; i++) {
    arr[i] = fn(this[i])
  }
  return arr
};
const result = arr.myMap((item) => {
    // console.log(item + 1)
    return item + 1
})
console.log(result)   //2, 3, 4
