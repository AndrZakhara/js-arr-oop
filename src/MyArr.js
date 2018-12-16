class myArray {
  constructor() {
    arguments !== undefined ? this.length = arguments.length : this.length = 0;

    for (let i = 0; i < this.length; i++) {
      this[i] = arguments[i];
    }
  }

  static from(arrayLike, callback, thisArg) {
    let context,
      newArray = new myArray();

    thisArg === undefined ? context = arrayLike : context = thisArg;

    if(callback) {
      for (let i = 0; i < arrayLike.length; i++) {
        newArray[i] = callback.call(context, arrayLike[i], i, arrayLike);
        newArray.length++;
      }
    }
    else {
      for (let i = 0; i < arrayLike.length; i++) {
        newArray[i] = arrayLike[i];
        newArray.length++;
      }
    }

    return newArray;
  }

  push() {
    for (let i = 0; i < arguments.length; i++) {
      this[this.length] = arguments[i];
      this.length++;
    }
  }

  pop() {
    let index = this.length - 1;
    let element = this[index];

    delete this[index];
    this.length--;

    return element;
  }

  forEach(callBack, thisArg) {
    let context;

    thisArg === undefined ? context = this : context = thisArg;

    for (let i = 0; i < this.length; i++) {
      this[i] = callBack.call(context, this[i], i, this);
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

  reduce(callback, initialValue) {
    let accumulator;
    let previousValue;

    initialValue !== undefined? accumulator = initialValue : accumulator = 0;
    previousValue = accumulator;
    callback.apply(this);

    for(let i = 0; i < this.length; i++) {
      previousValue = callback(previousValue, this[i], i, this);
    }

    return previousValue;
  }

  filter(callback, thisArg) {
    let context,
        newArray = new myArray(),
        boolean,
        k = 0;

    thisArg === undefined ? context = this : context = thisArg;

    for (let i = 0; i < this.length; i++) {
      boolean = callback.call(context, this[i], i, this);

      if(boolean) {
        newArray[k] = this[i];
        k++;
        newArray.length++
      }
    }

    return newArray;
  }

  toString() {
    let stringResult = "";

    for (let i = 0; i < this.length; i++) {
      (i !== this.length - 1) ? stringResult += this[i] + "," : stringResult += this[i];
    }

    return stringResult;
  }

  sort(compareFunction) {
    if (compareFunction) {
      let element;

      for (let j = this.length; j > 1; j--) {
        for (let i = 0; i < this.length-1; i++) {
          if (compareFunction(this[i], this[i + 1]) > 0) {
            element = this[i];
            this[i] = this[i + 1];
            this[i + 1] = element;
          }
        }
      }

      return this;
    }
    else {
      for (let i = 1; i < this.length; i++) {
        let currentElement = this[i];
        let j = i;

        while (j > 0 && String(this[j - 1]) > String(currentElement)) {
          this[j] = this[j - 1];
          j--;
        }

        this[j] = currentElement;
      }

      return this;
    }
  }
}

export default myArray;
