// loops in js

let a=1 ;

// for loop(for variable named index)
for (let i= 0; i < 100; i++) {
    console.log(a+i);
    }

//  for in loop
    let obj={
        name :"harry" ,
        role :"programmer" ,
        company :"my AI"
    }

    // for in loop
    for (const key in obj) {
         const element = obj[key];
            console.log(element)
            // to print both the key and element we use :
            // console.log(key, element)
    }

    // for of loop(it is used for )
    for (const c of "harry") {
        console.log(c)
    }

    // while loop 
    let j=5;
    while(j<50){
        console.log(j);
        j++;
    }

    // do while loop
    do {
       console.log(j)
       j ++
    } while (j<20);



    // read the notes