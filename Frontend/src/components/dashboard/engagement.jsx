import React from "react";
import PropTypes from "prop-types";

const data = {
  painPoints: [
    {
      title: "Food Safety Concerns",
      issues: [
        "Fear of contaminated food",
        "Concerns about pesticide use",
        "Uncertainty about food labeling",
      ],
    },
    {
      title: "Food Accessibility",
      challenges: [
        "Limited access to healthy food options",
        "High cost of organic or specialty foods",
        "Difficulty in finding affordable food options",
      ],
    },
    {
      title: "Food Production Transparency",
      keyProblems: [
        "Lack of transparency in food production processes",
        "Uncertainty about food sourcing and quality",
        "Concerns about animal welfare and environmental impact",
      ],
    },
  ],
  impactScale: [
    { title: "Food Safety Concern Impact", percentage: 80 },
    { title: "Food Accessibility Impact", percentage: 70 },
    { title: "Food Production Transparency Impact", percentage: 60 },
  ],
  sentimentAnalysis: {
    overallSentiment: { positive: 55, negative: 20, neutral: 25 },
    emotionalCategories: {
      positive: ["Hope", "Inspiration", "Motivation"],
      negative: ["Anxiety", "Frustration", "Disappointment"],
      neutral: ["Curiosity", "Interest", "Skepticism"],
    },
    sentimentIntensity: [
      { emotion: "Hope", percentage: 80 },
      { emotion: "Anxiety", percentage: 60 },
      { emotion: "Curiosity", percentage: 70 },
    ],
  },
  engagementAnalysis: {
    effectiveHooks: [
      {
        quote:
          "The reality is that the farmers are not being paid a fair price for their produce.",
        engagement: "High engagement rate",
      },
      {
        quote: "If you\u2019re looking for vegan food hacks - look no further.",
        engagement: "Most shared",
      },
    ],
    callToActionPerformance
: [
      { cta: "Try replicating the dish with cauliflower!", conversion: 80 },
      { cta: "Schedule routine check-ups...", conversion: 65 },
      { cta: "Don\u2019t spoil your health...", conversion: 55 },
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
    marketShareBreakdown: [
      {
        category: "Food Production Companies",
        marketShare: 40,
        growthRate: 25,
      },
      { category: "Food Retailers", marketShare: 30, growthRate: 20 },
      { category: "Food Service Providers", marketShare: 20, growthRate: 15 },
      { category: "Food Manufacturers", marketShare: 10, growthRate: 10 },
    ],
  },
  trendsAndPatterns: {
    foodSafetyTrends: [
      { trend: "Increased Focus on Food Safety", percentage: 85 },
      {
        trend: "Growing Demand for Organic and Specialty Foods",
        percentage: 80,
      },
      { trend: "Rise of Food Technology and Innovation", percentage: 75 },
    ],
    foodAccessibilityTrends: [
      { trend: "Growing Concerns about Food Insecurity", percentage: 80 },
      {
        trend: "Increased Demand for Affordable and Accessible Food Options",
        percentage: 75,
      },
      { trend: "Rise of Food Delivery and Online Ordering", percentage: 70 },
    ],
  },
  visualizedInsights: {
    topFoodSafetyConcerns: [
      { concern: "Contaminated Food", percentage: 85 },
      { concern: "Pesticide Use", percentage: 80 },
      { concern: "Food Labeling", percentage: 75 },
    ],
    topFoodAccessibilityChallenges: [
      { challenge: "Limited Access to Healthy Food Options", percentage: 80 },
      { challenge: "High Cost of Organic or Specialty Foods", percentage: 75 },
      {
        challenge: "Difficulty in Finding Affordable Food Options",
        percentage: 70,
      },
    ],
    topFoodProductionTransparencyConcerns: [
      {
        concern: "Lack of Transparency in Food Production Processes",
        percentage: 80,
      },
      {
        concern: "Uncertainty about Food Sourcing and Quality",
        percentage: 75,
      },
      {
        concern: "Concerns about Animal Welfare and Environmental Impact",
        percentage: 70,
      },
    ],
  },
};

const EngagementAnalysis = ({ data }) => {
  if (!data?.engagementAnalysis) {
    return null;
  }

  const { effectiveHooks, callToActionPerformance
, contentFormatPerformance } = data.engagementAnalysis;

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
              {callToActionPerformance
?.map((item, index) => (
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
    engagementAnalysis: PropTypes.shape({
      effectiveHooks: PropTypes.arrayOf(
        PropTypes.shape({
          quote: PropTypes.string,
          engagement: PropTypes.string,
        })
      ),
      callToActionPerformance
: PropTypes.arrayOf(
        PropTypes.shape({
          cta: PropTypes.string,
          conversion: PropTypes.number,
        })
      ),
      contentFormatPerformance: PropTypes.arrayOf(
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