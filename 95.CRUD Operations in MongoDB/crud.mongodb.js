// CRUD operations create, read, update, and delete documents. 

// 1. CREATE operations :
use("crudDb")
// here we made a DB named "crudDb"

db.createCollection("courses")
// here we have created a collection named "courses"

db.courses.insertOne({
    name :"harry web dev free course",
    price:0,
    assingment:12,
    projects:45
 })
//  here we inserted a new document in courses after running the code
// also every document has unique id
// if i again run the code then a new document will get created


// to insert many documents we use :
db.courses.insertMany([

    db.courses.insertMany([
        {
            name: "harry web dev free course",
            price: 0,
            assignment: 12,
            projects: 45
        },
        {
            name: "beginner python programming",
            price: 0,
            assignment: 10,
            projects: 30
        },
        {
            name: "advanced machine learning",
            price: 199,
            assignment: 15,
            projects: 50
        },
        {
            name: "full-stack web development",
            price: 299,
            assignment: 20,
            projects: 60
        },
        {
            name: "data science with python",
            price: 249,
            assignment: 18,
            projects: 55
        }
    ])
    
])
// here we give an array of objects





// 2.READ operations :
let a=db.courses.find({price :0})
console.log(a)
// this will print all the  documents which has price as 0 

console.log(a.count())
// this will tell us the number of documents in "a "


// findOne will give us the 1st document in the search result
let b=db.courses.findOne({price :0})
console.log(b)




// 3. UPDATE operation :
// we have operations like update, updateOne  UpdateMany etc
db.courses.update()
// here update modifies already existing document

db.courses.updateOne({price:0}, {$set:{price:100}})
// here updateOne modifies the price 0 to 100 only for one document
// $set is a atomic operator


db.courses.updateMany({price:0}, {$set:{price:100}})
// here updateOne modifies the price 0 to 100 only for all the document



// 4.DELETE operations:
db.courses.deleteOne({price:100})
// here it delets the 1st document with price 100

db.courses.deleteMany({price:100})
// // here it delets the all the document with price 100


// read about  the operators in mongoDB form documentations and explore them
// there are 4 types of opeators in mDB : 1.Query and projetcions operators 
                                        //   2.update opeators
                                        //   3.aggregation stages
                                        //   4.aggregation opeators