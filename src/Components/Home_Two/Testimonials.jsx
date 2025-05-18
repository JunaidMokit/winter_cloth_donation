import React from 'react'

function Testimonials() {
  return (
    <div>
        <section className="bg-blue-50 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-900 mb-4">What People Are Saying</h2>
        <p className="text-gray-700 text-lg mb-10">
          Hear from our donors, volunteers, and beneficiaries.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <p className="text-gray-700 italic mb-4">
              "I had a closet full of unused jackets. Donating through this platform was effortless and rewarding!"
            </p>
            <h4 className="font-semibold text-blue-800">— Ayesha Rahman, Donor</h4>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <p className="text-gray-700 italic mb-4">
              "Distributing warm clothes in rural areas gave me purpose. Grateful to be part of this cause."
            </p>
            <h4 className="font-semibold text-blue-800">— Imran Hossain, Volunteer</h4>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <p className="text-gray-700 italic mb-4">
              "That blanket helped my children sleep warm during one of the coldest winters in our village."
            </p>
            <h4 className="font-semibold text-blue-800">— Rina Akter, Beneficiary</h4>
          </div>
        </div>
      </div>
    </section>
      
    </div>
  )
}

export default Testimonials
