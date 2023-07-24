// 记得理解，多用 @zgy

function test() {
    console.log('test')
}

// best practice
// 凡是callback函数，优先考虑使用箭头函数
const test1 = (a) => {
    console.log(a)
    console.log('test')
}

console.log(test1('a'))

const arr = [1, 2, 3, 4]
arr.forEach((item) => {
    console.log(item)
})

// callback + arrow fn





function platform(obj) {
    obj.fn('1')
}


// 如果只有一个参数，可以省去()         !!!
platform({fn: () => console.log('callback')})

platform({
    fn: (num) => {
        console.log(num)
    }
})



// 如果只有一个表达式，可以省去return
const getTwo = () => 1 + 1;
console.log(getTwo())
