import React from 'react';

function Consultation() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-0">
        <div className="relative overflow-hidden rounded-l-lg">
          <img 
            src="https://images.pexels.com/photos/5659015/pexels-photo-5659015.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="spa consultation treatment photo for beauty website booking section"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-600/60 flex items-center justify-center">
            <h3 className="luxury-heading text-3xl md:text-4xl font-light text-white uppercase text-center">
              Book a Consultation
            </h3>
          </div>
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 md:p-12 rounded-r-lg">
          <h3 className="luxury-heading text-2xl md:text-3xl font-light text-gray-900 mb-6">
            Schedule Your Visit
          </h3>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <input 
                type="text" 
                placeholder="First Name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none"
              />
              <input 
                type="text" 
                placeholder="Last Name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none"
              />
            </div>
            <input 
              type="email" 
              placeholder="Email Address"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none"
            />
            <input 
              type="tel" 
              placeholder="Phone Number"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none"
            />
            <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none">
              <option>Select Service</option>
              <option>Facial Treatments</option>
              <option>Botox & Fillers</option>
              <option>Laser Hair Removal</option>
              <option>Chemical Peels</option>
            </select>
            <button className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-3 rounded-lg hover:from-blue-700 hover:to-blue-900 transition-all duration-300 uppercase tracking-wide font-medium">
              Request Consultation
            </button>
          </form>
          <div className="mt-8">
            <div className="w-full h-48 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878459418!3d40.74844097932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1635959472827!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{border: 0}}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Consultation;