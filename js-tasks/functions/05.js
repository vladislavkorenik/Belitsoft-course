// TODO
Array.prototype.square = function() {
    return this.map(item => item * item);
  }
  Array.prototype.cube = function() {
    return this.map(item => item * item * item);
  }
  Array.prototype.sum = function() {
    return this.length == 0 ? 0 : this.reduce((acum, curr) => acum += curr);
  }
  Array.prototype.average = function() {
    return this.sum() / this.length;
  }
  Array.prototype.even = function() {
    return this.filter(item => item % 2 == 0);
  }
  Array.prototype.odd = function() {
    return this.filter(item => item % 2 != 0);
  }