let randomNumber = Math.random().toFixed(2)*100 


const pieChart = {
  data: [
    { name: 'Success', value: randomNumber},
    { name: 'Failure', value: 100 -randomNumber},
  ],
  colors: ['green', 'red'],
  width: 600,
  height: 600,
  outerRadius: 120,
};

const barChart = {
  data: [
    {
      name: 'Clicks',
      resource: Math.floor(1000 + Math.random() * 9000),
    },
    {
      name: 'Hover',
      resource: Math.floor(1000 + Math.random() * 9000),
    },
    {
      name: 'Navigation',
      resource: Math.floor(1000 + Math.random() * 9000),
    },
    {
      name: 'Close',
      resource: Math.floor(1000 + Math.random() * 9000),
    },
  ],
  width: 500,
  height: 500,
};

const lineChart = {
  data: [
    {
      time: '12.00 AM',
      resource: Math.floor(1000 + Math.random() * 9000),
    },
    {
      time: '06.00 AM',
      resource: Math.floor(1000 + Math.random() * 9000),
    },
    {
      time: '12.00 PM',
      resource: Math.floor(1000 + Math.random() * 9000),
    },
    {
      time: '06.00 PM',
      resource: Math.floor(1000 + Math.random() * 9000),
    },
  ],
  width: 500,
  height: 500,
};

const tableData = {
  head: ['Experiment Name'],
  body: [
    {
      experimentName: 'AB Testing 1',
    },
    {
      experimentName: 'AB Testing 2',
    },
    {
      experimentName: 'AB Testing 3',
    },
    {
      experimentName: 'AB Testing 4',
    },
  ],
};

export default {
  pieChart,
  barChart,
  lineChart,
  tableData,
};
