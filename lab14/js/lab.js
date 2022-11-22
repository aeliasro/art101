/**
*Author: Kyra and Arianna
*Created: November 14, 2022
*License: Public Domain
**/

maxFactors = 4;

outputEl = document.getElementById("output");

//values in the webpage written in an Object
//expectation is to have input fields with the ids
//it should return an obkect that looks like:
// {3: fizz, 5: buzz, 7: boom}
function getFactorObj() {
  var factorObj = {};
  for (var factor = 0; factor<maxFactors; factor++) {
    numId = "num" + factor;
    textId = "text" + factor;
    numberValue = document.getElementById(numId).value;
    textValue = document.getElementById(textId).value;
    console.log(factor + ") num:", numberValue, "text:", textValue);
    //if one of the values is blank, do not use it
    if (numberValue && textValue) {
      factorObj[numberValue] = textValue;
    }
  }
  return factorObj;
}

function outputToPage(str) {
  newEl = document.createElement("p");
  newEl.innerHTML = str;
  outputEl.appendChild(newEl);
}

function fizzBuzzBoom(maxNums, factorObj) {
  for (var num=0; num<maxNums; num++) {
    var outputStr = "";
    for (var factor in factorObj) {
        if (num % factor == 0) {
            outputStr += factorObj[factor];
        }
    }
    if (outputStr) {
        outputStr = " - " + outputStr + "!";
    }
    outputToPage(num.toString() + outputStr)
  }

}

function reportError(str) {
    outputElinnerHTML = "<div class='error'>" + str + "</div>";
}



document.getElementById("submit").addEventListener("click", function(){
  var max = document.getElementById("max").value;
  console.log("max:", max)
  if (! max) {
      reportError("You must provide maximum");
        return;
  }
  var factorObj = getFactorObj();
  console.log("factorObj:", factorObj);
  if (Object.keys(factorObj).length === 0) {
      reportError("You must provide at least one factor and text");
      return;
  }
  //clear error if there is one
  outputEl.innerHTML = "";
  fizzBuzzBoom(max, factorObj);
  outputEl.classList.add("cols");
})
