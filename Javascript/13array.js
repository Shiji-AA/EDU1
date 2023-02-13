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

var a = [
    "Delhi",
    "Mumbai",
    "Helsinki",
    "London",
    "Amsterdam",
    "Boston",
    "Venice",
  ];

// city.push("Boston");

//["Delhi", "Mumbai", "Helsinki", "London", "Amsterdam", "Boston"]
console.log(city.push("Boston")); //6
console.log(city);
//(6)[("Delhi", "Mumbai", "Helsinki", "London", "Amsterdam", "Boston")];

city.push("Venice")[ //7
  ("Delhi", "Mumbai", "Helsinki", "London", "Amsterdam", "Boston", "Venice")
];
console.log(city);

// pop -> remove last value in an array

console.log(a.pop()); //venice


//How to remove First Option in an ARRAY

// unshift -> add as first value in Array
var a = [ "Delhi", "Mumbai","Helsinki", "London", "Amsterdam","Boston","Venice"];
console.log(a.unshift("Dubai"));
  // ["Dubai","Delhi", "Mumbai", "Helsinki", "London", "Amsterdam", "Boston", 'Venice']
//     0      1         2         3          4            5          6          7

//["Delhi", "Mumbai", "Helsinki", "London", "Amsterdam", "Boston", 'Venice']


console.log(a.shift()); //"Dubai"(like pop it will show only the removed part)

//slice

var a =["Dubai","Delhi", "Mumbai", "Helsinki", "London", "Amsterdam", "Boston", 'Venice'];

console.log(a.slice(1));

//(7) ['Delhi', 'Mumbai', 'Helsinki', 'London', 'Amsterdam', 'Boston', 'Venice']

console.log(a.slice(2 ,5));
(3) ['Mumbai', 'Helsinki', 'London']

console.log(a.slice(0,-2));
(6) ['Dubai', 'Delhi', 'Mumbai', 'Helsinki', 'London', 'Amsterdam']


//splice(startIndex, DeleteCount, values)

var a  = ["Dubai","Delhi", "Mumbai", "Helsinki", "London", "Amsterdam", "Boston", "Venice"];
//          0      1         2         3          4            5          6          7

//remove 2 values from index 2
console.log(a.splice(2, 2));
//["Mumbai", "Helsinki"]
// ["Dubai","Delhi", "London", "Amsterdam", "Boston", "Venice"]


//remove 0 values but add 2 values on index 3
console.log(a.splice(3, 0, 'Pune', 'Paris'));
//["Dubai","Delhi", "London", 'Pune', 'Paris',"Amsterdam", "Boston", "Venice"]

var a  = ["Dubai","Delhi", "Mumbai", "Helsinki", "London", "Amsterdam", "Boston", "Venice"];
//remove 1 value on index 1 and add 2 values
console.log(a.splice(1,1,"Innsburg", "France"));//output will show only deleted parts..

//["Dubai","Innsburg", 'France', "London", 'Pune', 'Paris',"Amsterdam", "Boston", "Venice"]
































