console.log("PRANAV")

let boxes= document.getElementsByClassName("box")
// mujhe vo saaare elements chaiye jisme box class hai
console.log(boxes)


// here we are making the 2nd index element from boxes red
// boxes[2].style.backgroundColor ="red"

// here redbox is the id
// document.getElementById("redbox").style.backgroundColor="red"



// using the query selector:

// document.querySelector(".box")
// this will select the first box whose has the class box(we need to write .box)

// document.querySelector(".box").style.backgroundColor ="green";
// this is like adding the inline CSS using the js(note that it will only work on 1st box)


// if we want for all the boxes we can use queryselectorAll :
// document.querySelectorAll(".box")
// it wil include the all elements which has class box(ie. html collection)

// this is acquired using the for each function(or for each loop)
document.querySelectorAll(".box").forEach(e=>{
 e.style.backgroundColor="green"
})


// document.getElementsByTagName("div")
// this will include all the dic present along with the parent div(container wala)


// read : matches , closest and contains methods in the notes

