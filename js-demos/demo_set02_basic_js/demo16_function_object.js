function plus(x,y){
    return x+y;
}
var add = plus;



console.log('add.name',add.name);
console.log('add(20,30)',add(20,30));
console.log('plus.name',plus.name);
console.log('plus(40,10)',plus(40,10));

var substract = function minus(x,y){
    return x-y;
}
console.log('substract.name',substract.name);
console.log('substract(40,10)',substract(40,10));
// console.log('minus.name',minus.name);
// console.log('minus(40,10)',minus(40,10));


var multiply = function(x,y){
    return x*y;
}

console.log('multiply(2,11)',multiply(2,11));//22
console.log('multiply.name',multiply.name); //multiply



