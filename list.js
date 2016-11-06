// JavaScript File


var todos = ["Buy New Turtle"];

var input = prompt("What would you like to do?");

while(input !== "quit")
{
    //handle input
    if(input === "list")
    {
        console.log(todos);
    }
    else if (input === "new")
    {//ask for new to do 
        var newTodo = prompt("Enter new to do");
        //add item to list
        todos.push(newTodo);
    }
        //ask again for new input
        input = prompt("What would you like to do?");
}
console.log("OK, you quit the app");