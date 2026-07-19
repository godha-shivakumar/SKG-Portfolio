"use client";

import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import Image from "next/image";
import Link from "next/link";

// Parent animation configuration
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

// Child animation configuration
const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// Button interaction animation
const buttonAnimation = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.97 },
};

// Hero highlight points
const highlights = [
  {
    icon: "⚡",
    text: "90+ Lighthouse",
  },
  {
    icon: "🚀",
    text: "Production Ready",
  },
  {
    icon: "🧩",
    text: "Clean Code",
  },
];

const Hero: React.FC = () => {
  return (
    <section className="relative flex min-h-screen items-center pt-16 overflow-hidden bg-[#F8FAFC] px-5 pb-8 text-[#0F172A] sm:px-8 sm:pt-16 md:px-16 lg:px-20 md:pt-16 md:py-0 lg:pb-8">
      {/* Hero Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#F8FAFC]" />

        {/* Decorative Gradient Glow */}
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-purple-200/20 blur-[100px]" />
      </div>

      {/* Hero Main Container */}
      <div className="relative w-[97%] lg:w-[100%] mx-auto z-10">
        {/* Hero Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-10 items-center">
          {/* Hero Left Content */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-5xl mx-auto lg:mx-0 text-center lg:text-left"
          >
            {/* Developer Badge */}
            <motion.div
              variants={item}
              className="mb-6 inline-flex items-center px-4 py-1.5 rounded-full border border-gray-200 bg-white md:text-sm text-slate-600 shadow-sm"
            >
              Shiva Kumar Godha • Frontend Engineer
            </motion.div>

            {/* Hero Main Heading */}
            <motion.h1
              variants={item}
              className="max-w-3xl text-[38px] sm:text-[34px] md:text-[45px] lg:text-[42px] font-bold leading-[1.08] mb-6"
            >
              I build{" "}
              <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
                fast & scalable
              </span>{" "}
              web applications with React & Next.js.
            </motion.h1>

            {/* Hero Description */}
            <motion.p
              variants={item}
              className="max-w-lg text-base sm:text-[17px] leading-6 sm:leading-7 text-slate-600 mb-7 mx-auto lg:mx-0"
            >
              I specialize in building production-ready applications using
              React, Next.js, and TypeScript, focusing on performance,
              scalability, clean architecture, and exceptional user experiences.
            </motion.p>

            {/* Performance Highlight Cards */}
            <motion.div
              variants={item}
              className="flex flex-wrap gap-3 mb-8 sm:flex-nowrap sm:gap-3 justify-center lg:justify-start"
            >
              {highlights.map((item) => (
                <motion.div
                  key={item.text}
                  whileHover={{
                    y: -3,
                    scale: 1.03,
                  }}
                  className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm hover:shadow-lg transition-all"
                >
                  <span>{item.icon}</span>

                  <span className="text-sm font-medium text-slate-700">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Hero Action Buttons */}
            <motion.div
              variants={item}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              {/* Project Button */}
              <Link
                href="#projects"
                className="inline-block rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <motion.span
                  {...buttonAnimation}
                  className="group flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 px-7 py-3 font-medium text-white shadow-md transition duration-300 hover:shadow-indigo-300/40"
                >
                  View Projects
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="transition duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </motion.span>
              </Link>

              {/* Contact Button */}
              <Link
                href="#contact"
                className="inline-block rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <motion.span
                  {...buttonAnimation}
                  className="flex items-center justify-center rounded-xl border border-gray-300 bg-white px-7 py-3 font-medium text-gray-800 transition duration-300 hover:bg-gray-100"
                >
                  Let's Connect
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Hero Right Profile Section */}
          <div className="flex justify-center lg:justify-end">
            {/* Floating Profile Animation */}
            <motion.div
              animate={{
                rotate: [-0.5, 0.5, -0.5],
                y: [-6, 6, -6],
                scale: [1, 1.01, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{ willChange: "transform" }}
            >
              {/* 3D Tilt Profile Card */}
              <Tilt
                tiltMaxAngleX={6}
                tiltMaxAngleY={6}
                scale={1.02}
                transitionSpeed={1200}
              >
                {/* Profile Image Card */}
                <motion.div
                  whileHover={{ scale: 1.02, rotateX: 2, rotateY: -2, y: -6 }}
                  transition={{ duration: 0.5 }}
                  className="relative w-[280px] overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-[0_30px_80px_rgba(99,102,241,0.15)] md:w-[360px]"
                >
                  {/* Profile Card Glow */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-indigo-200 to-purple-200 opacity-30 blur-2xl" />

                  {/* Profile Image */}
                  <Image
                    src="/assets/images/Shiva_Kumar_Godha.avif"
                    alt="Shiva Kumar Godha - Frontend Engineer"
                    width={320}
                    height={427}
                    priority
                    fetchPriority="high"
                    quality={75}
                    sizes="(max-width:640px) 240px, (max-width:1024px) 300px, 320px"
                    className="relative h-full w-full object-cover"
                  />

                  {/* Availability Status */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs shadow-sm">
                    <span className="h-2.5 w-2.5 rounded-full animate-pulse bg-green-500 shadow-[0_0_8px_#22c55e]" />
                    Open to Work
                  </div>
                </motion.div>
              </Tilt>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
