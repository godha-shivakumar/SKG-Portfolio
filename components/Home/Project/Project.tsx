"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

// Project data structure
type ProjectType = {
  title: string;
  description: string;
  image: string;
  tech: string[];
  live: string;
  github: string;
};

// Featured project collection
const projects: ProjectType[] = [
  {
    title: "E-Commerce Platform",
    description:
      "A modern e-commerce application with authentication, Stripe payments, and responsive UI.",
    image: "/assets/images/Ecomerce.avif",
    tech: ["React", "Tailwind", "Stripe"],
    live: "#",
    github: "#",
  },
  {
    title: "SaaS Dashboard",
    description:
      "Interactive analytics dashboard with charts, authentication, and clean UI.",
    image: "/assets/images/Saas_Dashboard.avif",
    tech: ["Next.js", "TypeScript", "API"],
    live: "#",
    github: "#",
  },
  {
    title: "Luxury Travel App",
    description:
      "Beautiful travel booking interface with API integration and modern animations.",
    image: "/assets/images/luxurytravel_app.avif",
    tech: ["Next.js", "Tailwind", "API"],
    live: "#",
    github: "#",
  },
  {
    title: "SKG Portfolio",
    description:
      "A modern developer portfolio built with responsive design and smooth animations.",
    image: "/assets/images/Creative_portfolio.avif",
    tech: ["React", "Next.js", "TypeScript"],
    live: "https://skg-portfolio.vercel.app/",
    github: "https://github.com/godha-shivakumar/SKG-Portfolio",
  },
];

// Technology badge color mapping
const techColors: Record<string, string> = {
  React: "bg-blue-100 text-blue-700",
  "Next.js": "bg-black text-white",
  Tailwind: "bg-cyan-100 text-cyan-700",
  TypeScript: "bg-blue-100 text-blue-700",
  Stripe: "bg-purple-100 text-purple-700",
  API: "bg-green-100 text-green-700",
  "Chart.js": "bg-orange-100 text-orange-700",
  CSS: "bg-indigo-100 text-indigo-700",
  "Framer Motion": "bg-pink-100 text-pink-700",
};

const Project: React.FC = () => {
  return (
    <section id="projects" className="scroll-mt-12 bg-gray-50 py-16">
      {/* Projects Section Container */}
      <div className="w-[90%] lg:w-[97%] mx-auto">
        {/* Section Heading */}
        <h2 className="text-center text-4xl md:text-5xl font-bold text-gray-900">
          Featured Projects
        </h2>

        {/* Heading Divider */}
        <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"></div>

        {/* Section Description */}
        <p className="mx-auto mt-6 max-w-2xl text-center text-gray-600">
          A selection of projects demonstrating modern frontend development,
          performance optimization, and scalable application architecture.
        </p>

        {/* Project Cards Grid */}
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, index) => (
            // Individual Project Card
            <motion.div
              key={index}
              className="group overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-[0_10px_25px_rgba(0,0,0,0.08)] transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                />
              </div>

              {/* Project Information */}
              <div className="p-6">
                {/* Project Title */}
                <h3 className="text-xl font-bold text-gray-900">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {project.description}
                </p>

                {/* Technology Stack */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        techColors[tech] || "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 mt-5">
                  {/* Live Demo Button */}
                  <motion.a
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} live demo`}
                    className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 px-4 py-2.5 text-sm font-medium text-white shadow-md transition whitespace-nowrap duration-300 hover:shadow-purple-300/40"
                  >
                    <FiExternalLink aria-hidden="true" />
                    Live Demo
                  </motion.a>

                  {/* GitHub Repository Button */}
                  <motion.a
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} GitHub repository`}
                    className="flex-1 flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 transition-all duration-300 hover:bg-gray-100"
                  >
                    <FiGithub aria-hidden="true" />
                    GitHub
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
