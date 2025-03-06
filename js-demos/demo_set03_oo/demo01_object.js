

let p = new Object();

console.log('p',p);
console.log('typeof(p)',typeof(p));

// p is created but what are its properties?
//we can add them after creating the object

p.name='Sanjay Mall';
p.age=50; //object notation

p['email'] = 'sanjay@gmail.com' //dicitionary notation
console.log('p',p);

//we can interchanably use the two

console.log('p["name"]',p["name"]);
console.log('p.email',p.email);


