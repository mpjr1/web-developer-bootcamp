// JavaScript File

var button = document.querySelector("button");
// var isBlue = false;

// button.addEventListener("click", function(){
//     if (isBlue){
//         document.body.style.background = "white";
//         // isBlue = false;
//     }  else{
//         document.body.style.background = "blue";
//         // isBlue = true;
//     }
//     isBlue = !isBlue;
// });

//Shorter, easier and beautiful way to do it
//Just need to add the class .blue on the html page
//so the EventListener can toggle it.

button.addEventListener("click", function(){
    document.body.classList.toggle("blue");
});