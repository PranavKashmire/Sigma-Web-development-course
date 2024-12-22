function getData() {
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            reslove(455)
        }, 3500);
    })

}


console.log("loading module")
// yaha module ko load krne ka data likha hai

console.log("do something else")
// data

console.log("load data")
// data
// let data =getData()
// get data ke promise ko dega

console.log("process data")