import React from 'react'
import { Link } from 'react-router';

function Campaign({campaign}) {
    const {id,image,title,description,division}=campaign;
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
      <img
        src={image}
        alt={title}
        className="h-48 w-full object-cover"
      />
      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-xl font-semibold mb-2 text-sky-600">{title}</h2>
        <p className="text-gray-700 flex-grow">{description.length > 120 ? description.slice(0, 120) + '...' : description}</p>
        <h6 className="mt-3 text-sm font-medium text-gray-500">Division: {division}</h6>

        <div className="mt-4 flex justify-between items-center">
          <button className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded font-semibold transition">
            Donate Now
          </button>
          <Link 
            to={`/details/${id}`} 
            className="text-sky-600 hover:underline font-medium"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Campaign
