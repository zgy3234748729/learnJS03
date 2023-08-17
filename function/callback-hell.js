function network(url, fn) {
  // 请求url， 通过fn返回url结果
  fn({ data: url });
}

// 当回调函数有依赖关系时，会出现回调地狱
const fn = function (params) {
  console.log(params);
  network(`${params.data}|second`, function (params) {
    console.log(params);
    network(`${params.data}|third`, function (params) {
      console.log(params);
      network(`${params.data}|fourth`, function (params) {
        console.log(params);
        network(`${params.data}|fifth`, function (params) {
          console.log(params);
        });
      });
    });
  });
};

network("first", fn);
