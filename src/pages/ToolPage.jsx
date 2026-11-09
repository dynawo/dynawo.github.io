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

import { Link, Redirect, useParams } from "react-router-dom";
import { BookOpen, ExternalLink, FolderOpen, MessageSquare } from "lucide-react";
import { tools, toolHref, examplesUrl, discussionsUrl } from "../data/tools";
import { DOCUMENTATION_PDF_URL } from "./GettingStartedPage";

const btnSecondary =
  "inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-[#002B5C] shadow-sm hover:border-[#00A3E0] hover:text-[#00A3E0] transition";

// Tool name shown as its wordmark logo when available, as text otherwise.
// Logos are 256x256 with wide empty margins: object-cover in a wide, short box crops them.
export function ToolName({ tool, size = "lg" }) {
  if (tool.logo) {
    const box = size === "lg" ? "h-[72px] w-64" : "h-10 w-36";
    return (
      <span className={`block overflow-hidden ${box}`}>
        <img src={tool.logo} alt={tool.name} className="h-full w-full object-cover" />
      </span>
    );
  }
  const text = size === "lg" ? "text-4xl leading-tight text-[#002B5C]" : `text-sm ${tool.color}`;
  return <span className={`font-extrabold ${text}`}>{tool.name}</span>;
}

export default function ToolPage() {
  const { slug } = useParams();
  const index = tools.findIndex((t) => t.slug === slug);
  if (index === -1) return <Redirect to="/overview/architecture" />;

  const tool = tools[index];
  const prev = tools[index - 1];
  const next = tools[index + 1];

  return (
    <div className="min-h-screen bg-white font-sans antialiased text-[#002B5C]">

      {/* Breadcrumb */}
      <div className="border-b border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-7xl px-8 py-3 text-[13px] text-slate-400">
          <Link to="/" className="hover:text-[#002B5C] transition">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-500">Tools</span>
          <span className="mx-2">/</span>
          <span className="font-semibold text-[#002B5C]">{tool.name}</span>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-8 py-14">

        {/* Page header */}
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-xs font-extrabold uppercase tracking-widest text-blue-500">Simulation tool</p>
          <div className="flex items-center gap-4">
            <span className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl border text-3xl ${tool.bg} ${tool.border} ${tool.color}`}>
              {tool.icon}
            </span>
            <div>
              <h1><ToolName tool={tool} /></h1>
              <p className={`text-base font-semibold ${tool.color}`}>{tool.tagline}</p>
            </div>
          </div>

          {(tool.status || tool.solver) && (
            <div className="mt-6 flex flex-wrap gap-2">
              {tool.status && (
                <span className="rounded-full bg-slate-100 px-3 py-1 text-[12px] font-semibold text-slate-600">
                  Status: {tool.status}
                </span>
              )}
              {tool.solver && (
                <span className="rounded-full bg-slate-100 px-3 py-1 text-[12px] font-semibold text-slate-600">
                  Solver: {tool.solver}
                </span>
              )}
            </div>
          )}

          {tool.description.map((para) => (
            <p key={para} className="mt-5 text-base leading-7 text-slate-500">{para}</p>
          ))}

          <div className="mt-6 flex flex-wrap gap-3">
            {tool.examplesPath && (
              <a
                href="#examples"
                className="inline-flex items-center gap-2 rounded-xl border border-[#00A3E0] bg-white px-5 py-3 text-sm font-semibold text-[#00A3E0] shadow-sm hover:bg-[#00A3E0] hover:text-white transition"
              >
                See the examples ↓
              </a>
            )}
            <a
              href={DOCUMENTATION_PDF_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-[#002B5C] bg-white px-5 py-3 text-sm font-semibold text-[#002B5C] shadow-sm hover:bg-[#002B5C] hover:text-white transition"
            >
              <BookOpen size={16} /> Documentation (PDF)
            </a>
            <a href={discussionsUrl(tool)} target="_blank" rel="noopener noreferrer" className={btnSecondary}>
              <MessageSquare size={16} /> {tool.discussionsCategory ? `${tool.name} discussions` : "GitHub Discussions"}
            </a>
          </div>
        </div>

        {/* Use cases */}
        <section className="mb-16">
          <h2 className="mb-6 text-xl font-extrabold text-[#002B5C]">Typical studies</h2>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tool.useCases.map((uc) => (
              <li key={uc} className={`flex items-start gap-3 rounded-2xl border p-5 text-sm leading-6 text-slate-600 ${tool.bg} ${tool.border}`}>
                <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${tool.color.replace("text-", "bg-")}`} />
                {uc}
              </li>
            ))}
          </ul>
        </section>

        {/* Examples */}
        <section id="examples" className="mb-16">
          <h2 className="mb-2 text-xl font-extrabold text-[#002B5C]">Examples</h2>
          {tool.examplesPath ? (
            <>
              <p className="mb-6 max-w-3xl text-sm leading-6 text-slate-500">
                {tool.examplesIntro} Each example contains all the required input files. They are shipped with the
                Dynawo release.
              </p>
              <div className="mb-6 flex flex-col divide-y divide-slate-100 overflow-hidden rounded-2xl border border-slate-200 bg-white">
                {tool.examples.map((ex) => (
                  <a
                    key={ex.name}
                    href={examplesUrl(tool, ex.path)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-4 px-6 py-4 transition hover:bg-slate-50"
                  >
                    <div className="min-w-0">
                      <p className={`text-[13px] font-semibold font-mono ${tool.color}`}>{ex.name}</p>
                      <p className="text-[12px] text-slate-500">{ex.desc}</p>
                    </div>
                    <ExternalLink size={14} className="shrink-0 text-slate-300 transition group-hover:text-[#00A3E0]" />
                  </a>
                ))}
              </div>
              <a
                href={examplesUrl(tool)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-[#002B5C] bg-[#002B5C] px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#003a7a] transition"
              >
                <FolderOpen size={16} /> All {tool.name} examples on GitHub
              </a>
            </>
          ) : (
            <div className="max-w-3xl rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-6 text-sm leading-6 text-slate-500">
              No public examples are available yet for {tool.name}: the tool is still in the research and development stage.
              To follow its progress or get involved, join the{" "}
              <a
                href={discussionsUrl(tool)}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#00A3E0] hover:underline"
              >
                GitHub Discussions
              </a>{" "}
              or <Link to="/about/contact" className="font-semibold text-[#00A3E0] hover:underline">contact the team</Link>.
            </div>
          )}
        </section>

        {/* Next steps */}
        <section>
          <h2 className="mb-6 text-xl font-extrabold text-[#002B5C]">Next steps</h2>
          <div className="flex flex-wrap gap-3">
            {prev && <Link to={toolHref(prev)} className={btnSecondary}>← {prev.name}</Link>}
            <Link to="/overview/architecture" className={btnSecondary}>Architecture & concepts</Link>
            <Link to="/overview/simulating" className={btnSecondary}>Simulating</Link>
            {next && <Link to={toolHref(next)} className={btnSecondary}>{next.name} →</Link>}
          </div>
        </section>

      </div>
    </div>
  );
}
