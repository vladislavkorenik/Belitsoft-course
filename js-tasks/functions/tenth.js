class Cuboid {
    // TODO: Program Me
    constructor(length, width, height) {
      this.length = length;
      this.width = width;
      this.height = height;
    }
    get volume() {
      return this.length * this.width * this.height;
    }
    get surfaceArea() {
      return 2 * (this.height * this.length + this.width * this.height + this.width * this.length);
    }
  }
  class Cube extends Cuboid {
    constructor(number) {
      super(number, number, number);
    }
  }