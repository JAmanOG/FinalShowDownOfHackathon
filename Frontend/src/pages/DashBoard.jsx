import React from 'react';
import { data } from "../../constant";

const DashBoard = (dataState) => {
  const raw = data.dataState.dataState.outputs[0].outputs[0].results.message.data.text;

  // Parsing and cleaning the raw data into sections
  const cleanData = (text) => {
    return text
      .replace(/[#*]/g, '') // Remove # and *
      .replace(/\s{2,}/g, ' ') // Replace multiple spaces with a single space
      .trim(); // Remove leading/trailing whitespace
  };

  const formatSections = (rawText) => {
    return rawText.split('---').map((section) => {
      const [title, ...content] = cleanData(section.trim()).split('\n');
      return {
        title: title || 'Untitled Section',
        points: content
          .map((line) => line.replace(/[-–•]/g, '').trim()) // Remove stray bullet markers
          .filter((line) => line !== '') // Filter out empty lines
          .map((line) => line.charAt(0).toUpperCase() + line.slice(1)), // Capitalize first letter of each point
      };
    });
  };

  const sections = formatSections(raw);

  return (
    <div className="p-8 bg-gray-900 min-h-screen font-sans text-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center mb-12 text-purple-400 tracking-tight">
          Dashboard Insights
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <div
              key={index}
              className="p-6 bg-gray-800 border border-gray-700 shadow-lg rounded-xl hover:shadow-2xl hover:border-purple-400 transition-shadow duration-300"
            >
              <h2 className="text-2xl font-bold text-purple-300 mb-4">
                {section.title}
              </h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                {section.points.map((point, idx) => (
                  <li key={idx} className="text-lg leading-relaxed">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
