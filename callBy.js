let x = 5;
let y = [1, 2, 3];
const modify = (a) => {
  a = a + 2;
  console.log(a);
};

modify(x);
console.log(x);

const modify2 = (x) => {
  x.push(22);
  console.log(x);
};
modify2(y);
console.log(y);
