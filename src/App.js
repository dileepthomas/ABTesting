import React, { Component } from 'react';
import './App.css';
import PieChart from './components/PieChart';
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import Constants from './constants/constant';


class App extends Component{
  render(){
    const { 
     pieChart,
     barChart,
     lineChart
    } = Constants
    return(
      <>
      <PieChart 
        configData={pieChart}
      />
      <BarChart 
        configData={barChart}
      />
      <LineChart 
        configData ={lineChart}
      />
      </>
    )
  }
}


export default App;
