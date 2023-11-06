/*
    There are two types of dataTypes in JS .
    1=> Primitive DataTypes.
    2=> Non-Primitive DataTypes.
    /------------/ 
    1 => 
    number , string , null , undefined , boolean , symbol , BigInt.
    Example (of each)=>
*/
//
    let number=39; // 1
    let str="Umar" // 2
    let Null=null; // 3
    let undef; // 4
    let isLoggedIn=true; // 5
    let id1=Symbol('39') //6
    let id2=Symbol('39')
    console.log(id1===id2);
    let BigInt=28374657687089n // 7

//
/*
    2 => Non-Primitive DataTypes :->
        Array , objects , functions.
*/
//
    const heros=["Iron-Man","Captian America","Spider-Man"] // 1
    const myObj={ // 2
        name:"Umar", 
        LN:39,
        age:19,
    }
    const myFunction=function(){
        console.log("Hello World");
    }
//