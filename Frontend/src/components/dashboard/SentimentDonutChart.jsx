import React from "react";
import { motion } from "framer-motion";


const containerVariants = {
    hidden: { 
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.5,
      },
    },
  };
  
  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 20 
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };
  
  const SentimentDonutChart = ({ data }) => {
    const sentimentAnalysis = data.sentimentAnalysis || {};
    const overallDistribution = sentimentAnalysis.overallSentiment || {};
    const emotionalCategories = sentimentAnalysis.emotionalCategories || {};
    const intensityData = sentimentAnalysis.sentimentIntensity || [];
  
    const getColorClass = (emotion) => {
      if (emotion.toLowerCase().includes("positive")) return "stroke-green-500";
      if (emotion.toLowerCase().includes("negative")) return "stroke-red-500";
      return "stroke-blue-500";
    };
  
    const getBgColorClass = (category) => {
      switch(category) {
        case "positive": return "bg-green-100 text-green-800";
        case "negative": return "bg-red-100 text-red-800";
        default: return "bg-blue-100 text-blue-800";
      }
    };
  
    return (
      <div className="min-h-screen bg-gray-50">
        <motion.div 
          className="max-w-7xl mx-auto py-12 px-4"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.h2 
            className="text-3xl font-bold text-gray-900 mb-8 text-center"
            variants={itemVariants}
          >
            Sentiment Analysis Results
          </motion.h2>
  
          {/* Donut Charts */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
            variants={containerVariants}
          >
            {Object.entries(overallDistribution).map(([emotion, value], index) => (
              <motion.div
                key={emotion}
                className="bg-white rounded-lg shadow-lg p-6"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="relative w-48 h-48 mx-auto">
                  <svg className="transform -rotate-90 w-full h-full">
                    {/* Background circle */}
                    <circle
                      cx="96"
                      cy="96"
                      r="40"
                      className="stroke-gray-200"
                      strokeWidth="12"
                      fill="none"
                    />
                    {/* Animated progress circle */}
                    <motion.circle
                      cx="96"
                      cy="96"
                      r="40"
                      strokeWidth="12"
                      fill="none"
                      className={getColorClass(emotion)}
                      strokeDasharray="251.2"
                      strokeDashoffset="251.2"
                      initial={{ strokeDashoffset: 251.2 }}
                      animate={{ 
                        strokeDashoffset: 251.2 * (1 - value / 100) 
                      }}
                      transition={{ 
                        duration: 1.5,
                        delay: index * 0.2,
                        ease: "easeInOut"
                      }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.span 
                      className="text-2xl font-bold text-gray-800"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      {value}%
                    </motion.span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mt-4 text-gray-800">
                  {emotion.charAt(0).toUpperCase() + emotion.slice(1)}
                </h3>
              </motion.div>
            ))}
          </motion.div>
  
          {/* Categories and Intensity */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Emotional Categories */}
            <motion.div 
              className="bg-white rounded-lg shadow-lg p-6"
              variants={containerVariants}
            >
              <motion.h3 
                className="text-2xl font-bold mb-6 text-gray-800"
                variants={itemVariants}
              >
                Emotional Categories
              </motion.h3>
              <motion.div 
                className="space-y-6"
                variants={containerVariants}
              >
                {Object.entries(emotionalCategories).map(([category, emotions]) => (
                  <motion.div
                    key={category}
                    className="bg-gray-50 rounded-lg p-4"
                    variants={itemVariants}
                  >
                    <h4 className="text-lg font-semibold mb-3 text-gray-700 capitalize">
                      {category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {emotions.map((emotion) => (
                        <motion.span
                          key={emotion}
                          className={`px-3 py-1 rounded-full text-sm font-medium ${getBgColorClass(category)}`}
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.2 }}
                        >
                          {emotion}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
  
            {/* Intensity Chart */}
            <motion.div 
              className="bg-white rounded-lg shadow-lg p-6"
              variants={containerVariants}
            >
              <motion.h3 
                className="text-2xl font-bold mb-6 text-gray-800"
                variants={itemVariants}
              >
                Sentiment Intensity
              </motion.h3>
              <motion.div 
                className="space-y-4"
                variants={containerVariants}
              >
                {intensityData.map(({ emotion, percentage }, index) => (
                  <motion.div
                    key={emotion}
                    className="bg-gray-50 rounded-lg p-4"
                    variants={itemVariants}
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">
                        {emotion}
                      </span>
                      <span className="text-sm font-medium text-gray-700">
                        {percentage}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full ${
                          percentage > 66
                            ? "bg-green-500"
                            : percentage > 33
                            ? "bg-yellow-500"
                            : "bg-red-500"
                        }`}
                        initial={{ width: 0 }}
                        animate={{ width: `${percentage}%` }}
                        transition={{
                          duration: 0.8,
                          delay: index * 0.1,
                          ease: "easeOut"
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    );
  };
  
  export default SentimentDonutChart;
  