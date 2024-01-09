// for of loop
// syntax
// for (const iterator of object) {
// iterator means variable name and object kis ko loop
// krwana hai.
// }
// ---------- 1 ----------
// loop with array.
const arr = [1, 2, 3, 4, 5];
for (const num of arr) {
  // console.log(num);
}
// ----------- 2 ----------
// loop with string.
const str = "IronMan";
for (const string of str) {
  // console.log(string);
}
// ----------- 3 ----------
// loop with Maps.
const map = new Map(); // takes a unique values.
map.set("pk", "Pakistan");
map.set("In", "India");
map.set("US", "United States");
map.set("pk", "Pakistan"); // dont return the same value.
// console.log(map);
// for of loop with map.
for (const [key,value] of map) {
    // console.log(key,":-",value);
}
// ----------5---------
// loop with objects
const myObj={
    'game1':"gta6",
    'game2':"gta5"
}
for (const [key,value] of myObj) { // loop does not support.
    // console.log(key,":-",value);
}