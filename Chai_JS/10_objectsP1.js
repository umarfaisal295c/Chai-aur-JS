// There are two ways to create objects in JavaScript.
/*
    1=> Literals
    2=> constructors
*/
//
// interview question.
const mySymbol = Symbol("Key1"); // use the variable in JsUser Object.
const JsUser = {
  name: "Umar", // first called (key) second called (value).
  age: 19,
  location: "Lahore",
  email: "umar@gmail.com",
  isLoggined: false,
  // mySymbol:"myKey1"  X worng syntax.
  [mySymbol]: "myKey1", // right syntax.
};
// there are many ways to access these objects values in JavaScript.
console.log(JsUser.name); // 1 method.
console.log(JsUser["email"]); // 2 method.
// console.log(typeof JsUser.mySymbol); // wrong syntax to print mySymbol.

console.log(JsUser[mySymbol]); // right syntax to print mySymbol.
// change the objects values.
JsUser.email = "usman@.com";
console.log(JsUser.email);
// freeze the objects.

// Object.freeze(JsUser) // means objects value cannot be changed.

// JsUser.email="usman295c@.com"
// console.log(JsUser.email);

// Add finction in Objects.
JsUser.greeting = function () {
  console.log("Hello Js user!");
};
console.log(JsUser.greeting());
// add new function in Objects
JsUser.greetingTwo = function () {
  console.log(`Hello Js User ${this.name}`); // this is used for same reference values.
};
console.log(JsUser.greetingTwo());
