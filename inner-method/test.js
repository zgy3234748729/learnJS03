const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter((word) => word.length > 6);
console.log(result);
result[0] = result[0] + 'zgy';
console.log(result[0]);
console.log('拷贝的result:', result);
console.log(typeof result[0]);
console.log('preCopy words:', words);
console.log(typeof words);