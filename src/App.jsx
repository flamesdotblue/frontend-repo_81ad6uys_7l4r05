import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Integrations from './components/Integrations';
import CTA from './components/CTA';

function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 rounded-b-xl border border-slate-200/80 bg-white/80 px-6 py-3 shadow-sm backdrop-blur">
        <a href="#" className="flex items-center gap-2">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-emerald-600 text-white">A</span>
          <span className="text-sm font-semibold text-slate-900">Aurelia Analytics</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm text-slate-700 sm:flex">
          <a href="#features" className="hover:text-slate-900">Features</a>
          <a href="#get-started" className="hover:text-slate-900">Pricing</a>
          <a href="#" className="hover:text-slate-900">Docs</a>
        </nav>
        <div className="hidden items-center gap-3 sm:flex">
          <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:text-slate-900">Sign in</a>
          <a href="#get-started" className="rounded-md bg-emerald-600 px-3 py-2 text-sm font-semibold text-white hover:bg-emerald-700">Start free</a>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="text-sm text-slate-500">© {new Date().getFullYear()} Aurelia Analytics. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm text-slate-600">
          <a href="#" className="hover:text-slate-900">Privacy</a>
          <a href="#" className="hover:text-slate-900">Security</a>
          <a href="#" className="hover:text-slate-900">Terms</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Features />
        <Integrations />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
