/**
 * Abstraction 
 * Abstract key is not valide in JavaScript
 * You can't class Always needs its inherited child class to perform
 * 
 * JavaSript does not have built in support for abstract
 */

/* abstract class Father{

}
*/

class Son extends Father{

}

let obj1 = new Father();
let obj2 = new Son();