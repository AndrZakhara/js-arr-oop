class myArray {
    constructor() {
      this.length = arguments.length;
      for(let i = 0; i < this.length; i++) {
        this[i] = arguments[i];
      }
    }
    
    push() {
        console.log(arguments);
      for(let i = 0; i < arguments.length; i++) {
        this[this.length] = arguments[i];
        this.length++;  
      }        
    }
  
    pop() {
      let index = this.length-1;
      let elem = this[index];
      delete this[index];
      this.length--;
      return elem;
    }
  }

export default myArray;
