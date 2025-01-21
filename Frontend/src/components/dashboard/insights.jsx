import React from "react";
// const data = {
//   userPainPointsAnalysis: [
//     {
//       title: "Education and Career",
//       issues: [
//         "Difficulty in finding a suitable education platform",
//         "Ineffective job placement services",
//         "Lack of recognition of specific opportunities",
//       ],
//     },
//     {
//       title: "Trust and Credibility",
//       issues: [
//         "Difficulty in building trust with employers",
//         "Limited credibility in the higher education market",
//         "Lack of recognition of past experience",
//       ],
//     },
//     {
//       title: "Investment and Funding",
//       issues: [
//         "Lack of previous investment by the investor",
//         "Difficulty in finding suitable investors",
//         "Limited access to funding opportunities",
//       ],
//     },
//   ],
//   impactScale: [
//     {
//       title: "Education and Career Impact",
//       percentage: 80,
//     },
//     {
//       title: "Trust and Credibility Impact",
//       percentage: 75,
//     },
//     {
//       title: "Investment and Funding Impact",
//       percentage: 70,
//     },
//   ],
//   sentimentAnalysis: {
//     overallSentiment: {
//       positive: 40,
//       negative: 30,
//       neutral: 30,
//     },
//     emotionalCategories: {
//       positive: ["Hope", "Inspiration", "Motivation"],
//       negative: ["Frustration", "Disappointment", "Anger"],
//       neutral: ["Curiosity", "Interest", "Skepticism"],
//     },
//     sentimentIntensity: [
//       {
//         emotion: "Hope",
//         percentage: 60,
//       },
//       {
//         emotion: "Frustration",
//         percentage: 50,
//       },
//       {
//         emotion: "Curiosity",
//         percentage: 60,
//       },
//     ],
//   },
//   engagementAnalysis: {
//     effectiveHooks: [
//       {
//         quote: "One and only best stop for CANADA Process",
//         engagement: "High engagement rate",
//       },
//       {
//         quote: "I am a student of Profound Institute",
//         engagement: "Most shared",
//       },
//     ],
//     ctaPerformance: [
//       {
//         cta: "DO CONTACT AND REACH AT YOUR DREAM PLACE",
//         conversion: 80,
//       },
//       {
//         cta: "Check out www.iversity.org",
//         conversion: 60,
//       },
//       {
//         cta: "I would suggest the following five reasons",
//         conversion: 50,
//       },
//     ],
//     contentFormatPerformance: [
//       {
//         format: "Personal Stories",
//         engagement: 70,
//         description: "Highest engagement rate among all content formats",
//       },
//       {
//         format: "Listicles",
//         engagement: 60,
//         description: "Most shared content format",
//       },
//       {
//         format: "Infographics",
//         engagement: 65,
//         description: "Highest information retention rate",
//       },
//     ],
//   },
//   competitorInsights: {
//     competitors: [
//       {
//         title: "Education Platforms",
//         marketShare: 40,
//         growthRate: 25,
//       },
//       {
//         title: "Job Placement Services",
//         marketShare: 30,
//         growthRate: 20,
//       },
//       {
//         title: "Investment and Funding",
//         marketShare: 20,
//         growthRate: 15,
//       },
//       {
//         title: "Higher Education Institutions",
//         marketShare: 10,
//         growthRate: 10,
//       },
//     ],
//     keyDifferentiators: [],
//   },
//   trendsAndPatterns: {
//     educationAndCareerTrends: [
//       {
//         trend: "Online Education",
//         percentage: 80,
//       },
//       {
//         trend: "Personalized Learning",
//         percentage: 70,
//       },
//       {
//         trend: "Career Development",
//         percentage: 60,
//       },
//     ],
//     investmentAndFundingTrends: [
//       {
//         trend: "EdTech Investment",
//         percentage: 80,
//       },
//       {
//         trend: "Funding Opportunities",
//         percentage: 70,
//       },
//       {
//         trend: "Investor Interest",
//         percentage: 60,
//       },
//     ],
//   },
//   visualizedInsights: {
//     topEducationAndCareerTrends: [
//       {
//         trend: "Online Education",
//         percentage: 80,
//       },
//       {
//         trend: "Personalized Learning",
//         percentage: 70,
//       },
//       {
//         trend: "Career Development",
//         percentage: 60,
//       },
//     ],
//     userEngagementMetrics: [
//       {
//         metric: "Average Time Spent",
//         value: "10 minutes",
//         percentageChange: 30,
//         description: "per session",
//       },
//       {
//         metric: "Click-through Rate",
//         value: "4%",
//         percentageChange: 25,
//         description: "average CTR",
//       },
//       {
//         metric: "Content Shares",
//         value: "1.5K",
//         percentageChange: 20,
//         description: "monthly average",
//       },
//     ],
//   },
//   globalMarket: {
//     regions: [
//       {
//         region: "North America",
//         marketShare: 40,
//       },
//       {
//         region: "Europe",
//         marketShare: 30,
//       },
//       {
//         region: "Asia Pacific",
//         marketShare: 20,
//       },
//       {
//         region: "Rest of World",
//         marketShare: 10,
//       },
//     ],
//   },
//   analyticsReports: {
//     monthlySummary: {
//       title: "Monthly Summary",
//       metrics: [
//         {
//           name: "Active Users",
//           value: "↑ 10K",
//         },
//         {
//           name: "Engagement Rate",
//           value: "↑ 60%",
//         },
//         {
//           name: "Content Views",
//           value: "↑ 30K",
//         },
//       ],
//     },
//     userDemographics: [
//       {
//         ageGroup: "Age 18-34",
//         percentage: 50,
//       },
//       {
//         ageGroup: "Age 35-54",
//         percentage: 30,
//       },
//       {
//         ageGroup: "Age 55+",
//         percentage: 20,
//       },
//     ],
//     contentPerformance: [
//       {
//         contentType: "Education Tips",
//         ctr: 80,
//       },
//       {
//         contentType: "Career Development",
//         ctr: 70,
//       },
//       {
//         contentType: "Personalized Learning",
//         ctr: 60,
//       },
//     ],
//   },
// };

const Insights = ({ data, wordCloudImage }) => {
  const wordcloud = data?.wordcloud || "";

  if (!data) {
    return <div>Loading...</div>;
  }
  // Extract required data
  const visualInsights = data.visualizedInsights;
  const engagementData = data.engagementAnalysis;
  const markettrend = Object.values(data);
  const globalTrendsValues = Object.keys(data)
    .filter((key) => key.toLowerCase().includes("global")) // Find keys containing 'global'
    .map((key) => data[key]); // Get the corresponding array values

  console.log("globalTrends", globalTrendsValues[0]);
  const marketData = globalTrendsValues[0].regions;
  console.log("marketData", marketData);

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
                            item.metric ||
                            item.trend}
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
              {engagementData.contentFormatPerformance?.map((format, index) => (
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
                  <p className="text-sm text-gray-500 mt-1">Engagement Rate</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h3 className="text-xl font-semibold mb-6 text-gray-800">
            Market Share Breakdown
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {Array.isArray(marketData) &&
              marketData.map((region, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg border border-gray-100"
                >
                  {console.log("region", marketData)}
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

        {wordcloud && (
          <div className="word-cloud">
            <h3>Word Cloud:</h3>
            <img src={wordcloud} alt="Generated Word Cloud" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Insights;
