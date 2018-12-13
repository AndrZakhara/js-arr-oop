class myArray {
  constructor() {
    this.length = arguments.length;

    for(let i = 0; i < this.length; i++) {
      this[i] = arguments[i];
    };
  }
  

  // getLength() {
  //   let length = 0;
  //   console.log(this);

  //   for(let key in this.arguments) {
  //     console.log(key);
  //     // if(typeof key === 'number') {
  //     //   length++; 
  //     // }
  //     length++; 
  //   }      
  //   console.log(`length: ${length}`);
  //   return length;      
  // };

  push() {

    for(let i = 0; arguments.length; i++) {
      
    }
    let index = this.length;
    this[index] = element;
    this.length++;    
  }

  pop() {
    let index = this.length-1;
    let elem = this[index];
    delete this[index];
    this.length--;
    return elem;
  }
};

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

