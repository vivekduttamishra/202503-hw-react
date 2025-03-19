

let jobs = {}; //you job list here
let jobId = 0;

const tableBody = document.querySelector('#table-body');
const minBox = document.querySelector('#min');
const maxBox = document.querySelector('#max');

const clearLogs = () => {
    tableBody.innerHTML = '';
}


const isPrime = (number) => {
    if (number < 2)
        return false;

    for (let i = 2; i < number; i++) {
        if (number % i === 0)
            return false;
    }

    return true;
}

const findPrimes = (min, max) => {
    let primes = [];
    for (let i = min; i < max; i++) {
        if (isPrime(i))
            primes.push(i);
    }
    return primes;
}

const findPrimesPromise = (min, max) => {

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (min >= max)
                return reject(`Invalid Range: ${min}-${max}`);

            let primes = [];
            for (let i = min; i < max; i++)
                if (isPrime(i))
                    primes.push(i);

            resolve(primes);
        },1000);
    });

    //should return immediately
    return promise;

}

const handleFindPrimes = async () => {
    let min = parseInt(minBox.value)
    let max = +maxBox.value
    jobId++;
    let job = {
        id: jobId,
        min: min,
        max: max,
    }

    jobs[jobId] = job;
    tableBody.innerHTML += `
        <tr id="${job.id}">
            <td>${job.id}</td>
            <td>${job.min}</td>
            <td>${job.max}</td>
            <td>computing</td>
        </tr>    
    `


    let resultTd = document
        .getElementById(`${job.id}`)
        .querySelector('td:nth-child(4)');

    try {
        const primes = await findPrimesPromise(min, max);
        resultTd.innerHTML = primes.length;
    } catch (error) {
        resultTd.innerHTML = error;
    }

}

const handleFindPrimesPromise = () => {
    let min = parseInt(minBox.value)
    let max = +maxBox.value
    jobId++;
    let job = {
        id: jobId,
        min: min,
        max: max,
    }

    jobs[jobId] = job;
    tableBody.innerHTML += `
        <tr id="${job.id}">
            <td>${job.id}</td>
            <td>${job.min}</td>
            <td>${job.max}</td>
            <td>computing</td>
        </tr>    
    `


    let resultTd = document
        .getElementById(`${job.id}`)
        .querySelector('td:nth-child(4)');


    const primesPromise = findPrimesPromise(min, max);
    primesPromise
        .then(primes => resultTd.innerHTML = primes.length)
        .catch(error => resultTd.innerHTML = error)


    //update 4th td


}






const findPrimesAsync = (min, max, resultHandler) => {
    let primes = [];
    for (let i = min; i < max; i++) {
        if (isPrime(i))
            primes.push(i);
    }
    //return primes;
    resultHandler(primes);
}










//write your logic to handle primes
const handleFindPrimesCbVersion = () => {
    let min = parseInt(minBox.value)
    let max = +maxBox.value
    jobId++;
    let job = {
        id: jobId,
        min: min,
        max: max,
    }

    jobs[jobId] = job;
    tableBody.innerHTML += `
        <tr id="${job.id}">
            <td>${job.id}</td>
            <td>${job.min}</td>
            <td>${job.max}</td>
            <td>computing</td>
        </tr>    
    `

    const primes = findPrimesAsync(min, max, (primes) => {
        //when primes are found.
        document
            .getElementById(`${job.id}`)
            .querySelector('td:nth-child(4)')
            .innerText = primes.length
    });


    //update 4th td


}

