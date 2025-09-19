import React from 'react';

function CTA() {
  return (
    <section className="relative py-20 px-6">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/3212179/pexels-photo-3212179.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="spa treatment background photo with color wash for beauty website cta banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-700/80"></div>
      </div>
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="luxury-heading text-4xl md:text-6xl font-light text-white mb-6">
          Ready to Transform Your Beauty?
        </h2>
        <p className="luxury-subheading text-xl text-blue-100 mb-8">
          Call us today at (555) 123-4567 to schedule your consultation
        </p>
        <button className="border-2 border-white text-white px-10 py-4 rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-300 uppercase tracking-wide font-medium text-lg">
          Book Your Appointment
        </button>
      </div>
    </section>
  );
}

export default CTA;