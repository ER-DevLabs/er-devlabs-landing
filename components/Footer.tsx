"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const FOOTER_LINKS = {
  Products: ["CRM Platform", "Automation Builder", "Internal Tools", "Infrastructure"],
  Services: ["Custom Development", "System Architecture", "API Integration", "Consulting"],
  Company: ["About", "Engineering Blog", "Careers", "Contact"],
  Legal: ["Privacy Policy", "Terms of Service", "Security", "SLA"],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-[#1a2332] overflow-hidden">
      <div className="absolute inset-0 grid-dots opacity-20" />

      <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-8">
        {/* Top section */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-10 mb-14">
          {/* Brand column */}
          <div className="col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-5">
              <div className="flex items-center justify-center w-7 h-7 rounded-md bg-blue-600 ring-1 ring-blue-500/30">
                <svg viewBox="0 0 18 18" fill="none" className="w-4 h-4">
                  <rect x="2" y="3" width="5" height="1.8" rx="0.5" fill="white" fillOpacity="0.9" />
                  <rect x="2" y="6.8" width="7" height="1.8" rx="0.5" fill="white" fillOpacity="0.9" />
                  <rect x="2" y="10.6" width="5" height="1.8" rx="0.5" fill="white" fillOpacity="0.9" />
                  <rect x="12" y="3" width="4" height="9.4" rx="0.5" fill="white" fillOpacity="0.55" />
                </svg>
              </div>
              <span className="text-sm font-semibold text-white">ER DevLabs</span>
            </div>
            <p className="text-[13px] text-[#3d5165] leading-relaxed max-w-[220px] mb-6">
              Engineering operational software for companies that need systems built to last.
            </p>
            {/* Status */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[#1a2332] bg-[#0a1018]">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span className="text-[10px] font-mono text-[#2d3f54]">
                All systems operational
              </span>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([group, links]) => (
            <div key={group}>
              <h4 className="text-[10px] font-mono text-[#2d3f54] uppercase tracking-[0.14em] mb-4">
                {group}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-[13px] text-[#3d5165] hover:text-[#64748b] transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="section-divider mb-6" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-4 text-[11px] font-mono text-[#2d3f54]">
            <span>© 2025 ER DevLabs</span>
            <span className="text-[#1a2332]">·</span>
            <span>Built with Next.js · Tailwind · Framer Motion</span>
            <span className="text-[#1a2332]">·</span>
            <span className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-emerald-500/60" />
              v2.1.0
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-[#2d3f54] hover:text-[#3d5165] transition-colors">
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.341-3.369-1.341-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .267.18.578.688.48C17.137 18.163 20 14.418 20 10c0-5.523-4.477-10-10-10z" />
              </svg>
            </Link>
            <Link href="#" className="text-[#2d3f54] hover:text-[#3d5165] transition-colors">
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.389 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.779 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
