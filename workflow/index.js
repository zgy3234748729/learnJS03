// 定时
// setTimeout(() => {console.log('setTimeout')}, 3000)
// console.log('start')

// 1.callback函数
function network(callback) {
  // 2.异步
  setTimeout(() => {
    callback("callback");
  }, 3000);
}

// 单线程
network((data) => {
  console.log(data);
  network((data) => {
    console.log(data);
    network((data) => {
      console.log(data);
      network((data) => {
        console.log(data);
      });
    });
  });
});

console.log("hello world");
