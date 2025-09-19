import React from 'react';

function Reviews() {
  const reviews = [
    {
      id: 1,
      text: "The facial treatment was absolutely amazing! My skin has never looked better. The staff is so professional and the atmosphere is incredibly relaxing.",
      author: "Sarah Johnson",
      rating: 5
    },
    {
      id: 2,
      text: "I love coming to Aroma MedSpa. The botox treatments are done with such precision and care. I always feel confident and beautiful when I leave.",
      author: "Maria Rodriguez",
      rating: 5
    },
    {
      id: 3,
      text: "The laser hair removal has been life-changing. The technicians are so knowledgeable and make you feel completely comfortable throughout the process.",
      author: "Jennifer Chen",
      rating: 5
    }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="luxury-heading text-4xl md:text-5xl font-light text-gray-900 mb-4">
            Client Reviews
          </h2>
          <p className="luxury-subheading text-xl text-gray-600">
            See what our clients are saying about their experience
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg shadow-lg">
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                ))}
              </div>
              <p className="luxury-subheading text-gray-700 italic mb-6 leading-relaxed">"{review.text}"</p>
              <p className="luxury-accent-text text-sm uppercase tracking-wide text-blue-600 font-medium">
                - {review.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;