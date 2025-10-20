/**
 * 
 * Constructor
 * 
 */

class PersonInfo{
    num1 = 10;
    num2 = 15;

    constructor(a, b){
           this.num1 = a;
           this.num2 = b;
    }

    addTwoNumber(){
        return this.num1 + this.num2
    }
}

let parentObj2 = new PersonInfo(50, 100)

console.log(parentObj2.addTwoNumber())

class Person{

     // Constructor name should be Costructor 
    // Constructor execute automatically when object is created
    // Constructor can be take parameter
    // limitation: Constructor method can't return any result
    constructor( num1, num2){
         let sum = num1 + num2;
         console.log(sum)

        //    console.log("I am a contructor method")
    }

}

let parentObj = new Person( 20, 40)
console.log(parentObj)