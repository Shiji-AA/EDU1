//1a. Average rating for all the restaurants. 

var ratingData = [
    {restaurant: 'KFC', rating:5},
    {restaurant: 'Burger King', rating:4},
    {restaurant: 'KFC', rating:3},
    {restaurant: 'Domino', rating:2},
    {restaurant: 'Subway', rating:3},
    {restaurant: 'Domino', rating:1},
    {restaurant: 'Subway', rating:4},
    {restaurant: 'Pizza Hut', rating:5}
    ]
    
    //distinct restaurant
    let distinct = [];
  for (i = 0; i < ratingData.length; i++) {
  if (distinct.indexOf(ratingData[i].restaurant) === -1) {
    distinct.push(ratingData[i].restaurant);
  }
}

let unique = ["KFC", "Burger King", "Domino", "Subway", "Pizza Hut"];
//              0       1             2         3           4
let avgRating = [];
let outRating = 0;
let count = 0;

for (i = 0; i < unique.length; i++) {
  for (j = 0; j < ratingData.length; j++) {
    if (unique[i] == ratingData[j].restaurant) {
      outRating += ratingData[j].rating;
      count = count + 1;
    }
  }

  let output = Number(outRating) / Number(count);
  let myObj = {};
  myObj.restaurant = unique[i];
  myObj.avgRating = output;
  avgRating.push(myObj);
  count = 0;
  outRating = 0;
}
console.log(avgRating);


//1b.List of all restaurants with average rating greater than or equal to 4. 

const output2 = avgRating.filter(item => item.avgRating >= 4);
console.log(output2);

//end    