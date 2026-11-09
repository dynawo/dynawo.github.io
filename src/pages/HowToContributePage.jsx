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
import { Github, Bug, Lightbulb, BookOpen, Layers, Code2, GitBranch, MessageSquare } from "lucide-react";

const ways = [
  {
    icon: Bug, title: "Report a bug",
    desc: "Found unexpected behaviour or a simulation crash? Open an issue on GitHub with a minimal reproducible case — input files, command used, and observed vs expected output.",
    color: "text-red-600", bg: "bg-red-50", border: "border-red-100",
    action: { label: "Open an issue", href: "https://github.com/dynawo/dynawo/issues/new" },
  },
  {
    icon: Lightbulb, title: "Suggest a feature",
    desc: "Have an idea for a new capability, a new simulation tool, or an improvement to an existing one? Start a discussion or open a feature request issue.",
    color: "text-yellow-600", bg: "bg-yellow-50", border: "border-yellow-100",
    action: { label: "Start a discussion", href: "https://github.com/dynawo/dynawo/discussions" },
  },
  {
    icon: Layers, title: "Add or improve a model",
    desc: "The models library is the heart of Dynawo. You can contribute new Modelica models, improve existing ones, or add validation examples following the library conventions.",
    color: "text-purple-600", bg: "bg-purple-50", border: "border-purple-100",
    action: { label: "See the library", href: "https://github.com/dynawo/dynawo/tree/master/dynawo/sources/Models/Modelica/Dynawo" },
  },
  {
    icon: Code2, title: "Contribute code",
    desc: "Fix a bug, implement a feature, improve performance or test coverage on the C++ simulation engine. All contributions go through a pull request reviewed by the maintainers.",
    color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-100",
    action: { label: "Browse open issues", href: "https://github.com/dynawo/dynawo/issues" },
  },
  {
    icon: BookOpen, title: "Improve documentation",
    desc: "Spotted an error, an outdated section, or a missing explanation? Documentation contributions — including this website — are very welcome.",
    color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-100",
    action: { label: "View on GitHub", href: "https://github.com/dynawo/dynawo" },
  },
  {
    icon: MessageSquare, title: "Help other users",
    desc: "Answer questions on GitHub Discussions, share your experience on the mailing list, or write a tutorial. Community support is a valuable contribution.",
    color: "text-sky-600", bg: "bg-sky-50", border: "border-sky-100",
    action: { label: "GitHub Discussions", href: "https://github.com/dynawo/dynawo/discussions" },
  },
];

const steps = [
  {
    num: "01", title: "Open or find an issue",
    desc: "Before starting any work, make sure a GitHub issue exists for the bug or feature. If not, open one first. This ensures the change is tracked and avoids duplicate or unwanted effort.",
    color: "text-slate-600", bg: "bg-slate-50", border: "border-slate-200",
  },
  {
    num: "02", title: "Create a branch",
    desc: "Create a branch on a dynawo repository prefixed with the issue number — e.g. 1234_iec-wind-frt or 1234_governor-hydro4. Never commit directly to master.",
    color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-100",
  },
  {
    num: "03", title: "Make your changes",
    desc: "Follow the coding conventions, add or update tests and examples as relevant. Run the non-regression test suite (nrt) to verify nothing is broken.",
    color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-100",
  },
  {
    num: "04", title: "Open a pull request",
    desc: "Submit your pull request against the master branch. Describe the motivation, what was changed, and how it was tested. A maintainer will review it.",
    color: "text-purple-600", bg: "bg-purple-50", border: "border-purple-100",
  },
  {
    num: "05", title: "Address review feedback",
    desc: "Maintainers may request changes or ask questions. Iterate on your branch until the PR is approved, then it will be merged into master.",
    color: "text-orange-500", bg: "bg-orange-50", border: "border-orange-100",
  },
];

export default function HowToContributePage() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-[#002B5C]">

      {/* Breadcrumb */}
      <div className="border-b border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-7xl px-8 py-3 text-[13px] text-slate-400">
          <Link to="/" className="hover:text-[#002B5C] transition">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-500">Contributing</span>
          <span className="mx-2">/</span>
          <span className="font-semibold text-[#002B5C]">How to contribute</span>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-8 py-14">

        {/* Header */}
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-xs font-extrabold uppercase tracking-widest text-blue-500">Contributing</p>
          <h1 className="text-4xl font-extrabold leading-tight text-[#002B5C]">How to contribute</h1>
          <p className="mt-5 text-base leading-7 text-slate-500">
            Dynawo is an open-source project and any form of contribution is welcome — whether you are
            a power system engineer, a Modelica modeller, a C++ developer, or simply a user who found a bug.
            All contributions are managed through{" "}
            <a href="https://github.com/dynawo" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#00A3E0] hover:underline">GitHub</a>.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://github.com/dynawo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-[#002B5C] bg-white px-5 py-3 text-sm font-semibold text-[#002B5C] shadow-sm hover:bg-[#002B5C] hover:text-white transition"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              dynawo on GitHub
            </a>
            <a
              href="https://github.com/dynawo/.github/blob/master/CONTRIBUTING.md"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-[#002B5C] shadow-sm hover:border-[#00A3E0] hover:text-[#00A3E0] transition"
            >
              Full contributing guidelines →
            </a>
          </div>
        </div>

        {/* Ways to contribute */}
        <section className="mb-16">
          <h2 className="mb-6 text-xl font-extrabold text-[#002B5C]">Ways to contribute</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ways.map((w) => (
              <div key={w.title} className={`rounded-2xl border p-6 ${w.bg} ${w.border} flex flex-col`}>
                <span className={`mb-3 block ${w.color}`}><w.icon size={22} /></span>
                <p className={`mb-2 text-sm font-extrabold ${w.color}`}>{w.title}</p>
                <p className="mb-4 flex-1 text-sm leading-6 text-slate-500">{w.desc}</p>
                <a
                  href={w.action.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1.5 text-[12px] font-semibold ${w.color} hover:underline`}
                >
                  {w.action.label} →
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Contribution workflow */}
        <section className="mb-16">
          <h2 className="mb-2 text-xl font-extrabold text-[#002B5C]">Contribution workflow</h2>
          <p className="mb-6 text-sm leading-6 text-slate-500">
            All code contributions follow a branch-and-pull-request workflow directly on dynawo repositories.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((s) => (
              <div key={s.num} className={`rounded-2xl border p-6 ${s.bg} ${s.border}`}>
                <p className={`mb-3 text-3xl font-black leading-none ${s.color} opacity-30`}>{s.num}</p>
                <p className={`mb-2 text-sm font-extrabold ${s.color}`}>{s.title}</p>
                <p className="text-sm leading-6 text-slate-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Where to start */}
        <section className="mb-16">
          <h2 className="mb-2 text-xl font-extrabold text-[#002B5C]">Where to start</h2>
          <p className="mb-6 text-sm leading-6 text-slate-500">
            Not sure where to begin? Here are good entry points for new contributors.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            <a
              href="https://github.com/dynawo/dynawo/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:border-[#00A3E0] hover:shadow-md transition"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50">
                <GitBranch size={20} className="text-emerald-600" />
              </div>
              <p className="mb-2 text-sm font-extrabold text-[#002B5C] group-hover:text-[#00A3E0] transition">Good first issues</p>
              <p className="text-[12px] leading-5 text-slate-500">
                Issues tagged as good first issue are scoped to be approachable without deep knowledge of the codebase.
              </p>
            </a>
            <a
              href="https://github.com/dynawo/dynawo/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:border-[#00A3E0] hover:shadow-md transition"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
                <Lightbulb size={20} className="text-blue-600" />
              </div>
              <p className="mb-2 text-sm font-extrabold text-[#002B5C] group-hover:text-[#00A3E0] transition">Help wanted</p>
              <p className="text-[12px] leading-5 text-slate-500">
                Issues where the maintainers are actively looking for external contributors to take over.
              </p>
            </a>
            <a
              href="https://github.com/dynawo/dynawo/discussions"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:border-[#00A3E0] hover:shadow-md transition"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50">
                <MessageSquare size={20} className="text-purple-600" />
              </div>
              <p className="mb-2 text-sm font-extrabold text-[#002B5C] group-hover:text-[#00A3E0] transition">Discussions</p>
              <p className="text-[12px] leading-5 text-slate-500">
                Ask a question, share an idea, or connect with the community before opening a formal issue or PR.
              </p>
            </a>
          </div>
        </section>

        {/* Code of conduct notice */}
        <section className="mb-16">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 flex flex-col sm:flex-row sm:items-start gap-6">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#002B5C]/10">
              <Github size={24} className="text-[#002B5C]" />
            </div>
            <div>
              <p className="mb-2 text-sm font-extrabold text-[#002B5C]">Code of conduct</p>
              <p className="mb-4 text-sm leading-6 text-slate-500">
                Dynawo follows the{" "}
                <a href="https://www.contributor-covenant.org/version/1/4/code-of-conduct.html" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#00A3E0] hover:underline">
                  Contributor Covenant v1.4
                </a>. All participants — contributors, reviewers, and maintainers — are expected to
                uphold a welcoming and respectful environment. Instances of unacceptable behaviour
                can be reported to the project maintainers.
              </p>
              <a
                href="https://github.com/dynawo/dynawo/blob/master/CODE_OF_CONDUCT"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[12px] font-semibold text-[#00A3E0] hover:underline"
              >
                Read the full code of conduct →
              </a>
            </div>
          </div>
        </section>

        {/* Next steps */}
        <section>
          <h2 className="mb-6 text-xl font-extrabold text-[#002B5C]">Next steps</h2>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/contributing/development-setup"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-[#002B5C] shadow-sm hover:border-[#00A3E0] hover:text-[#00A3E0] transition"
            >
              Development setup →
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
