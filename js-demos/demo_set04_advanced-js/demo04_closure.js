

const outer=(oparam)=>{
    
    function inner(iparam){
        console.log(`Oparam: ${oparam}, Iparam: ${iparam}`);
    }

    return inner;
}

let x = outer(1);

let y= outer(100);

x(2); //calling inner(2)

y(3); // calling inner(3)