// for loop

// for(let i =1; i <=100; i++){
//     console.log(i)
// }
// let friends = ['abul','banul','balbulu']
// let maxName =friends[0]

// let x ;

// for (const friend of friends){
//     if(maxName.length < friend.length){  
//      x = friend

//      console.log(x)
       
//     }  
   
// }

// for (let i= 0; i < friends.length; i++){
//     let feiend= friends[i]
//     console.log(feiend)
//     console.log(i)
      
// }





var arr = [
    'first item',
    'second item is longer than the third one',
    'third longish item'
  ];
  
  var lgth = 0;
  var longest;
  
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > lgth) {
      var lgth = arr[i].length;
      longest = arr[i];
    }
  }
  
  console.log(longest);


//   factorial 


function factorial(num){
    let fact = 1;
    for (let i =1; i <=num; i++){
        const ele= i
       fact= fact * ele
    }
    return fact
}

console.log(factorial(6))