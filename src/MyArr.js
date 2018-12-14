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

    forEach(callBack) {
      // let callback = callBack.bind(callBack, this);
      console.log('forEach');
      callBack.apply(this);
      console.log(callBack.arguments);

      for(let i = 0; i < this.length; i++) {
        // callBack(this[i], i, this);

        this[i] = callBack(this[i], i, this);
      }
      console.log('forEach');
    }
  }

export default myArray;
