// Get Coding :)

class Shark extends Animal {
    constructor(name, age, status) {
      super(name, age, 0, "shark", status);
    }
  }
  
  class Cat extends Animal {
    constructor(name, age, status) {
      super(name, age, 4, "cat", status);
      this.introduce = () => super.introduce() + '  Meow meow!';
    }
  }
  
  class Dog extends Animal {
    constructor(name, age, status, master) {
      super(name, age, 4, "dog", status);
      this.greetMaster = () => 'Hello' + " " + master;
    }
  }