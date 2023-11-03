// if we convert a number to other DataType this is called
// conversion operator.

let scroe = "33";
let isNumber = Number(scroe);
// console.log(typeof isNumber);
// console.log( isNumber);

//
let newScore = "33abc";
let isNewNumber = Number(newScore);

// console.log(typeof isNewNumber);
// console.log(isNewNumber);

// 33 => number
// 33 => NaN (Not a Number)
let isLoggedIn = 1;
let isBoolean = Boolean(isLoggedIn);
// console.log(typeof isBoolean);
// console.log(isBoolean);

//  1 => true , 0 => false;
//  "" => false
//  "umar" => true

let someNumber = 33;
let stringNumber = String(someNumber);
// console.log(typeof stringNumber);
// console.log(stringNumber);

// ******************* Operators ****************** \\

// 2 + 2 =4 // but + is operaors in js.

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/2);
// console.log(2%2);

let str1 = "Heloo";
let str2 = " Muhammad Umar";
let str3 = str1 + str2;
// console.log(str3);
//
// console.log("1"+2);
// console.log(1+"2");
// console.log("1"+2+2);
// console.log(1+2+"2");
// console.log((3+4)*5%3);

//
let gameCounter = 100;
// gameCounter++ Postfix
++gameCounter; // Prefix
console.log(gameCounter);
