// JavaScript File


var todos = ["Buy New Turtle"];

var input = prompt("What would you like to do?");

while(input !== "quit")
{
    //handle input
    if(input === "list")
    {
        listTodos();
    }
    else if (input === "new")
    {
        addTodo();
    }
    else if (input === "delete")
    {
        deleteTodo();
    }
    //ask again for new input
    input = prompt("What would you like to do?");
}
console.log("OK, you quit the app");


function listTodos()
{
    // for(i=0; i<todos.length, i++)
    // {
    //     console.log(todos);
    // }
    console.log("************");
    todos.forEach(function(todo, i)
    {
        console.log(i + ": " + todo);
    });
    console.log("************");
}

function addTodo()
{
    //ask for new to do 
    var newTodo = prompt("Enter new to do");
    //add item to list
    todos.push(newTodo);
    console.log("New item added successfully.");
}

function deleteTodo()
{
    //ask for index item to be deleted
    var index = prompt("Enter index of Todo list to delete");
    //delete that index
    todos.splice(index, 1);
    console.log("Index selected deleted successfully.");
}