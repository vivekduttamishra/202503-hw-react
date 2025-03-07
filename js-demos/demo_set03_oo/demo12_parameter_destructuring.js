
let p1 = {name: 'John', email:'john@gmail.com', phone:999933}
function sendEmail(entity, message){
    console.log(`sending email to :${entity.name} <${entity.email}}> : ${message}`)
}

sendEmail(p1,'Hello JS');

function sendEmail2(name,email, message){
    console.log(`sending email to :${name} <${email}}> : ${message}`)
}

sendEmail2(p1.name,p1.email,"hello js");


function sendEmail3({name,email}, message){
    console.log(`sending email to :${name} <${email}}> : ${message}`)
}

sendEmail3(p1,"hello js");