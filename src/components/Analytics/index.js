import React, { Component } from 'react';
import Constants from '../../constants/constant';
import PieChart from '../PieChart';
import BarChart from '../BarChart';
import LineChart from '../LineChart';
import './style.css';

class Analytics extends Component {
  render() {
    const { pieChart, barChart, lineChart } = Constants;
    return (
      <div className="charts-container">
        <div className="first-section-container">
          <LineChart configData={lineChart} />
          <PieChart configData={pieChart} />
        </div>
        <div className="second-section-container">
          <BarChart configData={barChart} />
        </div>
      </div>
    );
  }
}

export default Analytics;
