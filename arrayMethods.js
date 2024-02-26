const numbers = [10, 20, 30, 40, 50];

for (const number of numbers) {
  //   console.log(number);
}

numbers.forEach((item) => {
  //   console.log(item);
});

const number1 = numbers.forEach((item) => item); //For each can not return
// console.log(number1);

const number2 = numbers.map((item) => item + 1); //Map returns a new array
// console.log(number2);

const myFind = numbers.find((item) => item > 10);
// console.log(myFind);
const myFilter = numbers.filter((item) => item > 10);
// console.log(myFilter1);

const myReduce = numbers.reduce((c, p) => c + p, 0);
console.log(myReduce); 
