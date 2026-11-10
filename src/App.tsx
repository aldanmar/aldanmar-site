import React, { useState } from 'react';
import { ArrowRight, Check, CheckCircle2, ExternalLink, Github, Layers, Cpu, GitBranch, Mail, Send } from 'lucide-react';
import configData from './siteConfig.json';

export default function App() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 selection:bg-blue-600 selection:text-white dark:bg-neutral-950 dark:text-neutral-100">
      {/* Top Navigation */}
      <header className="sticky top-0 z-40 w-full border-b border-neutral-200 bg-white/90 backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-950/90">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-8 px-6">
          <a href="#top" className="text-base font-bold tracking-tight text-neutral-900 dark:text-white">
            {configData.siteTitle}
          </a>
          <nav className="hidden items-center gap-7 md:flex text-sm font-medium text-neutral-600 dark:text-neutral-400">
            <a href="#capabilities" className="hover:text-neutral-900 dark:hover:text-white">Capabilities</a>
            <a href="#projects" className="hover:text-neutral-900 dark:hover:text-white">Projects</a>
            <a href="#contact" className="hover:text-neutral-900 dark:hover:text-white">Contact</a>
          </nav>
          <a
            href="#contact"
            className="rounded-lg bg-neutral-900 px-4 py-2 text-xs font-semibold text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900"
          >
            Get in Touch
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="border-b border-neutral-200 bg-white pt-16 pb-20 dark:border-neutral-800 dark:bg-neutral-950">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-medium text-neutral-500 dark:text-neutral-400">
              <span>{configData.ownerName}</span>
              <span>·</span>
              <span>{configData.role}</span>
              <span>·</span>
              <span>{configData.location}</span>
            </div>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl dark:text-white">
              {configData.heroHeadline}
            </h1>
            <p className="mt-5 text-base leading-relaxed text-neutral-600 dark:text-neutral-300">
              {configData.heroDescription}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700">
                <span>{configData.primaryCtaText}</span>
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-lg border border-neutral-300 bg-white px-5 py-2.5 text-sm font-semibold text-neutral-800 hover:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200">
                <span>Contact Directly</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section id="capabilities" className="border-b border-neutral-200 bg-neutral-50/50 py-20 dark:border-neutral-800 dark:bg-neutral-900/30">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">Capabilities & Architecture</h2>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {configData.capabilities.map((cap: any) => (
              <div key={cap.id} className="rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900">
                <span className="font-mono text-xs font-semibold text-neutral-400">{cap.number}.</span>
                <h3 className="mt-3 text-base font-semibold text-neutral-900 dark:text-white">{cap.title}</h3>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{cap.description}</p>
                <ul className="mt-4 space-y-1.5 text-xs text-neutral-700 dark:text-neutral-300">
                  {cap.deliverables.map((item: string, idx: number) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Check className="h-3.5 w-3.5 text-blue-600 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="border-b border-neutral-200 bg-white py-20 dark:border-neutral-800 dark:bg-neutral-950">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">Featured Work</h2>
          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
            {configData.projects.map((proj: any) => (
              <div key={proj.id} className="flex flex-col justify-between rounded-xl border border-neutral-200 bg-neutral-50/60 p-6 dark:border-neutral-800 dark:bg-neutral-900/60">
                <div>
                  <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">{proj.category}</span>
                  <h3 className="mt-2 text-lg font-bold text-neutral-900 dark:text-white">{proj.title}</h3>
                  <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{proj.description}</p>
                  <div className="mt-4 rounded bg-white p-2.5 text-xs text-neutral-800 border border-neutral-200 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200">
                    <span className="font-bold">{proj.metric}</span> — {proj.metricLabel}
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between border-t border-neutral-200/80 pt-4 dark:border-neutral-800">
                  {proj.githubUrl && (
                    <a href={proj.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">
                      <Github className="h-3.5 w-3.5" />
                      <span>Repo</span>
                    </a>
                  )}
                  {proj.liveUrl && (
                    <a href={proj.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400">
                      <span>Live</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-neutral-50/70 dark:bg-neutral-900/40">
        <div className="mx-auto max-w-xl px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">Get in Touch</h2>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">Send an inquiry directly to {configData.email}</p>
          </div>
          <div className="mt-8 rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900">
            {submitted ? (
              <div className="py-6 text-center">
                <CheckCircle2 className="mx-auto h-8 w-8 text-emerald-600" />
                <h3 className="mt-2 text-base font-bold text-neutral-900 dark:text-white">Message Logged</h3>
                <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-400">Thank you! We will reply to {formData.email} shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="font-semibold text-neutral-700 dark:text-neutral-300">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="mt-1 w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white"
                  />
                </div>
                <div>
                  <label className="font-semibold text-neutral-700 dark:text-neutral-300">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="mt-1 w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white"
                  />
                </div>
                <div>
                  <label className="font-semibold text-neutral-700 dark:text-neutral-300">Message</label>
                  <textarea
                    rows={3}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="mt-1 w-full rounded-lg border border-neutral-300 bg-white p-3 text-sm text-neutral-900 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white"
                  />
                </div>
                <button type="submit" className="w-full rounded-lg bg-blue-600 py-2.5 font-semibold text-white hover:bg-blue-700">
                  Send Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 bg-white py-8 text-center text-xs text-neutral-500 dark:border-neutral-800 dark:bg-neutral-950">
        <p>&copy; {new Date().getFullYear()} {configData.ownerName}. Built with WebForge Studio.</p>
      </footer>
    </div>
  );
}
