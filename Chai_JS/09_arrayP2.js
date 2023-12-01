// Array JS Part 2.
const marvel_heros=["ironman","thor","captain","spiderman"]
const dc_heros=["superman","flash","batman"];
marvel_heros.push(dc_heros);
console.log(marvel_heros);// return nestes array
console.log(marvel_heros[3][0]);
// this is not optimazation
// replace this method we use concat() method.
// concat() => add two arrays and return new array.
const heros=marvel_heros.concat(dc_heros)
console.log(heros);
console.log(heros[5]); // this mehtod is good but not better 
// replace this method we use spread operator.
const new_heros=[...marvel_heros,...dc_heros]
// console.log(new_heros);
// so we use new method flat() method
const another_array=[1,2,3,[4,5,6],7,[8,9,10,[11,12,13]]]
const real_array=another_array.flat(Infinity)
console.log(real_array);
// check the array.
console.log(Array.isArray("Umar"))// check the array or not.
// convert the array 
console.log(Array.from("Umar"));
// of() =>
let s1=100;
let s2=200;
let s3=300;
console.log(Array.of(s1,s2,s3));
