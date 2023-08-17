// 闭包
// 一个函数不通过形参传递值，就是闭包
const obj = {
  name: "zgy",
};

// 此函数执行时，一定要有obj，一定要有外部数据（环境）
function closure() {
  //closure 函数执行时，依赖obj
  console.log(obj.name);
}

const val1 = closure; // 保存的不仅仅是函数 val1 = function + environment
val1(); // 可以直接运行

function simpleFn(obj) {
  // 保存时，只要保存function代码就行
  console.log(obj);
}

const val2 = simpleFn; // 跟外界没有关系，每次调用时，都需要自己重新传参

// const arr = [1, 2, 3, 4, 5, 6];
// const result = [];
// for (var i = 0; i < arr.length; i++) {
//   const clo = function () {
//     return i;
//   };
//   console.log(clo());
//   result.push(clo);
// }
// console.log("--------------");
// result.forEach((item) => console.log(item()));

const arr = [1, 2, 3, 4, 5, 6];
const result = [];
for (var i = 0; i < arr.length; i++) {
  const clo = () => { return i; };
  result.push(clo);
}
result.forEach((item) => console.log(item()));
