/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import {Link} from "react-router-dom";
import "./details.css";
import axios from "axios";
const url = "http://localhost:5000";

export default class Details extends Component {
    constructor() {
        super();
        this.state = {
          details: "  ",
          menuList: "  ",
          mealId: sessionStorage.getItem("mealId"),
          userItem: "   ",
        };
      }

    render() {
        let { details } = this.state;
        return (
            <div id ="mainContent">
              <div class="myApp"></div>
                <div className="ImgDiv">                    
                {  /*<img src = {details.restaurant_thumb}
                 alt="rest-pc" /> */} 
                </div>                
            </div>
        )}
    

        async componentDidMount () {
          
           //let restId = this.props.match.params.restaurant_id;
            let restId = this.props.location.search.split ("=")[2];
            //console.log(restId);
            let response = await axios
            .get(`${url}/details/${restId}`, {method: "GET"});
            let menuData = await axios.get(`${url}/menu/${restId}`, { method: "GET" });
        console.log(response);
        console.log(menuData);
         this.setState ({ details :response.data[0] , menuList: response.data})}}   
   




