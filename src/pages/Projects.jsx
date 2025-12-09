// components/Projects.js
import React from "react";

const projects = [
  {
    title: "Restaurant Management System",
    type: "Internship Project",
    description:
      "Developed a robust backend with some frontend functionality to streamline restaurant operations including menu management, order tracking, and billing. Built during internship, demonstrating real-world backend skills.",
    tech: "Node.js , Express , MongoDB, HTML/CSS",
  },
  {
    title: "Food Delivery Website",
    type: "In Progress – Full MERN Stack",
    description:
      "Building a scalable, full-stack MERN application for seamless online food ordering and delivery. Key features: user-friendly interface, real-time order tracking, secure payment integration, and admin dashboard for restaurants.",
    tech: "MongoDB, Express.js, React, Node.js",
  },
  {
    title: "Simple Todo App",
    type: "Backend + Frontend",
    description:
      "A basic todo application demonstrating CRUD operations with backend support. Useful for learning REST APIs and frontend-backend integration.",
    tech: "Node.js, Express, MongoDB, React",
  },
  {
    title: "URL Shortening Service",
    type: "Backend Project",
    description:
      "A lightweight URL shortener to convert long URLs into short, easy-to-share links with backend analytics.",
    tech: "Node.js, Express, MongoDB",
  },
  {
    title: "Event Registration System",
    type: "Backend Project",
    description:
      "Developed a backend for managing event registrations including participant details, email notifications, and registration status.",
    tech: "Node.js, Express, MongoDB",
  },
];

const Projects = () => {
  return (
    <section className="projects-section py-16 px-8 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-shadow duration-300"
          >
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <span className="text-sm text-gray-500 mb-4 block">{project.type}</span>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <p className="text-sm font-medium text-gray-600">
              <span className="font-bold">Technologies:</span> {project.tech}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
