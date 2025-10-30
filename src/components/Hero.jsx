import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative w-full bg-gradient-to-b from-slate-50 to-white">
      <div className="relative h-[80vh] sm:h-[90vh] w-full overflow-hidden">
        {/* Spline background */}
        <div className="absolute inset-0">
          <Spline
            scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>

        {/* Soft gradient overlays to improve text contrast */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/10 to-white/80" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_50%_at_50%_0%,rgba(255,255,255,0.6),transparent_60%)]" />

        {/* Content */}
        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 backdrop-blur">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
            Live insights for modern finance teams
          </span>
          <h1 className="mt-6 text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl md:text-6xl">
            Analytics that make your metrics
            <span className="bg-gradient-to-r from-emerald-500 to-cyan-600 bg-clip-text text-transparent"> crystal clear</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">
            Visualize revenue, cohorts, and growth in one clean workspace. Real‑time dashboards, effortless sharing, and AI‑ready exports.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
            <a
              href="#get-started"
              className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            >
              Get started free
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white/80 px-5 py-3 text-sm font-semibold text-slate-900 backdrop-blur transition hover:bg-white"
            >
              See features
            </a>
          </div>

          {/* Floating preview card */}
          <div className="mt-10 w-full max-w-3xl rounded-xl border border-white/60 bg-white/70 p-4 shadow-xl backdrop-blur md:p-6">
            <div className="grid grid-cols-3 gap-4 text-left">
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-500">MRR</p>
                <p className="mt-1 text-2xl font-semibold text-slate-900">$84,320</p>
                <p className="text-xs text-emerald-600">+8.2% MoM</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-500">Churn</p>
                <p className="mt-1 text-2xl font-semibold text-slate-900">2.1%</p>
                <p className="text-xs text-emerald-600">-0.4% WoW</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-500">LTV</p>
                <p className="mt-1 text-2xl font-semibold text-slate-900">$1,247</p>
                <p className="text-xs text-emerald-600">+5.1% QoQ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
