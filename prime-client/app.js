

let jobs; //you job list here

const isPrime = (number)=>{
    if(number<2)
        return false;
    
    for(let i=0; i<number; i++){
        if(number%i===0)
            return false;
    }

    return true;
}

const findPrimes =(min,max)=>{
    let primes=[];
    for(let i=min; i<=max; i++){
        if(isPrime(i))
            primes.push(i);
    }
    return primes;
}

//write your logic to handle primes