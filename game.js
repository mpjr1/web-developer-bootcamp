////create secretNumber

var secretNumber = 4;


////Ask user for Number

var stringGuess = prompt("Guess a number");
var guess = Number(stringGuess);

////Check Number

if  (guess=== secretNumber) {
   alert( "You Guess correctly!");
}

////check if higher
else if( guess > secretNumber){
    alert("Guess is too high");
}

////check if lower

else{
    alert("Guess is to low");
}
