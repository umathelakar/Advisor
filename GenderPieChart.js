import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const genderData = [
  { name: 'Male', value: 60 },
  { name: 'Female', value: 40 },
];

const COLORS = ['#0088FE', '#FFBB28'];

const GenderPieChart = () => (
  <PieChart width={400} height={400}>
    <Pie
      data={genderData}
      cx="50%"
      cy="50%"
      labelLine={false}
      label
      outerRadius={120}
      fill="#8884d8"
      dataKey="value"
    >
      {genderData.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
      ))}
    </Pie>
    <Tooltip />
    <Legend />
  </PieChart>
);

export default GenderPieChart;
