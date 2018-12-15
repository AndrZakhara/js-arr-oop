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

  forEach(callBack, thisArg) {
    let context;
    thisArg === undefined ? context = this : context = thisArg;
    callBack.apply(context);

    for (let i = 0; i < this.length; i++) {
      // this[i] = callBack.call(context, this[i], i, this);
      this[i] = callBack(this[i], i, this);
    }
  }

  map(callback, thisArg) {
    let context;
    let newArray = new myArray();

    thisArg === undefined ? context = this : context = thisArg;
    callback.apply(context);

    for (let i = 0; i < this.length; i++) {
      newArray[i] = callback(this[i], i, this);
    }
    newArray.length = context.length;

    return newArray;
  }
}

export default myArray;
