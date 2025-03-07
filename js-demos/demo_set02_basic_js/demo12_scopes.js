

function outer(worker,count){
    for(i=0;i<worker;i++){
        inner(i,count);
    }
}

function inner(id,count){
    for(i=0;i<count;i++){
        console.log(id,i);
    }
}

outer(3,5);