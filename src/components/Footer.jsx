import React from 'react';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
        <div>
          <img 
            src="https://images.pexels.com/photos/3212179/pexels-photo-3212179.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="Aroma MedSpa Logo"
            className="logo footer mb-4"
          />
          <p className="text-blue-100 text-sm leading-relaxed">
            Experience luxury medical spa treatments in a modern, relaxing environment.
          </p>
        </div>
        <div>
          <h4 className="luxury-subheading text-lg font-medium mb-4 uppercase tracking-wide">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Home</a></li>
            <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Services</a></li>
            <li><a href="#" className="text-blue-100 hover:text-white transition-colors">About Us</a></li>
            <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="luxury-subheading text-lg font-medium mb-4 uppercase tracking-wide">Services</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Facial Treatments</a></li>
            <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Botox & Fillers</a></li>
            <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Laser Hair Removal</a></li>
            <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Chemical Peels</a></li>
          </ul>
        </div>
        <div>
          <h4 className="luxury-subheading text-lg font-medium mb-4 uppercase tracking-wide">Newsletter</h4>
          <p className="text-blue-100 text-sm mb-4">Subscribe to receive special offers and updates</p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Your email"
              className="flex-1 px-4 py-2 rounded-l-lg text-gray-900 focus:outline-none"
            />
            <button className="bg-blue-600 px-4 py-2 rounded-r-lg hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-blue-700 mt-12 pt-8 text-center">
        <p className="text-blue-100 text-sm">
          © 2024 Aroma MedSpa. All rights reserved. | Designed with luxury and care
        </p>
      </div>
    </footer>
  );
}

export default Footer;