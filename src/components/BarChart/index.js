import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';


export default class BarChartCustom extends PureComponent {

  render() {
    const {
        configData: { data, width, height },
      } = this.props;
    return (
      <BarChart
        width={width}
        height={height}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="resource" fill="#8884d8" />
      </BarChart>
    );
  }
}
