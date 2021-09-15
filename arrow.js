// arrow function

const factorial = (num)=>{
    let fact= 1;
    for(let i = 1; i <= num; i++){
        fact = fact * i;
    
       
    }

   return fact
    
}

const add= (a, b)=>{
    const sum = a +b ;
    return sum;
}

const multiply = (a,b,c)=>{
    const gun = a * c* b;
    return gun
}

console.log(multiply(5,5,5))
console.log(add(5,5))
console.log(factorial(5));

