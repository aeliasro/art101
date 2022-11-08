/**
*Author: Kyra and Arianna
*Created: November 7, 2022
*License: Public Domain
**/


//Buttons
$("#challenges").append("<button id='c-button'>Button</button>");
$("#problems").append("<button id='p-button'>Button</button>");
$("#results").append("<button id='r-button'>Button</button>");

//Adding Functions
$("#c-button").click(function(){
  $(this).parent().toggleClass("special");
});

$("#p-button").click(function(){
  $(this).parent().toggleClass("special");
});

$("#r-button").click(function(){
  $(this).parent().toggleClass("special");
});
