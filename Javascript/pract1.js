var a = 10 ;
var b = 20 ;
var c = a+b;
console.log (c) ;

var a =" Hi"
var b = " i am shiji "
var c = a+b;
console.log(c);

console.log(typeof a);

var a = "Hi";
var b = 20;
var c = a+b;
console.log(c);

var a = false;
var b = false;
var c =a+b;
console.log(c);

//parseInt and parseFloat

var a = "20";
var b = "30";
console.log(parseInt(a));
console.log(parseInt(b));
var c = (parseInt(a))+(parseInt(b))
console.log(c);

var a ="30.15";
var b ="20.85";
var c = (parseFloat(a))+(parseFloat(b));
console.log(c);

/*alert("Form submitted" )
confirm("Do you want to leave?");
prompt("what is your name?")*/

var a = 10;
console.log(a);
var a = 20;
a = 60;
console.log(a);

let x = 50 ;
x = 70;
console.log(x);

const m =50 ;
console.log(m);


var mname = "avengers";
var type = "action movie";
var category = "Hollywood";
var rating = "4.5"
var output = "An " + mname + " is an "+ type + " with the rating of  " + rating + " and from the " + category + "."
console.log(output);
var output = `An ${mname} is an ${type} with the rating of ${rating} and from the category of ${category}.`
console.log(output);

var h = 10;
var n = 20;
console.log(h != n);


var a = 43;
if (a % 2 == 0) {
    console.log(`number ${a} is even`)
}else {
    console.log(`number ${a} is odd`)
}

var uname = "anam";
if(uname == "John") {
    console.log(`Hi ${uname}you are a admin`);
} else if (uname == "Jack")  {
    console.log(`Hi ${uname} you are a super admin`) ;
} else {
    console.log(`Hi ${uname} you are unknown`);
}

var name = "Jack";
var role = "admin" ;
if (role == "admin") {
    if (name == "Jereez") {
        console.log(`Hi ${name} you are a admin`);
} else {
        console.log(`Hi ${name} you are unknown`);
    } 
}else {
        if (name == "Jack" ) {
            console.log (`Hi ${name} you are a super admin`);                      
        } 
       else  {
        console.log (`Hi ${name} you are unknown`);
    }
}

var a = 10
a > 10 ? "hi" : "bi";


//Function

function isEven (input) {
let out ;
if (input % 2 == 0) {
    out = `Number ${input}  is even`;
}else {
    out = `Number ${input}  is odd`;
}
return out ;
}
console.log (isEven (50));

    








