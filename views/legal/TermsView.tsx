import React from "react";

export const TermsView: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-20 dark:bg-slate-900">
      <div className="mx-auto max-w-4xl rounded-3xl border border-slate-100 bg-white p-8 px-6 shadow-sm md:p-12 dark:border-slate-700/50 dark:bg-slate-800">
        <span className="text-primary mb-2 block text-xs font-semibold tracking-widest uppercase">
          Legal Information
        </span>
        <h1 className="mb-4 text-3xl font-black tracking-tight text-slate-900 md:text-4xl dark:text-white">
          Terms of Service & Privacy Policy
        </h1>
        <p className="mb-8 text-sm text-slate-400 dark:text-slate-500">
          Last updated: July 18, 2026
        </p>

        <div className="prose prose-slate dark:prose-invert max-w-none space-y-6 leading-relaxed text-slate-600 dark:text-slate-400">
          <section>
            <h2 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
              1. Terms of Use
            </h2>
            <p>
              By accessing and placing an order with our platform, you confirm
              that you are in agreement with and bound by the terms of service
              contained in the Terms & Conditions outlined below.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
              2. Privacy & Data Collection
            </h2>
            <p>
              We care deeply about your data safety. We only collect essential
              information required to provision the active interfaces. All
              transactional telemetry is protected via industry-standard
              encryption protocols.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
              3. Intellectual Property Rights
            </h2>
            <p>
              All codebases, design specifications, branding modules, and
              customized layouts deployed within this application domain remain
              under active proprietary licenses. Unauthorized replication is
              prohibited.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
