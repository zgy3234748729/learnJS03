// 哈希表
const hashMap = new Map();

hashMap.set("name", "zgy");
hashMap.set("age", 20);
hashMap.set("prop", { key: 1, value: 2 });
console.log(hashMap.has("name"));
console.log(hashMap.get("name"));
console.log(hashMap);
hashMap.delete("name");
console.log(hashMap);

// 对象
const hashMapObj = {};
hashMapObj.name = "jet";
hashMapObj.age = "20";

console.log(hashMapObj);

// hashmap和object的区别
// hashmap的key可以是任意数据类型
const pojo = { name: "test" };
hashMap.set(pojo, "aaa");
console.log(hashMap);
console.log(hashMap.get(pojo));
