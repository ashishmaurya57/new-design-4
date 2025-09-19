import React from 'react';

function Services() {
  const services = [
    {
      id: 1,
      title: 'Facial Treatments',
      image: 'https://images.pexels.com/photos/5659015/pexels-photo-5659015.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      alt: 'facial treatment service card photo for spa website'
    },
    {
      id: 2,
      title: 'Botox & Fillers',
      image: 'https://images.pexels.com/photos/5659015/pexels-photo-5659015.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      alt: 'botox injection service lifestyle photo medical spa service card'
    },
    {
      id: 3,
      title: 'Laser Hair Removal',
      image: 'https://images.pexels.com/photos/5659015/pexels-photo-5659015.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      alt: 'laser treatment service card photo for med spa website'
    },
    {
      id: 4,
      title: 'Chemical Peels',
      image: 'https://images.pexels.com/photos/161477/treatment-finger-keep-hand-161477.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      alt: 'chemical peel treatment service card photo'
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="luxury-heading text-4xl md:text-5xl font-light text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="luxury-subheading text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our range of luxury medical spa treatments designed to enhance your natural beauty
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div key={service.id} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src={service.image}
                alt={service.alt}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="luxury-subheading text-white text-xl font-medium">{service.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;