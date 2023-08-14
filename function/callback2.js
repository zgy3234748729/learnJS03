function platform(a) {
  const get = 10;
  a(get);
}

// 回调函数，被一个第三方函数调用
function callback(get) {
  console.log("我是一个函数");
  console.log(get);
}
// 作为参数传递给第三方api
// platform(callback)

// 平台函数不通过return返回值，通过回调函数的参数返回值
function fn(a, b, c) {
  console.log(a, b, c);
}
function platform2(a) {
  a.fn(1, 2, 3);
}
platform2({ fn });

// 参数位置问题
function test(obj) {
  const { a: first, b, c } = obj;
  // const a = obj.a
  // const b = obj.b
  // const c = obj.c
  console.log(first, b, c);
  // console.log(obj.a, obj.c)
}

// test({ a: 1, b: 2, c: 3 });


const params = {
	appId: '123',
	path: '23456',
	success: function () {
	}
}
wx.openEmbeddedMiniProgram(params)

// callback 函数最大的用处是和异步相关