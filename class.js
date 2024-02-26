//Decrease code repeattion

class Animal {
  name = "Tiger";
  color = "Yellow";

  show() {
    console.log("Hello from class");
  }
}
const cat = new Animal();
// console.log(cat.name)

// cat.show()

class Animal2 {
  name;
  color;
  constructor(petName, petColor) {
    this.name = petName;
    this.color = petColor;
  }
  showInfo() {
    console.log("Pet name is :", this.name);
    console.log("Pet  color is :", this.color);
  }
}

const cat2 = new Animal2("Travis", "White");
console.log(cat2.name);
cat2.showInfo()
