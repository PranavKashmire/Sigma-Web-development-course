// mongoose is a package which is used to connect express to mongoDB

import mongoose from "mongoose";
import express from "express";

import { todo } from "./models/todo.js";
// here we imported from todo.js in models folder

let conn = await mongoose.connect("mongodb://localhost:27017/")
// here "mongodb://localhost:27017/" is the connection string 


// now install the 4th version of express using "npm i express@4" in the terminal
// also note that moongoDB does not follow a fixed Schema but using moongose we can enforce it 


// this is the "hello world" program for express :
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  const todo = new todo({ title: "hey first to do", desc: "description of todo", isDone: false })
  // here we have successfully connected the database in the variable conn
  todo.save()

  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

