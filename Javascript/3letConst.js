/*var => we can redeclare and reassign.
let => we cannot redeclare but can reassign.
const=> we cannot redeclare nor reassign*/

var a = 10
var a // declaration
a = 10 //assignment

//var

var a = 11
    a = 12
    console.log(a);

//reassign
var a = 11;
    a = 12;
    console.log(a);     
    
//redeclare
var a = 11;
var a = 12;
console.log(a); 

//let

//reassign
var a = 11;
    a = 12;
    console.log(a);   






