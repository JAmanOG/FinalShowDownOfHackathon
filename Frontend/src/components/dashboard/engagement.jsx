import React from "react";
import PropTypes from "prop-types";

const data = {
  userPainPointsAnalysis: [
    {
      title: "Education and Career",
      issues: [
        "Difficulty in finding a suitable education platform",
        "Lack of job opportunities after completing a course",
        "Inefficient use of time and money",
      ],
    },
    {
      title: "Communication and Support",
      issues: [
        "Difficulty in getting in touch with case agents or faculties",
        "Lack of clear updates and communication from institutions",
        "Feeling overwhelmed by the process",
      ],
    },
    {
      title: "Trust and Credibility",
      issues: [
        "Difficulty in trusting institutions or platforms",
        "Lack of credibility and transparency",
        "Feeling uncertain about the future",
      ],
    },
  ],
  impactScale: [
    {
      title: "Education and Career Impact",
      percentage: 80,
    },
    {
      title: "Communication and Support Impact",
      percentage: 70,
    },
    {
      title: "Trust and Credibility Impact",
      percentage: 60,
    },
  ],
  sentimentAnalysis: {
    overallSentiment: {
      positive: 40,
      negative: 30,
      neutral: 30,
    },
    emotionalCategories: {
      positive: ["Hope", "Inspiration", "Motivation"],
      negative: ["Frustration", "Disappointment", "Anger"],
      neutral: ["Curiosity", "Interest", "Skepticism"],
    },
    sentimentIntensity: [
      {
        emotion: "Hope",
        percentage: 60,
      },
      {
        emotion: "Frustration",
        percentage: 50,
      },
      {
        emotion: "Curiosity",
        percentage: 40,
      },
    ],
  },
  engagementAnalysis: {
    effectiveHooks: [
      {
        quote: "One and only best stop for CANADA Process",
        engagement: "High engagement rate",
      },
      {
        quote: "I am a student of Profound Institute",
        engagement: "Most shared",
      },
    ],
    ctaPerformance: [
      {
        cta: "DO CONTACT AND REACH AT YOUR DREAM PLACE",
        conversion: 80,
      },
      {
        cta: "Check out www.iversity.org",
        conversion: 60,
      },
      {
        cta: "I would suggest the following five reasons",
        conversion: 50,
      },
    ],
    contentFormatPerformance: [
      {
        format: "Personal Stories",
        engagement: 55,
        description: "Highest engagement rate among all content formats",
      },
      {
        format: "Listicles",
        engagement: 40,
        description: "Most shared content format",
      },
      {
        format: "Infographics",
        engagement: 50,
        description: "Highest information retention rate",
      },
    ],
  },
  competitorInsights: {
    competitors: [
      {
        title: "Education Platforms",
        marketShare: 40,
        growthRate: 25,
      },
      {
        title: "Institutional Partnerships",
        marketShare: 30,
        growthRate: 20,
      },
      {
        title: "EdTech Accelerators",
        marketShare: 20,
        growthRate: 15,
      },
      {
        title: "Individual Educators",
        marketShare: 10,
        growthRate: 10,
      },
    ],
    keyDifferentiators: [],
  },
  trendsAndPatterns: {
    eCommerceTrends: [],
    userBehaviorPatterns: [
      {
        pattern: "Education Content Interest",
        percentage: 50,
      },
      {
        pattern: "Personalization Demand",
        percentage: 40,
      },
      {
        pattern: "Digital Tool Adoption",
        percentage: 30,
      },
    ],
  },
  visualizedInsights: {
    CustomerSatisfaction: [
      {
        title: "Personalized Learning",
        percentage: 60,
      },
      {
        title: "Online Education Platforms",
        percentage: 50,
      },
      {
        title: "Artificial Intelligence in Education",
        percentage: 40,
      },
    ],
    userEngagementMetrics: [
      {
        metric: "Average Time Spent",
        value: "10 minutes",
        percentageChange: 30,
        description: "Per session",
      },
      {
        metric: "Click-through Rate",
        value: "3.5%",
        percentageChange: 25,
        description: "Average CTR",
      },
      {
        metric: "Content Shares",
        value: "1.5K",
        percentageChange: 20,
        description: "Monthly average",
      },
    ],
  },
  globalMarket: {
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
          value: "↑ 45%",
        },
        {
          name: "Content Views",
          value: "↑ 30K",
        },
      ],
    },
    userDemographics: [
      {
        ageGroup: "Age 18-34",
        percentage: 40,
      },
      {
        ageGroup: "Age 35-54",
        percentage: 30,
      },
      {
        ageGroup: "Age 55+",
        percentage: 30,
      },
    ],
    contentPerformance: [
      {
        contentType: "Education Tips",
        ctr: 55,
      },
      {
        contentType: "Career Guides",
        ctr: 50,
      },
      {
        contentType: "Personal Stories",
        ctr: 45,
      },
    ],
    generatedReports: [],
    wordcloud: [],
  },
};

const EngagementAnalysis = ({data}) => {
  if (!data?.["Engagement Analysis"]) {
    return null;
  }

  const engagementData = data.engagementAnalysis;
  const effectiveHooks = engagementData.effectiveHooks;
  const callToActionPerformance = engagementData.ctaPerformance
  const contentFormatPerformance = engagementData.contentFormatPerformance;

  const getColorByIndex = (index) => {
    const colors = ["green", "blue", "purple"];
    return colors[index % colors.length] || "gray";
  };

  const getIconPath = (index) => {
    const paths = [
      "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
      "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
      "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
    ];
    return paths[index % paths.length];
  };

  return (
    <div id="engagement" className="py-10 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">
          Engagement Analysis
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Effective Hooks Section */}
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-6 text-gray-800">
              Effective Hooks
            </h3>
            <div className="space-y-4">
              {effectiveHooks?.map((hook, index) => (
                <div
                  key={index}
                  className="p-4 bg-white rounded-lg border border-gray-100 group hover:bg-gray-50 transition-all"
                >
                  <blockquote className="italic text-gray-600">
                    <div className="overflow-hidden transition-all duration-300 ease-in-out">
                      <div className="group-hover:max-h-[200px] max-h-[50px] overflow-hidden">
                        "{hook.quote}"
                      </div>
                    </div>
                  </blockquote>
                  <div className="mt-2 flex items-center">
                    <div className="flex text-yellow-400">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="ml-2 text-sm text-gray-600">
                        {hook.engagement}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Performance Section */}
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-6 text-gray-800">
              Call to Action Performance
            </h3>
            <div className="space-y-4">
              {callToActionPerformance?.map((item, index) => (
                <div key={index} className="relative pt-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-600">
                      "{item.cta}"
                    </span>
                    <span className="text-sm font-medium text-green-600">
                      {item.conversion}% conversion
                    </span>
                  </div>
                  <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
                    <div
                      style={{ width: `${item.conversion}%` }}
                      className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-${getColorByIndex(
                        index
                      )}-500`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Content Format Performance Section */}
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mt-8">
          <h3 className="text-xl font-semibold mb-6 text-gray-800">
            Content Format Performance
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contentFormatPerformance?.map((format, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg border border-gray-100"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-medium text-gray-700">
                    {format.format}
                  </span>
                  <span className={`text-${getColorByIndex(index)}-500`}>
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
                        d={getIconPath(index)}
                      />
                    </svg>
                  </span>
                </div>
                <div className="mt-4">
                  <div
                    className={`text-2xl font-bold text-${getColorByIndex(
                      index
                    )}-600`}
                  >
                    {format.engagement}%
                  </div>
                  <div className="text-sm text-gray-500">
                    {format.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

EngagementAnalysis.propTypes = {
  data: PropTypes.shape({
    "Engagement Analysis": PropTypes.shape({
      "Effective Hooks": PropTypes.arrayOf(
        PropTypes.shape({
          quote: PropTypes.string,
          engagement: PropTypes.string,
        })
      ),
      "Call-to-Action Performance": PropTypes.arrayOf(
        PropTypes.shape({
          cta: PropTypes.string,
          conversion: PropTypes.number,
        })
      ),
      "Content Format Performance": PropTypes.arrayOf(
        PropTypes.shape({
          format: PropTypes.string,
          engagement: PropTypes.number,
          description: PropTypes.string,
        })
      ),
    }),
  }).isRequired,
};

export default EngagementAnalysis;
