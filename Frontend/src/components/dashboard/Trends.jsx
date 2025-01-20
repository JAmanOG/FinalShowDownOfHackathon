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
const Trends = () => {
  // Extract required data
  const industryTrends = data.industryTrendsPatterns || data.trendsAndPatterns;
  const healthAnalytics =
    data.ecommerceAnalyticsReports || data.healthAnalyticsReports;
  const visualInsights = data.visualizedInsights || data.visualizedInsights;

  return (
    <div id="trends" className="py-10 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">
          Industry Trends & Patterns
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-6 text-gray-800">
              {Object.keys(industryTrends)[0]}
            </h3>

            <div className="space-y-6">
              {industryTrends[Object.keys(industryTrends)[0]].map(
                (trend, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0">
                      <div
                        className={`flex items-center justify-center h-12 w-12 rounded-lg ${
                          index === 0
                            ? "bg-blue-100 text-blue-600"
                            : index === 1
                            ? "bg-purple-100 text-purple-600"
                            : "bg-green-100 text-green-600"
                        }`}
                      >
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
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-800">
                        {trend.trend}
                      </h4>
                      <div className="mt-2 relative pt-1">
                        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                          <div
                            style={{ width: `${trend.percentage||trend.growth}%` }}
                            className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${
                              index === 0
                                ? "bg-blue-600"
                                : index === 1
                                ? "bg-purple-600"
                                : "bg-green-600"
                            }`}
                          ></div>
                        </div>
                        <p className="text-sm text-gray-600">
                          {trend.percentage||trend.growth}% market adoption
                        </p>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-6 text-gray-800">
              User Behavior Patterns
            </h3>

            <div className="space-y-4">
              {Array.isArray(
                healthAnalytics[Object.keys(healthAnalytics)[1]]
              ) &&
                healthAnalytics[Object.keys(healthAnalytics)[1]].map(
                  (metric, index) => (
                    <div
                      key={index}
                      className="p-4 bg-white rounded-lg border border-gray-100"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-medium text-gray-700">
                          {metric?.metric || metric?.ageGroup || "N/A"}
                        </span>
                        <span className="text-2xl font-bold text-green-600">
                          {metric.value || metric.percentage}k
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-gray-600">
                        Year-over-year growth
                      </p>
                    </div>
                  )
                )}
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h3 className="text-xl font-semibold mb-6 text-gray-800">
            {Object.keys(visualInsights)[0]}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visualInsights[Object.keys(visualInsights)[0]].map(
              (trend, index) => (
                <div
                  key={index}
                  className="p-4 bg-white rounded-lg border border-gray-100"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-medium text-gray-700">
                      {trend.trend}
                    </span>
                    <svg
                      className="w-8 h-8 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-600">
                    {trend.percentage||trend.growth}% market trend
                  </p>
                  <div>{trend.challenges}</div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trends;
