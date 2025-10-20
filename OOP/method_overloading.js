/**
 * Mthod Overloading
 * OOP like Java or C++ , Method overloading allows.
 * 
 * 
 * JavaScript has no direct supprt for methdo overloading
 * Yet, you can simulate method overlading by examing the number of arguments
 * 
 *same method but change parameter and data type
 */

class MyClass{
    myMethod(p1, p2,p3){

        if( arguments.length === 1){
            console.log("Received one parameter:", p1)
        }

        else if( arguments.length === 2){
            console.log("Received two parameter:", p1, p2)
        }

           else if( arguments.length === 3){
            console.log("Received three parameter:", p1, p2, p3)
        }

    }
}

let AgrObj = new MyClass();
AgrObj.myMethod(2)
AgrObj.myMethod(4,8)
AgrObj.myMethod(12, 20, 30)