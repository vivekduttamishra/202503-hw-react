

function plus(x,y){
    return x+y;
}

console.log('plus(3,4)',plus(3,4));

let numbers =[1,2,3,4,5];
//how do I sum it's first two elements

//normal way
let r1= plus(numbers[0],numbers[1]);
console.log('r1',r1);


//js way
let r2= plus(...numbers); //same as plus(1,2,3,4,5) => plus(1,2) //3,4,5 ignored
console.log('r2',r2);
