import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";

const Home = () => {
  return (
    <main className="bg-gray-900 text-gray-300 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-indigo-900 to-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
            Automate Ad Creation with <span className="text-yellow-400">ART Finder</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-gray-300">
            Uncover user pain points, analyze competitors, and generate insights to craft impactful ads with ease.
          </p>
          <div className="mt-10">
            <Link
              to="/input"
              className="inline-flex items-center px-8 py-4 bg-yellow-400 text-gray-900 font-semibold text-lg rounded-lg shadow-lg hover:bg-yellow-500 transition-transform transform hover:scale-105"
            >
              Get Started
              <ArrowRight className="ml-3 w-6 h-6" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-100">
            Why Choose <span className="text-indigo-400">ART Finder</span>?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Comprehensive Research",
                description:
                  "Scrape data from blogs, forums, and reviews to uncover trends and triggers.",
              },
              {
                title: "Actionable Insights",
                description:
                  "Get summarized triggers, hooks, and CTAs tailored to your audience.",
              },
              {
                title: "User-Friendly Dashboard",
                description:
                  "Visualize data with graphs, sentiment analysis, and direct links.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 border border-gray-700 rounded-lg shadow-lg bg-gray-900 hover:bg-gray-800 transition-transform transform hover:scale-105"
              >
                <CheckCircle className="w-12 h-12 text-indigo-400 mb-4" />
                <h3 className="text-2xl font-semibold mb-3 text-gray-100">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-extrabold text-gray-100 leading-tight">
            Let’s Build Something Amazing Together!
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Have questions or want to contribute? Connect with our team and explore endless possibilities.
          </p>
          <div className="mt-8">
            <Link
              to="/about"
              className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white font-semibold text-lg rounded-lg shadow-lg hover:bg-indigo-700 transition-transform transform hover:scale-105"
            >
              Contact Us
              <ArrowRight className="ml-3 w-6 h-6" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-100">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Anjali Sharma",
                feedback:
                  "ART Finder streamlined my entire research process. I created ads that boosted my ROI by 30%!",
              },
              {
                name: "Rahul Singh",
                feedback:
                  "The actionable insights and easy-to-use dashboard make ad creation so much simpler.",
              },
              {
                name: "Priya Patel",
                feedback:
                  "The tool is a game-changer for marketers. Highly recommend it!",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="p-6 bg-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
              >
                <p className="italic text-gray-300">"{testimonial.feedback}"</p>
                <h4 className="mt-4 font-bold text-indigo-400">- {testimonial.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
