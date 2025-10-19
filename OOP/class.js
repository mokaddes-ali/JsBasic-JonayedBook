
/**
 * 
 * make class | write variable | write function | class to make object | use property
 * 
 */

// previous blueprint of object is known class or make future for object

class Person{
    first_name = "Mokaddes"
    last_name =  "Ali"
    age = 25
    isBangladeshi = true
    city = "Dhaka"

    getName(){
        return `My Name is ${ this.first_name} ${this.last_name}`
    }
}

let personObj = new Person();

console.log(personObj.first_name);
;
console.log(personObj.isBangladeshi);
console.log(personObj.getName());