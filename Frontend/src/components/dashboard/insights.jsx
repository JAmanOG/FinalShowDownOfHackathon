import React from "react";
const data = {
  userPainPointsAnalysis: {
    productQualityIssues: {
      issues: [
        "Wrong product received",
        "Product without price tag",
        "Quality difference between website and actual product",
      ],
      impactScale: {
        productQualityImpact: 90,
      },
    },
    customerServiceIssues: {
      challenges: [
        "No option to call customer care",
        "Chat option not effective",
        "No proper solution provided",
      ],
      impactScale: {
        customerServiceImpact: 85,
      },
    },
    orderFulfillmentIssues: {
      keyProblems: [
        "Delayed delivery",
        "Product lost during shipping",
        "No consideration for customer's request",
      ],
      impactScale: {
        orderFulfillmentImpact: 80,
      },
    },
  },
  sentimentAnalysis: {
    overallSentimentDistribution: {
      positive: 10,
      negative: 80,
      neutral: 10,
    },
    emotionalCategories: {
      negativeEmotions: [
        {
          emotion: "Frustration",
          intensity: 90,
        },
        "Anger",
        "Disappointment",
      ],
      neutralEmotions: [
        {
          emotion: "Curiosity",
          intensity: 75,
        },
        "Skepticism",
        "Indifference",
      ],
    },
  },
  engagementAnalysis: {
    effectiveHooks: [
      {
        quote: "Myntra is the most bogus e-commerce website that there is.",
        engagement: "High engagement rate",
      },
      {
        quote: "I lost 1000 bucks in the process.",
        engagement: "Most shared",
      },
    ],
    callToActionPerformance: [
      {
        cta: "Never going to buy anything there and I won’t even recommend anyone to buy from there.",
        conversion: 90,
      },
      {
        cta: "This is a clear fraud.",
        conversion: 85,
      },
      {
        cta: "Its the worst experience!!",
        conversion: 80,
      },
    ],
    contentFormatPerformance: [
      {
        format: "Personal Stories",
        engagement: 92,
        description: "Highest engagement rate among all content formats",
      },
      {
        format: "Listicles",
        engagement: 80,
        description: "Most shared content format",
      },
      {
        format: "Infographics",
        engagement: 85,
        description: "Highest information retention rate",
      },
    ],
  },
  competitorInsights: {
    marketShareBreakdown: [
      {
        company: "Amazon",
        marketShare: 30,
        growthRate: 25,
      },
      {
        company: "Flipkart",
        marketShare: 25,
        growthRate: 20,
      },
      {
        company: "Myntra",
        marketShare: 20,
        growthRate: 15,
      },
      {
        company: "Other E-commerce Websites",
        marketShare: 25,
        growthRate: 10,
      },
    ],
  },
  trendsAndPatterns: {
    eCommerceTrends: [
      {
        trend: "Mobile Commerce",
        percentage: 90,
      },
      {
        trend: "App-based Shopping",
        percentage: 80,
      },
      {
        trend: "Personalization",
        percentage: 75,
      },
    ],
    userBehaviorPatterns: [
      {
        pattern: "Shopping Habits",
        percentage: 80,
      },
      {
        pattern: "Product Research",
        percentage: 75,
      },
      {
        pattern: "Social Media Influence",
        percentage: 60,
      },
    ],
  },
  visualizedInsights: {
    topEcommerceTrends: [
      {
        trend: "Mobile Commerce",
        percentage: 90,
      },
      {
        trend: "App-based Shopping",
        percentage: 80,
      },
      {
        trend: "Personalization",
        percentage: 75,
      },
    ],
    userEngagementMetrics: [
      {
        metric: "Average Time Spent",
        value: "10 minutes",
        percentageChange: 40,
      },
      {
        metric: "Click-through Rate",
        value: "4.5%",
        percentageChange: 30,
      },
      {
        metric: "Content Shares",
        value: "2.5K",
        percentageChange: 25,
      },
    ],
  },
  globalEcommerceMarket: {
    regions: [
      {
        region: "North America",
        marketShare: 35,
      },
      {
        region: "Europe",
        marketShare: 28,
      },
      {
        region: "Asia Pacific",
        marketShare: 25,
      },
      {
        region: "Rest of World",
        marketShare: 12,
      },
    ],
  },
  ecommerceAnalyticsReports: {
    monthlySummary: {
      metrics: [
        {
          name: "Active Users",
          value: "↑ 15K",
        },
        {
          name: "Engagement Rate",
          value: "↑ 65%",
        },
        {
          name: "Content Views",
          value: "↑ 35K",
        },
      ],
    },
    demographics: [
      {
        ageGroup: "Age 18-34",
        percentage: 45,
      },
      {
        ageGroup: "Age 35-54",
        percentage: 35,
      },
      {
        ageGroup: "Age 55+",
        percentage: 20,
      },
    ],
    contentPerformance: [
      {
        contentType: "Health Tips",
        ctr: 85,
      },
      {
        contentType: "Wellness Guides",
        ctr: 80,
      },
      {
        contentType: "Mental Health",
        ctr: 75,
      },
    ],
  },
};

const Insights = ({ data }) => {
  if (!data) {
    return <div>Loading...</div>;
  }
  // Extract required data
  const visualInsights = data.visualizedInsights;
  const engagementData = data.engagementAnalysis;
  const marketData =
    data.globalHealthAndWellnessMarket || data.globalEcommerceMarket; // after the visualizedInsights some thing data come add that here
  // const visualInsights = data.visualizedInsights;
  // const engagementData = data.engagementAnalysis;
  // const marketData = data.globalEcommerceMarket || data.globalHealthAndWellnessMarket // after the visualizedInsights some thing data come add that here

  return (
    <div id="insights" className="py-10 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">
          Visualized Insights
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-6 text-gray-800">
              {Object.keys(visualInsights)[0]}
            </h3>
            <div className="space-y-6">
              {visualInsights?.[Object.keys(visualInsights)[0]]?.map(
                (item, index) => (
                  <div key={index} className="flex items-center">
                    <div
                      className={`w-12 h-12 flex-shrink-0 ${
                        index === 0
                          ? "bg-blue-100"
                          : index === 1
                          ? "bg-purple-100"
                          : "bg-green-100"
                      } rounded-lg flex items-center justify-center`}
                    >
                      <svg
                        className={`w-6 h-6 ${
                          index === 0
                            ? "text-blue-600"
                            : index === 1
                            ? "text-purple-600"
                            : "text-green-600"
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div className="ml-4 flex-grow">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">
                          {item.painPoint ||
                            item.sentiment ||
                            item.company ||
                            item.metric}
                        </span>
                        <span className="text-sm font-medium text-blue-600">
                          {item.percentage || item.marketShare || item.value}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className={`${
                            index === 0
                              ? "bg-blue-600"
                              : index === 1
                              ? "bg-purple-600"
                              : "bg-green-600"
                          } h-2.5 rounded-full`}
                          style={{
                            width: `${
                              item.percentage || item.marketShare || item.value
                            }%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-6 text-gray-800">
              User Engagement Metrics
            </h3>
            <div className="space-y-6">
              {engagementData?.contentFormatPerformance?.map(
                (format, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-600">
                        {format.format}
                      </span>
                      <span className="text-sm font-bold text-green-600">
                        ↑ {format.engagement}%
                      </span>
                    </div>
                    <div className="text-2xl font-bold text-gray-800">
                      {format.engagement}%
                    </div>
                    <p className="text-sm text-gray-500 mt-1">
                      Engagement Rate
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h3 className="text-xl font-semibold mb-6 text-gray-800">
            Market Share Breakdown
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {Array.isArray(marketData) && marketData.map((region, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg border border-gray-100"
              >
                <h4 className="text-lg font-medium text-gray-800">
                  {region.region}
                </h4>
                <div
                  className={`mt-2 text-2xl font-bold ${
                    index === 0
                      ? "text-blue-600"
                      : index === 1
                      ? "text-green-600"
                      : index === 2
                      ? "text-purple-600"
                      : "text-red-600"
                  }`}
                >
                  {region.marketShare}%
                </div>
                <p className="text-sm text-gray-600">Market Share</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insights;
