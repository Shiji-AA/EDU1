
function add() {
    let a = document.getElementById("first").value;
    let b = document.getElementById("second").value;
    let output = Number(a) + Number (b);
    document.getElementsByClassName("out")[0].innerText =`sum of number is ${output}` ;
}



function sub() {
    let a = document.getElementById("first").value;
    let b = document.getElementById("second").value;
    let output = Number(a) - Number (b);
    document.getElementsByClassName("out")[0].innerText =`sum of number is ${output}` ;
}


var a= ["a","b","c",1];
var b= [2,"d","e","f"];
console.log(a+b);
console.log(a.concat(b));
