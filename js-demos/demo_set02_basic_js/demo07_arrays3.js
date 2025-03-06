
let values= [2,3,9,11,8];


console.log('values[4]',values[4]); //8

//accessing invalid index
console.log('values[10]',values[10]); //undefined
console.log('values[-1]',values[-1]); //undefined

//if we write/add value at invalid index
//it will successfully add the value at given index
//increasing the list size
//and filling gapes with 'undefined'

values[10]=10;  //[2,3,9,11,8,undefined,undefined,undefined,undefined,undefined,10];
console.log('values',values);

for(let i=0;i<values.length;i++)
    console.log('values[',i,']',values[i]);

for(let value of values)
    console.log(value)
    
