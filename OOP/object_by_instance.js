// Make Object : By Creating instance of Object


let person = new Object();

person.first_name = "Mokaddes";
person.last_name = "Ali";
person.age = 25;
person.city = "Dhaka";
person.isBangladeshi = true
person.getName = () =>{
  return `My Name is ${person.first_name} ${ person.last_name}`
}

console.log(person.getName());
console.log(person.age());
