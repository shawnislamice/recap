const numbers = [2, 4, 1];
const number1 = numbers;
number1.push(10);
number1.push(30);
numbers.push(20);
console.log(numbers, number1);

const number2 = [];
for (let number of numbers) {
  number2.push(number);
}

number2.push(40);
console.log(number2);

const number3 = [...numbers]; //Spread korle duita array er memory address different hoye jhay.
number3.push(50);
console.log(number3);

const nums = [3, 5, 2, 6, 7, 5, 8, 6, 4, 5, 41];

const [a, b, c, ...d] = nums;
console.log(d);

const person = {
  name: "Shawon",
  age: 24,
  address:{
    zilla:"Chandpur",
    village:"Chandpur Sadar"
  }
};

const person1 = { ...person };
person1.email = "hello@gmail.com";

console.log(person1, person);

const { name:myName, age,address:{zilla}} = person;
// console.log(name)
// const {address:{zilla}}=person

console.log(age)

// const {zilla}=address
console.log(zilla)

console.log(myName)


console.log(zilla)