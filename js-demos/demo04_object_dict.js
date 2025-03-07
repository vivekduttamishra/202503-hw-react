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

function sendOtp(p){
    if(p.phone)
        console.log('Sending OTP to',p.phone);
    else
        console.log('sending OTP to email:',p.email);
}

sendOtp(p1);

sendOtp(p2);

const showInfo = (obj)=>{
    for(const property in obj){
        console.log(property,':',obj[property]);
    }
    console.log('-----')
}

showInfo(p1);

showInfo(p2);