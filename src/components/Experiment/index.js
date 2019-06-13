import React, { Component } from 'react';
import Card from '../Card/Card';
import './style.css';

class Experiment extends Component {
  render() {
    return (
      <div className="experiment-container">
        <Card
          pathname={`/experiment/create`}
          cardcolor="gradient-3"
          name="Create a Experiment"
          cardImage='../../download.png'
        />
         <Card
          pathname={`/experiment/view`}
          cardcolor="gradient-4"
          name="View Experiments"
          cardImage='../../images.png'
        />
      </div>
    );
  }
}

export default Experiment;
