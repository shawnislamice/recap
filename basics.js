// Primitive Datatype
const x = 5;
const y = true;
const a = "Hello  ";

let z = x;
z = 10;
// console.log(x, z);

// Primitive Type
//Capture reference
const b = { name: "Shawon" };
const nums = [1, 2, 3];

const num1 = nums;
num1.push(4);
// console.log(num1, nums);

const c = b;
c.age = 24;
// console.log(c, b);
// console.log(b.age);
b.address = "Alim Para";
// console.log(c, b);

// Truthy and Falsy Values

// Falsy values: false,0,"",null,undefined,NaN
// Truthy Value: "Shawon",125,true,1-n,[],{}

const value = 1;
console.log(!!value); ///Verify whatever its true or false

