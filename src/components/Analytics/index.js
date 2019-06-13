import React, { Component } from 'react';
import Constants from '../../constants/constant';
import PieChart from '../PieChart';
import BarChart from '../BarChart';
import LineChart from '../LineChart';

class Analytics extends Component {
  render() {
    const { pieChart, barChart, lineChart } = Constants;
    return (
      <div>
        <PieChart configData={pieChart} />
        <BarChart configData={barChart} />
        <LineChart configData={lineChart} />{' '}
      </div>
    );
  }
}

export default Analytics;
