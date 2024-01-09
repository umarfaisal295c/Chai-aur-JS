// for each loop
// syntax
// array.forEach(element => {

// });

// ------- 1 --------
// with array.
const array = ["js", "css", "py", "rb"];
array.forEach((item) => {
  // console.log(item);
});
// 2nd way.
array.forEach((item, index, arr) => {
  // console.log(item,index,arr);
});
// with object.
const myCoding = [
  {
    languageName: "JavaScript",
    fileName: "js",
  },
  {
    languageName: "python",
    fileName: "py",
  },
  {
    languageName: "rb",
    fileName: "ruby",
  },
];
myCoding.forEach((item) => {
  // console.log(item.languageName);
});
