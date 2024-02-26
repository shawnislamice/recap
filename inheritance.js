class Owner {
  constructor(name, age) {
    this.ownerName = name;
    this.ownerAge = age;
  }
  ownerInfo() {
    console.log(`Owner name : ${this.ownerName}`);
    console.log(`Owner age : ${this.ownerAge}`);
  }
}

class Animal extends Owner {
  name = "Tiger";
  color = "Yellow";
  constructor(wName, wAge) {
    super(wName, wAge);
  }
  show() {
    console.log("Hello from class");
  }
}

const cat = new Animal("Shawon", 24);
console.log(cat.ownerName, cat.ownerAge);
