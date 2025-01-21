import React, { useState } from 'react';
// Remove Lucide icons import since we'll use SVG directly

const CustomerFeedback = ({data}) => {
  const [hoveredCard, setHoveredCard] = useState(null);
  
  // Get feedback data with null check
  const feedbackData = data?.engagementAnalysis?.effectiveHooks || [];

  return (
    <div className="bg-gradient-to-br  p-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Customer Feedback</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {feedbackData.map((item, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-lg bg-white transition-all duration-300 
                ${hoveredCard === index ? 'shadow-lg -translate-y-1' : 'shadow'}`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="p-6">
                <blockquote className="text-lg font-semibold text-gray-700 mb-4">
                  "{item.quote}"
                </blockquote>

                <div className="flex items-center gap-2">
                  {/* Replace Lucide icons with SVG */}
                  <svg 
                    className="w-5 h-5 text-blue-500"
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                  <span className="text-sm font-medium text-gray-600">
                    {item.engagement}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerFeedback;