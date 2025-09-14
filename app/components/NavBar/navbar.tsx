"use client";
import React, { useState, useEffect } from "react";

export const Navbar = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setActive(true);
      } else {
        setActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-transparent backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-0 py-4 flex items-center justify-between">
        
        {/* Kiri - Logo */}
        <h1
          className={`text-2xl font-bold bg-white text-black px-4 py-2 
          rounded-lg shadow-md
          md:bg-transparent md:text-white md:shadow-none
          md:block ${active ? "hidden" : "block"}`}
        >
          Portfolio
        </h1>

        {/* Tengah - Menu Navigasi */}
        <ul
          className={`menu text-white flex items-center sm:gap-10 gap-4
            md:static fixed left-1/2 -translate-x-1/2 md:-translate-x-0 md:opacity-100 md:top-0
             duration-300 bg-white/30 backdrop-blur-md p-4 rounded-br-2xl rounded-bl-2xl
            md:bg-transparent transition-all md:transition-none
            ${active ? "top-0 opacity-100" : "-top-10 opacity-0"}`}
        >
          <li>
            <a href="#home" className="sm:text-lg text-base font-medium hover:text-purple-400 transition-colors">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="sm:text-lg text-base font-medium hover:text-purple-400 transition-colors">
              About
            </a>
          </li>
          <li>
            <a href="#project" className="sm:text-lg text-base font-medium hover:text-purple-400 transition-colors">
              Project
            </a>
          </li>
          <li>
            <a href="#contact" className="sm:text-lg text-base font-medium hover:text-purple-400 transition-colors">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
