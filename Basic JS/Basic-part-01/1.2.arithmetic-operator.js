
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