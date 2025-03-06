var a = 20; //number
console.log(typeof(a),a);

var b= 20.3
console.log(typeof(b),b);

var c= "Hello World"
var d= 'X';

console.log(typeof(c),c);
console.log(typeof(d),d);

var e= true;
var f=false;
console.log(typeof(e),e);
console.log(typeof(f),f);


var g= new Date();
var h= new Object()
var i= [1,2,3,4];

console.log(typeof(g),g,  g.__proto__.constructor.name);

console.log(typeof(h),h);

console.log(typeof(i),i);


var j= null; //null is an object that means nothing.

console.log(typeof(j),j);

var k= undefined; //not an object. it means nothing defined (not even null)

console.log(typeof(k),k);

var l ; //implicitly undefined

console.log(typeof(l),l);

console.log(m); //fails with error as m is not a valid reference.