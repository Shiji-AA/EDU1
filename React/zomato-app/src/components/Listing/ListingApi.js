/* eslint-disable no-unused-vars */
import React, { Component } from 'react';

import axios from "axios";
import ListingDisplay from './ListingDisplay';
import Listing from "./Listing.css";


const url = "http://localhost:5000/restaurants?mealId=";

export default class ListingApi extends Component {
    constructor() {
        super();
        this.state ={
            restaurantList: "",
        }
    }

    render() {
        return <div>
            <div className="row">
          <div id="mainListing">
            <div id="filter">
              <center>
                <h4>Filter</h4>
              </center>

            
            

            </div>
          </div>
          <ListingDisplay listData={this.state.restaurantList} />
        </div>
        </div>
                    
    }
        componentDidMount () {
            let mealId = this.props.match.params.mealId;
            console.log(mealId);
            axios.get(`${url}${mealId}`, { method: "GET" })
          .then((res) => this.setState({restaurantList: res.data}));
            }
          
              
    }

