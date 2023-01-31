// Array is a collection of homogenious as well as heterogenious data types

// homogenious - same data types
// ------------
// let a  = ["Hii", "Hello", "test", "copy", "code",`Hey`] => Array of Strings
// let b = [2,4,6,34,57,89,12,5,9,2] => Array of numbers
// let c = [true, false, false, true, false] => Array of Boolean

// heterogenious - diff data types
// --------------
// let d  = ["Hii", 59, true, 45, false, "Hey", "text"]


var a = [3, 5, 7, 8, 2];
console.log(typeof a);
//object


var city = ["Delhi", "Mumbai", "Helsinki", "London", "Amsterdam"];
city[0];
//["Delhi", "Mumbai", "Helsinki", "London", "Amsterdam"]
//    0        1        2            3          4
("Delhi");
city[1];
("Mumbai");

// push - add in the end of array
// pop -> remove last value in an array
// unshift -> add as first value in Array
// shift -> remove first value in Array

// city.push("Boston");