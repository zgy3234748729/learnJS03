function Person(name, age) {
  this.name = "name";
  this.age = age;
  this.setName = function (name) {
    this.name = name;
  };
  this.getName = function () {
    console.log(this.name);
    return this.name;
  };
}

Array.prototype.youselfMap = function (callback) {
  console.log(this);
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};
const arr = [1, 2, 3];
console.log("张广园")
const result = arr.youselfMap( item => item + 1);
console.log(result);