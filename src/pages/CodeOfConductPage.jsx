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
import { Heart, ThumbsUp, ThumbsDown, Shield, Globe, Gavel } from "lucide-react";

const positives = [
  "Using welcoming and inclusive language",
  "Being respectful of differing viewpoints and experiences",
  "Gracefully accepting constructive criticism",
  "Focusing on what is best for the community",
  "Showing empathy towards other community members",
];

const negatives = [
  "Use of sexualised language or imagery, and unwelcome sexual attention or advances",
  "Trolling, insulting or derogatory comments, and personal or political attacks",
  "Public or private harassment",
  "Publishing others' private information (physical or electronic address) without explicit permission",
  "Other conduct which could reasonably be considered inappropriate in a professional setting",
];

const sections = [
  {
    icon: Heart,
    title: "Our pledge",
    color: "text-pink-600", bg: "bg-pink-50", border: "border-pink-100",
    content: "In the interest of fostering an open and welcoming environment, we as contributors and maintainers pledge to making participation in our project and our community a harassment-free experience for everyone, regardless of age, body size, disability, ethnicity, gender identity and expression, level of experience, nationality, personal appearance, race, religion, or sexual identity and orientation.",
  },
  {
    icon: Shield,
    title: "Our responsibilities",
    color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-100",
    content: "Project maintainers are responsible for clarifying the standards of acceptable behaviour and are expected to take appropriate and fair corrective action in response to any instances of unacceptable behaviour. Project maintainers have the right and responsibility to remove, edit, or reject comments, commits, code, wiki edits, issues, and other contributions that are not aligned to this Code of Conduct, or to ban temporarily or permanently any contributor for other behaviours that they deem inappropriate, threatening, offensive, or harmful.",
  },
  {
    icon: Globe,
    title: "Scope",
    color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-100",
    content: "This Code of Conduct applies both within project spaces and in public spaces when an individual is representing the project or its community. Examples of representing a project or community include using an official project e-mail address, posting via an official social media account, or acting as an appointed representative at an online or offline event. Representation of a project may be further defined and clarified by project maintainers.",
  },
  {
    icon: Gavel,
    title: "Enforcement",
    color: "text-orange-600", bg: "bg-orange-50", border: "border-orange-100",
    content: "Instances of abusive, harassing, or otherwise unacceptable behaviour may be reported by contacting the project team. The project team will review and investigate all complaints, and will respond in a way that it deems appropriate to the circumstances. The project team is obligated to maintain confidentiality with regard to the reporter of an incident. Further details of specific enforcement policies may be posted separately. Project maintainers who do not follow or enforce the Code of Conduct in good faith may face temporary or permanent repercussions as determined by other members of the project's leadership.",
  },
];

export default function CodeOfConductPage() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-[#002B5C]">

      {/* Breadcrumb */}
      <div className="border-b border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-7xl px-8 py-3 text-[13px] text-slate-400">
          <Link to="/" className="hover:text-[#002B5C] transition">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-500">Contributing</span>
          <span className="mx-2">/</span>
          <span className="font-semibold text-[#002B5C]">Code of conduct</span>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-8 py-14">

        {/* Header */}
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-xs font-extrabold uppercase tracking-widest text-blue-500">Contributing</p>
          <h1 className="text-4xl font-extrabold leading-tight text-[#002B5C]">Code of conduct</h1>
          <p className="mt-5 text-base leading-7 text-slate-500">
            Dynawo follows the{" "}
            <a
              href="https://www.contributor-covenant.org/version/1/4/code-of-conduct.html"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#00A3E0] hover:underline"
            >
              Contributor Covenant v1.4
            </a>. All participants — contributors, reviewers, and maintainers — are expected to
            uphold a welcoming and respectful environment. Instances of unacceptable behaviour
            can be reported to the project maintainers.
          </p>
          <div className="mt-6">
            <a
              href="https://github.com/dynawo/dynawo/blob/master/CODE_OF_CONDUCT"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-[#002B5C] bg-white px-5 py-3 text-sm font-semibold text-[#002B5C] shadow-sm hover:bg-[#002B5C] hover:text-white transition"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              Read on GitHub
            </a>
          </div>
        </div>

        {/* Standards */}
        <section className="mb-16">
          <h2 className="mb-6 text-xl font-extrabold text-[#002B5C]">Our standards</h2>
          <div className="grid gap-5 lg:grid-cols-2">

            {/* Positive */}
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
              <div className="mb-4 flex items-center gap-2">
                <ThumbsUp size={20} className="text-emerald-600" />
                <p className="text-sm font-extrabold text-emerald-700">Examples of positive behaviour</p>
              </div>
              <ul className="space-y-3">
                {positives.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm leading-6 text-slate-600">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Negative */}
            <div className="rounded-2xl border border-red-200 bg-red-50 p-6">
              <div className="mb-4 flex items-center gap-2">
                <ThumbsDown size={20} className="text-red-600" />
                <p className="text-sm font-extrabold text-red-700">Unacceptable behaviour</p>
              </div>
              <ul className="space-y-3">
                {negatives.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm leading-6 text-slate-600">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Sections */}
        <section className="mb-16">
          <div className="grid gap-5 sm:grid-cols-2">
            {sections.map((s) => (
              <div key={s.title} className={`rounded-2xl border p-6 ${s.bg} ${s.border}`}>
                <div className="mb-3 flex items-center gap-2">
                  <s.icon size={20} className={s.color} />
                  <p className={`text-sm font-extrabold ${s.color}`}>{s.title}</p>
                </div>
                <p className="text-sm leading-7 text-slate-500">{s.content}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Attribution */}
        <section className="mb-16">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <p className="mb-1 text-xs font-extrabold uppercase tracking-widest text-slate-400">Attribution</p>
            <p className="mt-3 text-sm leading-7 text-slate-500">
              This Code of Conduct is adapted from the{" "}
              <a
                href="https://www.contributor-covenant.org"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#00A3E0] hover:underline"
              >
                Contributor Covenant
              </a>
              , version 1.4, available at{" "}
              <a
                href="https://www.contributor-covenant.org/version/1/4/code-of-conduct.html"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#00A3E0] hover:underline"
              >
                contributor-covenant.org/version/1/4/code-of-conduct.html
              </a>.
            </p>
          </div>
        </section>

        {/* Next steps */}
        <section>
          <h2 className="mb-6 text-xl font-extrabold text-[#002B5C]">Next steps</h2>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/contributing/how-to-contribute"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-[#002B5C] shadow-sm hover:border-[#00A3E0] hover:text-[#00A3E0] transition"
            >
              How to contribute →
            </Link>
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
