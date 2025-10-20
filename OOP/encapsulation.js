// Encapsulation | Why use | How Work

/**
 * 1. Grouping Data & Actions
 * 2.Hides Complexity
 * 3. Data Protection
 * 4. Controlled Access
 * 5. Enhances Maintainability
 * 
 * Encapsulation using Closure
 * using Constructor Functions
 * Using ES6 Classes
 */


/*
=== Encapsulation using Closure
*/
function createCounter(){
    let count = 0;

    return{
       increment: function (){
        count++
       },
       decrement: function(){
         count--
       },
       getCount: function(){
        return count;
       }
    }
}

const counter = createCounter();
counter.increment()
counter.increment()
counter.increment()
counter.increment()
counter.increment()
counter.increment()
counter.increment()
counter.increment()

counter.decrement()
counter.decrement()

console.log(counter.getCount())



/*
=== Encapsulation Using ES6 Classes
*/

class createCounte1{
    #count = 0;

    increment1(){
        this.#count++

    }
    decrement1(){
        this.#count--

    }
    getCount1(){
       return this.#count

    }
}

let counter1 = new createCounte1();
counter1.increment1();
counter1.increment1();
counter1.increment1();
counter1.increment1();
counter1.increment1();

counter1.decrement1();
counter1.decrement1();

console.log(counter1.getCount1())



/*
=== Encapsulation Using Constructor Functions
*/

function CreateCounte2(){
    let count1 = 0;

    this.increment2 = () =>{
        count1++
    }
    this.decrement2 = () =>{
        count1--
    }

    this.getCount2 = () =>{
       return count1;
    }
}

const counter2 = new CreateCounte2();
counter2.increment2()
counter2.increment2()
counter2.increment2()
counter2.increment2()
counter2.increment2()
counter2.increment2()
counter2.increment2()
counter2.increment2()

counter2.decrement2()
counter2.decrement2()
counter2.decrement2()

console.log(counter2.getCount2())