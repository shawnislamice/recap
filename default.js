const add = (x, y = 1) => {
  console.log(x + y);
};
// add(2, 3);

const person = {
  name: "Shawon",
  age: 25,
  city: "Chandpur",
};
const showInfo = ({ name, age }) => {
  console.log(name, age);
};
showInfo(person);
