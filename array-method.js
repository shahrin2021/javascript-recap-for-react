 const arr = [21,36,45,21,75,29,80]


 /* array.map method */

 const add = arr.map((num)=>{
    return num *2})
 console.log(add);
     

 const addition = arr.map((num)=>{
     return num + 3
 });

 console.log(add);


 const products = [
     {name:'Samsung',model:'M20',price: 16500},
     {name:'Oppo',model:'F12',price: 1700},
     {name:'Vivo',model:'y20',price: 12500},
     {name:'Htc',model:'Ma20',price: 28500},
     {name:'Hp',model:'laptop',price: 56500},
     {name:'Lenevo',model:'laptop',price: 46500},
     {name:'Deal',model:'laptop',price: 42500}
 ];

 const product= products.filter((p)=>{
     const x = []
     if(p.model=="laptop"){
         return p
     }
     
 });


 console.log(product)

 const find = products.find((p)=> p.price < 20000);
 console.log(find)


 const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return num > 1;
}

console.log(array.filter(isPrime)); // [2, 3, 5, 7, 11, 13]


const loop = products.forEach(data=>{
    const price = data.price;
    console.log(price)
}) 

