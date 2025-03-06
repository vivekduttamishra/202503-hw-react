
//a an array can hold any item.
let values = [2,9,'hello', true, new Date(), new Object()];


//array has a length

console.log('values',values);
console.log('values.length',values.length);

//we can access it using 0 based index

console.log('values[0]',values[0]);
console.log('values[4]',values[4]);

//we can 'push' new items to the list

values.push(30);
values.push(50);

console.log('values',values);


//we can pop out an item to remove and return it

console.log('values.pop()',values.pop());
console.log('values',values);




