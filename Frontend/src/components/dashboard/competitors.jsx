import React from "react";
import PropTypes from "prop-types";

const ytvideo = [
  {
    title: "NIVEA Radiant & Beauty Advanced Care - For your shade of beautiful",
    description:
      "NIVEA Radiant & Beauty Advanced Care is the next-level skin care you have been waiting for. Care for your natural melanin-rich skin and experience 48-hour deep moisture with a lotion that reduces stretch marks visibly in 2 weeks. Celebrate your gorgeous shade of beautiful because your skin is your power and identity.",
    viewCount: "5276628",
    channelTitle: "NIVEA East Africa",
    thumbnailUrl: "https://i.ytimg.com/vi/5CEb60Rfp14/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=5CEb60Rfp14",
  },
  {
    title: "I Filmed a Skincare Commercial in my College Dorm!",
    description: "",
    viewCount: "2792604",
    channelTitle: "ash xu",
    thumbnailUrl: "https://i.ytimg.com/vi/pMMeqBiEiAk/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=pMMeqBiEiAk",
  },
  {
    title: "Olay Hydration Goes Ten Surface Layers Deep | Olay Skin Care",
    description:
      "Olay’s hydration goes ten surface layers deep unlike some luxury creams. Olay’s supercharged skincare beats the $500 cream.\r\n\r\nGET SOCIAL WITH US!\r\nWebsite ► http://www.olay.com/en-us\r\nFacebook ► https://www.facebook.com/OlayUS\r\nTwitter ► https://twitter.com/OlayUS\r\nPinterest ► http://www.pinterest.com/OlayUS/",
    viewCount: "1626831",
    channelTitle: "Olay",
    thumbnailUrl: "https://i.ytimg.com/vi/ReGhXzPJQWs/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=ReGhXzPJQWs",
  },
  {
    title:
      "Introducing NEW M·A·C Hyper Real™ High-Performance Skincare | MAC Cosmetics",
    description:
      "Designed to perform with makeup ☁️✨. Discover our all-new, science-backed and Artist-approved skincare formulated to improve your skin and enhance your makeup for a perfectly prepped, makeup-ready canvas. #MACHyperReal #MACSkincare #MACSkinArtistry\n\n✨Hyper Real Serumizer™ Skin Balancing Hydration Serum\n🧴Hyper Real SkinCanvas Balm™ Moisturizing Cream\n💦Hyper Real Fresh Canvas Cleansing Oil \n\nShop the complete collection: https://www.maccosmetics.com/hyper-real-skincare\n\nFollow #MACCosmetics on social and show us how you use the #MACHyperReal collection! \nInstagram: https://www.instagram.com/maccosmetics \nTikTok: https://www.tiktok.com/@maccosmetics?lang=en\nTwitter: https://twitter.com/maccosmetics             \nFacebook: https://www.facebook.com/MACcosmetics            \nPinterest: https://www.pinterest.com/maccosmetics",
    viewCount: "701032",
    channelTitle: "MAC Cosmetics",
    thumbnailUrl: "https://i.ytimg.com/vi/vSKVbp1jepc/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=vSKVbp1jepc",
  },
  {
    title:
      "A simple trick to shoot a commercial video for a skin care product!",
    description:
      "#short #commercial #ads #skincare #productvideo #behindthescenes",
    viewCount: "191221",
    channelTitle: "Take OneTV",
    thumbnailUrl: "https://i.ytimg.com/vi/J6kmBWMD8MA/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=J6kmBWMD8MA",
  },
];
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

const Competitors = ({ data }) => {
  const getVideoId = (url) => {
    const regExp =
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[7].length === 11 ? match[7] : false;
  };

  // Helper function to get color based on index
  const getColor = (index) => {
    const colors = [
      "blue",
      "green",
      "purple",
      "red",
      "yellow",
      "indigo",
      "pink",
    ];
    return colors[index % colors.length];
  };

  // Helper function to get icon based on index
  const getIcon = (index) => {
    const icons = [
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
      />,
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
      />,
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
      />,
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
      />,
    ];
    return icons[index % icons.length];
  };

  // Extract market data from the competitorInsights section

  const marketShareData = data?.competitorInsights?.marketShareBreakdown || [];
  const trendsData =
    data?.industryTrendsPatterns?.eCommerceIndustryTrends || data.trendsAndPatterns.eCommerceTrends|| [];
  console.log("data",trendsData);
  return (
    <div id="competitors" className="py-10 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">
          Competitor Analysis
        </h2>

        {/* Market Share Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {marketShareData.map((competitor, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {competitor.category || competitor.company}
                </h3>
                <svg
                  className={`w-8 h-8 text-${getColor(index)}-500`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {getIcon(index)}
                </svg>
              </div>
              <div className="text-sm text-gray-600">
                <div className="flex items-center mb-2">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                  Market Share: {competitor.marketShare}%
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Industry Trends */}
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h3 className="text-xl font-semibold mb-6 text-gray-800">
            Industry Trends
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trendsData.map((trend, index) => (
              <div
                key={index}
                className="p-4 bg-white rounded-lg border border-gray-100"
              >
                <div className="flex items-center mb-3">
                  <div className={`p-2 bg-${getColor(index)}-100 rounded-lg`}>
                    <svg
                      className={`w-6 h-6 text-${getColor(index)}-600`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {getIcon(index)}
                    </svg>
                  </div>
                  <h4 className="ml-3 text-lg font-medium text-gray-800">
                    {trend.impact || trend.trend}
                  </h4>
                </div>
                <p className="text-sm text-gray-600">
                  Growth: {trend.percentage}%
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Video Analysis */}
        {ytvideo && ytvideo.length > 0 && (
          <div className="mt-12 bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-6 text-gray-800">
              Competitor Video Analysis
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ytvideo.map((video, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg border border-gray-100 overflow-hidden hover:shadow-lg transition-all"
                >
                  <div className="relative pb-[56.25%] h-0">
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${getVideoId(
                        video.videoUrl
                      )}`}
                      title={video.title}
                      border="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="p-4">
                    <h4 className="font-medium text-gray-800 mb-2 line-clamp-2">
                      {video.title}
                    </h4>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span className="flex items-center">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                          <path
                            fillRule="evenodd"
                            d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {Number(video.viewCount).toLocaleString()} views
                      </span>
                      <span className="text-blue-600">
                        {video.channelTitle}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

Competitors.propTypes = {
  data: PropTypes.shape({
    competitorInsights: PropTypes.shape({
      marketShareBreakdown: PropTypes.arrayOf(
        PropTypes.shape({
          category: PropTypes.string,
          marketShare: PropTypes.number,
          growthRate: PropTypes.number,
        })
      ),
    }),
    trendsAndPatterns: PropTypes.shape({
      foodSafetyTrends: PropTypes.arrayOf(
        PropTypes.shape({
          trend: PropTypes.string,
          percentage: PropTypes.number,
        })
      ),
      foodAccessibilityTrends: PropTypes.arrayOf(
        PropTypes.shape({
          trend: PropTypes.string,
          percentage: PropTypes.number,
        })
      ),
    }),
  }).isRequired,
  ytvideo: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      viewCount: PropTypes.string,
      channelTitle: PropTypes.string,
      thumbnailUrl: PropTypes.string,
      videoUrl: PropTypes.string,
    })
  ),
};

export default Competitors;
