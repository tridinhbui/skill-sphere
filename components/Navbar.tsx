"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold text-primary-600">
              SkillSphere
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="#problem"
                className="text-gray-700 hover:text-primary-600 transition-colors px-3 py-2 text-sm font-medium"
              >
                Problem
              </a>
              <a
                href="#solution"
                className="text-gray-700 hover:text-primary-600 transition-colors px-3 py-2 text-sm font-medium"
              >
                Solution
              </a>
              <a
                href="#resources"
                className="text-gray-700 hover:text-primary-600 transition-colors px-3 py-2 text-sm font-medium"
              >
                Resources
              </a>
              <a
                href="#quiz"
                className="text-gray-700 hover:text-primary-600 transition-colors px-3 py-2 text-sm font-medium"
              >
                Quiz
              </a>
              <a
                href="#circular-model"
                className="text-gray-700 hover:text-primary-600 transition-colors px-3 py-2 text-sm font-medium"
              >
                Circular Model
              </a>
              <a
                href="#blog"
                className="text-gray-700 hover:text-primary-600 transition-colors px-3 py-2 text-sm font-medium"
              >
                Blog
              </a>
              <a
                href="#team"
                className="text-gray-700 hover:text-primary-600 transition-colors px-3 py-2 text-sm font-medium"
              >
                Team
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-primary-600 transition-colors px-3 py-2 text-sm font-medium"
              >
                Contact
              </a>
              <a
                href="#resources"
                className="bg-primary-600 text-white hover:bg-primary-700 transition-colors px-6 py-2 rounded-full text-sm font-medium"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

