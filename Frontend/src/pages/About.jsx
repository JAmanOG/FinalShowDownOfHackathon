import React from "react";

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Bhavik Prajapati",
      role: "Frontend Developer",
      image: "src/assets/hds.png",
    },
    {
      name: "Aman Jaiswal",
      role: "Full Stack Developer",
      image: "/src/assets/aman.jpg",
    },
    {
      name: "Rohit Rathod",
      role: "UI/UX Designer",
      image: "src/assets/rohit.jpg",
    },
    {
      name: "Sreedev Nair",
      role: "Python/Data Science Developer",
      image: "src/assets/sreedev.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-10 px-4">
      {/* Project Section */}
      <section className="text-center max-w-4xl mx-auto mb-12">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
          About the Project
        </h1>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          Our project, <span className="font-bold text-blue-600">Art Finder</span>, is designed to make exploring and discovering art easier and more enjoyable. 
          With features like PDF generation, a user-friendly interface, and seamless navigation, it’s built to provide the best user experience. 
          Our dedicated team has worked hard to ensure high-quality design and functionality.
        </p>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-8">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 text-center transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full object-cover border-4 border-blue-500"
              />
              <h3 className="mt-4 text-xl font-bold text-gray-800">
                {member.name}
              </h3>
              <p className="mt-2 text-gray-500">{member.role}</p>
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors duration-300">
                Connect
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
