import React from 'react';
import { BarChart3, PieChart, Shield, Zap } from 'lucide-react';

const features = [
  {
    title: 'Real‑time dashboards',
    description: 'Stream live KPIs with second‑level granularity so your team never misses a trend.',
    icon: BarChart3,
  },
  {
    title: 'Segmentation & cohorts',
    description: 'Slice by plan, region, device, or custom traits to spot growth opportunities.',
    icon: PieChart,
  },
  {
    title: 'Enterprise‑grade security',
    description: 'SOC2‑ready controls, SSO, and granular roles keep your data locked down.',
    icon: Shield,
  },
  {
    title: 'Blazing fast setup',
    description: 'Connect Stripe, Postgres, BigQuery, or CSVs and start charting in minutes.',
    icon: Zap,
  },
];

export default function Features() {
  return (
    <section id="features" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Everything you need to understand growth</h2>
        <p className="mt-3 text-slate-600">Designed for finance, product, and RevOps to collaborate without spreadsheets.</p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map(({ title, description, icon: Icon }) => (
          <div key={title} className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-emerald-50 text-emerald-600">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
            <p className="mt-2 text-sm text-slate-600">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
