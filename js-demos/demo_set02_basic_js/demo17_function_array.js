function plus(x,y){
    return x+y;
}

var substract = function minus(x,y){
    return x-y;
}

var multiply = function(x,y){
    return x*y;
}

let operations=[
    plus,
    substract,
    multiply
]

let x=50,y=15;

for(let i=0;i<operations.length;i++){
    let result =operations[i](x,y);

    //let output = operations[i].name+"("+x+","+y+") =>"+result
    
    let output = `${operations[i].name} (${x},${y}) => ${result}`
    
    console.log(output);
}