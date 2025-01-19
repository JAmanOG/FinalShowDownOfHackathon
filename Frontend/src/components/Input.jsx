import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserInputForm = () => {
  const [userInput, setUserInput] = useState("");
  const [selectedOption, setSelectedOption] = useState("Reddit");
  const navigate = useNavigate();

  const handleSend = () => {
    console.log("Input:", userInput);
    console.log("Selected Option:", selectedOption);
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Input Form</h2>
        <div className="mb-4">
          <label htmlFor="userInput" className="block text-gray-600 font-medium mb-2">
            Enter Your Input
          </label>
          <input
            type="text"
            id="userInput"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Type here..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="dropdown" className="block text-gray-600 font-medium mb-2">
            Select Platform
          </label>
          <select
            id="dropdown"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Reddit">Reddit</option>
            <option value="Google Trends">Google Trends</option>
            <option value="Quora">Quora</option>
            <option value="YouTube">YouTube</option>
          </select>
        </div>

        <button
          onClick={handleSend}
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg shadow hover:bg-blue-700 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default UserInputForm;
