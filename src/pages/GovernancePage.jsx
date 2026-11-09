/*
 * Copyright (c) 2026, RTE (http://www.rte-france.com)
 * All rights reserved.
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, you can obtain one at http://mozilla.org/MPL/2.0/.
 * SPDX-License-Identifier: MPL-2.0
 *
 * This file is part of the Dynawo website.
 */

import { Link } from "react-router-dom";
import { Users, ShieldCheck, GitMerge, Vote, CalendarDays, ExternalLink } from "lucide-react";

const TSC_DISCUSSIONS_URL = "https://github.com/dynawo/dynawo/discussions/categories/lfe-tsc";

const roles = [
  {
    icon: ShieldCheck,
    title: "Maintainers",
    color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-100",
    desc: "Maintainers are responsible for the technical direction of the project. They review and merge pull requests, manage releases, and ensure the quality and coherence of the codebase.",
    responsibilities: [
      "Review and merge pull requests",
      "Manage versioned releases",
      "Define and enforce coding standards",
      "Represent the project in the TSC",
    ],
  },
  {
    icon: GitMerge,
    title: "Committers",
    color: "text-purple-600", bg: "bg-purple-50", border: "border-purple-100",
    desc: "Committers are regular contributors who have demonstrated sustained and quality contributions. They can review pull requests and have write access to the repository.",
    responsibilities: [
      "Review pull requests in their area of expertise",
      "Triage issues and feature requests",
      "Mentor new contributors",
      "Participate in technical discussions",
    ],
  },
  {
    icon: Users,
    title: "Contributors",
    color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-100",
    desc: "Anyone who submits a pull request, reports a bug, improves the documentation, or participates in discussions is a contributor. No formal role is required to start contributing.",
    responsibilities: [
      "Submit pull requests and bug reports",
      "Improve documentation and examples",
      "Participate in GitHub Discussions",
      "Help other users",
    ],
  },
];

const principles = [
  {
    icon: Vote,
    title: "Decision making",
    color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-100",
    desc: "Technical decisions are made by consensus among maintainers whenever possible. When consensus cannot be reached, a simple majority vote among TSC members is used. Major decisions affecting the project direction are documented in GitHub Discussions.",
  },
  {
    icon: CalendarDays,
    title: "TSC meetings",
    color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-100",
    desc: "The Technical Steering Committee meets regularly to discuss project direction, review the roadmap, and handle governance matters. Meeting notes are published publicly on GitHub.",
    link: { label: "TSC discussions on GitHub →", href: TSC_DISCUSSIONS_URL },
  },
  {
    icon: ExternalLink,
    title: "LF Energy oversight",
    color: "text-orange-500", bg: "bg-orange-50", border: "border-orange-100",
    desc: "Dynawo is a project of the LF Energy Foundation, a directed fund of The Linux Foundation. LF Energy provides legal, infrastructure, and community support, while technical decisions remain with the Dynawo TSC.",
  },
];

export default function GovernancePage() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-[#002B5C]">

      {/* Breadcrumb */}
      <div className="border-b border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-7xl px-8 py-3 text-[13px] text-slate-400">
          <Link to="/" className="hover:text-[#002B5C] transition">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-500">About</span>
          <span className="mx-2">/</span>
          <span className="font-semibold text-[#002B5C]">Governance</span>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-8 py-14">

        {/* Header */}
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-xs font-extrabold uppercase tracking-widest text-blue-500">About</p>
          <h1 className="text-4xl font-extrabold leading-tight text-[#002B5C]">Governance</h1>
          <p className="mt-5 text-base leading-7 text-slate-500">
            Dynawo is an open-source project hosted under the{" "}
            <a href="https://lfenergy.org/" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#00A3E0] hover:underline">
              LF Energy Foundation
            </a>. Its governance model is designed to be transparent, meritocratic, and welcoming to new contributors.
            Technical decisions are made by the community through a{" "}
            <a href={TSC_DISCUSSIONS_URL} target="_blank" rel="noopener noreferrer" className="font-semibold text-[#00A3E0] hover:underline">
              Technical Steering Committee (TSC)
            </a>{" "}composed of active maintainers.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://github.com/dynawo/.github/blob/master/GOVERNANCE.md"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-[#002B5C] bg-white px-5 py-3 text-sm font-semibold text-[#002B5C] shadow-sm hover:bg-[#002B5C] hover:text-white transition"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GOVERNANCE.md on GitHub
            </a>
            <a
              href="https://lfenergy.org/projects/dynawo/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-[#002B5C] shadow-sm hover:border-[#00A3E0] hover:text-[#00A3E0] transition"
            >
              Dynawo on LF Energy →
            </a>
          </div>
        </div>

        {/* Roles */}
        <section className="mb-16">
          <h2 className="mb-2 text-xl font-extrabold text-[#002B5C]">Roles</h2>
          <p className="mb-6 text-sm leading-6 text-slate-500">
            Participation in the Dynawo project is open to everyone. Roles are earned through sustained contributions and recognized by the community.
          </p>
          <div className="grid gap-5 lg:grid-cols-3">
            {roles.map((r) => (
              <div key={r.title} className={`rounded-2xl border p-6 ${r.bg} ${r.border}`}>
                <div className="mb-3 flex items-center gap-2">
                  <r.icon size={20} className={r.color} />
                  <p className={`text-sm font-extrabold ${r.color}`}>{r.title}</p>
                </div>
                <p className="mb-4 text-sm leading-6 text-slate-500">{r.desc}</p>
                <ul className="space-y-2">
                  {r.responsibilities.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[12px] leading-5 text-slate-500">
                      <span className={`mt-1.5 h-1 w-1 flex-shrink-0 rounded-full ${r.color.replace("text-", "bg-")}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Becoming a maintainer */}
        <section className="mb-16">
          <h2 className="mb-2 text-xl font-extrabold text-[#002B5C]">Becoming a maintainer</h2>
          <p className="mb-6 text-sm leading-6 text-slate-500">
            New maintainers are nominated by existing maintainers based on sustained, high-quality contributions over time. The process is as follows.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { num: "01", title: "Sustained contributions", desc: "Demonstrate consistent, high-quality contributions over several months — code, reviews, or documentation.", color: "text-slate-600", bg: "bg-slate-50", border: "border-slate-200" },
              { num: "02", title: "Nomination", desc: "An existing maintainer nominates the candidate by opening a GitHub issue and presenting the case to the TSC.", color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-100" },
              { num: "03", title: "TSC vote", desc: "The TSC votes. A two-thirds majority of active maintainers is required for the nomination to pass.", color: "text-purple-600", bg: "bg-purple-50", border: "border-purple-100" },
              { num: "04", title: "Onboarding", desc: "The new maintainer is granted write access and added to the MAINTAINERS file in the repository.", color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-100" },
            ].map((s) => (
              <div key={s.num} className={`rounded-2xl border p-6 ${s.bg} ${s.border}`}>
                <p className={`mb-3 text-3xl font-black leading-none opacity-30 ${s.color}`}>{s.num}</p>
                <p className={`mb-2 text-sm font-extrabold ${s.color}`}>{s.title}</p>
                <p className="text-sm leading-6 text-slate-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Governance principles */}
        <section className="mb-16">
          <h2 className="mb-6 text-xl font-extrabold text-[#002B5C]">Governance principles</h2>
          <div className="grid gap-5 lg:grid-cols-3">
            {principles.map((p) => (
              <div key={p.title} className={`rounded-2xl border p-6 ${p.bg} ${p.border}`}>
                <div className="mb-3 flex items-center gap-2">
                  <p.icon size={20} className={p.color} />
                  <p className={`text-sm font-extrabold ${p.color}`}>{p.title}</p>
                </div>
                <p className="text-sm leading-6 text-slate-500">{p.desc}</p>
                {p.link && (
                  <a
                    href={p.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-3 inline-flex text-sm font-semibold ${p.color} hover:underline`}
                  >
                    {p.link.label}
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Charter */}
        <section className="mb-16">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
            <p className="mb-1 text-xs font-extrabold uppercase tracking-widest text-slate-400">Project charter</p>
            <p className="mt-3 text-sm leading-7 text-slate-500">
              Dynawo operates under the{" "}
              <a href="https://lfenergy.org/" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#00A3E0] hover:underline">
                LF Energy Foundation
              </a>{" "}
              charter, which governs intellectual property, funding, and legal matters. The technical governance described on this page is complementary to the LF Energy charter and focuses on day-to-day project operations.
            </p>
            <a
              href="https://lfenergy.org/projects/dynawo/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#00A3E0] hover:underline"
            >
              LF Energy project page →
            </a>
          </div>
        </section>

        {/* Next steps */}
        <section>
          <h2 className="mb-6 text-xl font-extrabold text-[#002B5C]">See also</h2>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/contributing/how-to-contribute"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-[#002B5C] shadow-sm hover:border-[#00A3E0] hover:text-[#00A3E0] transition"
            >
              How to contribute →
            </Link>
            <Link
              to="/contributing/code-of-conduct"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-[#002B5C] shadow-sm hover:border-[#00A3E0] hover:text-[#00A3E0] transition"
            >
              Code of conduct →
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
