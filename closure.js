//Important **************************************

function outerFunction() {
  let a = 1;
  return function innerFunction() {
    a++;
    console.log("Value in inner: ", a);
  };
}
x = outerFunction(); //Separate Memory Space
y = outerFunction(); //Separate Memory Space
x();
x();
x();
x();
x();
y();
y();

//Definition: Closure is a combination of function where one function returns another one and the inner function has the access to its lexical scope variables
