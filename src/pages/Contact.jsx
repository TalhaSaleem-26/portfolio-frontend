import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { FaSpinner } from "react-icons/fa";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    if (!name || !email || !message) {
      setError("Please fill all fields!");
      toast.error("Please fill all fields!");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/api/contact/message`,
        { name, email, message },
        { withCredentials: true }
      );

      setLoading(false);
      toast.success(response.data.message);

      // Clear form fields
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setLoading(false);
      console.error(err.response?.data?.message);
      setError(err.response?.data?.message || "Something went wrong! Please try again.");
      toast.error(err.response?.data?.message || "Something went wrong! Please try again.");
    }
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-gray-100 flex justify-center items-start py-12 px-4">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <div className="order-1 md:order-2 bg-white p-8 rounded-2xl shadow-xl">
          <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center tracking-wide">
            Contact Us
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 rounded-lg shadow-md focus:ring-2 focus:ring-blue-600 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 rounded-lg shadow-md focus:ring-2 focus:ring-blue-600 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Message</label>
              <textarea
                placeholder="Your message here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-3 rounded-lg shadow-md h-36 resize-none focus:ring-2 focus:ring-blue-600 focus:outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full flex items-center justify-center bg-blue-900 hover:bg-blue-800 transition text-white py-3 rounded-lg font-semibold tracking-wide shadow-md ${
                loading ? "cursor-not-allowed opacity-70" : ""
              }`}
            >
              {loading && <FaSpinner className="animate-spin mr-2" />}
              {loading ? "Submitting..." : "Submit"}
            </button>

            {/* Inline error message */}
            {error && (
              <p className="text-red-600 text-sm mt-2 text-center font-medium">{error}</p>
            )}
          </form>
        </div>

        {/* Contact Info Section */}
        <div className="order-2 md:order-1 bg-white p-8 rounded-2xl shadow-xl">
          <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center tracking-wide">
            Get In Touch
          </h2>

          <div className="space-y-6">
            <div className="p-5 bg-gray-50 rounded-xl shadow-md hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-blue-800 mb-1">Phone Number</h3>
              <p className="text-gray-700">+92 319 5027234</p>
            </div>

            <div className="p-5 bg-gray-50 rounded-xl shadow-md hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-blue-800 mb-1">Email</h3>
              <p className="text-gray-700">cryptoatrader1@gmail.com</p>
              <p className="text-gray-700">aitech323@gmail.com</p>
            </div>

            <div className="p-5 bg-gray-50 rounded-xl shadow-md hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-blue-800 mb-1">Location</h3>
              <p className="text-gray-700">Rawalpindi, Pakistan</p>
            </div>

            <div className="p-5 bg-gray-50 rounded-xl shadow-md hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-blue-800 mb-1">Working Hours</h3>
              <p className="text-gray-700">Monday – Saturday</p>
              <p className="text-gray-700">09:00 AM – 06:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
}
