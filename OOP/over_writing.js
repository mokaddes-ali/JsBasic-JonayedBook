/**
 * 
 * Over Writing
 */

class Father{
    addNumber(){
          let num1 = 10;
          let num2 = 30;
          console.log( num1 + num2)
    }
    
}

class Son extends Father{
     addNumber(){
          let num1 = 100;
          let num2 = 300;
          console.log( num1 + num2)
    }
         
}

let parentObj = new Father()
sonObj.addNumber()
console.log("End Father")
let sonObj = new Son()
sonObj.addNumber()