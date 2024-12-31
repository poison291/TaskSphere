import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function Image({ name, image, desc, direction }) {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div
          data-aos={`fade-${direction}`}
          className={`flex flex-col md:flex-row items-center justify-between py-16 px-10 space-y-10 md:space-y-0 ${direction === 'right' ? 'md:flex-row-reverse' : ''}`}
        >
          {/* Text Section */}
          <div className="w-full md:w-1/2 px-8">
            <div className="bg-gradient-to-r from-green-100 to-green-50 p-8 rounded-lg shadow-lg max-w-lg mx-auto text-center">
              <h1 className="text-3xl font-semibold text-green-700 mb-4">{name}</h1>
              <p className="text-lg text-gray-600">{desc}</p>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2 px-8">
            <img
              className="w-10/12 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 border-4 border-green-300"
              src={image}
              alt={name}
            />
          </div>
        </div>
    );
}
