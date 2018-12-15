import myArray from './MyArr'

const arr = new myArray(1, 4, [2, 4], {name: 'Ivan'});

console.log('---test_01---');
console.log(arr[0] === 1); // true
console.log(arr[3].name === 'Ivan'); // true
console.log(arr.length === 4); // true

console.log('---test_02--- push');
console.log(arr);
console.log(arr.length);
arr.push('new element 123');
console.log(arr);
console.log(arr.length);
arr.push({task: 'complete'}, 777);
console.log(arr);
console.log(arr.length);

console.log('---test_03--- pop');
arr.pop();
// console.log(elem);
console.log(arr);
console.log(arr.length);
// console.log(arr[3]);

console.log('---test_04--- forEach');
arr.forEach((elem, i, arr) => {
  return elem
});
console.log(arr);
arr.forEach((elem) => {
  return elem + 100
});
console.log(arr);

console.log('---test_04--- map');
const newArr = arr.map(i => i);
console.log(newArr);

newArr.pop();
console.log(arr);
console.log(newArr);

