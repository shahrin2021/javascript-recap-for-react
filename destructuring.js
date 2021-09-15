// variable destructuring

var first = 5;
var second =7;

var [first,second] = [second, first];

console.log(first);


// array destructuring

const myArray = [45,89,65,85,69,25,366,856,478,525,85]

const [a,b,c,d,e,f,g]=myArray;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);


const myObject ={name:'samsung', model:'M20', price:15000 ,dalyVaryCharge:100};

const {name, model, dalyVaryCharge , price}= myObject;

console.log(dalyVaryCharge)
console.log(name)
console.log(model)
console.log(price)
