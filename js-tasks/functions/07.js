function nouveau (Constructor, ...arr) {
    // Don't forget, unnamed arguments after Constructor may be passed in!
    let obj = {}, temp = Constructor();
    Constructor.call(obj, ...arr);
    obj.__proto__ = Constructor.prototype;
    if(temp === null) {
      return obj;
    }
    if(typeof temp == 'object' || typeof temp == 'function') {
      return temp;
    }
    return obj;
  }