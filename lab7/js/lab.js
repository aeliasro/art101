/**
*Author: Kyra and Arianna
*Created: October 24, 2022
*License: Public Domain
**/

//Defined variables
function sortUserName(){
var userName = window.prompt("Please enter your name: ");
console.log("userName =", userName);
//split string to array
var nameArray = userName.split('');
console.log("nameArray =", nameArray);
//sort the array
var nameArraySort = nameArray.sort();
console.log("nameArraySort =", nameArraySort);
//join array back to a string
var nameSorted = nameArraySort.join('');
console.log("nameSorted = ", nameSorted);
return nameSorted;
}
//Output
document.writeln("Here! We fixed your name: ",
sortUserName(), "</br>");
