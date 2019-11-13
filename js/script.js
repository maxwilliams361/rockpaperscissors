// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW
$("#shoot").click(function(){
    let pplChoice=$("#input").val().toLowerCase();
$("#userChoice").text(pplChoice);
    let randomNumber=Math.random();
if (randomNumber<=.3333333){
    $("#computerChoice").text("Rock");}
else if (randomNumber>.3333333 && randomNumber<=.6666666){
    $("#computerChoice").text("Paper");
}
else if (randomNumber>.6666666){
    $("#computerChoice").text("Scissors");
}
if(pplChoice==="rock"&& randomNumber<=.3333333){
    $("#result").text("Draw!");
}
else if(pplChoice==="rock" &&randomNumber>.3333333&&randomNumber<=.6666666){
    $("#result").text("Computer wins!");
}
else if (pplChoice==="rock" && randomNumber>.6666666){
    $("#result").text("You win!");
}
else if (pplChoice==="paper" && randomNumber<=.3333333){
    $("#result").text("You win!");
}
else if (pplChoice==="paper" && randomNumber>.3333333&&randomNumber<=.6666666){
    $("#result").text("Draw!");
}
else if (pplChoice==="paper" && randomNumber>.6666666){
    $("#result").text("Computer wins!");
}
else if (pplChoice==="scissors" && randomNumber<=.3333333){
    $("#result").text("Computer wins!");
}
else if (pplChoice==="scissors" && randomNumber>.3333333&&randomNumber<=.6666666){
    $("#result").text("You win!");
}
else if (pplChoice==="scissors"  && randomNumber>.6666666){
    $("#result").text("Draw!");
}
else{
    $("#result").text ("Huh? Well, no one wins. Follow the rules!");
}
$("#input").val('');
console.log(randomNumber);
});
