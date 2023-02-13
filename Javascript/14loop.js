//while loop

var i = 0;
while (i<5) {
    console.log(i);
    i++;
}


//do while
//----------

var i = 0;
do {
    console.log(i);
    i++;
} while (i< 5);

//for of

var city = ["delhi","mumbai", "helsinki","london","kochi"]
for(mycity of city) {
    console.log(mycity);
}




var city = ["delhi","mumbai", ['red','yellow','orange'],"helsinki","london","kochi"]
for (mycity of city)  {
    if (Array.isArray(mycity)) {
        for (mycolor of mycity) {
            console.log(mycolor)
        }
    }else {
        console.log(mycity);
    }
}

//foreach


const color = ["red","green","yellow"];
color.forEach (myFunction)
function myFunction(item) {
    console.log(item)
}

//Map

var a = [4,7,8,12,5,12,74,58,87,35]
var b = a.map((data) => {
    return  data*2;
});
console.log(b);



var a = [4,8,5,23];
var b = a.map((abc) => {
    return `<p>${abc}</p>`;
});
console.log(b);


//Filter

var a =[4,7,8,12,5,12,74,58,87,35];
var b = a.filter((data) => {
    return data>20;
});
console.log(b);


var a = [-1,0,1,2];
var b = a.map((data) => {
    return data*2;
});
console.log(b);


var b = a.filter((data)=> {
    return data*2;
});
console.log(b);

//objects and arrays

var a = {} //object
var a = [] //array


var movieName = "Avengers";
var movieRating = 5;
var movieType = "Action";

var movie = {
    name :"Avengers",
    rating : 5,
    type: "action",
};

var movieList = [
    {name :"Avengers",
    rating : 5,
    type: "action",
    },
    {
        name :"Avengers",
    rating : 5,
    type: "action",
    }
];
typeof (movie)
//object
movie.name 
movie.rating 
movie.type
console.log(movie) ;
//{name: 'Avengers', rating: 5, type: 'action'}

console.log(movie["name"]);
//Avengers
console.log(movie["rating"]);
//5
console.log(movie["type"]);
//action



for (key in movie) {
    console.log(key);
}
//name
//rating
//type


for (key in movie) {
    console.log(movie[key]);
}

//Avengers
// 5
//action



let person ={
    name: "John",
    age:20,
}
console.log(person.name);//dot notation===object name.key
//John

console.log(person["name"]); // bracket notation ==object name["key"]
//John


//Nested Object
const student ={
    name: "John",
    age: 20,
    marks:{
        science:78,
        maths:89,
    }
}
console.log(student.marks);
//{science: 78, maths: 89}
console.log(student.marks.science);
//78

//function inside an Object

const result ={
    name: "John",
    age: 20,
    greet: function() {
        console.log("hello");
    },
};
result.greet();

//hello

var student1 ={"name": "appu","age":20 ,"mark":50};
console.log(student1);   //object

var student2 = [{"name": "sneha","age":21 ,"mark":45},{"name": "sam","age":19 ,"mark":48},
{"name": "kavitha","age":20 ,"mark":41},{"name": "lali","age":20 ,"mark":46}];

console.log(student2);

console.log (student2[0].name);

//sneha

console.log(student2[3].name);
//lali
console.log(student2[2].mark);
//41


















