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
