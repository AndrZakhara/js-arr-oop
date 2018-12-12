class myArray {
  constructor() {
    this.arguments = arguments;
    console.log(this.arguments);
    }

  getProps(index) {
    console.log(this.arguments[3]);    
  }; 
  
  getLength() {
    let length = 0;

    for(let key in this.arguments) {
      length++; 
    }      
    console.log(`length: ${length}`);
    return length;      
  }
};

const arr = new myArray(1, 4, [2, 4], { name: 'Ivan' });
arr.getLength();
