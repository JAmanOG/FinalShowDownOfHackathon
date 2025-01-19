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

  const sections = raw.split('---').map((section) => {
    const [title, ...content] = cleanData(section.trim()).split('\n');
    return { title, points: content.filter((line) => line.trim() !== '') };
  });

  return (
    <div className="p-8 bg-gradient-to-br from-indigo-50 via-white to-indigo-100 min-h-screen font-sans">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center mb-12 text-indigo-800 tracking-tight">
          Dashboard Insights
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <div
              key={index}
              className="p-6 bg-white border border-gray-200 shadow-lg rounded-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <h2 className="text-2xl font-semibold text-indigo-700 mb-4">
                {section.title || `Section ${index + 1}`}
              </h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
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
