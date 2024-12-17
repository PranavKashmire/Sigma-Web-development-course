// we  have created 2  user snipetts as :clog for console.log  and alert for 

console.log('this is promised');


// here reslove and reject are 2 function
let prom1 = new Promise((resolve , reject)=>{
    let a= Math.random();
    // this is to generate a random number
    if(a<0.5){
        reject("no random number was not supporting you")
    }

  else{
    setTimeout(()=>{
        console.log("yes i am done")
        resolve("harry")
    }, 3000);
}
})

// read the notes for clear understanding and watch the video again

prom1.then((a)=>{
    console.log(a)
}).catch((err)=>{
    console.log(err)
})

// promise chaining(and its resolving)