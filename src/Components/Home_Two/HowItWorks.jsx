import React from 'react'

function HowItWorks() {
  return (
    <div>
         <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-900 mb-4">How It Works</h2>
        <p className="text-gray-700 text-lg mb-10">
          Donating winter clothes is easy, impactful, and takes just a few steps. Here's how you can be part of the warmth.
        </p>

        <div className="grid gap-8 md:grid-cols-3 text-left">
          <div className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-2xl font-semibold text-blue-800 mb-3">1. Fill Out the Form</h3>
            <p className="text-gray-700">
              Let us know what you're donating and where it can be picked up. Use the form on our homepage to get started.
            </p>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-2xl font-semibold text-blue-800 mb-3">2. We Collect from You</h3>
            <p className="text-gray-700">
              Our local volunteers will contact you and collect the donations from your provided address or drop-off point.
            </p>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-2xl font-semibold text-blue-800 mb-3">3. Clothes Reach Those in Need</h3>
            <p className="text-gray-700">
              We distribute donations in collaboration with verified local groups and organizations across supported divisions.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-blue-800 mb-3">Supported Divisions</h3>
          <p className="text-gray-700 mb-4">
            We currently operate across the following divisions in Bangladesh:
          </p>
          <ul className="text-gray-800 text-lg list-disc list-inside">
            <li>Dhaka</li>
            <li>Chattogram</li>
            <li>Rajshahi</li>
            <li>Khulna</li>
            <li>Barishal</li>
            <li>Sylhet</li>
            <li>Rangpur</li>
            <li>Mymensingh</li>
          </ul>
        </div>
      </div>
    </section>
      
    </div>
  )
}

export default HowItWorks
