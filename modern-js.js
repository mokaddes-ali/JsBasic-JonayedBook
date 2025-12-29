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

/*
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

//! callback function use
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
*/

const aPromise = control => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            if ( control ) {
                resolve(); // success data
            } else {
                reject(); // reject data
            }
        }, 3000)
    })
}
aPromise(true)
.then( () => {
    console.log('Promise Success!');
})
.catch( () => {
    console.log('simple error');
})

aPromise(false)
.then( () => {
    console.log('Promise Success!');
})
.catch( () => {
    console.log('simple error');
})

const aPromiseWithData = control => {
    return new Promise( ( resolve, reject) => {
        setTimeout( () => {
            if( control ){
                resolve('Data Process Succes');
            }
            reject('any error process data')
        }, 3000)
    })
}
aPromiseWithData(true)
.then( (data) => {
    console.log(data);
})
.catch( (error) => {
    console.log(error);
})

aPromiseWithData(false)
.then( (data) => {
    console.log(data);
})
.catch( (error) => {
    console.log(error);
})

const promiseOne = control => { 
    return new Promise( (resolve, reject) => {
    setTimeout( () => {
        if ( true ) {
            resolve('Promise one resolved');
        } else {
            reject( 'Promise one error.' );
        }
    }, 5000);
});
}
const promiseTwo = control => {
    return new Promise( (resolve, reject) => {
    setTimeout( () => {
        if(true) {
             resolve('Promise two resolved');
        } else {
            reject( 'Promise two error.' );
        }
    }, 5000);
});
}

const promise1 = promiseOne(true);
const promise2 = promiseTwo(true);

Promise.all( [ promise1, promise2 ])
.then( (dataArr) =>{
    console.log(dataArr);
})


//! async and await
const aPromiseMake = control => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            if ( control ) {
                resolve('I am here!'); // success data
            } else {
                reject('No! It is an error.'); // reject data
            }
        }, 3000)
    })
}
const promisHandle  = async() => {
   try{
    const data = await aPromiseMake(true);
    console.log(data);
   }catch( error ){
    console.log(error);
   }
}
promisHandle();