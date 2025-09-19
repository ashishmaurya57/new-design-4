import React from 'react';

function About() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="luxury-heading text-4xl md:text-5xl font-light text-gray-900 mb-6">
            About Aroma MedSpa
          </h2>
          <p className="luxury-subheading text-lg text-gray-600 mb-6 leading-relaxed">
            Founded with a vision to blend luxury with medical excellence, Aroma MedSpa has become the premier destination for those seeking exceptional aesthetic treatments in a modern, welcoming environment.
          </p>
          <p className="luxury-subheading text-lg text-gray-600 mb-8 leading-relaxed">
            Our team of certified medical professionals is dedicated to providing personalized care using the latest technology and techniques. We believe that everyone deserves to feel confident and beautiful in their own skin.
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-blue-900 transition-all duration-300 uppercase tracking-wide font-medium">
            Meet Our Team
          </button>
        </div>
        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://images.pexels.com/photos/5659015/pexels-photo-5659015.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="overlapping collage spa treatment photos for beauty website about section"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
            <img 
              src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="collage of clinic team photos"
              className="rounded-lg shadow-lg w-full h-auto object-cover mt-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;