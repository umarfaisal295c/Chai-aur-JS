// Array :->
/*
    is a storing a collection of multiple elements under a single  variable name 
    and has member for performing common array operations.
1. Array is a collection which is ordered and changeable.
2. Array is a collection which is indexed.
3. Array is a collection which is mutable.
*/
const array = [0, 1, 2, 3, 4, 5];
// console.log(array);

// Methods for creating arrays .
//
const myArray = [0, 1, 2, 3, 4, 5];
console.log(myArray[4]);
const HerosArray = ["iron-man","spider-man","captain-america"]
console.log(HerosArray);
const myArr2 = new Array(1,2,3,4,5)
console.log(myArr2);
//
/*
        ----Notes-----
        JavaScript (array-copy-operations) create (shallow copy & DeepCopy).
        1 => A shallow copy of an object is a copy whose properties share the same referance.
        2 => A deep copy of an object is a copy whose prperties do not  share the same referance 
*/
//
    // Array Methods .
    // 1 => push () => add new value in array.
        myArray.push(6)
        console.log(myArray);
    // 2 => pop () => remove last value in array.
        myArray.pop()
        console.log(myArray);
    // 3 => shift () => remove first value in array.
        myArray.shift()
        console.log(myArray);
    // 4 => unshift () => add new value in array.
        myArray.unshift(9)
        console.log(myArray);
    // 5 => reverse () => reverse array.
        myArray.reverse()
        console.log(myArray);
    // 6 => includes () => check the value in array.
        console.log(myArray.includes(8));
    // 7 => indexOf () => check the value in index position of array.
        console.log(myArray.indexOf(8));
    // 8 => join () => change the type of array
        const newArray = myArray.join()
        console.log(myArray);
        console.log(newArray);
        console.log(typeof newArray);
    // 9 => slice & splice () => 
        console.log("A", myArray);
        const myn1 = myArray.slice(1,3) // => last value not be included.
        console.log(myn1);
        console.log("B", myArray);
        const myn2 =myArray.splice(1,3) // cut these value in array
        console.log("C", myArray);
        console.log(myn2);