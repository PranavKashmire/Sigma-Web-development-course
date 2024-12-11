// events in js:

// here button is a variable
// let button = document.getElementById("btn")

// here click is the event for which we want to listen(ie. name of the event)
// button.addEventListener("click", ()=>{
    // alert("i was clicked")
// })
// when the event of click happens an notification bar will come displaying i was clicked


// button.addEventListener("click" , ()=>{
//     document.querySelector(".box").innerHTML ="<b>you were clicked</b>"
// })
// this will change the content to "you were clicked"  as soon we click on the button
// the content "i am a box" will change to "you were clicked" as soon we click on the "change content button"

//  for the event double click we use dblclick:
// document.querySelector(".box").innerHTML="<b>you were clicked</b> enjoy your click"


button.addEventListener("dblclick" , ()=>{
        document.querySelector(".box").innerHTML ="<b>you were clicked</b>"
 })

// document.querySelector(".box").innerHTML="<b>you were clicked</b> enjoy your click"
// visit link for the list of all the events(mouse events , keyboard events
// mouse events) :
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events



