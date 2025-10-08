'use client'; 

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Detect active section
      const sections = ['home', 'about', 'education', 'experience', 'works', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Projects', href: '#works', id: 'works' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-slate-900/95 backdrop-blur-lg shadow-lg shadow-pink-500/10' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo Section */}
            <Link href="#home" className="flex-shrink-0 flex items-center group" onClick={handleLinkClick}>
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur opacity-0 group-hover:opacity-75 transition duration-500"></div>
                <Image 
                  className="relative  transform group-hover:scale-110 transition-transform duration-300" 
                  src="/vercel.svg" 
                  alt="Logo" 
                  width={20} 
                  height={20} 
                />
              </div>
              <span className="ml-3 text-xl font-bold text-white drop-shadow-lg group-hover:text-pink-300 transition-all duration-300">
                Nontagrich
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-1">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  onClick={handleLinkClick}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group ${
                    activeSection === link.id
                      ? 'text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {/* Active indicator background */}
                  {activeSection === link.id && (
                    <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg"></span>
                  )}
                  
                  {/* Hover effect */}
                  <span className="absolute inset-0 bg-white/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  
                  {/* Text */}
                  <span className="relative z-10">{link.name}</span>
                  
                  {/* Underline animation */}
                  <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-300 ${
                    activeSection === link.id ? 'w-0' : 'w-0 group-hover:w-3/4'
                  }`}></span>
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button 
                type="button" 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="relative inline-flex items-center justify-center p-2 rounded-lg text-white hover:bg-white/10 focus:outline-none transition-all duration-300 group" 
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                <div className="relative w-6 h-6">
                  {/* Animated hamburger icon */}
                  <span className={`absolute left-0 top-1 h-0.5 w-6 bg-white transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                  <span className={`absolute left-0 top-1/2 -translate-y-1/2 h-0.5 bg-white transform transition-all duration-300 ${isMenuOpen ? 'w-0 opacity-0' : 'w-6 opacity-100'}`}></span>
                  <span className={`absolute left-0 bottom-1 h-0.5 w-6 bg-white transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu with smooth animation */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-4 pt-2 pb-4 space-y-2 bg-slate-900/95 backdrop-blur-lg border-t border-white/10">
            {navLinks.map((link, index) => (
              <Link 
                key={link.name} 
                href={link.href}
                onClick={handleLinkClick}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 transform ${
                  activeSection === link.id
                    ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg scale-105'
                    : 'text-gray-300 hover:bg-white/10 hover:text-white hover:translate-x-2'
                }`}
                style={{
                  transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms'
                }}
              >
                <span className="flex items-center gap-2">
                  {activeSection === link.id && (
                    <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                  )}
                  {link.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Navbar;