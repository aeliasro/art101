/**
*Author: Kyra and Arianna
*Created: November 2, 2022
*License: Public Domain
**/
//This credit goes to wess and https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffleArray(array){
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex){
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

function reorderUserName(word) {
  var wordArray = word.toLowerCase().split('');
  var newArray = shuffleArray(wordArray);
  return newArray.join('');
}

function toTitleCase(str){
  return str.replace(
    /\w\S*/g,
    function(txt){
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}


buttonEl = document.getElementById("my-button");
console.log("button element:", buttonEl);

inputEl = document.getElementById("user-name");
console.log("input element:", inputEl);

outputEl = document.getElementById("output");
console.log("output element:", outputEl);


buttonEl.addEventListener("click", function(){
  var userName = inputEl.value;
  var newName = toTitleCase(reorderUserName(userName));
  outputEl.innerHTML = "<p id=name-results>" + newName + "</p>";
});
