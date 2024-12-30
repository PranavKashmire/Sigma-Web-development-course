// 1.
// prototype are used so  that we can make prototypal inheritance.
// In js every object has its prototype(prototype is an way of adding new properties to an object .)
// rabbit.__proto__ = animal; // sets rabbit.[[Prototype]] = animal



// class in JS:
// class Animal{
//     constructor(){
//         console.log("obj is created")
//     }

//     eats(){
//         console.log("kha raha hu")
//     }
//     jumps(){
//         console.log("kood rha hun")
//     }
//     // eat and jump are two functions
// }

// // a is an object from class animal
// let a= new Animal();
// console.log(a)



class Animal{
    constructor(name){
        // name is the argument given to constructor


        this.name=name
        // the this keyoword says : this a a way to create properties in an object we created 
        console.log("obj is created")
    }

    eats(){
        console.log("kha raha hu")
    }
    jumps(){
        console.log("kood rha hun")
    }
}



class lion extends Animal{
    // now the code in the animal class will be automatically considered and included in class lion

    // but here an constructor is present in the class animal .
    // to call the constructor we need to use the "super" keyword

    constructor(name){
        super(name)
        this.name= name
        console.log("objects are created and he is a lion")
    }
}

let a= new Animal("bunny");
console.log(a)


// now if we want to make an another class named lion then we can use :
// class lion{
//     // code
// }
// but we should do it using this way(using the extends keyword).(line 49)

// read the getter and setters and further from the notes


