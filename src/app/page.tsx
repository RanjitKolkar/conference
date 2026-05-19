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
      <section className="flex flex-col items-center justify-center py-24 px-4 text-center bg-white/80 dark:bg-zinc-900/80 shadow-md">
        <h1 className="text-4xl md:text-6xl font-extrabold text-indigo-700 dark:text-indigo-300 mb-4">QCAI 2026</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-zinc-800 dark:text-zinc-100 mb-2">Quantum, Cybersecurity & AI Conclave</h2>
        <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-300 mb-6">NFSU Goa · December 2026</p>
        <p className="max-w-2xl text-zinc-700 dark:text-zinc-200 mb-8">Join global experts and innovators for a transformative event exploring the future of Quantum Computing, Cybersecurity, and Artificial Intelligence. Network, learn, and shape tomorrow.</p>
        <a href="#registration" className="inline-block px-8 py-3 rounded-full bg-indigo-700 text-white font-bold text-lg shadow hover:bg-indigo-800 transition">Register Interest</a>
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

      {/* Registration Placeholder */}
      <section className="max-w-4xl mx-auto py-12 px-4" id="registration">
        <h3 className="text-2xl font-bold text-indigo-700 mb-4">Registration <span className="text-sm text-zinc-500">(Opens Soon)</span></h3>
        <div className="bg-zinc-100 dark:bg-zinc-800 rounded-lg p-8 text-zinc-500 text-center">Registration will open soon. Stay tuned!</div>
      </section>

      {/* Contact Placeholder */}
      <section className="max-w-4xl mx-auto py-12 px-4" id="contact">
        <h3 className="text-2xl font-bold text-indigo-700 mb-4">Contact</h3>
        <div className="bg-zinc-100 dark:bg-zinc-800 rounded-lg p-8 text-zinc-700 dark:text-zinc-200 text-center">
          For inquiries, email: <span className="font-semibold">info@qcai2026.org</span>
        </div>
      </section>
    </div>
  );
}
