import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const categoryData = [
  { name: 'Senior Advisor', value: 30 },
  { name: 'Junior Advisor', value: 50 },
  { name: 'Intern', value: 20 },
];

const COLORS = ['#00C49F', '#FFBB28', '#FF8042'];

const CategoryPieChart = () => (
  <PieChart width={400} height={400}>
    <Pie
      data={categoryData}
      cx="50%"
      cy="50%"
      labelLine={false}
      label
      outerRadius={120}
      fill="#8884d8"
      dataKey="value"
    >
      {categoryData.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
      ))}
    </Pie>
    <Tooltip />
    <Legend />
  </PieChart>
);

export default CategoryPieChart;
