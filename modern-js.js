// console.log("Test modern js test.")
//! Like C++ code
/* function getVar() {
    var x;
    setTimeout( function() {
        x = 12;
    }, 3)
    return x;
}
var value = getVar();
console.log(`The value is:` + value);

var value;
setTimeout( function() {
    value = 12;
}, 3000)
console.log('This value is:' + value );
*/

const getVar = () => {
    setTimeout( function() {
        console.log('A function that takes some time.');
    }, 3000)
}
const printSomething = () => {
    console.log('Another Fuunction');
}
getVar();
printSomething();

const getvarC = ( callback ) => {
    setTimeout( function() {
        console.log('A function take some time 3 second');
        callback();
    }, 3000)
}
const printSomethingC = () => {
    console.log('Another Function');
}
getvarC( printSomethingC );