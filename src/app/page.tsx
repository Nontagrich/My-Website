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
const educationData = [ { year: '2021 - Now', degree: 'Bachelor of Science in Computer Engineering', school: 'King Mongkut\'s University of Technology Thonburi (KMUTT)', }, { year: '2018 - 2021', degree: 'Science-Mathematics Program', school: 'Benjamarachutit Ratchaburi School', }, ];
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
      <main>
        {/* Hero Section */}
        <section id="home" className="bg-gradient-to-r from-pink-500 to-indigo-700 h-screen flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className={`text-4xl font-extrabold sm:text-5xl md:text-6xl transition-all duration-700 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Welcome to My Website</h1>
            <div className={`transition-all duration-700 ease-out delay-300 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}><Typewriter /></div>
            <div className={`mt-10 transition-all duration-700 ease-out delay-500 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}><Link href="#about" className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-gray-100 md:py-4 md:text-lg md:px-10">Let's Go!</Link></div>
          </div>
        </section>

        {/* --- Section 2: About Me --- */}
        <section id="about" ref={aboutSectionRef} className="bg-slate-100 py-20 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`text-center text-black px-4 mb-12 transition-all duration-700 ease-out ${isAboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}><h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">About Me</h1></div>
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className={`flex-shrink-0 transition-all duration-700 ease-out delay-200 ${isAboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}><Image src="/Rowlet_Profile.jpg" alt="Profile Picture" width={500} height={500} className="rounded-full object-cover shadow-lg border-4 border-pink-500"/></div>
              <div className={`flex-grow bg-slate-50 rounded-xl p-8 lg:p-12 shadow-lg border border-slate-200 transition-all duration-700 ease-out delay-400 ${isAboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="text-center md:text-left">
                  <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">Nontagrich Panpanich</h2>
                  <p className="mt-2 text-xl text-pink-500 font-semibold">Web Developer & Tech Enthusiast</p>
                  <p className="mt-4 text-lg text-gray-600 max-w-2xl">Hello, my name is Nontagrich Panpanich. I'm currently a student at King Mongkut's University of Technology Thonburi. I'm interested in developing web applications using modern technology and am always committed to learning and improving my skills.</p>
                  <div className="mt-8"><h3 className="text-2xl font-bold text-gray-800 mb-4">My Skills</h3><div className="flex flex-wrap gap-3 justify-center md:justify-start">{skills.map((skill) => (<span key={skill} className="bg-indigo-100 text-indigo-800 text-sm font-semibold px-4 py-2 rounded-full">{skill}</span>))}</div></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* --- Section 3: Education --- */}
        <section id="education" ref={educationSectionRef} className="bg-white py-20 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`text-center text-black px-4 mb-16 transition-all duration-700 ease-out ${isEducationVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}><h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">Education</h1></div>
            <div className="max-w-3xl mx-auto">
              <div className="relative border-l-2 border-pink-300 space-y-12">
                {educationData.map((edu, index) => (<div key={index} className={`relative pl-8 transition-all duration-700 ease-out ${isEducationVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: `${index * 200 + 200}ms`}}><div className="absolute -left-[11px] top-1 h-5 w-5 rounded-full bg-pink-500 ring-4 ring-white"></div><p className="text-sm font-semibold text-gray-500">{edu.year}</p><h3 className="text-2xl font-bold text-gray-900 mt-1">{edu.degree}</h3><p className="text-lg text-gray-600">{edu.school}</p></div>))}
              </div>
            </div>
          </div>
        </section>

        {/* --- Section 4: Experience --- */}
        <section id="experience" ref={experienceSectionRef} className="bg-slate-100 py-20 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`text-center text-black px-4 mb-16 transition-all duration-700 ease-out ${isExperienceVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}><h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">Experience</h1></div>
            <div className="max-w-3xl mx-auto">
              <div className="relative border-l-2 border-indigo-300 space-y-12">
                {experienceData.map((exp, index) => ( <div key={index} className={`relative pl-8 transition-all duration-700 ease-out ${isExperienceVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: `${index * 200 + 200}ms`}}><div className="absolute -left-[11px] top-1 h-5 w-5 rounded-full bg-indigo-500 ring-4 ring-slate-100"></div><p className="text-sm font-semibold text-gray-500">{exp.year}</p><h3 className="text-2xl font-bold text-gray-900 mt-1">{exp.role}</h3><p className="text-lg font-medium text-gray-700">{exp.company}</p><p className="mt-2 text-gray-600">{exp.description}</p></div>))}
              </div>
            </div>
          </div>
        </section>

        {/* --- Section 5: My Works --- */}
        <section id="works" ref={worksSectionRef} className=" bg-gradient-to-r from-pink-500 to-rose-700 py-20 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`text-center text-black px-4 mb-16 transition-all duration-700 ease-out ${isWorksVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}><h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl text-white">My Project</h1></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {worksData.map((work, index) => (<div key={index} className={`group bg-slate-50 rounded-xl overflow-hidden shadow-lg border border-slate-200 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl ${isWorksVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 200 + 200}ms` }}><Link href={work.link} target="_blank" rel="noopener noreferrer" className="block overflow-hidden"><Image src={work.image} alt={work.title} width={600} height={400} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" /></Link><div className="p-6"><h3 className="text-xl font-bold text-gray-900 mb-2">{work.title}</h3><p className="text-gray-600 text-base mb-4 h-24 overflow-hidden">{work.description}</p><div className="flex flex-wrap gap-2">{work.tags.map(tag => (<span key={tag} className="bg-pink-100 text-pink-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">{tag}</span>))}</div></div></div>))}
            </div>
          </div>
        </section>

        {/* --- Section 6: Contact --- */}
        <section id="contact" ref={contactSectionRef} className="bg-slate-900 text-white py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className={`transition-all duration-700 ease-out ${isContactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">Contact</h1>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400">If you are interested in working with me or would like to discuss, please contact me through the channels below.</p>
            </div>
            <div className={`mt-12 flex justify-center gap-8 md:gap-12 transition-all duration-700 ease-out delay-300 ${isContactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <a href="mailto:noontagrich.456@gmail.com" title="Email" className="text-slate-400 hover:text-pink-500 transition-colors duration-300 transform hover:scale-110"><MailIcon className="w-10 h-10" /></a>
              <a href="https://github.com/Nontagrich" title="GitHub" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors duration-300 transform hover:scale-110"><GitHubIcon className="w-10 h-10" /></a>
              <a href="https://www.linkedin.com/in/nontagrich-panpanich-21357626a/" title="LinkedIn" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-500 transition-colors duration-300 transform hover:scale-110"><LinkedInIcon className="w-10 h-10" /></a>
            </div>
          </div>
        </section>
        
        {/* Footer */}
        <footer className="bg-slate-900 pb-8 text-center text-sm text-slate-500">
          <p>&copy; 2025 Nontagrich Panpanich. All Rights Reserved.</p>
        </footer>
      </main>
    </>
  );
}