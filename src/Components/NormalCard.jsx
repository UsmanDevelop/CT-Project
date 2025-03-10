import React from 'react'

const NormalCard = ({ logo, title, description }) => {
    return (
      <div className=" p-6 text-center w-72">
        <div className="flex justify-center">
          <img src={logo} alt="Card Logo" className="w-56" />
        </div>
        <h2 className="text-lg font-bold text-gray-100 mt-[-50px]">{title}</h2>
        <p className="text-gray-400">{description}</p>
       </div>
    );
  };

export default NormalCard
