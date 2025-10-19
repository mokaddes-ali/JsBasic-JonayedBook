//make object === By Object Literal
//What is object

// How to write object using object litaral

let person = {
    first_name: "Mokaddes",
    last_name: "Ali",
    age: 34,
    city: "Rajshahi",
    isBangladeshi: true,
    getName: () => {

         return `My full name is ${person.first_name} ${person.last_name}`;

        // console.log(`My full name is ${person.first_name} ${person.last_name}`);
    }
}

console.log(person);
console.log(person.age);
console.log(person.first_name);
console.log(person.last_name);