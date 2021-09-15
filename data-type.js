// data type


/* 

there are two type of datatype in js
1.primitive data
    a.number
    b.string; 
    c.undefined
    d.null
    e.symble
    f.booleal

2.non-primitive data type
    a.object
*/


const rollNumber = 25;

console.log(typeof rollNumber);
const friendName = 'kolimuddin';

console.log(typeof friendName);

let x;

console.log(typeof x)

const newArray = [54,23,96,85];
console.log(typeof newArray);
const newObject = {name:'harun',age: 58 , city: 'saidpur'};

console.log(typeof newObject);

const y = null;

console.log(typeof y)

const p ={job:'web developer'};
const q = p;

p.job="forntend developer"
console.log(p,q)