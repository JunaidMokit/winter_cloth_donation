import React from 'react'

function CallToAction() {
  return (
    <div>
      <section className="bg-blue-50 text-blue-800 py-20 px-4 mt-2.5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="text-lg mb-8">
            Join our mission to spread warmth and compassion this winter. Every jacket, every blanket, every action matters.
          </p>
          <a
            href=""
            className="inline-block bg-white text-blue-800 font-semibold py-3 px-6 rounded-full hover:bg-gray-200 transition"
          >
            Donate Now
          </a>
        </div>
      </section>
    </div>
  )
}

export default CallToAction
