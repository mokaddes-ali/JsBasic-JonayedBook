//! Function Traditional vs Arrow Function

// let numb1, numb2, result;
// numb1 = 10;
// numb2 = 30;
// result = numb1 + numb2;
// console.log(` ${ numb1 } + ${ numb2} = ${result}`);

// numb1 = 40;
// numb2 = 50;
// result = numb1 + numb2;
// console.log(` ${ numb1 } + ${ numb2} = ${result}`);

// numb1 = 40;
// numb2 = 70;
// result = numb1 + numb2;
// console.log(` ${ numb1 } + ${ numb2} = ${result}`);

 //? Normal Function and use return
function greeting( message ) {
    return `hello good ${message}`;
}
let message = greeting( "morning");
 message = greeting( "afternoon" );
 console.log( message );
// greeting( "morning");
// greeting( "afternoon" );
// greeting( "night" );

// numb1 , numb2 parameter
function addNumbers( numb1, numb2 ) {
    result = numb1 + numb2;
    console.log(`Add Two Number ${ numb1 } + ${ numb2 } = ${ result }`);
}
addNumbers( 20, 30); // 20, 30 arguments
addNumbers( 50, 60);
addNumbers( 40, 70);

const addNumbers1 = ( numb1, numb2 ) =>{
    let result = numb1 + numb2;
    console.log(`Add Two Number ${ numb1 } + ${ numb2 } = ${ result }`);
}
addNumbers1( 50, 30);

const subNumbers1 = ( numb1, numb2 ) => numb1 - numb2;
console.log(`Sub Two Number:` + subNumbers1(50, 30));



//! Arrow Function: () => {}
function display1(message) {
    return `message: hello ${message}`;
}

//?single line
const display2 = message => `message: hello ${message}`;
console.log(display1('world 1'));
console.log(display2('world 2'));