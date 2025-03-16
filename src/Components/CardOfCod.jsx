import React from 'react'

function CardOfCod({ icon, title, description }) {
    return (
        <div className="bg-gray-900 p-7 rounded-lg shadow-lg flex flex-col items-start gap-3">
            <span className="text-3xl inline"></span>
            <span className="text-xl font-semibold inline">{icon}  {title}</span>
            <p className="text-gray-300">{description}</p>
        </div>
    );
}

export default CardOfCod
