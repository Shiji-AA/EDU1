let a = 12 ;
if (a%2 ==0) {
    console.log(`Number ${a} is even`);
}else {
    console.log (`Number ${a} is odd`);
}


let uname = "Jasmin";
if (uname == "John") {
    console.log (`Hi ${uname} you are admin`);
}else if (uname == "Jack") {
    console.log (`Hi ${uname} you are a super admin`);
}else {
    console.log (`Hi ${uname} you are unknown`);
}

let name = "Jack" ;
let role = "Admin" ;
if (role == "Admin") {
    if (name == "John") {
        console.log (`Hi ${name} you are an admin`);   
    }else {
        console.log (`Hi ${name} you are unknown`);
    }
} else {
     if (name == "Jack") {
        console.log (`Hi ${name} you are a super admin`);   
    }else {
        console.log (`Hi ${name} you are unknown`);
    }
}
