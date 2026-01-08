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
 //* 1-100 odds number sum
 //? 1 + 3 + 5 +----------
 let sumEven = 0;
 for ( let count1 = 1; count1 <= 100; count1 = count1 + 2 ){
    sumEven = sumEven + count1;
    console.log(`1 to 100 even sum: ${sumEven}`);
 }
  console.log(`Total sum: ${sumEven}`);

//! Example -03
 //* 1-100 even number sum
   //? 2 + 4 + 6 + 8 +
