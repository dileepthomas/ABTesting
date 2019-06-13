import React, { Component } from 'react';
import Card from './components/Card/Card';
import './App.css';


class App extends Component{
  render(){
    return(
      <div className="App">
      <div className="row abcard">
        <Card name="Experiment" cardcolor="gradient-1" cardImage="../Flask-Liquid-3233877.jpg"/>
        <Card name="Analysis" cardcolor="gradient-2" cardImage="../waitingforgodsgoodgifts.jpg"/>
      </div>
    </div>
    )
  }
}

export default App;