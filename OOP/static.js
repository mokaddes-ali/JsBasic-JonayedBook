/**
 * Static key word | use | why use
 * No need create object
 * return output without create object
 * Shared properties | Utility Functions | memory Efficiency | Performance
 */ 

class Person{
   static first_name = "John"
   static last_name = "Smith"

  static getName(){
        return `My name is ${this.first_name} ${this.last_name}`
    }
}

console.log(Person.first_name)
console.log(Person.last_name)
console.log(Person.getName())



// === static use in inheritance


class Father1{
    static greenParent(){
        return "Hello, I'm Mokaddes Ali Father1"
    }
}

class Child1 extends Father1{
   static getChild(){
        return `Hello, I am child`
    }
}

console.log(Father1.greenParent())
console.log(Child1.greenParent())

console.log(Child1.getChild())
