/**
*Author: Kyra and Arianna
*Created: October 26, 2022
*License: Public Domain
**/

function isEven(x){
    return (x % 2 == 0);
}

//test function
console.log("Is 1 even? ", isEven(1));
console.log("Is 2 even? ", isEven(2));

array = [19, 7, 222, 420, 666, 180, 101]
console.log("This is our array", array);

var result = array.map(isEven);
//it should return [false, false, true, true, true, true, false]
console.log("Testing if array is even:", result);

var result = array.map(function(x){
    return x ** 0.5;
})
//it should return  [4.358898943540674, 2.6457513110645907, 14.89966442575134, 20.493901531919196, 25.80697580112788, 13.416407864998739, 10.04987562112089]
console.log("This is the squareroot of the array:", result);
