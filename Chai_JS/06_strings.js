// We can write string in two ways "Umar" or 'Umar'.
//
    const name="Umar"
    const repoCount=39
    console.log(name+repoCount); // out dated 
    // 
    console.log(`My name is ${name} or my repo count is ${repoCount}`)// template string.
//
//
    // Another Way to declare the String
    const gameName=new String("Faisal")// index start from ( 0 )
    console.log(gameName[2]);
    // String is a object.
    console.log(gameName.__proto__);// example string is a (object).
//
//
    // Methods of Strings.
    console.log(gameName.length);
    console.log(gameName.toUpperCase());
    console.log(gameName.charAt(5));//input the index and check the character in the position
    console.log(gameName.indexOf('i'));// check the position he gives the index.
    // substring 
    const name1="Faisal-Islam"
    const newName=name1.substring(0,5)// first how to start and second hoe to this end.
    console.log(newName);
    // slice
    const another=name1.slice(-8,5)// we can also pass negative value in slice function.
    console.log(another);
    // trim => // remove extra spaces.
    const newString="   Umar   "
    console.log(newString);// without trim() 
    console.log(newString.trim()); // with trim()
    // replace => replace word to another word
    const url="https://codewithumar%20notes"
    console.log(url.replace("%20","_"));// kis ki jagha or kis ko.
    // includes => check the string is aviable .
    console.log(url.includes("umar"));// true
    console.log(url.includes("umarr"));// false
    console.log(name1.split('-'));
