const arr = [1, 2, 3, 4, 5, 6];
const result = [];
for (var i = 0; i < arr.length; i++) {
  function wrapper(i_inner) {
    return function () {
      return arr[i_inner];
    }
  }
  result.push(wrapper(i));
}

result.forEach((item) => console.log(item()));