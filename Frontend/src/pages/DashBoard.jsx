import React from "react";

const DashBoard = ({ outputState }) => {
  const raw = outputState?.outputs[0]?.outputs[0]?.results?.message?.text || "";

  // Parsing and cleaning raw data
  const parseData = (text) => {
    const sections = [];
    let currentSection = null;

    text.split("\n").forEach((line) => {
      line = line.trim();

      if (line.startsWith("###")) {
        // Top-level section
        if (currentSection) sections.push(currentSection);
        currentSection = { title: line.replace(/^###\s*/, ""), points: [] };
      } else if (line.startsWith("####")) {
        // Subsection
        if (currentSection) {
          currentSection.points.push({
            type: "subsection",
            content: line.replace(/^####\s*/, ""),
            subPoints: [],
          });
        }
      } else if (line.startsWith("-") || line.startsWith("*")) {
        // Bullet points
        const point = line.replace(/^[-*]\s*/, "");
        const lastPoint = currentSection?.points[currentSection.points.length - 1];

        if (lastPoint && lastPoint.type === "subsection") {
          lastPoint.subPoints.push(point);
        } else if (currentSection) {
          currentSection.points.push({ type: "point", content: point });
        }
      }
    });

    if (currentSection) sections.push(currentSection); // Push the last section
    return sections;
  };

  const sections = parseData(raw);

  return (
    <div className="p-8 bg-gradient-to-br z-50 w-full  from-indigo-50 via-white to-indigo-100 min-h-screen font-sans">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center mb-12 text-indigo-800 tracking-tight">
          Dashboard Insights
        </h1>
        <div>
          {sections.map((section, index) => (
            <div
              key={index}
              className="mb-12 p-6 bg-white border border-gray-200 shadow-sm rounded-lg"
            >
              <h2 className="text-2xl font-bold text-indigo-700 mb-4">
                {section.title || `Section ${index + 1}`}
              </h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {section.points.map((point, idx) => {
                  if (point.type === "subsection") {
                    return (
                      <li key={idx}>
                        <span className="font-medium">{point.content}</span>
                        <ul className="list-circle list-inside ml-4 text-gray-600">
                          {point.subPoints.map((subPoint, subIdx) => (
                            <li key={subIdx}>{subPoint}</li>
                          ))}
                        </ul>
                      </li>
                    );
                  }
                  return <li key={idx}>{point.content}</li>;
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
