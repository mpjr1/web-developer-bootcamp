// JavaScript File

var x = [];

function printReverse(x)
{
    var y = x.reverse();
    y.forEach(function(i){
        console.log(i);
    });
}

function isUniform(x)
{
    var z = x[0];
    for(var i = 1; i < x.length; i++)
    {
        if (z !== x[i]){
            return false;
        } 
        return true;
    }
}

function sumArray(x)
{
    var total = 0;
    x.forEach(function(i)
    {
        total += i;
    });
    return total;
}

// This version is also correct using a For Loop.
// function sumArray(x)
// {
//     var z = 0;
//     for(i = 0; i < x.length; i++)
//     {
//         z += x[i];
//     }
//     return z;        
// }

function max(x)
{
    var max = x[0];
    for(var i = 1; i < x.length; i++)
    if (x[i] > max){
        max = x[i];
    }
    return max;
}