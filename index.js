class myArray {
  constructor() {
    this.arguments = arguments;
  }
    getProps() {
      console.log(this.arguments);
    }; 
    
    getLendth() {
      console.log(this.arguments[3]);
    }
};

let arr = new myArray(1, 4, [2, 4], { name: 'Ivan' });

arr.getProps();
arr.getLendth();

console.log(arr);