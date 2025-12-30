//! Comparison Operator
//?Difference between == and === in JavaScript
//*JavaScript-এ == এবং === দুটোই comparison operator, কিন্তু এদের কাজের ধরন আলাদা। == কে বলা হয় loose equality operator। এটি দুইটি value compare করার সময় data type conversion করে। অর্থাৎ, যদি দুইটা value-এর data type আলাদা হয়, JavaScript নিজে থেকেই type convert করে তারপর compare করে। উদাহরণস্বরূপ, 5 == "5" হলে result হবে true, কারণ string "5" কে number 5 এ convert করা হয়।

//* অন্যদিকে, === কে বলা হয় strict equality operator। এটি compare করার সময় value এবং data type দুটোই check করে। তাই 5 === "5" এর result হবে false, কারণ একটি number আর অন্যটি string—type আলাদা।

//! সংক্ষেপে বলা যায়, == শুধু value দেখে, কিন্তু === value এর সাথে সাথে type-ও দেখে। এজন্য modern JavaScript === ব্যবহার করাই best practice হিসেবে ধরা হয়।

//? Control Statement

const x = 30;
const y = 60;
if ( x > y ) {
    console.log('x is big number');
} else {
    console.log('y is big number');
}

const number = 9;
if ( number%2===0 ){
    console.log('This number is Even');
}else{
    console.log('This number is Odd.');
}
//! OR
if ( number%2!==0 ){
    console.log('This number is Odd.');
}else{
    console.log('This number is Even');
}

//? A program that check a number is positive, negative or zero
const numb = 5;
if ( numb > 0 ) {
    console.log('This Number is positive');
} else if( numb < 0 ) {
    console.log('This Number is negative');
}else{
    console.log('This Number is zero');
}