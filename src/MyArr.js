class myArray {
  constructor() {
    this.length = arguments.length;
    for (let i = 0; i < this.length; i++) {
      this[i] = arguments[i];
    }
  }

  push() {
    for (let i = 0; i < arguments.length; i++) {
      this[this.length] = arguments[i];
      this.length++;
    }
  }

  pop() {
    let index = this.length - 1;
    let elem = this[index];
    delete this[index];
    this.length--;
    return elem;
  }

  forEach(callBack) {
    const context = this;

    for (let i = 0; i < this.length; i++) {
      this[i] = callBack.call(context, this[i], i, this);
    }
  }
}

export default myArray;
