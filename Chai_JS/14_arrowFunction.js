// first we discuss this method in js.
const user = {
  username: "Umar",
  price: 999,
  welcomeMessage: function () {
    console.log(`${this.username} , welcome to website.`);
    console.log(this);
  },
};
// user.welcomeMessage();
// user.username="Usman";
// user.welcomeMessage( )
// console.log(this);

// Arrow Functions.
// this method cannot use in function.
function chai() {
  let user = "Umar";
  console.log(this.user); // this can used only in objects.
}
chai();
// Arrow functions.
// 1
const coffee = () => {
  let username = "Umar";
  console.log(this.user);
};
coffee();
// 2
const addTwo = (num1, num2) => {
  return num1 + num2;
};

console.log(addTwo(3, 4));
// 3
// there are two methods in Implicits and explicits return.
// normal functions is explicits
const add = (n1, n2) => n1 + n2; // this is called implicits
console.log(add(3, 4));
//4
const addFun = (n1, n2) => n1 + n2; // this is called implicits
console.log(addFun(8, 2));
// objects in Arrow Functions
const obj = () => ({ user: "Umar" });
console.log(obj());
