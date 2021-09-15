  /* array which contains multiple elements(value)  */

  const myNumber = [56,36,85,78,25,36,25,89,88,86];

//   array is 0 base index 
// access array property using index number

const x = myNumber[0];
const y = myNumber[5]
myNumber[0]=66;

// console.log(myNumber)
// console.log(y)
// console.log(x)

// array method 

// add property in end of an array using push() method 
const p= myNumber.push(56)
const q= myNumber.push(69)
// console.log(myNumber)
//remove property in end of an array using pop() method 

myNumber.pop()
myNumber.pop()
myNumber.pop()
// console.log(myNumber)

// add property in start  of an array using unshift() method 

const c = myNumber.unshift(22);
const d = myNumber.unshift(78);
// console.log(myNumber)

// remove property in end of an array using shift() method 

myNumber.shift();
myNumber.shift();
myNumber.shift();
// console.log(myNumber)


const t = myNumber.valueOf();
// console.log(t)


// reduce() method  use to sum an array 

const sum=  myNumber.reduce((a,b)=>{
    return a +b
})

// console.log(sum)


// array of length 

const  r = myNumber.length;

// console.log(r)

const productPrice =[251,321,588,561,784,698,124,362,456];

// for loop of an array 
  let number = 0;
for (let i = 0 ; i<productPrice.length; i++){
  const w = productPrice[i]
  if(w > number){
    number = w;
    console.log(number)
  }

}

for (const element of productPrice){
  console.log(element)
}