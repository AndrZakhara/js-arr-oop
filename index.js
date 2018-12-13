class myArray {
  constructor() {
    this.arguments = arguments;
    // console.log(this.arguments);
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

};

const arr = new myArray(1, 4, [2, 4], { name: 'Ivan' });
// arr.getLength();
console.log(arr.length);
arr.push('new element');
console.log(arr.length);
console.log(arr);

