var a = 10
var b = 20
a + b ;

//Syntax

//Keyboard name of function(parameters) {
    // return output 
// }
function addition (a , b) {
    return a + b ;
              //parameter
    }

console.log(addition(10,20));  //function call
console.log(addition(100,200));
console.log(addition(101,210));

function isEven (input) {
    let out ;
    if (input %2 == 0) {
        out = `Number ${input} is Even` ;
    } else {
        out = `Number ${input} is Odd` ;
    }
return out ;
}
console.log(isEven(501245));




let add = (a,b) => a + b ;
const isEven1 = (input) =>  {
    let out ;
    if (input % 2 == 0) {
        out = `Number ${input} isEven`;
    } else {
        out = `Number ${input} is odd`;
    }
    return out;
};
console.log (isEven1(3));


let greet =() => console.log ("Hello");
greet ();

let age = 40
let welcome = 
age < 25 ?() => console.log ("Teenage"): () => console.log ("Adult");
welcome ();




let sum = (a, b) => {
    let result = a + b;
    return result ;
}
let output =sum (52, 7)
console.log (output);


