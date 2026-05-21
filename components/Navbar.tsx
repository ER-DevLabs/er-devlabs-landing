"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Products", href: "#" },
  { label: "Services", href: "#services" },
  { label: "Engineering", href: "#engineering" },
  { label: "About", href: "#" },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const borderOpacity = useTransform(scrollY, [0, 80], [0, 1]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <motion.div
        style={{ borderBottomColor: `rgba(26,35,50,${borderOpacity})` }}
        className="border-b border-transparent bg-[#070a0f]/80 backdrop-blur-md"
      >
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-7 h-7 rounded-md bg-blue-600 ring-1 ring-blue-500/30 shrink-0">
              <svg
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
              >
                <rect x="2" y="3" width="5" height="1.8" rx="0.5" fill="white" fillOpacity="0.9" />
                <rect x="2" y="6.8" width="7" height="1.8" rx="0.5" fill="white" fillOpacity="0.9" />
                <rect x="2" y="10.6" width="5" height="1.8" rx="0.5" fill="white" fillOpacity="0.9" />
                <rect x="12" y="3" width="4" height="9.4" rx="0.5" fill="white" fillOpacity="0.55" />
              </svg>
            </div>
            <span className="text-sm font-semibold text-white tracking-tight">
              ER DevLabs
            </span>
            <span className="hidden sm:inline-flex items-center text-[10px] font-mono text-[#3b5170] border border-[#1a2332] rounded px-1.5 py-0.5 tracking-widest">
              SYS/2.1
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-0.5">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-3 py-1.5 text-sm text-[#5a7191] hover:text-[#f1f5f9] hover:bg-[#1a2332]/60 rounded-md transition-all duration-150"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Link
              href="#"
              className="hidden sm:block px-3 py-1.5 text-sm text-[#5a7191] hover:text-[#94a3b8] transition-colors"
            >
              Contact
            </Link>
            <Link
              href="#"
              className="flex items-center gap-1.5 px-4 py-1.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors ring-1 ring-blue-500/20 shadow-lg shadow-blue-900/20"
            >
              Start a Project
              <svg
                viewBox="0 0 16 16"
                fill="none"
                className="w-3.5 h-3.5"
              >
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.header>
  );
}
