console.log(Math);
console.log(`PI value:` + Math.PI);

const calCulatePow = Math.pow(10, 3);
console.log( ` 10 to the power 3 value: ` + calCulatePow);

// Floor number convert in Integer remove .
console.log( `Floor number convert in Integer: ` + Math.floor(10.50));

const arrayNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9,10, 12, 13, 20, 30, 50, 60];
const findMax = Math.max(...arrayNumber);
console.log(`Find Maximum Number = ${findMax}`);

const findMin = Math.min(...arrayNumber);
console.log(`Find Minimum Number = ${findMin}`);

/**
 * Random Number
 * 
 */
console.log(Math.random() * 10000 );