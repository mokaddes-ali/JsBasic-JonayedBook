//! Logical opeartor &&( AND), ||(OR), !(Not equal)
//? Control Statement


//? A programe calculate Grade with Marks

const marks = 106;
if ( marks > 100 || marks < 0 ) {
    console.log('Invalid mark');
} else if( marks >= 33){
    console.log('you are pass');
}else{
    console.log('failed');
}

//? condition1 || condition2 || condition3 only one true

//! A program vowel constant
let letter = 'b';
 letter = letter.toLowerCase();
if (
    letter === 'a' ||
    letter === 'e' ||
    letter === 'i' ||
    letter === 'o' ||
    letter === 'u'
){
    console.log('vowel');
}else {
    console.log('constant');
}

//! A program LARGEST NUMBER AMONG 3 NUMBERS

const numb1 = 70;
const numb2 = 50;
const numb3 = 50;

if ( numb1 > numb2 && numb1 > numb3 ) {
    console.log(`Largest Number: ${numb1}`);
} else if( numb2 > numb1 && numb2 > numb3 ){
     console.log(`Largest Number: ${numb2}`);
}else if ( numb3 > numb1 && numb3 > numb2 ){
    console.log(`Largest Number: ${numb3}`);
} else {
    console.log(' Numbers are equal');
}