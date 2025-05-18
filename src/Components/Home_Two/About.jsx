import React from 'react';
import about_img from '../../assets/home_two.jpg';
import 'animate.css';

function About() {
  return (
    <div className='mt-5'>
      <section className="bg-blue-50 px-4 py-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          
          {/* Text Section */}
          <div className="animate__animated animate__fadeInLeft">
            <h2 className="text-4xl font-bold text-blue-900 mb-4 animate__animated animate__fadeInDown animate__delay-1s">
              Why This Platform Exists
            </h2>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              Every winter, countless people across Bangladesh struggle to stay warm due to a lack of basic winter clothing. What might be an unused sweater in your closet could be a lifeline for someone else. Our platform bridges the gap between generous donors and the communities who need them the most.
            </p>

            <h3 className="text-2xl font-semibold text-blue-800 mb-3 animate__animated animate__fadeInUp animate__delay-2s">
              Our Mission
            </h3>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              We believe no one should suffer in the cold. Our mission is to create a simple, reliable, and transparent system for collecting and distributing warm clothes—blankets, jackets, and sweaters—to the most vulnerable populations across the country. We work hand-in-hand with local volunteers and organizations to ensure every donation reaches the right hands.
            </p>

            <h3 className="text-2xl font-semibold text-blue-800 mb-3 animate__animated animate__fadeInUp animate__delay-3s">
              How You Can Help
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Whether you're an individual with extra clothes or someone eager to contribute your time and energy, there's a place for you here. You can:
            </p>
            <ul className="list-disc text-left text-gray-700 pl-6 mt-3 space-y-2 text-lg">
              <li>Donate warm clothes through our simple form</li>
              <li>Volunteer to pick up or distribute donations</li>
              <li>Share our mission with your friends and community</li>
            </ul>
          </div>

          {/* Image Section */}
          <div className="hidden md:block animate__animated animate__fadeInRight">
            <img
              src={about_img}
              alt="Winter donation"
              className="w-full rounded-xl shadow-lg"
            />
          </div>

        </div>
      </section>
    </div>
  );
}

export default About;
