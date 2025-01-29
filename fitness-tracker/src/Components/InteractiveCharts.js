// InteractiveCharts.js
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function InteractiveCharts({ data }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="steps" stroke="#8884d8" />
        <Line type="monotone" dataKey="heartRate" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default InteractiveCharts;
