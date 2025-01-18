import React from "react";

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Bhavik Prajapati",
      role: "Frontend Developer",
      image: "src/assets/hds.png", // Replace with actual image URL
    },
    {
      name: "Aman Jaiswal",
      role: "Full Stack Developer",
      image: "/src/assets/aman.jpg", // Replace with actual image URL
    },
    {
      name: "Rohit Rathod",
      role: "UI/UX Designer",
      image: "src/assets/rohit.jpg", // Replace with actual image URL
    },
    {
      name: "Sreedev Nair",
      role: "Python/Data Science Developer",
      image: "src/assets/sreedev.jpg", // Replace with actual image URL
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      {/* Project Section */}
      <section className="text-center max-w-4xl mx-auto mb-12">
        <h1 className="text-4xl font-bold text-blue-600">About the Project</h1>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          Our project, <span className="font-bold text-blue-500">Art Finder</span>, is designed to make exploring and discovering art easier and more enjoyable. 
          With features like PDF generation, a user-friendly interface, and seamless navigation, it’s built to provide the best user experience. 
          Our dedicated team has worked hard to ensure high-quality design and functionality.
        </p>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-semibold text-center text-blue-600 mb-8">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full object-cover"
              />
              <h3 className="mt-4 text-xl font-bold text-gray-800">
                {member.name}
              </h3>
              <p className="mt-2 text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
