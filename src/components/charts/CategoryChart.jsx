import React from 'react'
import { ResponsiveContainer,PieChart,Cell,Legend,Tooltip,Pie } from 'recharts';
import { getCategoryDistribution } from '../utils/dataUtils'
const CategoryChart = ({questions}) => {
    const data = getCategoryDistribution(questions);
    if (!data.length)
    return (
      <div className="card text-center">
        <p className="text-gray-500 text-sm">No data available for this category.</p>
      </div>
    );
    const getRandomColor = () =>
    `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    const COLORS = data.map(() => getRandomColor());

  return (
<div className="card">
<h2 className="text-lg font-semibold text-gray-800 mb-4 text-center">
        Questions by Category
      </h2>
      <div className="w-full h-80">
      <ResponsiveContainer>
      <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((_, i) => (
                <Cell key={i} fill={COLORS[i]} />  ))}
            </Pie>
            <Tooltip />
            <Legend verticalAlign="bottom" height={36} />
          </PieChart>
      </ResponsiveContainer>

      </div>
     </div>  )
}

export default CategoryChart