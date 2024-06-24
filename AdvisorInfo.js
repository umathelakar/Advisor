import React, { useState } from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import Select from 'react-select';

const data = [
  { name: 'Advisor 1', value: 400, year: 2020 },
  { name: 'Advisor 2', value: 300, year: 2020 },
  { name: 'Advisor 3', value: 300, year: 2021 },
  { name: 'Advisor 4', value: 200, year: 2021 },
  { name: 'Advisor 5', value: 278, year: 2022 },
  { name: 'Advisor 6', value: 189, year: 2022 },
];

const years = [
  { value: 2020, label: '2020' },
  { value: 2021, label: '2021' },
  { value: 2022, label: '2022' },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

function AdvisorInfo() {
  const [selectedYear, setSelectedYear] = useState(years[0].value);

  const handleChange = selectedOption => {
    setSelectedYear(selectedOption.value);
  };

  const filteredData = data.filter(d => d.year === selectedYear);

  return (
    <div>
      <h2>Advisor Info</h2>
      <Select options={years} onChange={handleChange} defaultValue={years[0]} />
      
      <h3>Node Graph</h3>
      {/* Add your node graph visualization here */}

      <h3>Pie Chart</h3>
      <PieChart width={400} height={400}>
        <Pie
          data={filteredData}
          cx={200}
          cy={200}
          labelLine={false}
          label
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {filteredData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>

      <h3>Bar Chart</h3>
      <BarChart
        width={500}
        height={300}
        data={filteredData}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </div>
  );
}

export default AdvisorInfo;

