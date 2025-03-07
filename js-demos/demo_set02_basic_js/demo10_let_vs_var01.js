

function varLoop(x){
    for(var a = 0;a<x;a++){
        console.log(a);
    }

    console.log('a outside loop:',a);
}

varLoop(5);
function letLoop(x){
    for(let a = 0;a<x;a++){
        console.log(a);
    }

    console.log('a outside loop:',a);
}

letLoop(5);