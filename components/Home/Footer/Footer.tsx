"use client";

import { SiGithub } from "react-icons/si";
import { FiMail } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative bg-white overflow-hidden">
      {/* Footer Background Decorative Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-amber-50/30 to-white" />
      {/* Footer Main Container */}
      <div className=" relative w-[90%] lg:w-[95%] mx-auto  px-2 py-10 md:py-8  md:px-2  backdrop-blur-xl">
        {/* Footer Top Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Brand Information */}
          <div className="text-center md:text-left">
            {/* Brand Logo */}
            <div className="flex justify-center md:justify-start">
              <Image
                src="/assets/images/SKG_Logo.png"
                alt="SKG - Frontend Engineer"
                width={70}
                height={70}
                className="object-contain"
              />
            </div>
            {/* Brand Description */}
            <p className="text-sm text-neutral-500 mt-2 max-w-sm">
              Building modern web experiences with clean design and scalable
              code.
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex items-center gap-6">
            {/* LinkedIn Profile */}
            <a
              href="https://in.linkedin.com/in/shivakumar-godha"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              title="LinkedIn"
              className="group transition-transform duration-300 hover:scale-105"
            >
              <div
                className="
                          p-3
                          rounded-xl
                          bg-white
                          shadow-sm
                          border
                          border-neutral-200
                          transition-all
                          duration-300
                          group-hover:shadow-md
                          group-hover:border-amber-200
                          "
              >
                <FaLinkedin
                  aria-hidden="true"
                  className="w-5 h-5 text-neutral-600 group-hover:text-[#0A66C2] transition-colors"
                />
              </div>
            </a>

            {/* GitHub Profile */}
            <a
              href="https://github.com/godha-shivakumar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              title="GitHub"
              className="group transition-transform duration-300 hover:scale-105"
            >
              <div
                className="
                          p-3
                          rounded-xl
                          bg-white
                          shadow-sm
                          border
                          border-neutral-200
                          transition-all
                          duration-300
                          group-hover:shadow-md
                          group-hover:border-amber-200
                         "
              >
                <SiGithub
                  aria-hidden="true"
                  className="w-5 h-5 text-neutral-600 group-hover:text-black transition-colors"
                />
              </div>
            </a>

            {/* Email Contact */}
            <a
              href="mailto:shivakumar.godha1@gmail.com"
              aria-label="Send email"
              title="Email"
              className="group transition-transform duration-300 hover:scale-105"
            >
              <div
                className="
                          p-3
                          rounded-xl
                          bg-white
                          shadow-sm
                          border
                          border-neutral-200
                          transition-all
                          duration-300
                          group-hover:shadow-md
                          group-hover:border-amber-200
                          "
              >
                <FiMail
                  aria-hidden="true"
                  className="w-5 h-5 text-neutral-600 group-hover:text-black transition-colors"
                />
              </div>
            </a>
          </div>
        </div>

        {/* Footer Divider */}
        <div className="my-12 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />
        {/* Footer Bottom Information */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
          {/* Copyright */}
          <p className="opacity-70">
            © {new Date().getFullYear()} SKG. All rights reserved.
          </p>
          {/* Technology Stack */}
          <p className="opacity-70">
            Built with Next.js • TypeScript • Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
