const plus=(x,y)=>x+y;
const minus=(x,y)=>x-y;

const selector=(symbol)=>{

  if(symbol==='+')
    return plus;
  else if(symbol=='-')
    return minus;
    
}

let a=selector('+'); //a=> function plus

let b=a(20,30) ; //plus(20,30)

console.log('a',a); //a is function

console.log('b',b); //b is result


let c = selector('-')(5,8);
console.log('c',c);


