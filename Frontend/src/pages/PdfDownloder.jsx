import React, { useState } from "react";
// import { jsPDF } from "jspdf";

const PdfPage = () => {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  // });

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prev) => ({ ...prev, [name]: value }));
  // };

  // const generatePDF = () => {
  //   const doc = new jsPDF();

  //   // Title
  //   doc.setFontSize(20);
  //   doc.text("User Information PDF", 20, 20);

  //   // Content
  //   doc.setFontSize(14);
  //   doc.text(`Name: ${formData.name || "N/A"}`, 20, 40);
  //   doc.text(`Email: ${formData.email || "N/A"}`, 20, 50);
  //   doc.text("Message:", 20, 60);
  //   doc.text(formData.message || "No message provided", 20, 70, {
  //     maxWidth: 170,
  //   });

  //   // Footer
  //   doc.setFontSize(10);
  //   doc.text(`Generated on: ${new Date().toLocaleString()}`, 20, 280);

  //   // Save the PDF
  //   doc.save(`${formData.name || "User"}_Info.pdf`);
  // };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Generate Your PDF
        </h1>

        {/* Form */}
        <form
          // onSubmit={(e) => e.preventDefault()}
          className="space-y-6"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              // value={formData.name}
              // onChange={handleInputChange}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              // value={formData.email}
              // onChange={handleInputChange}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              name="message"
              // value={formData.message}
              // onChange={handleInputChange}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
              placeholder="Enter a message"
              rows="4"
            />
          </div>
          <button
            type="button"
            // onClick={generatePDF}
            className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
          >
            Download PDF
          </button>
        </form>
      </div>
    </div>
  );
};
export default PdfPage;
