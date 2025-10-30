import React from 'react';

export default function CTA() {
  return (
    <section id="get-started" className="relative py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="overflow-hidden rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-cyan-50 p-8 sm:p-12">
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="text-2xl font-semibold text-slate-900 sm:text-3xl">Start for free. Upgrade when you scale.</h3>
            <p className="mt-3 text-slate-600">No credit card required. 14‑day trial on all plans.</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              >
                Create your workspace
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-md border border-emerald-200 bg-white px-5 py-3 text-sm font-semibold text-emerald-700 hover:bg-emerald-50"
              >
                Book a demo
              </a>
            </div>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-slate-500">
          Trusted by startups and finance teams across SaaS, fintech, and e‑commerce.
        </p>
      </div>
    </section>
  );
}
