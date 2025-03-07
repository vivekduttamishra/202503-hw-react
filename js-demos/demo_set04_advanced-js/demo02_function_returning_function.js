const plus=(x,y)=>x+y;
const minus=(x,y)=>x-y;

const selector=(symbol)=>{

  if(symbol==='+')
    return plus;
  else if(symbol=='-')
    return minus;
    
}


let a=  selector('+');
let b= selector('+');

console.log('a',a);
console.log('b',b);

console.log('a===b',a===b);
