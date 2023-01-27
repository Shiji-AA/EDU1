var uname = "John"
console.log (uname.toUpperCase());
console.log (uname.toLowerCase());
var city ="Bangalore"
console.log(city.length);
// 9
console.log(city.at(0));
// B
console.log(city.at(1));
//a
console.log(city.charAt(-1));

var a = "John"
var b = "jOhn"
console.log (a.toLowerCase() == b.toLowerCase());

//SLICE

var city = "amsTerdam" //
// a  m  s  T  e  r  d  a  m
// 0  1  2  3  4  5  6  7  8 
//                  -3 -2 -1
console.log(city.slice(1));
// msTerdam
console.log(city.slice(2));
// sTerdam
console.log(city.slice(2,6));
// sTer -printing characters from 2 - 5
console.log(city.slice(0,-1)); 
//amsTerda
console.log(city.slice(0,-2));
//amsTerd
console.log(city.slice(2,-2));
//sTerd
console.log(city.slice(-2,-2));
// empty
console.log(city.slice(-2,-1));
// a
console.log(city.slice(-1,-2)); //does not print in reverse direction
// empty

var city = "amsTerdam";
console.log(city.charAt(0).toUpperCase()); //A
console.log(city.slice(1).toLowerCase());  // msterdam
console.log((city.charAt(0).toUpperCase())+(city.slice(1).toLowerCase()));
//Amsterdam
var city = "paRIs"
console.log(city.charAt(0).toUpperCase()+ city.slice(1).toLowerCase());
//Paris





