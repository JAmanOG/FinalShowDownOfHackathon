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

const SentimentDonutChart = () => {
    const sentimentAnalysis = data.sentimentAnalysis || {};
    const overallDistribution = sentimentAnalysis.overallSentimentDistribution || {};
    const emotionalCategories = sentimentAnalysis.emotionalCategories || {};
  
    // Remove unnecessary OR operation with emotionalCategories
    const intensityData = sentimentAnalysis.emotionalCategories || {};
  
    const combinedIntensityData = [
      ...(intensityData['Negative Emotions'] || []).map(({ emotion, intensity }) => ({
        emotion,
        percentage: intensity,
      })),
      ...(intensityData['Neutral Emotions'] || []).map(({ emotion, intensity }) => ({
        emotion,
        percentage: intensity,
      })),
    ].filter(item => item.percentage > 0); // Only show emotions with non-zero intensity
  
    const calculateDashOffset = (value) => {
      const circumference = 2 * Math.PI * 40;
      return circumference * (1 - value / 100);
    };
  
    const getEmotionText = (emotion) => {
      if (typeof emotion === "string") return emotion;
      if (typeof emotion === "object" && emotion.emotion) return emotion.emotion;
      return "";
    };
  
    return (
      <div id="sentiment-donut-chart" className="py-12 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-10 text-gray-800 text-center">
            Sentiment Analysis Dashboard
          </h2>
  
          {/* Donut Charts Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(overallDistribution).map(
              ([emotion, value], index) => (
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
                      className={`text-${
                        index === 0 ? "green" : index === 1 ? "red" : "blue"
                      }-600`}
                      strokeDasharray="314"
                      strokeDashoffset={calculateDashOffset(value)}
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="text-lg font-semibold text-gray-800">
                    {emotion.charAt(0).toUpperCase() + emotion.slice(1)}
                  </span>
                  <span className="text-2xl font-bold text-gray-800">
                    {value}%
                  </span>
                </div>
              )
            )}
          </div>
  
          {/* Emotional Categories Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">
                Emotional Categories
              </h3>
              <div className="space-y-6">
                {Object.entries(emotionalCategories).map(
                  ([category, emotions], index) => (
                    <div key={index} className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold text-gray-700 mb-4">
                        {category}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {emotions.map((emotion, idx) => (
                          <span
                            key={idx}
                            className={`px-4 py-2 rounded-full text-sm font-medium ${
                              category.includes("Positive")
                                ? "bg-green-100 text-green-700"
                                : category.includes("Negative")
                                ? "bg-red-100 text-red-700"
                                : "bg-blue-100 text-blue-700"
                            }`}
                          >
                            {getEmotionText(emotion)}
                          </span>
                        ))}
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
            {combinedIntensityData.length > 0 && (
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">
                  Sentiment Intensity
                </h3>
                <div className="space-y-4">
                  {combinedIntensityData.map(({ emotion, percentage }, index) => (
                    <div
                      key={index}
                      className="group hover:bg-gray-50 p-4 rounded-lg transition-colors duration-200"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div
                            className={`w-2 h-2 rounded-full ${
                              emotion.includes("Frustration")
                                ? "bg-rose-400"
                                : emotion.includes("Curiosity")
                                ? "bg-sky-400"
                                : "bg-emerald-400"
                            }`}
                          />
                          <span className="text-sm font-medium text-gray-700">
                            {emotion}
                          </span>
                        </div>
                        <span className="text-sm font-semibold text-gray-900">
                          {percentage}%
                        </span>
                      </div>
                      <div className="relative h-2 bg-gray-100 rounded overflow-hidden">
                        <div
                          style={{ width: `${percentage}%` }}
                          className={`absolute top-0 left-0 h-full rounded transition-all duration-300 ease-out group-hover:opacity-80 ${
                            emotion.includes("Frustration")
                              ? "bg-rose-400"
                              : emotion.includes("Curiosity")
                              ? "bg-sky-400"
                              : "bg-emerald-400"
                          }`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };
  
  export default SentimentDonutChart;