// for in loop.
// syntax
// for (const key in object) {

// }

// ------- 1 -------
// for in loop with object.
const myObj = {
  js: "javascript",
  cpp: "c plus plus",
  py: "python",
};
for (const key in myObj) {
  // console.log(key);
  // console.log(`${key} :-> ${myObj[key]}`);
}
// ------- 2 --------
// with array.

const array = ["js", "css", "py", "rb"];
for (const key in array) {
  // console.log(key);
  // console.log(`${key} :-> ${array[key]}`);
}
