import React from 'react';

function ServiceCard({ title, description, icon }) {
  return (
    <div className="rounded-xl bg-white p-6 text-center shadow-xl">
      <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-teal-400 shadow-teal-500/40">
        {icon}
      </div>
      <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">{title}</h1>
      <p className="px-4 text-gray-500">{description}</p>
    </div>
  );
}

export default ServiceCard;
