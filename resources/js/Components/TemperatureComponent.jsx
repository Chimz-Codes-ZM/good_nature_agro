import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const TemperatureChart = ({ data }) => {
  const chartData = data.map(day => ({
    date: day.datetime,
    avgTemp: day.temp,
    maxTemp: day.max_temp,
    minTemp: day.min_temp
  }));

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis label={{ value: 'Temperature (°C)', angle: -90, position: 'insideLeft' }} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="avgTemp" stroke="#8884d8" name="Average Temp" />
        <Line type="monotone" dataKey="maxTemp" stroke="#ff0000" name="Max Temp" />
        <Line type="monotone" dataKey="minTemp" stroke="#0000ff" name="Min Temp" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default TemperatureChart;