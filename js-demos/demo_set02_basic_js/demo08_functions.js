function average(a,b){
    console.log('arguments',arguments);
    
    return (a+b)/2;
}

console.log('average(2,3)',average(2,3));

//In JS we can pass any number of arguments irrespective of actual requiremens
//there will be no error shown because of this


//case#1 if we pass more arguments than required.
//additional arguments are ingored.
console.log('average(2,3,100,200,300)',average(2,3,100,200,300));


//case #2 if we pass fewer arguments than required.
//missing parameters will be considered 'udnefined'
console.log('average(1)',average(1)); //average(1,undefined) => (1+undefined)/2 => NaN/2=>NaN
