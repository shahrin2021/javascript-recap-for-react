
// truethy annd falsy 

/* 
Truethy 
1. empty array is truethy
2.empty object is truethy
3.any number with out 0
4.all string with out empty string
5.empty object is truthy

falsey

1.0 is a falsey
2.emoty is falsey
3.undefined
4.null

*/



const x = [];
if(x){
    console.log('is true')
}else{
    console.log('is false')
}

const y = {};
if(y){
    console.log('is true')
}else{
    console.log('is false')
}

const myObj = {name:'sohag', age:25};

if(myObj){
    console.log('is true')
}else{
    console.log('is false')}

let p = 7;
    if(p){
        console.log('is true')
    }else{
        console.log('is false')}

        let q = -1;
        if(q){
            console.log('is true')
        }else{
            console.log('is false')}  
            
            
        const str = "open";
        
        if(q){
            console.log('is true')
        }else{
            console.log('is false')}

            const empty = '';

            if(empty){
                console.log('is true')
            }else{
                console.log('is false')}