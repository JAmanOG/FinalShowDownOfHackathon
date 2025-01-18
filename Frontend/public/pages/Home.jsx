import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";

const Home = () => {
  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Automate Ad Creation with ART Finder
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
            Discover user pain points, analyze competitor strategies, and
            generate actionable insights to create the most engaging ads
            effortlessly.
          </p>
          <div className="mt-8">
            <Link
              to="/dashboard"
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-100 transition"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            Why Choose ART Finder?
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
                className="p-6 border border-gray-200 rounded-lg shadow hover:shadow-lg transition"
              >
                <CheckCircle className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Let’s Collaborate and Build Together!
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Have questions or want to contribute? Reach out to our team and
            explore the possibilities of ART Finder.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
            >
              Contact Us
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
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
                className="p-6 bg-gray-100 rounded-lg shadow hover:shadow-lg transition"
              >
                <p className="italic text-gray-700">"{testimonial.feedback}"</p>
                <h4 className="mt-4 font-bold text-gray-800">
                  - {testimonial.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
