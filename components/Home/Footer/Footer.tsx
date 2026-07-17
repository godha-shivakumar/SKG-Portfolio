"use client";

import { SiGithub } from "react-icons/si";
import { FiMail } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative bg-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-amber-50/30 to-white" />

      <div className="relative max-w-6xl px-2 mx-auto py-10 md:py-8  md:px-2  backdrop-blur-xl">
        {/* Top */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Brand */}
          <div className="text-center md:text-left">
            <Image
              src="/assets/images/SKG_Logo.avif"
              alt="SKG - Frontend Engineer"
              width={70}
              height={70}
              className="object-contain"
            />

            <p className="text-sm text-neutral-500 mt-2">
              Building modern web experiences with clean design and scalable
              code.
            </p>
          </div>

          {/* Socials Icons*/}

          <div className="flex items-center gap-6">
            {/* LinkedIn */}
            <a
              href="https://in.linkedin.com/in/shivakumar-godha"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              title="LinkedIn"
              className="group transition-transform duration-300 hover:scale-105"
            >
              <div
                className="p-3 rounded-xl bg-white shadow-sm border border-neutral-200 
                 transition-all duration-300 group-hover:shadow-md group-hover:border-amber-200"
              >
                <FaLinkedin
                  aria-hidden="true"
                  className="w-5 h-5 text-neutral-600 group-hover:text-[#0A66C2] transition-colors"
                />
              </div>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/godha-shivakumar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              title="GitHub"
              className="group transition-transform duration-300 hover:scale-105"
            >
              <div
                className="p-3 rounded-xl bg-white shadow-sm border border-neutral-200 
                 transition-all duration-300 group-hover:shadow-md group-hover:border-amber-200"
              >
                <SiGithub
                  aria-hidden="true"
                  className="w-5 h-5 text-neutral-600 group-hover:text-black transition-colors"
                />
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:shivakumar.godha1@gmail.com"
              aria-label="Send email"
              title="Email"
              className="group transition-transform duration-300 hover:scale-105"
            >
              <div
                className="p-3 rounded-xl bg-white shadow-sm border border-neutral-200 
                 transition-all duration-300 group-hover:shadow-md group-hover:border-amber-200"
              >
                <FiMail
                  aria-hidden="true"
                  className="w-5 h-5 text-neutral-600 group-hover:text-black transition-colors"
                />
              </div>
            </a>
          </div>
        </div>

        {/* Divider */}

        <div className="my-12 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
          <p>© {new Date().getFullYear()} SKG. All rights reserved.</p>
          <p className="opacity-70">
            Built with ❤️ using Next.js, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
