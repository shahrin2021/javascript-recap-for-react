// // declear a simple function 

// function sum(a, b){
//     const x = a+b; 
//     console.log(x)
//     return x
// }

// sum(67,8)


// function getsum(arr){
//     let sums= 0;

//     for(const number of arr){       
//       sums = sums + number;
      
//     }
//     return  sums
// }
// let y = [1,2,3,4,5,6]
// const p = getsum(y)
// console.log(p)

// function multiply(x ,y){
//     const result = x * y ;
//     return result;
// }

// const call= multiply(4,5)
// console.log(call)




function leargstNumber(number){
 let leargst = number[0] ;
   for(let i = 0; i < number.length; i++){
       const element = number[i]
       if(element > leargst ){
           leargst = element;
           
           
       }
   }
   return leargst
}
var ppp= [25,69,87,45,874]
const x=leargstNumber(ppp);

console.log(x)

function leargstName(name){
    let bigname= name[0];
    let bestFriend;
    for(let i = 0 ; i <name.length; i++){
        const element= name[i]
        if(element.length > bigname.length){
            bestFriend= element
        }
    }
    return bestFriend;
}

let names =['kalam','salam','islam','manikka']

var finds= leargstName(names);
console.log(finds)