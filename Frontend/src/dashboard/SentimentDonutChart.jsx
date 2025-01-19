import React from 'react';

const SentimentDonutChart = ({ sentiment }) => {
  // Parse the sentiment string to extract values
  const sentimentData = sentiment.sentiment.split('\n').reduce((acc, line) => {
    const [key, value] = line.split(':');
    if (key && value) {
      acc[key.trim().replace('- **', '').replace('**', '')] = parseInt(value.trim().replace('%', ''), 10);
    }
    return acc;
  }, {});

  const { Positive = 0, Negative = 0, Neutral = 0 } = sentimentData;

  return (
    <div id="sentiments" className="py-10 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Sentiment Analysis</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-6 text-gray-800">Overall Sentiment Distribution</h3>
            <div className="flex items-center justify-center space-x-8">
              <div className="relative inline-flex items-center justify-center">
                <svg className="w-32 h-32">
                  <circle className="text-gray-200" stroke="currentColor" strokeWidth="10" fill="none" r="56" cx="64" cy="64" />
                  <circle className="text-green-500" stroke="currentColor" strokeWidth="10" fill="none" r="56" cx="64" cy="64"
                    style={{ strokeDasharray: 351.86, strokeDashoffset: 351.86 - (351.86 * Positive / 100), transform: "rotate(-90 64 64)" }} />
                </svg>
                <span className="absolute text-xl font-bold text-gray-700">{Positive}%</span>
                <span className="absolute -bottom-8 text-sm font-medium text-gray-600">Positive</span>
              </div>
              <div className="relative inline-flex items-center justify-center">
                <svg className="w-32 h-32">
                  <circle className="text-gray-200" stroke="currentColor" strokeWidth="10" fill="none" r="56" cx="64" cy="64" />
                  <circle className="text-red-500" stroke="currentColor" strokeWidth="10" fill="none" r="56" cx="64" cy="64"
                    style={{ strokeDasharray: 351.86, strokeDashoffset: 351.86 - (351.86 * Negative / 100), transform: "rotate(-90 64 64)" }} />
                </svg>
                <span className="absolute text-xl font-bold text-gray-700">{Negative}%</span>
                <span className="absolute -bottom-8 text-sm font-medium text-gray-600">Negative</span>
              </div>
              <div className="relative inline-flex items-center justify-center">
                <svg className="w-32 h-32">
                  <circle className="text-gray-200" stroke="currentColor" strokeWidth="10" fill="none" r="56" cx="64" cy="64" />
                  <circle className="text-blue-500" stroke="currentColor" strokeWidth="10" fill="none" r="56" cx="64" cy="64"
                    style={{ strokeDasharray: 351.86, strokeDashoffset: 351.86 - (351.86 * Neutral / 100), transform: "rotate(-90 64 64)" }} />
                </svg>
                <span className="absolute text-xl font-bold text-gray-700">{Neutral}%</span>
                <span className="absolute -bottom-8 text-sm font-medium text-gray-600">Neutral</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-6 text-gray-800">Emotional Categories</h3>
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-600">Positive Emotions</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Hope</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Inspiration</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Motivation</span>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-600">Negative Emotions</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">Anxiety</span>
                  <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">Stress</span>
                  <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">Frustration</span>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-600">Neutral Emotions</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Curiosity</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Interest</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Skepticism</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h3 className="text-xl font-semibold mb-6 text-gray-800">Sentiment Intensity</h3>
          <div className="space-y-4">
            <div className="relative pt-1">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-green-600">Hope</span>
                <span className="text-sm font-medium text-green-600">85%</span>
              </div>
              <div className="overflow-hidden h-2 text-xs flex rounded bg-green-100">
                <div style={{ width: "85%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"></div>
              </div>
            </div>

            <div className="relative pt-1">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-red-600">Anxiety</span>
                <span className="text-sm font-medium text-red-600">65%</span>
              </div>
              <div className="overflow-hidden h-2 text-xs flex rounded bg-red-100">
                <div style={{ width: "65%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"></div>
              </div>
            </div>

            <div className="relative pt-1">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-blue-600">Curiosity</span>
                <span className="text-sm font-medium text-blue-600">75%</span>
              </div>
              <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-100">
                <div style={{ width: "75%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SentimentDonutChart;