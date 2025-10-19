/**
 * make Object By an Object constructor
 */

function person(){
     this.first_name = "Mokaddes"
     this.last_name = "Ali"
     this.age = 25
     this.isBangladeshi = true
     this.getName = () =>{
        return `My Name is ${this.first_name} ${this.last_name}`
     }
}

// new key word optional

let personInstance = new person();

console.log( personInstance.getName())

