import React from 'react';
import USMap from './USMap';
import GenderPieChart from './GenderPieChart';
import CategoryPieChart from './CategoryPieChart';
import AgePieChart from './AgePieChart';  // Import the new AgePieChart component

const Homepage = () => {
  return (
    <div>
      <h2>Advisor Information on US Map</h2>
      <USMap />
      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px', flexWrap: 'wrap' }}>
        <div>
          <h3>Gender Distribution of Advisors</h3>
          <GenderPieChart />
        </div>
        <div>
          <h3>Advisor Categories</h3>
          <CategoryPieChart />
        </div>
        <div>
          <h3>Age Distribution of Advisors</h3>
          <AgePieChart />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
