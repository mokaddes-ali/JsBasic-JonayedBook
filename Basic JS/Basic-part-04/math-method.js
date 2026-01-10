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

const numb = 12.3456;
//! Number related Math Method
//? . theke kto digit show krabe
console.log(numb.toFixed(2));

//? . sho all kto digit show krabe
console.log(numb.toPrecision(3));

//? Convert data in string
console.log(numb.toString());
console.log(typeof numb.toString());

//? show in parse integer number
console.log(parseInt(numb));

//? show in parse float number
console.log(parseFloat(numb));

//? remove - sign from number
console.log(Math.abs(-34));

//? calculate square 
console.log(Math.sqrt(25));

//? Find maximum
console.log(Math.max(20,30));

//? Find Minimum
console.log(Math.min(20,30));

//? 0.98 hleo . ar prer digit bad diye integer krbe
console.log(Math.floor(12.345678));

//? .50 or upto 0.50 number hleo 1 thre integer a convert krbe
console.log(Math.round(3.5999));
console.log(Math.round(3.50));

//? .50 up hle 1 thrbe
console.log(Math.ceil(2.56));

//? random number show 0 to 1 than 1 to 5 show than 5 diye multiply and 1 plus krbo 1-5
console.log(Math.floor(Math.random() * 5) + 1);