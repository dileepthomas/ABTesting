import React, { Component } from 'react';
import Card from './components/Card';
import './App.css';


class App extends Component{
  render(){
    return(
      <div className="App">
      <div className="row abcard">
        <Card name="Experiment" cardcolor="gradient-1"  pathname="/experiment"  />
        <Card name="Anaysis" cardcolor="gradient-2" pathname='/analytics'/>
      </div>
    </div>
    )
  }
}


export default App;
