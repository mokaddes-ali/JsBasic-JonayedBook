/**
 * 
 * Father Constructor for Auto Child
 * Inheritance and Constructore
 * Constructor inside only parent class
 * Constructor inside only partent class pass parameters
 * 
 * 
 * Constructor inside only child class
 * Constructor inside only child class pass parameters
 * 
 * 
 * Constructor inside both parent and child class
 * Constructor inside both parent and child class pass parameters
 */

/*
class Father{
    constructor( message){
        console.log( message )
    }

}

class Child extends Father{

}

new Father("I am a constructor of father params")
new Child("I am a constructor of child params")

*/

/* ============

class Father{
    // father can't access child constructor

}
// constructor only child than need permission from father use super method

class Child extends Father{
    constructor( message){
        super()
        console.log( message )
    }

}

new Father("")
new Child("I am a constructor only form child with parent permission")

====*/

/**
 * ==== Both Constructor in father and child
 */

class Parent{
    constructor(msg_parent){
        console.log( msg_parent )
    }
}

class Child extends Parent{
    constructor( msg_child ){
        super()
        console.log( msg_child )

    }
}

new Parent("Message From Parent")
new Child("Message From  Child")


