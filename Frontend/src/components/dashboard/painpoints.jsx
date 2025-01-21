import React from "react";
import { motion } from "framer-motion";

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
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
};
const scaleContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const scaleItemVariants = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
    },
  },
};
const Painpoints = ({ data }) => {
  // Remove data from props
  const categories = data.userPainPointsAnalysis; // Use data constant directly

  let impactScale = [];

  impactScale = data?.impactScale;

  if (impactScale.length === 0) {
    impactScale = categories?.map((category) => ({
      title: Object.keys(category?.impactScale)[0],
      percentage: Object.values(category?.impactScale)[0],
    }));
  }

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
      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        animate="show"
        variants={containerVariants}
      >
        <motion.h2
          className="text-3xl font-bold mb-8 text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          User Pain Points Analysis
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
              }}
              className="bg-gray-50 p-6 rounded-lg border border-gray-200 transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {category.title}
                </h3>
                <motion.span
                  className={`text-${getColorClass(index)}-500`}
                  whileHover={{ scale: 1.1 }}
                  animate={{
                    scale: [1, 1.05, 1],
                    transition: {
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                    },
                  }}
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
                      d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </motion.span>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                {(
                  category.issues ||
                  category.challenges ||
                  category["key problems"]
                )?.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h3 className="text-xl font-semibold mb-6 text-gray-800">
            Impact Scale
          </h3>
          <motion.div
            variants={scaleContainerVariants}
            initial="hidden"
            animate="show"
            className="mt-6"
          >
            {impactScale?.map((category, index) => (
              <motion.div
                key={index}
                variants={scaleItemVariants}
                whileHover={{ scale: 1.01 }}
                className="mb-4"
              >
                <div className="flex items-center justify-between mb-2">
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 * index }}
                    className="text-sm font-semibold text-gray-700"
                  >
                    {category.title}
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 * index }}
                    className="text-sm font-semibold text-gray-700"
                  >
                    {category.percentage}%
                  </motion.span>
                </div>
                <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${category.percentage}%` }}
                    transition={{
                      duration: 0.8,
                      delay: 0.3 * index,
                      ease: "easeOut",
                    }}
                    className={`shadow-none flex flex-col justify-center bg-${getColorClass(
                      index
                    )}-500`}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Painpoints;
