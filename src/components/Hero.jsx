import React from 'react';

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/3212179/pexels-photo-3212179.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="luxury medical spa interior hero banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-600/60"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="text-white">
          <h1 className="luxury-heading text-5xl md:text-7xl font-light mb-6 leading-tight">
            Welcome to Aroma MedSpa
          </h1>
          <p className="luxury-subheading text-xl md:text-2xl mb-8 text-blue-100">
            Experience luxury medical spa treatments in a modern, relaxing environment
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-blue-900 px-8 py-4 rounded-lg hover:bg-blue-50 transition-all duration-300 uppercase tracking-wide font-medium">
              Explore Services
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-300 uppercase tracking-wide font-medium">
              Book Consultation
            </button>
          </div>
        </div>
        <div className="hidden md:block">
          <img 
            src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="split hero portrait woman muted gray background medical spa landing"
            className="rounded-lg shadow-2xl w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;