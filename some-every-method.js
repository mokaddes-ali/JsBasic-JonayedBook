
/**
 * Some Method => what's value in array a rokom or oi rokom data ace 
 */

const array = [ 1, 'hello', 2, 12, 20, 30, 'Bangla', 45, 5, , 'mokaddes', 8, 90, 100];

const newArray = array.some( function ( anElement){
       return anElement === 9;
})

console.log(newArray);

const newArray2 = array.some( function ( anElement){
       return anElement === 90;
})

console.log(newArray2);

/**
 * Structure os Some() Method
 * 
 * anArray.some( function ( currentElement, index, theArray ){
 *  // some code
 * return true or false
 * })
 * 
 * in ES6
 * 
 * anArray.some( (currentElement, index, theArray) => {
 *    // some code
 *     return true or false
 * })
 * 
 * some() is check every item by serial one by one but when one value 
 * matched with the condition return true and working stop without not 
 * cheking the next value
 */
  const anArray3 = array.some( currentElement =>{
    return currentElement === 1;
  });

  console.log( anArray3 );
  //  1 check kre true pabar pr ar next value check kre na true return kre day


    const anArray4 = array.some( currentElement =>{
        console.log( `currentElement: ${currentElement}`);
    return currentElement === 5;
  });

  /**
   * Special case
   */
  const objSome = [
    {
        name : "Mokaddes Ali",
        age  : 25, 
        job  : "Student"
    },
   {
    name : "Lina Akther",
    age  : 23,
    job  : "Teacher"
   },
   {
    name : "Anicha Akther",
    age: 25,
    job  : "Student"
   }
  ];

  const chekHasSome = objSome.some( currentElement => currentElement.job);
  console.log( `chekHasSome : ${chekHasSome}` );


  const chekHasName = objSome.some( currentElement => currentElement.name === 'Milon Hossain');
  console.log( `chekHasName Milon Hossain : ${chekHasName}` );


   const chekHasJobStudent = objSome.some( currentElement => currentElement.job === 'Student');
  console.log( `chekHasJobStudent : ${chekHasJobStudent}` );

  /**
   * Every() method
   * check all value true or false with condition and all value 
   * matched with condition then return true
   * Any one value does not matched with condition than return false
   * 
   */

  const arrEvery1 = [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  const arrEvery = [ 2, 2, 3, 4, 'hello'];

  const checkEvery1 = arrEvery1.every( currentElement => 
                    currentElement === 1
  ); 
  console.log( ` checkEvery value = 1:` + checkEvery1 );

    const checkEvery = arrEvery.every( currentElement => {

                   console.log(` currentElement : ${currentElement}`);
                   return currentElement === 2
    }); 
  console.log( ` checkEvery value = 2:` + checkEvery );

  const checkType = arrEvery1.every( customElements => typeof customElements === 'number' );

  console.log( `checkType number :` + checkType );

   const objEvery = [
    {
        name : "Mokaddes Ali",
        age  : 25, 
        job  : "Student"
    },
   {
    name : "Lina Akther",
    age  : 23,
    job  : "Teacher"
   },
   {
    name : "Anicha Akther",
    age: 25,
    job  : "Student"
   }
  ];

  const checkJobName = objEvery.every( 
    currentElement => currentElement.job === "Student"
  );

  console.log( `Check All Job Name Student:` + checkJobName );





