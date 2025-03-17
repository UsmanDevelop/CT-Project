import React from 'react'

function StatsCard({ value, description }) {
  return (
    <div className="border border-slate-700 shadow-lg text-center p-10">
        <h3 className="text-2xl font-bold text-[#fe971e]">{value}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
  )
}

export default StatsCard