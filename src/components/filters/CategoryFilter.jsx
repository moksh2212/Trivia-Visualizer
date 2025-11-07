import React from 'react'
import { cleanCategory } from '../utils/dataUtils'
const CategoryFilter = ({ categories, selected, onSelect }) => {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
    <button
      onClick={() => onSelect("All")}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
        ${selected === "All"
          ? "bg-blue-600 text-white shadow"
          : "bg-gray-200 text-gray-700 hover:bg-blue-100"
        }`}
    >
      All
    </button>

    {categories.map((category) => {
    const label = cleanCategory(category);

        return (
        
      <button
        key={category}
        onClick={() => onSelect(category)}
        className={`px-4 py-2 rounded-lg text-sm font-medium transition
          ${selected === category
            ? "bg-blue-600 text-white shadow"
            : "bg-gray-200 text-gray-700 hover:bg-blue-100"
          }`}
      >
            {label}
      </button>
    )})}
  </div>
  )
}

export default CategoryFilter