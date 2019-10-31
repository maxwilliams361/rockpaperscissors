// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW
$("#shoot").click(function(){
    let pplChoice=$("#input").val();
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
if(pplChoice===rock && randomNumber<=.3333333){
    $("#result").text("Draw!");
}
if(pplChoice===rock&&randomNumber>.3333333&&randomNumber<=.6666666){
    $("#result").text("Computer wins!")
}

});
