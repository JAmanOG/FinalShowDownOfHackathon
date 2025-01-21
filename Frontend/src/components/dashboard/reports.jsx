import React from "react";
const data = {
  userPainPointsAnalysis: [
    {
      title: "Product Quality Issues",
      issues: [
        "Wrong product received",
        "Product without price tag",
        "Quality difference between website and actual product",
      ],
      impactScale: {
        "Product Quality Impact": 90,
      },
    },
    {
      title: "Customer Service Issues",
      issues: [
        "No option to call customer care",
        "Chat option not effective",
        "No proper solution provided",
      ],
      impactScale: {
        "Customer Service Impact": 85,
      },
    },
    {
      title: "Order Fulfillment Issues",
      issues: [
        "Delayed delivery",
        "Product lost during shipping",
        "No consideration for customer's request",
      ],
      impactScale: {
        "Order Fulfillment Impact": 80,
      },
    },
  ],
  sentimentAnalysis: {
    overallSentimentDistribution: {
      Positive: 10,
      Negative: 80,
      Neutral: 10,
    },
    emotionalCategories: {
      "Negative Emotions": [
        {
          emotion: "Frustration",
          intensity: 90,
        },
        {
          emotion: "Anger",
          intensity: 0,
        },
        {
          emotion: "Disappointment",
          intensity: 0,
        },
      ],
      "Neutral Emotions": [
        {
          emotion: "Curiosity",
          intensity: 75,
        },
        {
          emotion: "Skepticism",
          intensity: 0,
        },
        {
          emotion: "Indifference",
          intensity: 0,
        },
      ],
    },
  },
  engagementAnalysis: {
    effectiveHooks: [
      {
        quote: "MYNTRA IS THE MOST BOGUS E COMMERCE WEBSITE THAT THERE IS.",
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
        userRetentionRate: 92,
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
        title: "E-commerce Websites",
        marketShare: 60,
        growthRate: 20,
      },
      {
        title: "Physical Retail Stores",
        marketShare: 20,
        growthRate: 15,
      },
      {
        title: "Other Competitors",
        marketShare: 20,
        growthRate: 10,
      },
    ],
  },
  trendsAndPatterns: {
    eCommerceTrends: [
      {
        trend: "Mobile Commerce",
        percentage: 80,
      },
      {
        trend: "App-only Strategy",
        percentage: 70,
      },
      {
        trend: "Personalization",
        percentage: 60,
      },
    ],
    userBehaviorPatterns: [
      {
        pattern: "Shopping Habits",
        percentage: 80,
      },
      {
        pattern: "Product Research",
        percentage: 70,
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
        percentage: 80,
      },
      {
        trend: "App-only Strategy",
        percentage: 70,
      },
      {
        trend: "Personalization",
        percentage: 60,
      },
    ],
    userEngagementMetrics: [
      {
        metric: "Average Time Spent",
        value: "10 minutes per session",
        percentageChange: 30,
      },
      {
        metric: "Click-through Rate",
        value: "4.5% average CTR",
        percentageChange: 25,
      },
      {
        metric: "Content Shares",
        value: "2.5K monthly average",
        percentageChange: 20,
      },
    ],
  },
  globalEcommerceMarket: {
    regions: [
      {
        region: "North America",
        marketShare: 40,
      },
      {
        region: "Europe",
        marketShare: 30,
      },
      {
        region: "Asia Pacific",
        marketShare: 20,
      },
      {
        region: "Rest of World",
        marketShare: 10,
      },
    ],
  },
  ecommerceAnalyticsReports: {
    monthlySummary: {
      title: "Monthly Summary",
      metrics: [
        {
          name: "Active Users",
          value: "10K",
        },
        {
          name: "Engagement Rate",
          value: "60%",
        },
        {
          name: "Content Views",
          value: "30K",
        },
      ],
    },
    demographics: [
      {
        ageGroup: "Age 18-34",
        percentage: 50,
      },
      {
        ageGroup: "Age 35-54",
        percentage: 30,
      },
      {
        ageGroup: "Age 55+",
        percentage: 20,
      },
    ],
    contentPerformance: [
      {
        contentType: "Product Reviews",
        ctr: 85,
      },
      {
        contentType: "Product Comparisons",
        ctr: 80,
      },
      {
        contentType: "Product Recommendations",
        ctr: 75,
      },
    ],
  },
};

const Reports = () => {
  console.log(data);
  // const analyticsData = data.analyticsReports || {};
  const analyticsData = Object.entries(data)
  .filter(([key, value]) => key.toLowerCase().includes("analytics"))
  .map(([key, value]) => value)[0];

console.log("data",analyticsData.monthlySummary);


  // console.log(analytics);
  const arraytrend = Object.values(analyticsData);
  const demographics = arraytrend[1] || [];

  return (
    <div id="reports" className="py-10 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">
          Analytics Reports
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Monthly Summary Card */}
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-800">
                {analyticsData.monthlySummary.title ||
                  analyticsData.monthlySummary.metrics.name}
              </h3>
              <div className="bg-blue-100 p-2 rounded-lg">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
            </div>
            <div className="space-y-4">
              {analyticsData.monthlySummary.metrics.map((metric, index) => (
                <div key={index} className="relative pt-1">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">{metric.name}</span>
                    <span className="text-purple-600 font-bold">
                      {metric.value}
                    </span>
                  </div>
                  <div className="overflow-hidden h-2 text-xs flex rounded bg-purple-200">
                    <div
                      style={{
                        width: `${parseInt(
                          metric.value.match(/\d+/)?.[0] || 0
                        )}%`,
                      }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-cyan-600"
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Demographics Card */}
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-800">
                Demographics
              </h3>
              <div className="bg-purple-100 p-2 rounded-lg">
                <svg
                  className="w-6 h-6 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
            </div>
            <div className="space-y-4">
              {demographics.map((group, index) => (
                <div key={index} className="relative pt-1">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">{group.ageGroup}</span>
                    <span className="text-purple-600 font-bold">
                      {group.percentage}%
                    </span>
                  </div>
                  <div className="overflow-hidden h-2 text-xs flex rounded bg-purple-200">
                    <div
                      style={{ width: `${group.percentage}%` }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-600"
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Content Performance Card */}
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-800">
                Content Performance
              </h3>
              <div className="bg-green-100 p-2 rounded-lg">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>
            </div>
            <div className="space-y-4">
              {analyticsData.contentPerformance.map((content, index) => (
                <div key={index} className="bg-white p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">{content.contentType}</span>
                    <span className="text-green-600 font-bold">
                      {content.ctr}% CTR
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-green-600 h-2 rounded-full"
                      style={{ width: `${content.ctr}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Generated Reports Section */}
        <div className="mt-8 bg-gray-50 p-6 rounded-lg border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-800">
              Generated Reports
            </h3>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Generate New Report
            </button>
          </div>
          <div className="space-y-4">
            {["Monthly Analytics Report", "User Engagement Summary"].map(
              (report, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-white rounded-lg"
                >
                  <div className="flex items-center">
                    <svg
                      className={`w-6 h-6 ${
                        index === 0 ? "text-blue-600" : "text-green-600"
                      } mr-3`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    <span className="text-gray-700">{report}</span>
                  </div>
                  <button className="px-3 py-1 text-sm text-blue-600 hover:text-blue-800">
                    Download PDF
                  </button>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
