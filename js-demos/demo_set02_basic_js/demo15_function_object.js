function plus(x,y){
    return x+y;
}

console.log('typeof(plus)',typeof(plus));
console.log('plus.name',plus.name);

var add = plus;
console.log('typeof(add)',typeof(add));
console.log('add(5,15)',add(5,15));
console.log('add.name',add.name);


plus="sum of values"; //now plus refers to a string

console.log('typeof(plus)',typeof(plus));

console.log('plus(2,2)',plus(2,2));


