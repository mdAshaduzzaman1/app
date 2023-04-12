import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Statistics = () => {
  const data = [
    {
      name: 'Assignment-1',
    
      marks: 57,
    
      
    },
    {
      name: 'Assignment-2',
    
      marks: 59,
    
      
    },
    {
      name: 'Assignment-3',
    
      marks: 58,
    
      
    },
    {
      name: 'Assignment-4',
    
      marks: 48,
    
      
    },
    {
      name: 'Assignment-5',
    
      marks: 50,
    
      
    },
    {
      name: 'Assignment-6',
    
      marks: 60,
    
      
    },
    {
      name: 'Assignment-7',
    
      marks: 60,
    
      
    },
    {
      name: 'Assignment-8',
    
      marks: 58,
    
      
    },
  ];

  return (
    <div className="w-75">
      <h1 className='mb-5'> Assignment marks chart!</h1>
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="marks" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;
