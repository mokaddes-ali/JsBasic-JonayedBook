//! Unary Operators => -, + ++, --, only one operator a,b, i etc
let numb01 = 30;
let numb02 = -numb01; //! Unary minus
console.log(numb02);
//! Pre Post Increment & decrement
//? Post & Pre
let aNum = 25;
aNum++;  //* aNum = 25 and new aNum = 25 + 1 post increment
aNum++; //* don not imediately increment but increment value in next time
++aNum; //* pre icrement

//?example -01
let aNumber = 6;
let anotherNumber;
anotherNumber = aNumber++; //anotherNumber = 6, aNumber = 7
console.log(`anotherNumber : ${anotherNumber}`);
console.log( `aNumber: ${aNumber}` );
anotherNumber = aNumber++; //anotherNumber = 7, aNumber = 8
console.log(`anotherNumber : ${anotherNumber}`);
console.log( `aNumber: ${aNumber}` );
anotherNumber = aNumber++; //anotherNumber = 8, aNumber = 9
console.log(`anotherNumber : ${anotherNumber}`);
console.log( `aNumber: ${aNumber}` );

//?example-02

let aa = 5;
let bb;
bb = ++aa; // bb = 6 aa =6
console.log(`bb: ${bb}`);
console.log(`aa: ${aa}`);
bb = aa; // bb = 6 aa = 6
console.log(`bb: ${bb}`);
console.log(`aa: ${aa}`);
bb = aa++; // bb = 6 aa = 7
console.log(`bb: ${bb}`);
console.log(`aa: ${aa}`);
bb = ++aa; // bb = 8 aa = 8
console.log(`bb: ${bb}`);
console.log(`aa: ${aa}`);

//?example-03

let fNum = 8;
let sNum;
sNum = ++fNum; // sNum = 9 fNum =9
console.log(`sNum: ${sNum}`);
console.log(`fNum: ${fNum}`);
sNum = --fNum; // sNum = 8 fNum = 8
console.log(`sNum: ${sNum}`);
console.log(`fNum: ${fNum}`);
sNum = fNum--; // sNum = 8 fNum = 7
console.log(`sNum: ${sNum}`);
console.log(`fNum: ${fNum}`);
sNum = ++fNum; // sNum = 8 fNum = 8
console.log(`sNum: ${sNum}`);
console.log(`fNum: ${fNum}`);
sNum = fNum; // sNum = 8 fNum = 8
console.log(`sNum: ${sNum}`);
console.log(`fNum: ${fNum}`);
//! Binary Operator example a + b, b-c