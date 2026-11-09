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
import { Mail, Bug, MessageSquare, Lightbulb, Users } from "lucide-react";

const channels = [
  {
    icon: Mail,
    title: "Email",
    color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-100",
    desc: "For general enquiries, partnership requests, or anything not suited to a public forum.",
    action: { label: "rte-dynawo@rte-france.com", href: "mailto:rte-dynawo@rte-france.com" },
  },
  {
    icon: Bug,
    title: "Bug reports",
    color: "text-red-600", bg: "bg-red-50", border: "border-red-100",
    desc: "Found unexpected behaviour or a simulation crash? Open an issue on GitHub with a minimal reproducible case — input files, command used, and observed vs. expected output.",
    action: { label: "Open an issue on GitHub", href: "https://github.com/dynawo/dynawo/issues/new" },
  },
  {
    icon: MessageSquare,
    title: "GitHub Discussions",
    color: "text-purple-600", bg: "bg-purple-50", border: "border-purple-100",
    desc: "Ask a question, share your experience, or start a conversation with the community. Discussions are public and indexed — your question may help others.",
    action: { label: "Go to Discussions", href: "https://github.com/dynawo/dynawo/discussions" },
  },
  {
    icon: Users,
    title: "Technical Steering Committee (TSC)",
    color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-100",
    desc: "The TSC oversees the technical direction of the project. Meetings are public — agenda and notes are published on GitHub. Anyone can attend or submit a topic for discussion.",
    action: { label: "TSC meeting notes on GitHub", href: "https://github.com/dynawo/dynawo/discussions/categories/lfe-tsc" },
  },
  {
    icon: Lightbulb,
    title: "Feature requests",
    color: "text-orange-500", bg: "bg-orange-50", border: "border-orange-100",
    desc: "Have an idea for a new model, tool, or capability? Start a discussion or open a feature request issue to share it with the maintainers.",
    action: { label: "Start a discussion", href: "https://github.com/dynawo/dynawo/discussions/new" },
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-[#002B5C]">

      {/* Breadcrumb */}
      <div className="border-b border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-7xl px-8 py-3 text-[13px] text-slate-400">
          <Link to="/" className="hover:text-[#002B5C] transition">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-500">About</span>
          <span className="mx-2">/</span>
          <span className="font-semibold text-[#002B5C]">Contact</span>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-8 py-14">

        {/* Header */}
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-xs font-extrabold uppercase tracking-widest text-blue-500">About</p>
          <h1 className="text-4xl font-extrabold leading-tight text-[#002B5C]">Contact</h1>
          <p className="mt-5 text-base leading-7 text-slate-500">
            The best way to reach the Dynawo team depends on your question.
            Public channels like GitHub Issues and Discussions are preferred — they keep the conversation
            visible to the whole community and help others with similar questions.
          </p>
        </div>

        {/* Channels */}
        <section className="mb-16">
          <div className="grid gap-5 sm:grid-cols-2">
            {channels.map((c) => (
              <div key={c.title} className={`flex flex-col rounded-2xl border p-6 ${c.bg} ${c.border}`}>
                <div className="mb-3 flex items-center gap-2">
                  <c.icon size={20} className={c.color} />
                  <p className={`text-sm font-extrabold ${c.color}`}>{c.title}</p>
                </div>
                <p className="mb-5 flex-1 text-sm leading-6 text-slate-500">{c.desc}</p>
                <a
                  href={c.action.href}
                  target={c.action.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1.5 text-sm font-semibold ${c.color} hover:underline`}
                >
                  {c.action.label} →
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Response time notice */}
        <section>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <p className="mb-2 text-sm font-extrabold text-[#002B5C]">Response times</p>
            <p className="text-sm leading-7 text-slate-500">
              GitHub Issues and Discussions are monitored regularly by the maintainers. Email is best for
              sensitive or non-public matters — please allow a few business days for a response.
              For urgent production issues, please include a clear description and all relevant context in your first message.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}
