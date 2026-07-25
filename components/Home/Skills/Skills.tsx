"use client";

import { motion } from "framer-motion";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiGit,
  SiGithub,
  SiPostman,
  SiVercel,
} from "react-icons/si";
import { FiLink } from "react-icons/fi";

// Skill data configuration:
// Centralized structure makes it easier to add,
// remove, or update technologies without changing UI logic.
const skills = {
  Frontend: [
    {
      name: "Next.js",
      icon: <SiNextdotjs aria-hidden="true" className="text-black text-2xl" />,
    },
    {
      name: "React",
      icon: <SiReact aria-hidden="true" className="text-sky-500 text-2xl" />,
    },
    {
      name: "TypeScript",
      icon: (
        <SiTypescript aria-hidden="true" className="text-blue-600 text-2xl" />
      ),
    },
    {
      name: "Tailwind CSS",
      icon: (
        <SiTailwindcss aria-hidden="true" className="text-cyan-400 text-2xl" />
      ),
    },
  ],

  // Backend technologies used for application development
  // and API/data integration workflows.
  Backend: [
    {
      name: "Node.js",
      icon: (
        <SiNodedotjs aria-hidden="true" className="text-green-600 text-2xl" />
      ),
    },
    {
      name: "APIs",
      icon: <FiLink aria-hidden="true" className="text-purple-500 text-2xl" />,
    },
    {
      name: "MongoDB",
      icon: (
        <SiMongodb aria-hidden="true" className="text-green-500 text-2xl" />
      ),
    },
  ],

  // Development tools and deployment platforms
  // used throughout the development lifecycle.
  Tools: [
    {
      name: "Git",
      icon: <SiGit aria-hidden="true" className="text-orange-500 text-2xl" />,
    },
    {
      name: "GitHub",
      icon: <SiGithub aria-hidden="true" className="text-black text-2xl" />,
    },
    {
      name: "Postman",
      icon: (
        <SiPostman aria-hidden="true" className="text-orange-500 text-2xl" />
      ),
    },
    {
      name: "Vercel",
      icon: <SiVercel aria-hidden="true" className="text-black text-2xl" />,
    },
  ],
};
const Skills = () => {
  return (
    <section
      id="tech-stack"
      className="scroll-mt-12 relative bg-gradient-to-b from-slate-50 via-white to-slate-100 py-16 overflow-hidden "
    >
      {/* Background gradient overlay for visual depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-neutral-100 to-white opacity-70" />
      {/* Decorative background glow elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-indigo-200/20 rounded-full blur-3xl" />

      <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-200/20 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        {/* Section heading */}
        <h2 className="text-center text-4xl md:text-5xl font-bold text-gray-900">
          Tech Stack
        </h2>
        {/* Decorative heading separator */}
        <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"></div>

        {/* Section description */}
        <p className="mx-auto mt-6 max-w-2xl text-center text-gray-600">
          Technologies I use to build fast, scalable, and production-ready
          applications.
        </p>

        {/* Skill categories container */}
        <div className="mt-14 space-y-12">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              {/* Skill category title */}
              <h3 className="text-xl font-bold text-gray-800 mb-6">
                {category}
              </h3>

              {/* Responsive skill card layout */}
              <div className="grid grid-cols-2 gap-4 items-center md:flex md:flex-wrap md:justify-center">
                {items.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.2,
                      delay: index * 0.08,
                    }}
                    whileHover={{
                      y: -3,
                      scale: 1.03,
                    }}
                    whileTap={{ scale: 0.99 }}
                    className="group flex items-center gap-4 px-2 py-4 md:px-6  md:py-4 rounded-2xl 
                      bg-white/70 backdrop-blur-md border border-gray-200 
                      shadow-sm hover:shadow-md
                      transition-shadow duration-150 "
                  >
                    {/* ICON */}

                    <span className="text-lg group-hover:scale-100 transition">
                      {skill.icon}
                    </span>
                    {/* Skill name */}
                    <span className="text-sm font-medium text-gray-800 group-hover:text-black">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
