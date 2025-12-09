// Home.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact");
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center grow px-6 lg:px-12 py-24 bg-linear-to-r from-indigo-500 to-purple-600 text-white">
        <h1 className="text-5xl lg:text-6xl font-bold mb-4">
          Hi, I’m Muhammad Talha Saleem
        </h1>
        <p className="text-lg lg:text-xl mb-6 max-w-2xl">
          A passionate Full-Stack MERN Developer learning Next.js with TypeScript.  
          Skilled in building high-performance, responsive web applications.  
          Experienced in C++, Kotlin, and creating clean, scalable, and professional code.
        </p>
        <p className="text-md lg:text-lg mb-8 max-w-2xl italic text-indigo-200">
          Turning ideas into functional, beautiful, and modern web experiences.
        </p>
        <button
          onClick={handleClick}
          className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-indigo-100 transition-all duration-300"
        >
          Contact Me
        </button>
      </section>

      {/* Skills / Features Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300">
          <h3 className="text-xl font-semibold mb-2">Full-Stack MERN</h3>
          <p className="text-gray-600">
            Building dynamic, scalable web applications using MongoDB, Express, React, and Node.js.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300">
          <h3 className="text-xl font-semibold mb-2">Next.js & TypeScript</h3>
          <p className="text-gray-600">
            Developing modern, SEO-friendly applications with server-side rendering, API routes, and TypeScript.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300">
          <h3 className="text-xl font-semibold mb-2">Clean & Scalable Code</h3>
          <p className="text-gray-600">
            Writing maintainable, readable, and efficient code in JavaScript, C++, and Kotlin.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300">
          <h3 className="text-xl font-semibold mb-2">Responsive Design</h3>
          <p className="text-gray-600">
            Creating visually appealing UI/UX that works seamlessly on all devices.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300">
          <h3 className="text-xl font-semibold mb-2">Problem Solving</h3>
          <p className="text-gray-600">
            Strong algorithm and logic skills, capable of solving complex problems efficiently.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300">
          <h3 className="text-xl font-semibold mb-2">Continuous Learning</h3>
          <p className="text-gray-600">
            Passionate about learning new technologies and improving skills in modern web development.
          </p>
        </div>
      </section>

      <ToastContainer />
    </div>
  );
}

export default Home;
