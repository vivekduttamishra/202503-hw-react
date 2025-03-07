let person={
    name:'John',
    age:30,
    email: 'john@personal.com'
}


//let us say john joins a company as employee
//we neeed all person information + employee id, salary 

let employee={
    id:2233,
    ...person,
    email:'john@office.com',
    salary:40000,
}

console.log('employee',employee);
