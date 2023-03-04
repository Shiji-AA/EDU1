//Part 1 first

class restaurantManager {
    
    //Array of objects
    restaurantList =[
        {
    id:1,
    restaurantName: 'KFC',
    address: 'Anand Vihar',
    city:'Delhi'
    },

    {
    id:2,
    restaurantName: 'Domino',
    address: 'Savita Vihar',
    city:'Mumbai'
    }, 

    {
    id:3,
    restaurantName: 'Burger King',
    address: 'Civil Lane',
    city:'Pune'    
    },
    {
    id:4,
    restaurantName: 'Subway',
    address: 'Contonment',
    city:'Mumbai'    
    },
    
    ] ;

    //part1-second

    printAllRestaurantNames=()=>{
        return this.restaurantList.map((data) => {
            return data.restaurantName;
        }) ;
    };
    
    //part1-third

    filterRestaurantByCity=(cityName)=>{
        return this.restaurantList.filter((data) => {
            return data.city==cityName
        });
        }
    };

    const restObj = new restaurantManager();
    const output1 = restObj.printAllRestaurantNames();
    const output2 = restObj.filterRestaurantByCity("Delhi");
    console.log(output1);
    console.log(output2);


    //Part 2-first

    orderData = { 
    'Below 500': 20, 
    '500-1000': 29,
    '1000-1500': 30, 
    '1500-2000': 44, 
    'Above 2000': 76
    };
0
    const values = Object.values(orderData);
    console.log(values);
    const total = values.reduce((prev,next) =>prev + next);
    console.log(total);

     //Part 2-second

   //const headers = Object.keys(orderData).length;
   //console.log(headers);
    const headers = Object.keys(orderData);
    console.log(headers);


    //Part 2-third
     let arr =[];
     const response = headers.map((item,index) => {
        const obj= {
            'id': index + 1,
            'order': item,
            'orderpercentage': ((orderData[item]/total)*100).toFixed(2),
            'restaurant':'Punjabi Tadka'
        }
     arr.push(obj);
     })
     console.log(arr);


     //end




