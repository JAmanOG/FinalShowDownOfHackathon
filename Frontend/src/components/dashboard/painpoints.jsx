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
      },
      "returnPolicyIssues": {
          "challenges": [
              "Return declined due to missing tags",
              "No clear return policy",
              "No proper solution provided"
          ],
          "impactScale": {
              "returnPolicyImpact": 75
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
              "Frustration",
              "Anger",
              "Disappointment"
          ],
          "neutralEmotions": [
              "Curiosity",
              "Skepticism",
              "Indifference"
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
              "conversion": 100
          },
          {
              "cta": "This is a clear fraud.",
              "conversion": 90
          },
          {
              "cta": "Its the worst experience!!",
              "conversion": 80
          }
      ],
      "contentFormatPerformance": [
          {
              "format": "Personal Stories",
              "engagement": 95,
              "description": "Highest engagement rate among all content formats"
          },
          {
              "format": "Listicles",
              "engagement": 85,
              "description": "Most shared content format"
          },
          {
              "format": "Infographics",
              "engagement": 80,
              "description": "Highest information retention rate"
          }
      ]
  },
  "competitorInsights": {
      "marketShareBreakdown": [
          {
              "category": "E-commerce Websites",
              "marketShare": 60,
              "growthRate": 20
          },
          {
              "category": "Physical Stores",
              "marketShare": 20,
              "growthRate": 15
          },
          {
              "category": "Other Competitors",
              "marketShare": 20,
              "growthRate": 10
          }
      ]
  },
  "ourKeyDifferentiators": [
      {
          "title": "Personalized Approach",
          "description": "Tailored solutions for individual customer needs"
      },
      {
          "title": "Customer Service Focus",
          "description": "Comprehensive customer support and solution"
      },
      {
          "title": "Order Fulfillment Efficiency",
          "description": "Fast and reliable order delivery and return process"
      },
      {
          "title": "Return Policy Transparency",
          "description": "Clear and fair return policy"
      }
  ],
  "industryTrendsPatterns": {
      "eCommerceIndustryTrends": [
          {
              "trend": "Mobile Commerce",
              "percentage": 80
          },
          {
              "trend": "Personalization",
              "percentage": 75
          },
          {
              "trend": "Customer Service",
              "percentage": 90
          }
      ],
      "userBehaviorPatterns": [
          {
              "pattern": "E-commerce Content Interest",
              "growth": 60
          },
          {
              "pattern": "Personalization Demand",
              "growth": 80
          },
          {
              "pattern": "Customer Service Expectations",
              "growth": 90
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
              "trend": "Personalization",
              "percentage": 75
          },
          {
              "trend": "Customer Service",
              "percentage": 90
          }
      ],
      "userEngagementMetrics": [
          {
              "metric": "Average Time Spent",
              "value": 10,
              "percentageChange": 40
          },
          {
              "metric": "Click-through Rate",
              "value": 3.5,
              "percentageChange": 25
          },
          {
              "metric": "Content Shares",
              "value": 1500,
              "percentageChange": 20
          }
      ]
  },
  "globalEcommerceMarket": [
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
  ],
  "ecommerceAnalyticsReports": {
      "monthlySummary": {
          "activeUsers": 10000,
          "engagementRate": 60,
          "contentViews": 30000
      },
      "demographics": [
          {
              "ageGroup": "Age 18-34",
              "percentage": 40
          },
          {
              "ageGroup": "Age 35-54",
              "percentage": 30
          },
          {
              "ageGroup": "Age 55+",
              "percentage": 30
          }
      ],
      "contentPerformance": [
          {
              "contentType": "Product Reviews",
              "ctr": 85
          },
          {
              "contentType": "Customer Testimonials",
              "ctr": 80
          },
          {
              "contentType": "Product Comparisons",
              "ctr": 75
          }
      ]
  },
  "wordcloud": [
      "cleanser",
      "moisturizer",
      "serum",
      "anti-aging",
      "exfoliating",
      "toner",
      "vitamin C",
      "hyaluronic acid",
      "collagen",
      "acne",
      "brightening",
      "skin care",
      "retinol",
      "facial mask",
      "natural",
      "organic",
      "SPF",
      "sunscreen"
  ]
}
const Painpoints = ({data}) => {
  const categories = Object.keys(data.userPainPointsAnalysis).map(key => ({
    title: key,
    ...data.userPainPointsAnalysis[key]
  }));

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
                  category.keyProblems
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
            {categories.map((category, index) => (
              category.impactScale && (
                <div key={index} className="relative pt-1">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <span className="text-sm font-semibold text-gray-700">
                        {category.title} Impact
                      </span>
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-gray-700">
                        {Object.values(category.impactScale)[0]}%
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
                    <div
                      style={{ width: `${Object.values(category.impactScale)[0]}%` }}
                      className={`shadow-none flex flex-col justify-center bg-${getColorClass(
                        index
                      )}-500`}
                    ></div>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Painpoints;