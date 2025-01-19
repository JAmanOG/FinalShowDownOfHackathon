import React from "react";

const App = () => {
  // Parse the raw string into sections
  const parseData = (dataString) => {
    const sections = dataString.split("---").map((section) => {
      const lines = section.trim().split("\n");
      const title = lines[0]?.replace(/###\s\*\*(.*)\*\*/, "$1").trim() || "Section";
      const content = lines.slice(1).map((line) => line.trim());
      return { title, content };
    });
    return sections;
  };

  const sections = parseData(rawData);

  // Render a section dynamically
  const renderSection = ({ title, content }, index) => (
    <div key={index} className="mb-6">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      {content.map((line, idx) => {
        if (line.startsWith("- ")) {
          return (
            <li key={idx} className="ml-4 list-disc">
              {line.replace(/- /, "")}
            </li>
          );
        } else if (line.startsWith("  - ")) {
          return (
            <li key={idx} className="ml-8 list-disc">
              {line.replace(/  - /, "")}
            </li>
          );
        } else {
          return (
            <p key={idx} className="mb-2">
              {line}
            </p>
          );
        }
      })}
    </div>
  );

  return (
    <div className="p-4">
      {sections.map((section, index) => renderSection(section, index))}
    </div>
  );
};

export default App;
