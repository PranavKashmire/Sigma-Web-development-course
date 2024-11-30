// here we will learn map , filter and reduce

let arr=[1,13,5,7,11];

let newArr=[]

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element**2)
//     // pushing element ka square
// }

// console.log(newArr)

// iska shortcut method is done using the map 
//  let newArr= arr.map((e=>{
//     return e**2
//  })



// filter function
console.log(newArr)
const greaterthansevem  =(e)=>{
if(e>7){
    return true
}
return false
}

console.log(arr.filter(greaterthansevem))


// reduce method
const red=(a,b)=>{
    return a*b
}


console.log(arr2.reduce(red))