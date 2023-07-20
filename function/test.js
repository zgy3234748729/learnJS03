function sing() {
    console.log("让我为你唱首歌")
    return '没有什么风格'
}

const obj = {
    fn: sing,
    name: 'zgy',
    dance() {
        console.log('爵士')
    }
}

// const fromObjFunction = obj.fn()
// console.log(fromObjFunction)
obj.dance()