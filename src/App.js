import React, { Component } from 'react';
import './App.css';
import PieChart from './components/PieChart';

import Constants from './constants/constant';


class App extends Component{
  render(){
    const { 
     pieChart
    } = Constants
    return(
      <>
      <PieChart 
        configData={pieChart}
      />
      </>
    )
  }
}


export default App;
