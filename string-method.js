/* string */

/* get length of a string using length method  */

const myName = 'shofikul';

// length 

const stringLength = myName.length;

console.log(stringLength);

/* number to convart string */
const dateOfBirth = 1926;

// String method 

const convartString= String(dateOfBirth);

console.log(convartString);

console.log(typeof convartString)

// tofixed 

const price = 256.235698;

const  convartPrice= price.toFixed(3)
console.log(convartPrice);

// toString method 

const age= 25;


let x = age.toString();
console.log(typeof x)


// string method 
// slice
const discribtion= 'hello! this is hakkan';
const slices = discribtion.slice(0 ,1)
console.log(slices)

// substr 

const subStr = discribtion.substr(0,1);

const subString= discribtion.substring(0,2);
console.log(subString)

const index= discribtion.indexOf('y');
console.log(index)