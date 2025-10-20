/**
 * Class Rideclear
 * 
 * === class can be delared once only. If we try to declare more than one time, it throws an error.
 */

/*

class Number{
   numb1 = 10;
   numb2 = 20;
   addToNum(){
    return this.numb1*this.numb2;
   }
}

class Number{
   numb1 = 30;
   numb2 = 40;
   addToNum(){
    return this.numb1*this.numb2;
   }
}
let parentClass = new Number();

*/

// === Another way to define a class is by using a class expression,

/*
let Number =class {
   numb1 = 30;
   numb2 = 40;
   addToNum(){
    return this.numb1*this.numb2;
   }
}


let Number =class {
   numb1 = 10;
   numb2 = 20;
   addToNum(){
    return this.numb1*this.numb2;
   }
}
let parentClass = new Number();
console.log(parentClass)

*/