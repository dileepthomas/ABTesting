import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, Legend } from 'recharts';

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default class PieChartCustom extends PureComponent {
  render() {
    const {
      configData: { data, colors, width, height, outerRadius },
    } = this.props;
    return (
      <PieChart width={width} height={height}>
        <Pie
          data={data}
          cx={200}
          cy={200}
          labelLine={false}
          label={({ value, index, x, y, cx }) => {
            return (
              <text
                x={x}
                y={y}
                fill="#8884d8"
                textAnchor={x > cx ? 'start' : 'end'}
                dominantBaseline="central"
              >
                {data[index].name} ({value})
              </text>
            );
          }}
          outerRadius={outerRadius}
          fill="#8884d8"
          dataKey="value"
          name="#"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
      </PieChart>
    );
  }
}
