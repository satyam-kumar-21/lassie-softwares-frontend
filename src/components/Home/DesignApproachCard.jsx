import React from 'react';

function DesignApproachCard({ logo, heading, desc }) {
  return (
    <div className="bg-white rounded-lg px-1  py-8 lg:px-10 lg:my-4 my-1 border">
      <div className="flex">
        <div className="w-1/6 pt-1">
          <img src={logo} alt="Logo" className="w-full h-auto" style={{ maxWidth: '50px', maxHeight: '50px' }} />
        </div>
        <div className="w-5/6 lg:ml-4 ml-2">
          <h2 className="md:text-lg text-2xl font-bold text-gray-800 lg:mb-2 mb-0">{heading}</h2>
          <p className="text-gray-700">{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default DesignApproachCard;
