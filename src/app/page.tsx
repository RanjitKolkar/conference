"use client";
import React, { useRef, useEffect, useState } from "react";

export default function Home() {
  // Interactive parallax state
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!bgRef.current) return;
      const rect = bgRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2; // -1 to 1
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      setParallax({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen font-sans overflow-x-hidden">
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[40vh] pt-16">
        <div className="mb-4 flex flex-col items-center">
          <div className="w-28 h-28 bg-zinc-200 dark:bg-zinc-700 rounded-full flex items-center justify-center mb-2 shadow-lg">
            {/* Logo Placeholder */}
            <span className="text-4xl text-indigo-700 font-bold">LOGO</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-2 text-center">International Conference on Cybersecurity with Quantum Network and Artificial Intelligence</h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-2 text-center text-blue-700">In association with Springer</h2>
          <span className="text-md text-zinc-600 dark:text-zinc-300">www.intlconf2026.org</span>
        </div>
        <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg px-6 py-3 shadow text-blue-900 dark:text-blue-100 font-medium text-center max-w-xl mx-auto">
          <span>Call for Papers: Submit your original research in Quantum Computing, Cybersecurity, and Artificial Intelligence. Accepted papers will be published in Springer proceedings.</span>
        </div>
      </div>
      {/* Interactive Abstract animated lines and geometric art */}
      <div ref={bgRef} className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <svg className="absolute left-0 top-0" width="1000" height="400" viewBox="0 0 1000 400" fill="none" xmlns="http://www.w3.org/2000/svg" style={{opacity:0.18, transform: `translateY(${parallax.y * 30}px) translateX(${parallax.x * 20}px)`}}>
          <g>
            <path d="M0 200 Q250 100 500 200 T1000 200" stroke="#6366f1" strokeWidth="4" fill="none"/>
            <path d="M0 300 Q250 200 500 300 T1000 300" stroke="#38bdf8" strokeWidth="2" fill="none"/>
            <path d="M0 100 Q250 200 500 100 T1000 100" stroke="#a5b4fc" strokeWidth="2" fill="none"/>
          </g>
        </svg>
        <svg className="absolute right-0 bottom-0" width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" style={{opacity:0.10, transform: `translateY(${-parallax.y * 20}px) translateX(${-parallax.x * 10}px)`}}>
          <g>
            <polygon points="200,40 360,360 40,360" stroke="#6366f1" strokeWidth="3" fill="none"/>
            <polyline points="60,340 200,120 340,340" stroke="#38bdf8" strokeWidth="2" fill="none"/>
          </g>
        </svg>
        <svg className="absolute left-0 bottom-0" width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" style={{opacity:0.10, transform: `translateY(${parallax.y * 15}px) translateX(${parallax.x * 8}px)`}}>
          <g>
            <rect x="60" y="60" width="180" height="180" rx="60" stroke="#a5b4fc" strokeWidth="2" fill="none"/>
            <line x1="60" y1="150" x2="240" y2="150" stroke="#38bdf8" strokeWidth="2"/>
          </g>
        </svg>
      </div>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-20 px-4 text-center bg-white/80 dark:bg-zinc-900/80 shadow-md">
        <h2 className="text-2xl md:text-3xl font-semibold text-zinc-800 dark:text-zinc-100 mb-2">Welcome to the International Conference on Cybersecurity with Quantum Network and Artificial Intelligence</h2>
        <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-300 mb-6">National Forensic Sciences University, Goa · December 2026</p>
        <p className="max-w-2xl text-zinc-700 dark:text-zinc-200 mb-8">Join global experts and innovators for a transformative event exploring the future of Quantum Computing, Cybersecurity, and Artificial Intelligence. Network, learn, and shape tomorrow. <br/> <span className="font-semibold text-blue-700">Submit your paper and be part of the Springer proceedings!</span></p>
        <a href="#registration" className="inline-block px-8 py-3 rounded-full bg-indigo-700 text-white font-bold text-lg shadow hover:bg-indigo-800 transition">Call for Papers</a>
      </section>

      {/* Event Details */}
      <section className="max-w-4xl mx-auto py-16 px-4">
        <h3 className="text-2xl font-bold text-indigo-700 mb-4">Event Details</h3>
        <ul className="text-lg text-zinc-700 dark:text-zinc-200 list-disc list-inside space-y-2">
          <li>Date: December 2026</li>
          <li>Location: National Forensic Sciences University, Goa Campus</li>
          <li>Tracks: Quantum Computing, Cybersecurity, Artificial Intelligence</li>
        </ul>
      </section>

      {/* Call for Papers Section */}
      <section className="max-w-4xl mx-auto py-16 px-4" id="call-for-papers">
        <h3 className="text-2xl font-bold text-indigo-700 mb-4">Call for Papers</h3>
        <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-6 mb-4 text-zinc-800 dark:text-zinc-100">
          <p className="mb-2">We invite original research papers, review articles, and case studies in the following domains and related areas:</p>
          <ul className="list-disc list-inside ml-4 mb-2">
            <li>Quantum Computing: Algorithms, Applications, Hardware, Quantum Machine Learning</li>
            <li>Cybersecurity: Cryptography, Network Security, Blockchain, Digital Forensics</li>
            <li>Artificial Intelligence: Machine Learning, Deep Learning, NLP, Computer Vision, Robotics</li>
            <li>Interdisciplinary topics bridging Quantum, Cybersecurity, and AI</li>
          </ul>
          <p className="mb-2">All accepted papers will be published in the conference proceedings by <span className="font-semibold text-blue-700">Springer</span>.</p>
          <p className="mb-2">Important Dates:</p>
          <ul className="list-disc list-inside ml-4">
            <li>Paper Submission Deadline: <span className="font-semibold">31st July 2026</span></li>
            <li>Notification of Acceptance: <span className="font-semibold">15th September 2026</span></li>
            <li>Camera-Ready Submission: <span className="font-semibold">1st October 2026</span></li>
          </ul>
          <div className="mt-4">
            <a href="#" className="inline-block px-6 py-2 rounded bg-indigo-700 text-white font-bold shadow hover:bg-indigo-800 transition">Submit Paper</a>
          </div>
        </div>
      </section>

      {/* Conference Domains & Scope */}
      <section className="max-w-4xl mx-auto py-12 px-4" id="domains">
        <h3 className="text-2xl font-bold text-indigo-700 mb-4">Conference Domains & Scope</h3>
        <div className="bg-zinc-100 dark:bg-zinc-800 rounded-lg p-6 text-zinc-800 dark:text-zinc-100">
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Quantum Algorithms and Information Theory</li>
            <li>Quantum Hardware and Devices</li>
            <li>Post-Quantum Cryptography</li>
            <li>Network and Cloud Security</li>
            <li>AI for Security and Security for AI</li>
            <li>Explainable AI and Trustworthy Systems</li>
            <li>Data Privacy and Ethics in AI</li>
            <li>Emerging Interdisciplinary Applications</li>
          </ul>
        </div>
      </section>

      {/* Schedule Placeholder */}
      <section className="max-w-4xl mx-auto py-12 px-4" id="schedule">
        <h3 className="text-2xl font-bold text-indigo-700 mb-4">Schedule <span className="text-sm text-zinc-500">(Coming Soon)</span></h3>
        <div className="bg-zinc-100 dark:bg-zinc-800 rounded-lg p-8 text-zinc-500 text-center">Full event schedule will be announced soon.</div>
      </section>

      {/* Speakers Placeholder */}
      <section className="max-w-4xl mx-auto py-12 px-4" id="speakers">
        <h3 className="text-2xl font-bold text-indigo-700 mb-4">Speakers <span className="text-sm text-zinc-500">(To Be Announced)</span></h3>
        <div className="bg-zinc-100 dark:bg-zinc-800 rounded-lg p-8 text-zinc-500 text-center">Speaker lineup will be revealed soon.</div>
      </section>

      {/* Registration Module */}
      <section className="max-w-4xl mx-auto py-12 px-4" id="registration">
        <h3 className="text-2xl font-bold text-indigo-700 mb-4">Registration</h3>
        <div className="bg-zinc-100 dark:bg-zinc-800 rounded-lg p-8 text-zinc-700 dark:text-zinc-200">
          <div className="mb-4">
            <span className="font-semibold">Registration Details:</span>
            <ul className="list-disc list-inside ml-4 mt-2 text-base">
              <li>Each accepted paper must have at least one registered author.</li>
              <li>Registration includes access to all sessions, conference kit, lunch, and Springer proceedings.</li>
              <li>Early bird discount applies to all categories till <span className="font-semibold">31st August 2026</span>.</li>
              <li>All fees are inclusive of GST.</li>
            </ul>
          </div>
          <table className="w-full text-left border border-zinc-300 dark:border-zinc-700 mb-4">
            <thead>
              <tr className="bg-blue-100 dark:bg-blue-900/40">
                <th className="py-2 px-4">Category</th>
                <th className="py-2 px-4">Standard Fee (INR)</th>
                <th className="py-2 px-4">Early Bird Fee (INR)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4">Student</td>
                <td className="py-2 px-4">6,000</td>
                <td className="py-2 px-4 text-green-700 font-semibold">5,400</td>
              </tr>
              <tr>
                <td className="py-2 px-4">Faculty / Industry</td>
                <td className="py-2 px-4">8,000</td>
                <td className="py-2 px-4 text-green-700 font-semibold">7,200</td>
              </tr>
            </tbody>
          </table>
          <div className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">* Early bird discount valid till 31st August 2026.</div>
          <div className="mt-4">
            <a href="#" className="inline-block px-6 py-2 rounded bg-indigo-700 text-white font-bold shadow hover:bg-indigo-800 transition">Register Now</a>
          </div>
        </div>
      </section>

      {/* Contact & More Info */}
      <section className="max-w-4xl mx-auto py-12 px-4" id="contact">
        <h3 className="text-2xl font-bold text-indigo-700 mb-4">Contact & More Information</h3>
        <div className="bg-zinc-100 dark:bg-zinc-800 rounded-lg p-8 text-zinc-700 dark:text-zinc-200 text-center">
          For inquiries, email: <span className="font-semibold">info@intlconf2026.org</span><br/>
          <span className="block mt-2">Follow us for updates and announcements.</span>
        </div>
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          <div className="w-32 h-32 bg-zinc-200 dark:bg-zinc-700 rounded-lg flex items-center justify-center shadow-lg">
            <span className="text-lg text-indigo-700 font-bold">SPONSOR LOGO</span>
          </div>
          <div className="w-32 h-32 bg-zinc-200 dark:bg-zinc-700 rounded-lg flex items-center justify-center shadow-lg">
            <span className="text-lg text-indigo-700 font-bold">SPRINGER</span>
          </div>
        </div>
      </section>
    </div>
  );
}
