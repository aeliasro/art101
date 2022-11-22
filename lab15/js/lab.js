/**
*Author: Kyra and Arianna
*Created: November 21, 2022
*License: Public Domain
**/

//var endpoint = "http://numbersapi.com/random";
var endpoint = "https://api.thecatapi.com/v1/images/search";

function getAPIData() {
	console.log("Running getAPIData");
  // go to numbers.api for data using AJAX
  $.ajax({
      // API endpoint
      url: endpoint,
      // Any data to send
      // data: { id: 123},
      // POST or GET request
      type: "GET",
      // data type we expect back
      dataType : "json",
  })
  // If the request succeeds
  // data is passed back
 	.done(function(data) {
      console.log("Success:", data);
      var imageURL = data[0].url;
      console.log("URL:", imageURL)
      imageObj = $("<img>").attr("src", imageURL);
      $("#output").html(imageObj);
  })
  // If the request fails
  .fail(function(request,error) {
      console.log(request, error);
  });
}

$("#ajax-button").click(getAPIData);
