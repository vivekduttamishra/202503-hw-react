/*
Not eall the three values have defaults here

   * b has a default of 10
   * c has a default value same as b 
   * a also has a default of 'undefined'
*/
function callMe(a, b=1, c = b){
    console.log('a',a,'b',b,'c',c);
}

callMe(10,20,30) //10,20,30

callMe(10,20) //10,20,20

callMe(10,); //10,1,1

callMe(); //undefined,1,1

callMe(10,20,30,40) //10,20,30   //ignored by formal parameters 40

