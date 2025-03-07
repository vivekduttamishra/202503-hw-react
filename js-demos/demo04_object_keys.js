let p1={
    name: 'John',
    email: 'john@example.com',
    age: 30
}

let p2={
    name: 'Jane',
    email: 'jane@example.com',
    phone:'939393939'
}


const showInfo = (obj)=>{
    let keys = Object.keys(obj);
    //console.log(keys);
    for(let key of keys){
        console.log(`${key}: ${obj[key]}`);
    }
    console.log('-----')
}

showInfo(p1);

showInfo(p2);