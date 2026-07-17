"use client";

import { NavLinks } from "@/constants/constants";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { CgClose } from "react-icons/cg";
import { motion, AnimatePresence } from "framer-motion";

import { useScrollSpy } from "@/hooks/useScrollSpy";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

export default function MobileNav({ showNav, closeNav }: Props) {
  const pathname = usePathname();
  const panelRef = useRef<HTMLDivElement>(null);
  const activeSection = useScrollSpy(NavLinks);

  useEffect(() => {
    if (!showNav) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeNav();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [showNav, closeNav]);

  useEffect(() => {
    if (!showNav) return;
    const handleResize = () => {
      if (window.innerWidth >= 1024) closeNav();
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [showNav, closeNav]);

  const isActiveLink = (url: string) =>
    activeSection === url || pathname === url;

  return (
    <AnimatePresence>
      {showNav && (
        <>
          {/* BACKDROP */}
          <motion.div
            className="fixed inset-0 z-[1000] bg-gray-600/20 backdrop-blur-sm"
            onClick={closeNav}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* PANEL */}
          <motion.aside
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            className="fixed top-0 right-0 h-full w-[85%] sm:w-[60%] md:w-[38%]
             bg-[#F9F9F9] border-l border-gray-300
             shadow-[0_12px_48px_rgba(0,0,0,0.1)]
             z-[1001] flex flex-col"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 280, damping: 30 }}
          >
            {/* HEADER */}
            <div className="relative flex items-center justify-between px-5 py-4">
              {/* Logo */}
              <span className="flex items-center tracking-widest select-none">
                <img
                  src="/assets/images/SKG_logo_Mobile_menu.png"
                  alt="SKG_logo"
                  className="w-[136px] h-20"
                />
              </span>

              {/* Bottom border line */}
              <span className="absolute left-0 right-0 bottom-0 -translate-y-2 h-0.5 bg-gray-200"></span>

              {/* Close button */}
              <button
                aria-label="Close menu"
                onClick={closeNav}
                className="w-10 h-10 flex items-center justify-center rounded-full
                           bg-white border border-gray-300 hover:border-gray-400
                           hover:bg-gray-100 shadow-sm focus:outline-none focus:ring-2
                           focus:ring-offset-2 focus:ring-[#0288D1] transition-all duration-200 ease-in-out"
              >
                <CgClose className="w-5 h-5 text-gray-700 cursor-pointer" />
              </button>
            </div>

            {/* NAV */}
            <nav className="flex flex-col flex-1 pt-8 px-8 space-y-5">
              {NavLinks.map((link) => {
                const isActive = isActiveLink(link.url);

                return (
                  <Link
                    key={link.id}
                    href={link.url}
                    onClick={closeNav}
                    className={`relative block text-[clamp(18px,2.3vw,30px)] tracking-tight font-semibold transition-all duration-300 transform hover:translate-x-1
                        after:content-[''] after:absolute after:left-0 after:-bottom-1
                        after:h-[2px] after:bg-[#0288D1] after:transition-all
                        ${
                          isActive
                            ? "text-[#0288D1] after:w-full"
                            : "text-[#696969] hover:text-[#2563EB] after:w-0"
                        }`}
                  >
                    {link.label}

                    {isActive && (
                      <span className="absolute -left-5 top-1/2 -translate-y-1/2 h-6 w-1 rounded-full bg-[#0288D1]" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* FOOTER */}
            <div className="px-8 pb-6 text-[0.7rem] text-gray-500 tracking-wider font-light select-none text-right">
              © 2026 Shiva Kumar Godha — Frontend Developer & React.js Engineer
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
