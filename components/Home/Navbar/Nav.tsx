"use client";

import { NavLinks } from "@/constants/constants";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BiDownload } from "react-icons/bi";
import { HiBars3BottomRight } from "react-icons/hi2";
import Image from "next/image";

type Props = {
  openNav?: () => void;
};

const Nav = ({ openNav }: Props) => {
  // Navigation background state based on scroll position
  const [navBg, setNavBg] = useState(false);

  // Dark mode state management
  const [darkMode, setDarkMode] = useState(false);

  // Update navbar style when scrolling
  useEffect(() => {
    const handleScroll = () => {
      setNavBg(window.scrollY >= 70);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle application dark mode theme
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);

    if (!darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div
      className={`fixed z-50 h-[70px] w-full transition-all duration-300 ${
        navBg
          ? "bg-white/90 backdrop-blur-md shadow-md"
          : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      {/* Navigation Container */}
      <div className="flex items-center h-full justify-between w-[95%] mx-auto">
        {/* Brand Logo */}
        <div className="flex items-center">
          <button
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            aria-label="Go to homepage"
          >
            <Image
              src="/assets/images/SKG_Logo.png"
              alt="SKG Logo"
              width={130}
              height={70}
              className="object-contain cursor-pointer"
            />
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex flex-1 justify-center items-center gap-11">
          {NavLinks.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className="relative text-[#696969] font-semibold text-[16px] caret-transparent select-none hover:text-[#3B3B3B] after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-blue-600 after:left-0 after:-bottom-1 after:transition-all hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Navigation Actions */}
        <div className="flex items-center gap-4">
          {/* Dark Mode Toggle */}
          <div className="flex items-center">
            <Image
              src="/assets/images/lightmode_toggle.png"
              alt="Toggle dark mode"
              width={80}
              height={50}
              onClick={toggleDarkMode}
              className="object-cover cursor-pointer"
            />
          </div>

          {/* Resume Download Button */}
          <a
            href="/assets/resume/Shiva_Kumar_Godha_Web_UI_Developer_Resume.pdf"
            download
            className="hidden md:flex px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white items-center gap-2 shadow-md"
          >
            <BiDownload aria-hidden="true" />
            <span>Download CV</span>
          </a>

          {/* Mobile Navigation Trigger */}
          <HiBars3BottomRight
            onClick={() => openNav?.()}
            className="h-8 w-8 text-gray-700 dark:text-gray-200 cursor-pointer lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
