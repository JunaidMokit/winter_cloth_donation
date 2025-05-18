import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa';


function Footer() {
  return (
    <div>
        <footer className="w-7xl m-auto bg-blue-900 text-white pt-12 pb-6 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center md:text-left">

        <div>
          <h3 className="text-2xl font-bold mb-4">Winter Aid Bangladesh</h3>
          <p className="text-sm">
            Spreading warmth and kindness across the nation. Join us in making this winter better for those in need.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-3">Contact Us</h4>
          <p className="flex items-center justify-center md:justify-start gap-2 text-sm">
            <FaEnvelope /> winteraidbd@gmail.com
          </p>
          <p className="flex items-center justify-center md:justify-start gap-2 text-sm mt-2">
            <FaPhone /> +880 1234-567890
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
          <div className="flex gap-4 justify-center md:justify-start text-xl">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebookF className="hover:text-blue-400 transition" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter className="hover:text-blue-400 transition" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram className="hover:text-pink-400 transition" />
            </a>
          </div>
        </div>

      </div>

      <div className="border-t border-blue-800 mt-10 pt-4 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} Winter Aid Bangladesh. All rights reserved.
      </div>
    </footer>
      
    </div>
  )
}

export default Footer
