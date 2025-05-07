import React, { useState } from 'react';
import { Star } from 'lucide-react';

const ProductReviews = () => {
  const [activeTab, setActiveTab] = useState('reviews');
  const [sortOrder, setSortOrder] = useState('latest');

  const reviews = [
    {
      id: 1,
      name: 'Samantha D.',
      verified: true,
      rating: 5,
      date: 'August 14, 2023',
      comment: 'I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It\'s become my favorite go-to shirt!'
    },
    {
      id: 2,
      name: 'Alex M.',
      verified: true,
      rating: 4,
      date: 'August 15, 2023',
      comment: 'The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UX/UI designer myself, I\'m quite picky about aesthetics, and I\'m 100% definitely get a thumbs up from me!'
    },
    {
      id: 3,
      name: 'Ethan R.',
      verified: true,
      rating: 3,
      date: 'August 16, 2023',
      comment: 'This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer\'s touch in every aspect of this shirt.'
    },
    {
      id: 4,
      name: 'Olivia P.',
      verified: true,
      rating: 4,
      date: 'August 17, 2023',
      comment: 'As a UX/UI enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It\'s evident that the designer poured their creativity into making this t-shirt stand out.'
    },
    {
      id: 5,
      name: 'Liam K.',
      verified: true,
      rating: 4,
      date: 'August 18, 2023',
      comment: 'This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design sends volumes about the designer\'s skill. It\'s like wearing a piece of art that reflects my passion for both design and fashion.'
    },
    {
      id: 6,
      name: 'Ava H.',
      verified: true,
      rating: 4,
      date: 'August 19, 2023',
      comment: 'I\'m not just wearing a t-shirt; I\'m wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.'
    }
  ];

  const totalReviews = reviews.length;

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star
          key={i}
          className={i <= rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
          size={16}
        />
      );
    }
    return stars;
  };

  return (
    <div className="my-8">
      <div className="border-b border-gray-200">
        <div className="flex justify-center space-x-8">
          <button
            className={`pb-4 border-b-2 ${
              activeTab === 'details' ? 'border-black font-semibold' : 'border-transparent'
            }`}
            onClick={() => setActiveTab('details')}
          >
            Product Details
          </button>
          <button
            className={`pb-4 border-b-2 ${
              activeTab === 'reviews' ? 'border-black font-semibold' : 'border-transparent'
            }`}
            onClick={() => setActiveTab('reviews')}
          >
            Rating & Reviews
          </button>
          <button
            className={`pb-4 border-b-2 ${
              activeTab === 'faqs' ? 'border-black font-semibold' : 'border-transparent'
            }`}
            onClick={() => setActiveTab('faqs')}
          >
            FAQs
          </button>
        </div>
      </div>

      {activeTab === 'reviews' && (
        <div className="mt-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">All Reviews <span className="text-gray-500 text-sm">({totalReviews})</span></h2>
            <div className="flex space-x-2">
              <div className="relative">
                <select
                  className="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-8 text-sm"
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                >
                  <option value="latest">Latest</option>
                  <option value="highest">Highest Rating</option>
                  <option value="lowest">Lowest Rating</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                  </svg>
                </div>
              </div>
              <button className="bg-white border border-gray-300 rounded-md py-2 px-4 text-sm font-medium">
                Write a Review
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((review) => (
              <div key={review.id} className="border-b pb-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center mb-1">
                    {renderStars(review.rating)}
                  </div>
                  <button className="text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                    </svg>
                  </button>
                </div>
                <div className="flex items-center mb-2">
                  <h3 className="font-medium mr-2">{review.name}</h3>
                  {review.verified && (
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full">
                      <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                    </span>
                  )}
                </div>
                <p className="text-gray-700 mb-2">{review.comment}</p>
                <p className="text-gray-500 text-sm">Posted on {review.date}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded hover:bg-gray-50">
              Load More Reviews
            </button>
          </div>
        </div>
      )}

      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center mb-8">YOU MIGHT ALSO LIKE</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        </div>
      </div>
    </div>
  );
};

export default ProductReviews;