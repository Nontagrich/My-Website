'use client'; 

import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Typewriter from "@/components/Typewriter";
import Link from "next/link";
import Image from "next/image";
import MailIcon from "@/components/icons/MailIcon";
import GitHubIcon from "@/components/icons/GitHubIcon";
import LinkedInIcon from "@/components/icons/LinkedInIcon";

// --- Data for sections ---
const educationData = [ { year: '2023 - Now', degree: 'Bachelor of Science in Computer Engineering', school: 'King Mongkut\'s University of Technology Thonburi (KMUTT)', }, { year: '2020 - 2023', degree: 'Science-Mathematics Program', school: 'Benjamarachutit Ratchaburi School', }, ];
const experienceData = [ { year: '2024', role: 'Web Developer Intern', company: 'Example Tech Company', description: 'Developed and maintained features for the main web application using React and Next.js. Collaborated with the design team to create responsive user interfaces.', }, ];
const skills = [ 'React', 'Next.js', 'TypeScript', 'JavaScript', 'Node.js', 'Tailwind CSS', 'HTML5', 'CSS3', 'Git', 'Firebase' ];
const worksData = [ { title: 'Project Alpha', description: 'A web application for task management, built with Next.js and Firebase.', image: '/hq720.jpg', tags: ['Next.js', 'Firebase', 'Tailwind CSS'], link: '#', }, { title: 'Loma RaM Ram', description: 'An e-commerce storefront prototype featuring a clean design and smooth animations.', image: '/Loma.jpg', tags: ['React', 'TypeScript', 'CSS Modules'], link: '#', }, { title: 'Think but (Not) Reach', description: 'A data visualization dashboard for tracking real-time metrics.', image: '/Castorice.jpg', tags: ['React', 'D3.js', 'API'], link: '#', }, ];

export default function HomePage() {
  const [isMounted, setIsMounted] = useState(false);
  const [isAboutVisible, setIsAboutVisible] = useState(false);
  const [isEducationVisible, setIsEducationVisible] = useState(false);
  const [isExperienceVisible, setIsExperienceVisible] = useState(false);
  const [isWorksVisible, setIsWorksVisible] = useState(false);
  const [isContactVisible, setIsContactVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const aboutSectionRef = useRef<HTMLDivElement>(null);
  const educationSectionRef = useRef<HTMLDivElement>(null);
  const experienceSectionRef = useRef<HTMLDivElement>(null);
  const worksSectionRef = useRef<HTMLDivElement>(null);
  const contactSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.id === 'about') setIsAboutVisible(true);
          if (entry.target.id === 'education') setIsEducationVisible(true);
          if (entry.target.id === 'experience') setIsExperienceVisible(true);
          if (entry.target.id === 'works') setIsWorksVisible(true);
          if (entry.target.id === 'contact') setIsContactVisible(true);
          observer.unobserve(entry.target);
        }
      });
    };
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const refs = [aboutSectionRef, educationSectionRef, experienceSectionRef, worksSectionRef, contactSectionRef];
    refs.forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });
    return () => {
      refs.forEach(ref => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden">
        {/* Hero Section with Parallax Effect */}
        <section id="home" className="relative bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-700 h-screen flex items-center justify-center overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" style={{ top: '10%', left: '10%' }}></div>
            <div className="absolute w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" style={{ top: '50%', right: '10%' }}></div>
            <div className="absolute w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" style={{ bottom: '10%', left: '30%' }}></div>
          </div>

          {/* Floating Particles */}
          {isMounted && (
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-white rounded-full opacity-30 animate-float"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 5}s`,
                    animationDuration: `${5 + Math.random() * 10}s`
                  }}
                ></div>
              ))}
            </div>
          )}

          <div className="relative z-10 text-center text-white px-4">
            <h1 className={`text-5xl font-extrabold sm:text-6xl md:text-7xl transition-all duration-1000 ease-out ${isMounted ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'} bg-clip-text text-transparent bg-gradient-to-r from-white via-pink-100 to-white`}>
              Welcome to My World
            </h1>
            <div className={`mt-6 transition-all duration-1000 ease-out delay-300 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Typewriter />
            </div>
            <div className={`mt-10 transition-all duration-1000 ease-out delay-500 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Link href="#about" className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-pink-600 bg-white rounded-full overflow-hidden shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-pink-500/50">
                <span className="relative z-10">Let&apos;s Explore!</span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-100 to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-white rounded-full animate-pulse"></div>
            </div>
          </div>
        </section>

        {/* --- Section 2: About Me with Glassmorphism --- */}
        <section id="about" ref={aboutSectionRef} className="relative bg-gradient-to-br from-slate-50 via-pink-50 to-purple-50 py-24 md:py-32 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #ec4899 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`text-center mb-16 transition-all duration-1000 ease-out ${isAboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-5xl font-extrabold sm:text-6xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600">
                About Me
              </h1>
              <div className="mt-4 h-1 w-24 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full"></div>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Profile Image with Creative Border */}
              <div className={`flex-shrink-0 transition-all duration-1000 ease-out delay-200 ${isAboutVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                  <Image 
                    src="/Rowlet_Profile.jpg" 
                    alt="Profile Picture" 
                    width={400} 
                    height={400} 
                    className="relative rounded-full object-cover shadow-2xl border-8 border-white group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Info Card with Glassmorphism */}
              <div className={`flex-grow transition-all duration-1000 ease-out delay-400 ${isAboutVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 lg:p-12 shadow-2xl border border-white/20 hover:shadow-pink-500/20 transition-all duration-500">
                  <div className="text-center lg:text-left">
                    <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-purple-600 sm:text-5xl mb-2">
                      Nontagrich Panpanich
                    </h2>
                    <p className="mt-2 text-xl text-pink-500 font-semibold flex items-center justify-center lg:justify-start gap-2">
                      <span className="inline-block w-2 h-2 bg-pink-500 rounded-full animate-pulse"></span>
                      Web Developer & Tech Enthusiast
                    </p>
                    <p className="mt-6 text-lg text-gray-700 leading-relaxed max-w-2xl">
                      Hello, my name is Nontagrich Panpanich. I&apos;m currently a student at King Mongkut&apos;s University of Technology Thonburi. I&apos;m passionate about developing web applications using modern technology and am always committed to learning and improving my skills.
                    </p>
                    
                    {/* Skills Section */}
                    <div className="mt-10">
                      <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center justify-center lg:justify-start gap-2">
                        <span className="text-pink-500">✨</span> My Skills
                      </h3>
                      <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                        {skills.map((skill, index) => (
                          <span 
                            key={skill} 
                            className="group relative bg-gradient-to-r from-pink-500 to-purple-500 text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 cursor-default"
                            style={{ animationDelay: `${index * 50}ms` }}
                          >
                            {skill}
                            <span className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* --- Section 3: Education with Modern Timeline --- */}
        <section id="education" ref={educationSectionRef} className="relative bg-white py-24 md:py-32 overflow-hidden">
          {/* Decorative Background */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-pink-50 to-transparent opacity-50"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`text-center mb-20 transition-all duration-1000 ease-out ${isEducationVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-5xl font-extrabold sm:text-6xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600">
                Education
              </h1>
              <div className="mt-4 h-1 w-24 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Animated Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-300 via-purple-300 to-indigo-300"></div>
                
                <div className="space-y-16">
                  {educationData.map((edu, index) => (
                    <div 
                      key={index} 
                      className={`relative pl-20 transition-all duration-1000 ease-out ${isEducationVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                      style={{transitionDelay: `${index * 200 + 200}ms`}}
                    >
                      {/* Timeline Dot with Pulse */}
                      <div className="absolute left-5 top-2 flex items-center justify-center">
                        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 ring-4 ring-white shadow-lg flex items-center justify-center z-10">
                          <div className="h-3 w-3 rounded-full bg-white"></div>
                        </div>
                        <div className="absolute h-8 w-8 rounded-full bg-pink-400 animate-ping opacity-75"></div>
                      </div>

                      {/* Content Card */}
                      <div className="bg-gradient-to-br from-white to-pink-50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-pink-100 group hover:-translate-y-2">
                        <span className="inline-block px-4 py-1 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-sm font-bold rounded-full mb-3">
                          {edu.year}
                        </span>
                        <h3 className="text-2xl font-bold text-gray-900 mt-2 group-hover:text-pink-600 transition-colors duration-300">
                          {edu.degree}
                        </h3>
                        <p className="text-lg text-gray-600 mt-2 flex items-center gap-2">
                          <span className="text-pink-500">📍</span> {edu.school}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Section 4: Experience with Modern Design --- */}
        <section id="experience" ref={experienceSectionRef} className="relative bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 py-24 md:py-32 overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`text-center mb-20 transition-all duration-1000 ease-out ${isExperienceVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-5xl font-extrabold sm:text-6xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600">
                Experience
              </h1>
              <div className="mt-4 h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-300 via-pink-300 to-indigo-300"></div>
                
                <div className="space-y-16">
                  {experienceData.map((exp, index) => (
                    <div 
                      key={index} 
                      className={`relative pl-20 transition-all duration-1000 ease-out ${isExperienceVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                      style={{transitionDelay: `${index * 200 + 200}ms`}}
                    >
                      <div className="absolute left-5 top-2 flex items-center justify-center">
                        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 ring-4 ring-white shadow-lg flex items-center justify-center z-10">
                          <div className="h-3 w-3 rounded-full bg-white"></div>
                        </div>
                        <div className="absolute h-8 w-8 rounded-full bg-purple-400 animate-ping opacity-75"></div>
                      </div>

                      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-purple-100 group hover:-translate-y-2">
                        <span className="inline-block px-4 py-1 bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-sm font-bold rounded-full mb-3">
                          {exp.year}
                        </span>
                        <h3 className="text-2xl font-bold text-gray-900 mt-2 group-hover:text-purple-600 transition-colors duration-300">
                          {exp.role}
                        </h3>
                        <p className="text-lg font-medium text-purple-600 mt-2 flex items-center gap-2">
                          <span>🏢</span> {exp.company}
                        </p>
                        <p className="mt-4 text-gray-600 leading-relaxed">{exp.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Section 5: My Works with 3D Hover Effect --- */}
        <section id="works" ref={worksSectionRef} className="relative bg-gradient-to-br from-pink-600 via-purple-600 to-indigo-700 py-24 md:py-32 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute w-full h-full opacity-10" style={{ backgroundImage: 'linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 75%, rgba(255,255,255,0.1) 75%, rgba(255,255,255,0.1)), linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 75%, rgba(255,255,255,0.1) 75%, rgba(255,255,255,0.1))', backgroundSize: '60px 60px', backgroundPosition: '0 0, 30px 30px' }}></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`text-center mb-20 transition-all duration-1000 ease-out ${isWorksVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-5xl font-extrabold sm:text-6xl md:text-7xl text-white drop-shadow-lg">
                My Projects
              </h1>
              <div className="mt-4 h-1 w-24 bg-white mx-auto rounded-full"></div>
              <p className="mt-6 text-xl text-pink-100 max-w-2xl mx-auto">
                Showcase of my latest work and creative projects
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {worksData.map((work, index) => (
                <div 
                  key={index} 
                  className={`group perspective transition-all duration-1000 ease-out ${isWorksVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${index * 200 + 200}ms` }}
                >
                  <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl hover:shadow-pink-500/50 transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1">
                    {/* Project Image */}
                    <Link href={work.link} target="_blank" rel="noopener noreferrer" className="block relative overflow-hidden h-56">
                      <Image 
                        src={work.image} 
                        alt={work.title} 
                        width={600} 
                        height={400} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <span className="px-6 py-3 bg-white text-pink-600 font-bold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 shadow-lg">
                          View Project →
                        </span>
                      </div>
                    </Link>

                    {/* Content */}
                    <div className="p-7">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-pink-600 transition-colors duration-300">
                        {work.title}
                      </h3>
                      <p className="text-gray-600 text-base mb-5 leading-relaxed h-20 overflow-hidden">
                        {work.description}
                      </p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {work.tags.map((tag, tagIndex) => (
                          <span 
                            key={tag} 
                            className="bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-pink-200 hover:scale-110 transition-transform duration-300 cursor-default"
                            style={{ animationDelay: `${tagIndex * 100}ms` }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Decorative Corner */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-pink-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Section 6: Contact with Modern Design --- */}
        <section id="contact" ref={contactSectionRef} className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white py-24 md:py-32 overflow-hidden">
          {/* Animated Background Grid */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
          </div>

          {/* Glowing Orbs */}
          <div className="absolute top-20 left-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className={`transition-all duration-1000 ease-out ${isContactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-5xl font-extrabold sm:text-6xl md:text-7xl mb-4">
                Let&apos;s Connect
              </h1>
              <div className="mt-4 h-1 w-24 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full mb-8"></div>
              <p className="mt-6 max-w-2xl mx-auto text-xl text-slate-300 leading-relaxed">
                Interested in working together or want to discuss a project? Feel free to reach out through any of these channels.
              </p>
            </div>

            {/* Contact Icons */}
            <div className={`mt-16 flex flex-wrap justify-center gap-8 transition-all duration-1000 ease-out delay-300 ${isContactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <a 
                href="mailto:noontagrich.456@gmail.com" 
                title="Email" 
                className="group relative p-6 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 border border-white/20"
              >
                <MailIcon className="w-12 h-12 text-pink-400 group-hover:text-pink-300 transition-colors duration-300" />
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">Email Me</span>
              </a>

              <a 
                href="https://github.com/Nontagrich" 
                title="GitHub" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative p-6 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 border border-white/20"
              >
                <GitHubIcon className="w-12 h-12 text-slate-300 group-hover:text-white transition-colors duration-300" />
                <div className="absolute -inset-1 bg-gradient-to-r from-slate-400 to-slate-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">GitHub</span>
              </a>

              <a 
                href="https://www.linkedin.com/in/nontagrich-panpanich-21357626a/" 
                title="LinkedIn" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative p-6 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 border border-white/20"
              >
                <LinkedInIcon className="w-12 h-12 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">LinkedIn</span>
              </a>
            </div>

            {/* Decorative Quote */}
            <div className={`mt-20 transition-all duration-1000 ease-out delay-500 ${isContactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="max-w-3xl mx-auto p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                <p className="text-2xl font-light italic text-slate-300">
                  &quot;Great things are built by great teams. Let&apos;s create something amazing together.&quot;
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Footer with Modern Design */}
        <footer className="relative bg-slate-950 py-8 text-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
          <div className="relative">
            <p className="text-slate-400 text-sm mb-2">
              &copy; 2025 Nontagrich Panpanich. All Rights Reserved.
            </p>
            <p className="text-slate-500 text-xs">
              Crafted with ❤️ and lots of ☕
            </p>
          </div>
        </footer>
      </main>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .animate-float {
          animation: float linear infinite;
        }
        
        .perspective {
          perspective: 1000px;
        }
      `}</style>
    </>
  );
}