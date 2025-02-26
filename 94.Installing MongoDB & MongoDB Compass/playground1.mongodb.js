
// Select the database to use.
use('sigmaDatabase');

// Insert a few documents into the courses collection.
db.getCollection('sales').insertMany([
  {ice": 15000,
    "Instructor": "Alice"
  },
  {
    "name": "JavaScript",
    "Price": 18000,
    "Instructor": "Bob"
  },
  {
    "name": "C++",
    "Price": 22000,
    "Instructor": "Charlie"
  },
  {
    "name": "Ruby",
    "Price": 17000,
    "Instructor": "David"
  },
  {
    "name": "C#",
    "Price": 19000,
    "Instructor": "Eva"
  },
  {
    "name": "Swift",
    "Price": 21000,
    "Instructor": "Frank"
  },
  {
    "name": "Kotlin",
    "Price": 16000,
    "Instructor": "Grace"
  },
  {
    "name": "PHP",
    "Price": 23000,
    "Instructor": "Hank"
  },
  {
    "name": "TypeScript",
    "Price": 20000,
    "Instructor": "Ivy"
  },
  {
    "name": "Go",
    "Price": 18000,
    "Instructor": "Jack"
  }
]);

// Run a find command to view items sold on April 4th, 2014.
const salesOnApril4th = db.getCollection('sales').find({
  date: { $gte: new Date('2014-04-04'), $lt: new Date('2014-04-05') }
}).count();

// Print a message to the output window.
console.log(`${salesOnApril4th} sales occurred in 2014.`);

// Here we run an aggregation and open a cursor to the results.
// Use '.toArray()' to exhaust the cursor to return the whole result set.
// You can use '.hasNext()/.next()' to iterate through the cursor page by page.
db.getCollection('sales').aggregate([
  // Find all of the sales that occurred in 2014.
  { $match: { date: { $gte: new Date('2014-01-01'), $lt: new Date('2015-01-01') } } },
  // Group the total sales for each product.
  { $group: { _id: '$item', totalSaleAmount: { $sum: { $multiply: [ '$price', '$quantity' ] } } } }
]);
