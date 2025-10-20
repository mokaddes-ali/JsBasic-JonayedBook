/**
 * Inheritance
 * 
 */

class Father{
    num1 = 20;
    num2 = 30;

    addNumber(){
        let sum = this.num1 + this.num2;
        console.log(sum)
    }

}

class Child extends Father{

}

let fatherObj = new Father();
console.log(fatherObj.num1)
console.log(fatherObj.num2)
console.log(fatherObj.addNumber())

let childObj = new Child()

console.log(childObj.num1)
console.log(childObj.num2)
console.log(childObj.addNumber())