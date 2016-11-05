// JavaScript File

//is Even?
// function isEven(x)
// {
//     if (x % 2 === 0)
//     {
//         return true;
//     }
//     return false;
// }

function isEven(x)
{
    return x % 2 === 0;
}

// factorial function
//from bottom to up
// function factorial(x)
// {
//     //Define result variable
//     var result = 1;
//     //Calculate factorial and store it in variable
//     for(i=2; i<=x; i++)
//     {
//         result *= i;
//     }
//     //Return results
//     return result;
// }

//from top to bottom
function factorial(x)
{
    if(x===0)
    {return 1;}
    //Define result variable
    var result = x;
    //Calculate factorial and store it in variable
    for(i=x-1; i>=1; i--)
    {
        result *= i;
    }
    //Return results
    return result;
}


//function kebabtoSnake
function kebabtoSnake(str)
{
    //converts "-" to "_"
    //return str
    newStr = str.replace(/-/g , "_");
    
    return newStr;
}