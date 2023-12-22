// create simple function .
function addTocart(num1) {
  return num1;
}
console.log(addTocart(200));
// cretate function for more then one values.
function addTocart2(num1) {
  return num1;
}
console.log(addTocart2(200, 400, 600)); // this function can store only singlr value.
// cretae new function for more values.
function addTocart3(...num1) {
  //... this is calles rest and spread operator.
  return num1;
}
console.log(addTocart3(200, 400, 600));
// add two parameters .
function addToCart4(val1, val2, ...num1) {
  return num1;
}
console.log(addToCart4(200, 400, 600, 2000));
// ----_______-------
// Objects in Functions.
const user = {
  username: "Umar",
  price: 999,
};
function handleObject(object) {
  console.log(`Username is ${object.username} and Price is ${object.price}`);
}
//  handleObject(user)
handleObject({
  username: "Usman",
  price: 399,
});
// Array in Functions.
const arrayValue=[200,400,600,800];
function handleArray(getValue){
    return getValue[2]
}
// console.log(handleArray(arrayValue));
console.log(handleArray([200,400,600,800]));