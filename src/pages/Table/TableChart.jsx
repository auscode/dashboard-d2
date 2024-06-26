import React from 'react';
import Card from '../../components/Card.jsx';
import TableComponent from './TableComponent.jsx';

const data = [
  {
    id: 1,
    assigned: 'Sunil Joshi',
    designation: 'Web Developer',
    name: 'Elite Admin',
    priority: 'Low',
    budget: '$3.9',
  },
  {
    id: 2,
    assigned: 'Andrew McDownland',
    designation: 'Project Manager',
    name: 'Real Homes WP Theme',
    priority: 'Medium',
    budget: '$24.5k',
  },
  {
    id: 3,
    assigned: 'Christopher Jamil',
    designation: 'Project Manager',
    name: 'MedicalPro WP Theme',
    priority: 'High',
    budget: '$12.8k',
  },
  {
    id: 4,
    assigned: 'Nirav Joshi',
    designation: 'Frontend Engineer',
    name: 'Hosting Press HTML',
    priority: 'Critical',
    budget: '$2.4k',
  },
];

const TableChart = () => {
  return (
    <Card>
      <div className="flex flex-col p-4">
        <div>
          <h1 className="items-left font-bold text-xl">Recent Transactions</h1>
        </div>
        <div>
          <TableComponent data={data} />
          {/* <TableComponent data={data} /> */}
        </div>
      </div>
    </Card>
  );
};

export default TableChart;
