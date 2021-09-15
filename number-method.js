/* number method  */

// number type variable
const number = 25;
let num= 89;
// typeof method use to know the  data type 
const type= typeof(number)
console.log(num)
console.log(type)

/* string to number convart  */

const productPrice= '2564';

// use number method to convart string to number 

const value = Number(productPrice);

console.log(value);
// type fo 
console.log(typeof(value));

/* parseFloat and parseInt  are also convart string to number */

const price = '2548.365';

// parseFloat (in decimall number )

const convart = parseFloat(price);
console.log(convart)


const age = '55.396';

const convartAge= parseInt(age);
console.log(convartAge)

// simple math

let a= 7;
let b = 5;

const x = a+b;
const y = a-b;
const p = a*b;
const q = a/b;
// modulus (vagshes operator)
const t = a%b;

console.log(x,y,p,q,t)



/* shortcut string to number */


const myNumber = "786";

const isNumber = + myNumber ;
console.log(typeof isNumber)

