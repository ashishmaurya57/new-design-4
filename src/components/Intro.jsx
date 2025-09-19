import React from 'react';

function Intro() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1">
          <img 
            src="https://images.pexels.com/photos/5659015/pexels-photo-5659015.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="medical spa treatment room photo"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>
        <div className="order-1 md:order-2">
          <h2 className="luxury-heading text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Modern Luxury Meets Medical Excellence
          </h2>
          <p className="luxury-subheading text-lg text-gray-600 mb-8 leading-relaxed">
            At Aroma MedSpa, we combine cutting-edge medical technology with luxurious spa experiences. Our modern facility offers a serene environment where you can relax while receiving the highest quality aesthetic treatments.
          </p>
          <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 uppercase tracking-wide font-medium">
            Learn More About Us
          </button>
        </div>
      </div>
    </section>
  );
}

export default Intro;