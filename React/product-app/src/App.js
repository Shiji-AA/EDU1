import React, { Component } from 'react';
import {Header} from './Header';
import "./App.css";
import JSON from "./data.json"
import {ProductDisplay} from './ProductDisplay';
import {Footer} from './Footer';

export default class App extends Component {

 constructor(props){
  super(props);
  this.state = {
    productData: JSON,
    filterData: JSON,
  };
 }
//for filtering products with keywords

filterData=(keyword)=> {
  let output = this.state.productData.filter((data)=>{
    return data.name.toLowerCase().indexOf(keyword.toLowerCase()) > -1;
  });
  console.log("Filtered Data",output);
  this.setState({filterData:output});
};
  render() {
    return (
              <div className='App'>
              < Header
              userInput ={ (data)=> {
                this.filterData(data);
              }}
              />
              <ProductDisplay prodData={this.state.filterData}/>

              <Footer year ="2023" month = "April"/>
               </div>
     )
  }
}
