// for loop it is also called iteration.
// syntax of for loop.
for (let i = 0; i <= 10; i++) {
  // console.log(i); //=> print 0 to 10 counting.
}
// 2
// for loop with if condition.
for (let i = 0; i < 10; i++) {
  if (i == 5) {
    // console.log(`${i} is the Best number.`);
  }
  //   console.log(i);
}
// 3
// for loop with array.
let myArray = ["ironman", "spiderman", "superman", "flashman"];
for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  //   console.log(element);
}
// 4
// nested for loop.
for (let i = 0; i <= 10; i++) {
  console.log(`outer loop value : ${i}`);
  for (let j = 0; j <= 10; j++) {
    // console.log(`inner loop value : ${j} and outer loop value : ${i}`);
    // print a table.
    // console.log(`${i} * ${j} = ${i*j}`);
  }
}
// for loop with break and continue values.
// break.
for (let i = 0; i <= 10; i++) {
  if (i == 5) {
    // console.log(`${i} is detected`);
    break;
  }
  // console.log(i);
}
for (let i = 0; i <= 10; i++) {
  if (i == 5) {
    console.log(`${i} is detected`);
    continue;
  } 
  console.log(i);
}
