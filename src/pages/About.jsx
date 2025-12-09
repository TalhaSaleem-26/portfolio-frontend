// About.jsx
import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiTypescript,
  SiNextdotjs,
  SiKotlin,
  SiCplusplus,
} from "react-icons/si";

function About() {
  const skills = [
    {
      name: "HTML",
      icon: <SiHtml5 className="text-red-600 w-12 h-12 mx-auto" />,
      description: "Structuring content with semantic HTML5 and accessible pages.",
    },
    {
      name: "CSS",
      icon: <SiCss3 className="text-blue-600 w-12 h-12 mx-auto" />,
      description: "Familiar with modern styling, responsive layouts, and university projects.",
    },
    {
      name: "JavaScript",
      icon: <SiJavascript className="text-yellow-400 w-12 h-12 mx-auto" />,
      description: "Building interactive web applications with dynamic behavior.",
    },
    {
      name: "React.js",
      icon: <SiReact className="text-blue-400 w-12 h-12 mx-auto" />,
      description: "Component-based frontend development for scalable applications.",
    },
    {
      name: "Node.js",
      icon: <SiNodedotjs className="text-green-600 w-12 h-12 mx-auto" />,
      description: "Server-side JavaScript for backend APIs and application logic.",
    },
    {
      name: "Express.js",
      icon: <SiExpress className="text-gray-700 w-12 h-12 mx-auto" />,
      description: "Creating RESTful APIs and handling server-side logic efficiently.",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-green-500 w-12 h-12 mx-auto" />,
      description: "NoSQL database for storing and managing application data.",
    },
    {
      name: "SQL",
      icon: <SiMysql className="text-blue-700 w-12 h-12 mx-auto" />,
      description: "Managing structured relational data and performing queries.",
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="text-blue-600 w-12 h-12 mx-auto" />,
      description: "Type-safe JavaScript for more reliable and maintainable code.",
    },
    {
      name: "Next.js (Learning)",
      icon: <SiNextdotjs className="text-black w-12 h-12 mx-auto" />,
      description: "Learning server-side rendering, static site generation, and advanced React features.",
    },
    {
      name: "Kotlin",
      icon: <SiKotlin className="text-purple-600 w-12 h-12 mx-auto" />,
      description: "Familiar with Kotlin basics through university coursework.",
    },
    {
      name: "C++",
      icon: <SiCplusplus className="text-blue-700 w-12 h-12 mx-auto" />,
      description: "Problem-solving and high-performance programming learned academically.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 lg:px-12 py-20 bg-linear-to-r from-indigo-500 to-purple-500 text-white">
        <h1 className="text-5xl lg:text-6xl font-bold mb-4">About Me</h1>
        <p className="text-lg lg:text-xl max-w-2xl">
          I’m a full-stack web developer specializing in the MERN stack.  
          I’m currently learning Next.js and TypeScript.  
          I also have academic experience with Kotlin and C++, and I enjoy building clean, responsive, and efficient web applications.
        </p>
      </section>

      {/* Skills & Learning Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
          My Skills & Tech Stack
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="bg-white shadow-lg rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300"
            >
              {skill.icon}
              <h3 className="mt-4 text-gray-800 font-semibold text-lg">{skill.name}</h3>
              <p className="mt-2 text-gray-600 text-sm">{skill.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default About;
