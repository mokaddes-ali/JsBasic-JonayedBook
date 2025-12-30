function demoClick() {
    //! Pring basic info of JavaScript.
    // single line comment
    // alert("yes i am here!");
   /* 
   Multiple line comment
   confirm("You are sure going in next step!")
    console.log("hello test. \n Mokaddes Ali");
    console.warn("\t hello warning test!");
    console.error("hello error test!");
    console.clear();
    */
//!   var price = 1200; next time same variable name redeclare possible

//? let value change in next time
 let price = 1200;
  price = 1400;
  //! const not change value and do not allow same name variable in next time
const id = 1;
const title = 'good camera'
//    let
//    const

   console.log('id: ' + id);
   console.log('title: ' + title);
   console.log('description: ');
   console.log('price:' + price);
   console.log('Iphone price:' + price);
   console.log('rating: 4.69');

   //! Arithmetic Operator
   //? Create a simple calculator
//    const
   console.log( " 5 + 2 = " + (5 + 2) );
   console.log( " 5 - 2 = " + (5 - 2) );
   console.log( " 5 * 2 = " + (5 * 2) );
   console.log( " 5 / 2 = " + (5 / 2) );
   console.log( " 5 % 2 = " + (5 % 2) );

   const $number1 = 10;
   const $number2 = 20;
   console.log( " $number1 + $number2 = " + ($number1 + $number2) );
   console.log( " $number1 - $number2 = " + ($number1 - $number2) );
   console.log( " $number1 * $number2 = " + ($number1 * $number2) );
   console.log( " $number1 / $number2 = " + ($number1 / $number2) );
   console.log( " $number1 % $number2 = " + ($number1 % $number2) );

   console.log( ` $number1 + $number2 = ${$number1 + $number2} `);
   console.log( ` $number1 - $number2 = ${$number1 - $number2}` );
  //! prompt input data store in string data type
   const firstNumber = Number( prompt('Enter first number'));
   const secondNumber = Number( prompt('Enter Second Number'));
   console.log(`${firstNumber} + ${secondNumber} = ${ firstNumber + secondNumber }`);

   console.log(`${firstNumber} - ${secondNumber} = ${ firstNumber - secondNumber }`);

    //! parseInt convert data in integer type
    //! same as parseFloat convert number in float
    //!  toString convert all data in string
    //! Number covert data in number data type
   const firstNumber1 = parseInt( prompt('Enter first number'));
   const secondNumber2 = parseInt( prompt('Enter Second Number'));
   console.log(`${firstNumber1} + ${secondNumber2} = ${ firstNumber1 + secondNumber2 }`);

   console.log(`${firstNumber1} - ${secondNumber2} = ${ firstNumber1 - secondNumber2 }`);
}