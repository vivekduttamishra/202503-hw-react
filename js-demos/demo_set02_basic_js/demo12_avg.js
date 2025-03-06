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

function average(...numbers){
    return sum(...numbers)/numbers.length
}


console.log('average(1,2,3,4,5)',average(1,2,3,4,5));



