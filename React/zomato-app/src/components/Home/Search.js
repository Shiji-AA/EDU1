import React, { Component } from 'react';
import "./Search.css";


const lurl = "http://localhost:5000/locations";
const rurl = "http://localhost:5000/restaurants?stateId=";

export default class Search extends Component {
    constructor() {
        super();
        this.state = {
          location: "",
          restaurants: "",
        };
      }
//For Locations
      renderCity = (data)=>{
        if (data){
          return data.map((item)=>{
            return(
              <option>{ item.state}</option>
            );
          });
                  }}
//For Restaurants
                  renderRest = (data) => {
                    if (data) {
                      return data.map((item) => {
                        return (
                          <option key={item._id} value={item.restaurant_id}>
                            {item.restaurant_name}
                          </option>
                        );
                      });
                    }
                  };

                  handleCity = (event) => {
                    const stateId = event.target.value;
                    fetch(`${rurl}${stateId}`, { method: "GET" })
                      .then((res) => res.json())
                      .then((data) => {
                        this.setState({ restaurants: data });
                        console.log(data);
                      });
                  };

    render() {
        return (
<div id="search"> 
<div id= "logo">
    <span>e!</span>
</div>
<div id ="heading">
    <p>Find the best restaurants, cafes, bars</p>
</div>
<div id="dropdown">

    <select onChange={this.handleCity} >    
                <option>Please type a location</option>
                <option>--SELECT CITY--</option>
                {this.renderCity(this.state.location)}                
    </select>
    <select id="select-style">
    <option>----SELECT RESTAURANTS----</option>
     {this.renderRest(this.state.restaurants)}
    </select>
</div>
</div>
     )}

    //api calling on page load

componentDidMount() {
    fetch( lurl, { method: "GET" })
    .then ((res)=> res.json())
    .then((data) => {
     this.setState({ location: data });
     console.log(data);
    });
}
}
