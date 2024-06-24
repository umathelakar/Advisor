import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const ageData = [
  { name: '20-30', value: 25 },
  { name: '31-40', value: 30 },
  { name: '41-50', value: 20 },
  { name: '51-60', value: 15 },
  { name: '61+', value: 10 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A028FF'];

const AgePieChart = () => (
  <PieChart width={400} height={400}>
    <Pie
      data={ageData}
      cx="50%"
      cy="50%"
      labelLine={false}
      label
      outerRadius={120}
      fill="#8884d8"
      dataKey="value"
    >
      {ageData.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
      ))}
    </Pie>
    <Tooltip />
    <Legend />
  </PieChart>
);

export default AgePieChart;
