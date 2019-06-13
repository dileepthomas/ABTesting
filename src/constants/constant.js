const pieChart = {
  data: [{ name: 'Success', value: 80 }, { name: 'Failure', value: 20 }],
  colors: ['#0088FE', '#00C49F'],
  width: 600,
  height: 600,
  outerRadius: 120,
};

const barChart = {
  data: [
    {
      name: '2012',
      resource: 4000,
    },
    {
      name: '2014',
      resource: 3000,
    },
    {
      name: '2016',
      resource: 2000,
    },
    {
      name: '2018',
      resource: 2780,
    },
  ],
  width: 500,
  height: 500,
};

const lineChart = {
  data: [
    {
      name: '2012',
      resource: 4000,
    },
    {
      name: '2014',
      resource: 3000,
    },
    {
      name: '2016',
      resource: 2000,
    },
    {
      name: '2018',
      resource: 2780,
    },
  ],
  width: 500,
  height: 500,
};

const tableData = {
  head: [
    'Experiment Name',
    'People Liked',
    'People Disliked',
    'Percentage of Success',
  ],
  body: [
    {
      experimentName: 'Exp 1',
      peopleLiked: '33',
      peopleDisliked: '2',
      result: '75 %',
    },
    {
      experimentName: 'Exp 1',
      peopleLiked: '33',
      peopleDisliked: '2',
      result: '75 %',
    },
    {
      experimentName: 'Exp 1',
      peopleLiked: '33',
      peopleDisliked: '2',
      result: '75 %',
    },
    {
      experimentName: 'Exp 1',
      peopleLiked: '33',
      peopleDisliked: '2',
      result: '75 %',
    },
  ],
};

export default {
  pieChart,
  barChart,
  lineChart,
  tableData
};
