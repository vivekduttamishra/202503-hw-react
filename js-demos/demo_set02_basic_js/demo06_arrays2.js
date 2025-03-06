
let values= [2,3,9,11,8,4];


//looping through values. we have 3 types of for loops.

//standard c# style for loop
console.log('using standard for loop!')
for(let i=0;i<values.length;i++){
    console.log(i,values[i])
}


//using for-in loop [NOT VERY USEFUL FOR AN ARRAY]
//It is NOT SIMILAR TO C# for-each
console.log('for-in loop')
for(let i in values){
    console.log(i,values[i]);
}

//ES2015 for-of loop (similar c# for-each loop)
console.log('for of loop')
for(let value of values){
    console.log(value);
}