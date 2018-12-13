import myArray from './MyArr'
const arr = new myArray(1, 4, [2, 4], { name: 'Ivan' });
console.log(arr);
console.log(arr.length);
arr.push('new element 123');
console.log(arr);
console.log(arr.length);
arr.pop();
// console.log(elem);
console.log(arr);
console.log(arr.length);
// console.log(arr[3]);

