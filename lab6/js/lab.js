/**
 * Author:    Arianna Elias & Kyra Angkasa
 * Created:   10.20.22
 * License:   Public Domain
 **/

 //Define variables
 myTransportArray = ['bus', ' legs', ' car', ' bike', ' scooter'];

myMainRide = {
    make: 'Lexus',
    model: 'ES300',
    color: 'Gold',
    year: 1999
 };

 //Output variables
 document.writeln("Kinds of transportation we use: ", myTransportArray, "</br>");
 document.writeln("My main ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
