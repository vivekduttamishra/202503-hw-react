let global1='global1';
global2='global2'; //implicit global

function f1(){
    let f11='f1Local';
    f12="f2Local";
    console.log('global1',global1);
    console.log('global2',global2);
    console.log('f1',f11);
    console.log('f2',f12);
    
    global1=global1.toUpperCase();
}

f1();
console.log('f12',f12);

console.log('f11',f11);
