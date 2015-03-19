$(document).ready(function() { 
$("div").append("<p>Do you choose rock, paper, or scissors?</p><br />");
$('form').submit(function() {
var userChoice = $('#awnser').val();
var computerChoice = Math.random();

if (computerChoice < 0.34) {
	computerChoice = "rock";
    } else if(computerChoice <= 0.67) {
	    computerChoice = "paper";
        } else {
	        computerChoice = "scissors";
}

$('div').append("<p>Computer: " + computerChoice+"</p><br />");
$('div').append("<p>User: " + userChoice+"</p><br />");

var compare=function(choice1, choice2) {
    if (choice1=== choice2) {
         $('div').append("<p>The result is a tie!</p>");
        } else if (choice1==="rock"){
            if(choice2==="scissors") {
                 $('div').append("<p>rock wins</p><br />");
                } else {
                     $('div').append("<p>paper wins</p><br />");
                    }
        } else if (choice1==="paper"){
            if(choice2==="rock"){
                $('div').append("<p>paper wins</p><br />");
            } else {
                 $('div').append("<p>scissors wins</p><br />");
            }
        }
}

compare(userChoice,computerChoice);
});
});