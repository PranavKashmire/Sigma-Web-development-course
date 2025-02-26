import { copyFileSync } from "fs"
import path from "path"
// here we imported the path module

console.log(path)
// this will print all the functions present in the module path
//note that when we enter the path "/" should be replaced by "//"


// let myPath = enter the path here
console.log(path.dirname(myPath))
// this will give the directory name of the path we have pasted


console.log(path.basename(mypath))
// this will give the base name of the file


// to join two paths
console.log(path.join("c:/", "programs\\harry.txt"))
