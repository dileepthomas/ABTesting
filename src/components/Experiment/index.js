import React, { Component } from 'react';
import Card from '../Card';
import './style.css';

class Experiment extends Component {
  render() {
    return (
      <div className="experiment-container">
        <Card
          pathname={`/experiment/create`}
          cardcolor="gradient-1"
          name="Create a Experiment"
        />
         <Card
          pathname={`/experiment/view`}
          cardcolor="gradient-2"
          name="View Experiments"
        />
      </div>
    );
  }
}

export default Experiment;
