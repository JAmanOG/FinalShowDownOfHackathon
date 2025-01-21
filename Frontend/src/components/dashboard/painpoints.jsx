import React from "react";
const data = {
  "userPainPointsAnalysis": [
      {
          "title": "Product Quality Issues",
          "issues": [
              "Wrong product received",
              "Product without price tag",
              "Quality difference between website and actual product"
          ],
          "impactScale": {
              "Product Quality Impact": 90
          }
      },
      {
          "title": "Customer Service Issues",
          "issues": [
              "No option to call customer care",
              "Chat option not effective",
              "No proper solution provided"
          ],
          "impactScale": {
              "Customer Service Impact": 85
          }
      },
      {
          "title": "Order Fulfillment Issues",
          "issues": [
              "Delayed delivery",
              "Product lost during shipping",
              "No consideration for customer's request"
          ],
          "impactScale": {
              "Order Fulfillment Impact": 80
          }
      }
  ],
  "sentimentAnalysis": {
      "overallSentimentDistribution": {
          "Positive": 10,
          "Negative": 80,
          "Neutral": 10
      },
      "emotionalCategories": {
          "Negative Emotions": [
              {
                  "emotion": "Frustration",
                  "intensity": 90
              },
              {
                  "emotion": "Anger",
                  "intensity": 0
              },
              {
                  "emotion": "Disappointment",
                  "intensity": 0
              }
          ],
          "Neutral Emotions": [
              {
                  "emotion": "Curiosity",
                  "intensity": 75
              },
              {
                  "emotion": "Skepticism",
                  "intensity": 0
              },
              {
                  "emotion": "Indifference",
                  "intensity": 0
              }
          ]
      }
  },
  "engagementAnalysis": {
      "effectiveHooks": [
          {
              "quote": "MYNTRA IS THE MOST BOGUS E COMMERCE WEBSITE THAT THERE IS.",
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
              "description": "Highest engagement rate among all content formats",
              "userRetentionRate": 92
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
              "title": "E-commerce Websites",
              "marketShare": 60,
              "growthRate": 20
          },
          {
              "title": "Physical Retail Stores",
              "marketShare": 20,
              "growthRate": 15
          },
          {
              "title": "Other Competitors",
              "marketShare": 20,
              "growthRate": 10
          }
      ]
  },
  "trendsAndPatterns": {
      "eCommerceTrends": [
          {
              "trend": "Mobile Commerce",
              "percentage": 80
          },
          {
              "trend": "App-only Strategy",
              "percentage": 70
          },
          {
              "trend": "Personalization",
              "percentage": 60
          }
      ],
      "userBehaviorPatterns": [
          {
              "pattern": "Shopping Habits",
              "percentage": 80
          },
          {
              "pattern": "Product Research",
              "percentage": 70
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
              "percentage": 80
          },
          {
              "trend": "App-only Strategy",
              "percentage": 70
          },
          {
              "trend": "Personalization",
              "percentage": 60
          }
      ],
      "userEngagementMetrics": [
          {
              "metric": "Average Time Spent",
              "value": "10 minutes per session",
              "percentageChange": 30
          },
          {
              "metric": "Click-through Rate",
              "value": "4.5% average CTR",
              "percentageChange": 25
          },
          {
              "metric": "Content Shares",
              "value": "2.5K monthly average",
              "percentageChange": 20
          }
      ]
  },
  "globalEcommerceMarket": {
      "regions": [
          {
              "region": "North America",
              "marketShare": 40
          },
          {
              "region": "Europe",
              "marketShare": 30
          },
          {
              "region": "Asia Pacific",
              "marketShare": 20
          },
          {
              "region": "Rest of World",
              "marketShare": 10
          }
      ]
  },
  "ecommerceAnalyticsReports": {
      "monthlySummary": {
          "title": "Monthly Summary",
          "metrics": [
              {
                  "name": "Active Users",
                  "value": "10K"
              },
              {
                  "name": "Engagement Rate",
                  "value": "60%"
              },
              {
                  "name": "Content Views",
                  "value": "30K"
              }
          ]
      },
      "demographics": [
          {
              "ageGroup": "Age 18-34",
              "percentage": 50
          },
          {
              "ageGroup": "Age 35-54",
              "percentage": 30
          },
          {
              "ageGroup": "Age 55+",
              "percentage": 20
          }
      ],
      "contentPerformance": [
          {
              "contentType": "Product Reviews",
              "ctr": 85
          },
          {
              "contentType": "Product Comparisons",
              "ctr": 80
          },
          {
              "contentType": "Product Recommendations",
              "ctr": 75
          }
      ]
  }
}
const Painpoints = ({data}) => { // Remove data from props
  const categories = data.userPainPointsAnalysis; // Use data constant directly

  let impactScale = [];

  impactScale = data?.impactScale ;

  if(impactScale.length === 0) {
  impactScale = categories?.map((category) => ({
    title: Object.keys(category?.impactScale)[0],
    percentage: Object.values(category?.impactScale)[0]
  }));
  }

  // Helper function for color selection
  const getColorClass = (index) => {
    switch (index) {
      case 0:
        return "red";
      case 1:
        return "blue";
      case 2:
        return "green";
      case 3:
        return "purple";
      case 4:
        return "yellow";
      case 5:
        return "cyan";
      case 6:
        return "pink";
      default:
        return "purple";
    }
  };


  return (
    <div id="painpoints" className="py-10 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">
          User Pain Points Analysis
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-gray-300 transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {category.title}
                </h3>
                <span className={`text-${getColorClass(index)}-500`}>
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </span>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                {(
                  category.issues ||
                  category.challenges ||
                  category["key problems"]
                )?.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h3 className="text-xl font-semibold mb-6 text-gray-800">
            Impact Scale
          </h3>
          <div className="space-y-4">
            {impactScale?.map((category, index) => (
              <div key={index} className="relative pt-1">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <span className="text-sm font-semibold text-gray-700">
                      {category.title}
                    </span>
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-gray-700">
                      {category.percentage}%
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
                  <div
                    style={{ width: `${category.percentage}%` }}
                    className={`shadow-none flex flex-col justify-center bg-${getColorClass(
                      index
                    )}-500`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Painpoints;
