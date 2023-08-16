const test1 = () => {
  // 箭头函数
  console.log("hhhhhhh");
};

test1();

const test2 = function () {
  //匿名函数
  console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
};
test2();

const arr = [1, 2, 3, 4];
arr.forEach((item) => {
  console.log(item);
});

// callback + arrow fn

/**
 *  @param {fn: callback, name: string} obj
 */
function platform(obj) {
  obj.fn('1');
}

// 只有一个表达式，可以省略箭头函数的大括号{}
// 只有一个参数，可以省略括号()
platform({ fn: () => console.log("callback") });

platform({ fn: (number) => {
  console.log(number);
}})

// 如果只有一个表达式，可以省略return
const getTwo = () => 1 + 1;
console.log(typeof getTwo);
console.log("省去return:", getTwo());
