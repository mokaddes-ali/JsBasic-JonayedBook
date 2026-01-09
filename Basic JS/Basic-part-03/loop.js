//! Loop => for, while, do while loop
//? For Loop
//* Structure for ( initialization; condition; update ){ //body   }
//! count last value 11 than stop loop
let sum = 0;
for ( let count = 1; count<= 10; count++) {
    sum = sum + count;
    console.log("Sum: ", sum);
    console.log("Bangladesh", count);
}
 console.log(`Sum: ${sum}`);

 //! Example -02
 //* 1-100 evens number sum
 //? 2 + 4 + 6 +----------
 console.log("Printing 1 to 100 Evens Number Sum by for loop");
 let sumEven = 0;
 for ( let count1 = 2; count1 <= 100; count1 = count1 + 2 ){
    sumEven = sumEven + count1;
    // console.log(`1 to 100 even sum: ${sumEven}`);
 }
  console.log(`\nTotal sumEven: ${sumEven}`);

  console.log("\nprinting 1 to 100 odds number by for loop");

//! Example -03
 //* 1-100 odds number sum
   //? 1 + 3 + 5 + 7 +

 let sumOdds = 0;
 for ( let count2 = 1; count2 <= 100; count2 = count2 + 2 ){
    sumOdds = sumOdds + count2;
    // console.log(`1 to 100 even sum: ${sumEven}`);
 }
  console.log(`\nTotal sumOdds: ${ sumOdds }`);

  //! While loop

  console.log("Printing 1 to 10 using while loop");
  let j = 1;
  while ( j <= 10 ) {
    console.log(`${j}`);
    j++
  }


  //! do-while loop
  
  console.log("Printing 1 to 10 using do-while loop");
  let k = 1;
  do{
    console.log(`${j}`);
    j++
  } while ( j <= 10 );

  //! do vs do while loop
  //? in while loop, condition false than no increment or decrement and no print any value
  //? in do while loop must one number of value print because of firsty incement or decrement than check condition
console.log("\ndo vs do while loop");

  console.log("\nPrinting 1 to 10 using while loop condition false than no print any value");
  let num = 11;
  while ( num <= 10 ) {
    console.log(`${num}`);
    num++
  }
  
  console.log("\nPrinting 1 to 10 using first must increment or decrement then check condition do-while loop");
  let num2 = 11;
  do{
    console.log(`${num2}`);
    num2++
  } while ( num2 <= 10 );

//! another example while
let aNumber = 5
while( true ) {
  if ( aNumber > 10 ) {
    // console.log( "Condition doesn't match" );
    break;
  }
      console.log( aNumber );
      aNumber++;
}

// let aEvenNumber = 5
// while( true ) {
//   if ( aEvenNumber %2 == 0 ) {
//     // break;
//     continue;
//   }
//       console.log( `aEvenNumber : ${ aEvenNumber }` );
//       aEvenNumber++;
// }

let aEvenNumber = 5
while( true ) {
  if ( aEvenNumber === 100 ) {
       break;
  }
  aEvenNumber++;
  if ( aEvenNumber %2 !== 0 ) {
       continue;
  }
      console.log( `aEvenNumber : ${ aEvenNumber }` );
}

//! for off and for in
// const country1 = "Bangladesh";
// const country2 = "India";
// const country3 = "Nepal";
// const country4 = "Pakistan"

const countries = [ "Bangladesh" , "India", "Nepal", "Pakistan", "Australia", "Finland" ];
//* same work with loop
// console.log(countries[0]);
// console.log(countries[1]);
// console.log(countries[2]);
// console.log(countries[3]);
//? use for of
console.log( "\nuse for of" );
for ( let country of countries){
  console.log( country );
}
console.log( "\n for loop" );
for( let index = 0; index <= countries.length; index++ ) {
  console.log( countries[index] );
}

//! object
// const personName = "Mokaddes";
// const personAge = 25;
// const persoNationality = "Bangladeshi";
//? by default all are object type
const person = [ 'Mokaddes', 25, 'Bangladeshi' ];
console.log( typeof person );
console.log( typeof person[0] );
console.log( typeof person[1] );
console.log( typeof person[2] );

const person1 = {
    name         : "Anisul Islam",
    age          : 34,
    nationality  : 'BD',
    occupation   : 'Developer'
}
// console.log(person1.name);
// console.log(person1.age);
// console.log(person1.nationality);
// console.log(person1.occupation);

//? same work with for in
for ( const key in person1 ) {
  console.log(person1[key]);
}