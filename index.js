class myArray {
  constructor() {
    for(let i = 0; i < this.length; i++) {
      this.i = this.arguments[i];
    };

    this.arguments = arguments;
    this.length = this.getLength();
    }

  getProps(index) {
    // console.log(this.arguments[3]);    
  }; 
  
  getLength() {
    let length = 0;

    for(let key in this.arguments) {
      length++; 
    }      
    console.log(`length: ${length}`);
    return length;      
  }

  push(element) {
    this.arguments[this.length]=element;
    this.length++;
  }

  pop() {
    delete this.arguments[this.length-1];
    this.length--;
  }
};

const arr = new myArray(1, 4, [2, 4], { name: 'Ivan' });
console.log(arr.length);
arr.push('new element');
console.log(arr.length);
console.log(arr);
arr.pop();
console.log(arr);
console.log(arr.length);
console.log(arr[3]);

