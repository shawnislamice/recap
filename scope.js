function hello() {
  let y = 10;
  var x = 10;
}
hello();
function hello2() {
  y = 10;
  x = 10;
}
hello2();

//It can be accessed  outside the function
console.log(x, y);

const z = 10;
{
  const z = 20;
  console.log(z);
}
console.log(z);

console.log(num);
var num = 50;
