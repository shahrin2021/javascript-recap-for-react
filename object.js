/* object  contain  property  and value  */

const myObject = {
name: 'tamim',
age:38,
job:'cricketer',
team:'Bangladesh',
roll:'opener'

 }

/* access object property using object.property and bbject["property"] */

let x = myObject.name;
let y = myObject.age;
 let p = myObject['name'];
 let q = myObject['team']
console.log(x);
console.log(y);
console.log(p);
console.log(q);

// use varia ble

// const job = myObject['job'];

// console.log(job)


// for in loop in an object 

for(const property in myObject){
    
    console.log(`${property}: ${myObject[property]}`);
   
}

/* object keys , value , entris */
// keys contain property
const key = Object.keys(myObject);
console.log(key)

// values contain value of an object
const value = Object.values(myObject)
console.log(value);

// entries contain key value pair
const entris = Object.entries(myObject);

console.log(entris)


