function show(name, age) {
  console.log("My name is " + name + "\nMy age is: " + age);
}

function fun1(name, age, callback) {
  console.log("My age is: " + age);
  setTimeout(() => {
    callback(name, age);
  }, 2000);
  // callback(name,age)
}
fun1("Shawon Islam", 26, show);
