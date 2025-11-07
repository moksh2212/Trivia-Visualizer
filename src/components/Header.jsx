import React from 'react'

const Header = ({ title }) => {
  return (
    <div className="text-center mt-2">
    <h1 className="text-3xl md:text-4xl font-bold text-blue-600 tracking-tight">
      {title}
    </h1>
  </div>
  )
}

export default Header