import React from "react";
const data = {
    "userPainPointsAnalysis": {
        "productQualityIssues": {
            "issues": [
                "Wrong product received",
                "Product without price tag",
                "Quality difference between website and actual product"
            ],
            "impactScale": {
                "productQualityImpact": 90
            }
        },
        "customerServiceIssues": {
            "challenges": [
                "No option to call customer care",
                "Chat option not effective",
                "No proper solution provided"
            ],
            "impactScale": {
                "customerServiceImpact": 85
            }
        },
        "orderFulfillmentIssues": {
            "keyProblems": [
                "Delayed delivery",
                "Product lost during shipping",
                "No consideration for customer's request"
            ],
            "impactScale": {
                "orderFulfillmentImpact": 80
            }
        }
    },
    "sentimentAnalysis": {
        "overallSentimentDistribution": {
            "positive": 10,
            "negative": 80,
            "neutral": 10
        },
        "emotionalCategories": {
            "negativeEmotions": [
                {
                    "emotion": "Frustration",
                    "intensity": 90
                },
                "Anger",
                "Disappointment"
            ],
            "neutralEmotions": [
                {
                    "emotion": "Curiosity",
                    "intensity": 75
                },
                "Skepticism",
                "Indifference"
            ]
        }
    },
    "engagementAnalysis": {
        "effectiveHooks": [
            {
                "quote": "Myntra is the most bogus e-commerce website that there is.",
                "engagement": "High engagement rate"
            },
            {
                "quote": "I lost 1000 bucks in the process.",
                "engagement": "Most shared"
            }
        ],
        "callToActionPerformance": [
            {
                "cta": "Never going to buy anything there and I won’t even recommend anyone to buy from there.",
                "conversion": 90
            },
            {
                "cta": "This is a clear fraud.",
                "conversion": 85
            },
            {
                "cta": "Its the worst experience!!",
                "conversion": 80
            }
        ],
        "contentFormatPerformance": [
            {
                "format": "Personal Stories",
                "engagement": 92,
                "description": "Highest engagement rate among all content formats"
            },
            {
                "format": "Listicles",
                "engagement": 80,
                "description": "Most shared content format"
            },
            {
                "format": "Infographics",
                "engagement": 85,
                "description": "Highest information retention rate"
            }
        ]
    },
    "competitorInsights": {
        "marketShareBreakdown": [
            {
                "company": "Amazon",
                "marketShare": 30,
                "growthRate": 25
            },
            {
                "company": "Flipkart",
                "marketShare": 25,
                "growthRate": 20
            },
            {
                "company": "Myntra",
                "marketShare": 20,
                "growthRate": 15
            },
            {
                "company": "Other E-commerce Websites",
                "marketShare": 25,
                "growthRate": 10
            }
        ]
    },
    "trendsAndPatterns": {
        "eCommerceTrends": [
            {
                "trend": "Mobile Commerce",
                "percentage": 90
            },
            {
                "trend": "App-based Shopping",
                "percentage": 80
            },
            {
                "trend": "Personalization",
                "percentage": 75
            }
        ],
        "userBehaviorPatterns": [
            {
                "pattern": "Shopping Habits",
                "percentage": 80
            },
            {
                "pattern": "Product Research",
                "percentage": 75
            },
            {
                "pattern": "Social Media Influence",
                "percentage": 60
            }
        ]
    },
    "visualizedInsights": {
        "topEcommerceTrends": [
            {
                "trend": "Mobile Commerce",
                "percentage": 90
            },
            {
                "trend": "App-based Shopping",
                "percentage": 80
            },
            {
                "trend": "Personalization",
                "percentage": 75
            }
        ],
        "userEngagementMetrics": [
            {
                "metric": "Average Time Spent",
                "value": "10 minutes",
                "percentageChange": 40
            },
            {
                "metric": "Click-through Rate",
                "value": "4.5%",
                "percentageChange": 30
            },
            {
                "metric": "Content Shares",
                "value": "2.5K",
                "percentageChange": 25
            }
        ]
    },
    "globalEcommerceMarket": {
        "regions": [
            {
                "region": "North America",
                "marketShare": 35
            },
            {
                "region": "Europe",
                "marketShare": 28
            },
            {
                "region": "Asia Pacific",
                "marketShare": 25
            },
            {
                "region": "Rest of World",
                "marketShare": 12
            }
        ]
    },
    "ecommerceAnalyticsReports": {
        "monthlySummary": {
            "metrics": [
                {
                    "name": "Active Users",
                    "value": "↑ 15K"
                },
                {
                    "name": "Engagement Rate",
                    "value": "↑ 65%"
                },
                {
                    "name": "Content Views",
                    "value": "↑ 35K"
                }
            ]
        },
        "demographics": [
            {
                "ageGroup": "Age 18-34",
                "percentage": 45
            },
            {
                "ageGroup": "Age 35-54",
                "percentage": 35
            },
            {
                "ageGroup": "Age 55+",
                "percentage": 20
            }
        ],
        "contentPerformance": [
            {
                "contentType": "Health Tips",
                "ctr": 85
            },
            {
                "contentType": "Wellness Guides",
                "ctr": 80
            },
            {
                "contentType": "Mental Health",
                "ctr": 75
            }
        ]
    }
}
const SentimentDonutChart = () => {
  const sentimentAnalysis = data.sentimentAnalysis || {};

  const calculateDashOffset = (value) => {
    const circumference = 2 * Math.PI * 40; // Reduced radius for better proportion
    return circumference * (1 - value / 100);
  };

  const getEmotionText = (emotion) => {
    if (typeof emotion === 'string') return emotion;
    if (typeof emotion === 'object' && emotion.emotion) return emotion.emotion;
    return '';
  };
  

  return (
    <div id="sentiment-donut-chart" className="py-12 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-gray-800 text-center">
          Sentiment Analysis Dashboard
        </h2>

        {/* Donut Charts Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(sentimentAnalysis.overallSentimentDistribution || {}).map(([emotion, value], index) => (
            <div key={index} className="flex flex-col items-center">
              <svg className="w-24 h-24 mb-4">
                <circle
                  cx="50%"
                  cy="50%"
                  r="50"
                  stroke="currentColor"
                  strokeWidth="10"
                  fill="none"
                  className="text-gray-200"
                />
                <circle
                  cx="50%"
                  cy="50%"
                  r="50"
                  stroke="currentColor"
                  strokeWidth="10"
                  fill="none"
                  className={`text-${index === 0 ? 'green' : index === 1 ? 'red' : 'blue'}-600`}
                  strokeDasharray="314"
                  strokeDashoffset={calculateDashOffset(value)}
                  strokeLinecap="round"
                />
              </svg>
              <span className="text-lg font-semibold text-gray-800">{emotion.charAt(0).toUpperCase() + emotion.slice(1)}</span>
              <span className="text-2xl font-bold text-gray-800">{value}%</span>
            </div>
          ))}
        </div>

        {/* Emotional Categories Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Emotional Categories</h3>
            <div className="space-y-6">
              {Object.entries(sentimentAnalysis.emotionalCategories || {}).map(([category, emotions], index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-700 mb-4 capitalize">
                    {category.replace(/([A-Z])/g, ' $1').toLowerCase()}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {emotions.map((emotion, idx) => (
                      <span 
                        key={idx}
                        className={`px-4 py-2 rounded-full text-sm font-medium ${
                          index === 0 ? 'bg-green-100 text-green-700' :
                          index === 1 ? 'bg-red-100 text-red-700' :
                          'bg-blue-100 text-blue-700'
                        }`}
                      >
          {getEmotionText(emotion)}
          </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sentiment Intensity Section */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Sentiment Intensity</h3>
            <div className="space-y-6">
              {Object.entries(sentimentAnalysis.overallSentimentDistribution).map(([emotion, value], index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-lg font-semibold text-gray-700">{emotion.charAt(0).toUpperCase() + emotion.slice(1)}</span>
                    <span className="text-lg font-bold text-gray-800">{value}%</span>
                  </div>
                  <div className="relative pt-1">
                    <div className="overflow-hidden h-3 rounded-full bg-gray-200">
                      <div
                        style={{ width: `${value}%` }}
                        className={`h-full rounded-full transition-all duration-500 ${
                          index === 0 ? 'bg-green-500' :
                          index === 1 ? 'bg-red-500' :
                          'bg-blue-500'
                        }`}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SentimentDonutChart;