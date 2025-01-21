import React from "react";
const data = {
  userPainPointsAnalysis: [
    {
      title: "Mental Health",
      issues: ["Anxiety", "Stress", "Uncertainty about job security"],
    },
    {
      title: "Work-Life Balance",
      issues: [
        "Long working hours",
        "Performance pressure",
        "Career-life conflict",
      ],
    },
    {
      title: "Health Concerns",
      issues: [
        "Chronic diseases",
        "Lifestyle diseases",
        "Limited self-care time",
      ],
    },
    {
      title: "Emotional Management",
      issues: ["Fear of criticism", "Burnout symptoms", "Emotional overwhelm"],
    },
  ],
  impactScale: [
    {
      title: "Mental Health Impact",
      percentage: 80,
    },
    {
      title: "Work-Life Balance Impact",
      percentage: 70,
    },
    {
      title: "Physical Health Impact",
      percentage: 65,
    },
  ],
  sentimentAnalysis: {
    overallSentiment: {
      positive: 55,
      negative: 25,
      neutral: 20,
    },
    emotionalCategories: {
      positive: ["Hope", "Inspiration", "Motivation"],
      negative: ["Anxiety", "Stress", "Frustration"],
      neutral: ["Curiosity", "Interest", "Skepticism"],
    },
    sentimentIntensity: [
      {
        emotion: "Hope",
        percentage: 80,
      },
      {
        emotion: "Anxiety",
        percentage: 60,
      },
      {
        emotion: "Curiosity",
        percentage: 70,
      },
    ],
  },
  engagementAnalysis: {
    effectiveHooks: [
      {
        quote:
          "Flipkart's Glassdoor rating of 3.7 is a representative measure of the work environment at flipkart.",
        engagement: "High engagement rate",
      },
      {
        quote:
          "The company is facing significant growth challenges due to its bottom-heavy pyramid.",
        engagement: "Most shared",
      },
    ],
    ctaPerformance: [
      {
        cta: "Get out and walk...",
        conversion: 60,
      },
      {
        cta: "Schedule routine check-ups...",
        conversion: 55,
      },
      {
        cta: "Don't spoil your health...",
        conversion: 50,
      },
    ],
    contentFormatPerformance: [
      {
        format: "Personal Stories",
        engagement: 85,
        description: "Highest engagement rate among all content formats",
      },
      {
        format: "Listicles",
        engagement: 75,
        description: "Most shared content format",
      },
      {
        format: "Infographics",
        engagement: 80,
        description: "Highest information retention rate",
      },
    ],
  },
  competitorInsights: {
    competitors: [
      {
        title: "E-commerce Platforms",
        marketShare: 40,
        growthRate: 25,
      },
      {
        title: "Healthcare Providers",
        marketShare: 30,
        growthRate: 15,
      },
      {
        title: "Personal Trainers",
        marketShare: 20,
        growthRate: 20,
      },
      {
        title: "Health Blogs",
        marketShare: 10,
        growthRate: 10,
      },
    ],
    keyDifferentiators: [
      {
        title: "Personalized Approach",
        description: "Tailored solutions for individual health needs",
      },
      {
        title: "Mental Health Focus",
        description: "Comprehensive mental wellness support",
      },
      {
        title: "Prevention First",
        description: "Early intervention and preventive care",
      },
      {
        title: "Tech Integration",
        description: "Advanced digital health solutions",
      },
    ],
  },
  trendsAndPatterns: {
    Trends: [
      {
        trend: "Mental Health & Self-Care",
        percentage: 80,
      },
      {
        trend: "Personalized Healthcare",
        percentage: 75,
      },
      {
        trend: "Digital Health Platforms",
        percentage: 90,
      },
    ],
    userBehaviorPatterns: [
      {
        pattern: "Health Content Interest",
        percentage: 65,
      },
      {
        pattern: "Personalization Demand",
        percentage: 80,
      },
      {
        pattern: "Digital Tool Adoption",
        percentage: 75,
      },
    ],
  },
  visualizedInsights: {
    CustomerSatisfaction: [
      {
        title: "Mental Health Solutions",
        percentage: 80,
      },
      {
        title: "Digital Health Platforms",
        percentage: 90,
      },
      {
        title: "Personalized Healthcare",
        percentage: 75,
      },
    ],
    userEngagementMetrics: [
      {
        metric: "Average Time Spent",
        value: "10 minutes",
        percentageChange: 40,
        description: "Per session",
      },
      {
        metric: "Click-through Rate",
        value: "4.5%",
        percentageChange: 30,
        description: "Average CTR",
      },
      {
        metric: "Content Shares",
        value: "2.2K",
        percentageChange: 25,
        description: "Monthly average",
      },
    ],
  },
  globalMarket: {
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
  analyticsReports: {
    monthlySummary: {
      title: "Monthly Summary",
      metrics: [
        {
          name: "Active Users",
          value: "↑ 10K",
        },
        {
          name: "Engagement Rate",
          value: "↑ 60%",
        },
        {
          name: "Content Views",
          value: "↑ 40K",
        },
      ],
    },
    userDemographics: [
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
    generatedReports: [
      {
        title: "Monthly Analytics Report",
        buttonText: "Download PDF",
      },
      {
        title: "User Engagement Summary",
        buttonText: "Download PDF",
      },
    ],
    wordcloud: [
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
      "sunscreen",
    ],
  },
};

const Trends = ({data}) => {
  const trendsArray = Object.values(data.trendsAndPatterns);
  const trendskey = Object.keys(data.trendsAndPatterns);
  const visualArray = Object.values(data.visualizedInsights);

  const industryTrends = trendsArray[0];
  const userBehaviorPatterns = trendsArray[1];
  const topEducationTrends = visualArray[0];

  const keyforTrends = trendskey[0];

  return (
    <div id="trends" className="py-10 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">
          Industry Trends & Patterns
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-6 text-gray-800">
              {keyforTrends}
            </h3>

            <div className="space-y-6">
              {industryTrends.map((trend, index) => (
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
                          style={{ width: `${trend.percentage}%` }}
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
                        {trend.percentage}% market adoption
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-6 text-gray-800">
              User Behavior Patterns
            </h3>

            <div className="space-y-4">
              {userBehaviorPatterns.map((pattern, index) => (
                <div
                  key={index}
                  className="p-4 bg-white rounded-lg border border-gray-100"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-medium text-gray-700">
                      {pattern.trend || pattern.pattern}
                    </span>
                    <span className="text-2xl font-bold text-green-600">
                      {pattern.percentage}%
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">
                    Year-over-year growth
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h3 className="text-xl font-semibold mb-6 text-gray-800">
            Top Education Trends
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topEducationTrends.map((trend, index) => (
              <div
                key={index}
                className="p-4 bg-white rounded-lg border border-gray-100"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-medium text-gray-700">
                    {trend.trend||trend.title}
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
                  {trend.percentage}% market trend
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trends;
