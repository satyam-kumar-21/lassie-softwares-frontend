import React from 'react';

function ServiceCard({ logo, heading, desc }) {
  return (
    <div className="max-w-sm mx-auto p-3 mb-8 bg-white border border-gray-200 shadow-xl cursor-pointer">
      <div className="w-20 h-20 mx-auto mb-2">
        <img src={logo} alt="Service Logo" className="object-contain h-full w-full" />
      </div>
      
        <h5 className="mb-2 text-xl font-semibold text-gray-900">{heading}</h5>
      
      <p className="mb-3 text-gray-600">{desc}</p>
    </div>
  );
}

export default ServiceCard;
