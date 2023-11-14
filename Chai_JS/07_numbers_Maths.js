const score=100;
console.log(score);
const balance = new Number(400)
console.log(balance);
console.log(balance.toString());// number will change in "string" dataType
console.log(balance.toString().length);// check the lenght of a number
console.log(typeof balance.toString()); // type will be "string"
// toFixed() => // if decimal value 100.00 we fixed the decimal value 
    console.log(balance.toFixed(2));
//
// toPrecision() => // return a precise value (means round off value).
    const  otherNumber=123.8966;
    console.log(otherNumber.toPrecision(3));
//
// toLocalString() => // use US standrad value ( hundred,thousand etc).
    const hundreds=100000;
    console.log(hundreds.toLocaleString());// by default
    console.log(hundreds.toLocaleString('en-in'));// use INdian standrad Beacuse PAKISTAN standrad is b/d.
//
//  +++++++++++++++ MATHS ++++++++++++++++++
  //  JS by default Library.
  console.log(Math);// Math is a object.
  console.log(Math.abs(-4)); // negative values change in Positive values.
  console.log(Math.round(4.5));// .5 ky bd value update kr dyta hai.
  console.log(Math.ceil(4.1));// if 4. sy kuch bi uper hu ga tu round off kr dy ga.
  console.log(Math.floor(4.9));//takes lowest value.
  console.log(Math.min(4,3,7,9)); // check minimum value
  console.log(Math.max(4,3,7,9)); // check maximun value
  console.log(Math.random());// random values between 0 and 1
  console.log(Math.random()*10+1);// values shifted from left side
  console.log((Math.random()*10)+1);// best use for shifted values.
  console.log(Math.floor(Math.random()*10)+1);// use floor method to takes lowest value.
// 
    const min=10;
    const max=20;
    console.log(Math.floor(Math.random()*(max-min+1))+min);
