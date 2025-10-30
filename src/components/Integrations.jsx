import React from 'react';

const logos = [
  { name: 'Stripe' },
  { name: 'Postgres' },
  { name: 'Snowflake' },
  { name: 'Shopify' },
  { name: 'BigQuery' },
  { name: 'Segment' },
];

export default function Integrations() {
  return (
    <section className="bg-slate-50/60 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h3 className="text-xl font-semibold text-slate-900">Plug into your data stack</h3>
          <p className="mt-2 text-sm text-slate-600">Connect your sources in a click — no engineering tickets required.</p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-6 text-sm font-semibold text-slate-700 shadow-sm"
            >
              {logo.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
