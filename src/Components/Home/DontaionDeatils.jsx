import React from 'react'
import { useLoaderData, useParams } from 'react-router'
import DonationForm from './DonationForm';

function DontaionDeatils() {
    const{id}=useParams();
    const data=useLoaderData();

    const newId=parseInt(id);
    const cam=data.find(cam=>cam.id===newId);
    
    const {
    image,
    title,
    description,
    status,
    contactInfo,
    division,
    items,
    pickupLocation,
    additionalNotes
  } = cam;
  return (
     <>
       <div className="min-h-screen bg-sky-100 flex items-center justify-center px-4 py-12">
      <div className="bg-white rounded-2xl shadow-xl border border-sky-200 w-full max-w-4xl overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-72 object-cover border-b border-sky-100"
        />
        <div className="p-8">
          <h2 className="text-3xl font-extrabold text-sky-700 mb-4">{title}</h2>
          <p className="text-gray-800 text-lg mb-4">{description}</p>

          <div className="mb-4">
            <span
              className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                status === 'Available' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-600'
              }`}
            >
              Status: {status}
            </span>
          </div>

          <div className="mb-6">
            <p className="text-sky-700 font-medium">Contact Info:</p>
            <p className="text-gray-700">{contactInfo}</p>
          </div>

          <div className="mb-6">
            <p className="text-sky-700 font-medium mb-2">Items Included:</p>
            <ul className="list-disc list-inside space-y-1">
              {items.map((item, index) => (
                <li key={index} className="text-gray-700">
                  {item.type} – {item.quantity}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
            <div>
              <p className="font-semibold text-sky-700">Division:</p>
              <p>{division}</p>
            </div>
            <div>
              <p className="font-semibold text-sky-700">Pickup Location:</p>
              <p>{pickupLocation}</p>
            </div>
          </div>

          {additionalNotes && (
            <div className="mt-6">
              <p className="text-sky-700 font-medium">Additional Notes:</p>
              <p className="text-gray-600 italic">{additionalNotes}</p>
            </div>
          )}
        </div>
      </div>
      

    </div>
    <DonationForm></DonationForm>
     </>
    
  )
}

export default DontaionDeatils
