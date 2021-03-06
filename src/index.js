import MyArray from './MyArr'

const arr = new MyArray(1, 4, [2, 4], {name: 'Ivan'});

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

console.log('---test_05--- map');
const newArr = arr.map(i => i);
console.log(newArr);

newArr.pop();
console.log(arr);
console.log(newArr);

console.log('---test_06--- reduce');
let priceArray = new MyArray(1,2, 3, 4);
console.log(priceArray);
const sum = priceArray.reduce((previousValue, currentValue) => {
  return previousValue + currentValue
}, 10);
console.log(sum);

console.log('---test_07--- filter');
const arrA = new MyArray(1, 'spray', 'limit', 'elite', 'exuberant', 'destruction', 'present');
const filteredArr = arrA.filter(elem => elem.length > 5);
console.log(arrA);
console.log(filteredArr);
console.log(arrA);

console.log('---test_08--- toString');
arrA.push([1, 2], {a: 'element'});
const string = arrA.toString();
console.log(string);

console.log('---test_09--- from');
let arrB = MyArray.from([1, 2, 3], x => x + x);
console.log(arrB);
let arrC = MyArray.from({length: 5}, (v, i) => i);
console.log(arrC);

console.log('---test_10--- sort');
let scores = new MyArray(1, 2, 10, 21, 2, 'stone', 'apple', 'aaa');
console.log(scores.sort()); // [1, 10, 2, 21]
console.log(scores.sort(function(a, b) {
  return a - b;
}));

