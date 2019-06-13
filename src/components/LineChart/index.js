import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';


export default class LineChartCustom extends PureComponent {

  render() {
    const {
        configData: { data, width, height },
      } = this.props;
    return (
      <LineChart
        width={width}
        height={height}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="resource" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    );
  }
}
