import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, Legend } from "recharts";
import { getDifficultyDistribution } from '../utils/dataUtils';
const DifficultyChart = ({ questions }) => {
    const data = getDifficultyDistribution(questions);
    if (!data.length)
    return (
      <div className="card text-center">
        <p className="text-gray-500 text-sm">No data available for this category.</p>
      </div>
    );
  return (
    <div className="card">
      <h2 className="text-lg font-semibold text-gray-800 mb-4 text-center">
        Questions by Difficulty
      </h2>

      <div className="w-full h-80">
        <ResponsiveContainer>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="difficulty" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#3B82F6" barSize={60} radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default DifficultyChart