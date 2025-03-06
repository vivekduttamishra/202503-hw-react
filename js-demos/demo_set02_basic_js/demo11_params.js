/*
   "..." indicates that all supplied values should be collected as list
*/

function sum(...numbers){
    //console.log('numbers',numbers);
    let result =0;
    for(let number of numbers)
        result+=number;

    return result;
}

console.log('sum(1,2,3,4)',sum(1,2,3,4));
console.log('sum(1)',sum(1));
console.log('sum()',sum());

