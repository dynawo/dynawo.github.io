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
import { ArrowRight, BookOpen, Download, Boxes, PlayCircle, MonitorPlay } from "lucide-react";
import { GUI_PAGE_HREF } from "./GuiPage";

export const DOCUMENTATION_PDF_URL =
  "https://github.com/dynawo/dynawo/releases/latest/download/DynawoDocumentation.pdf";

const paths = [
  {
    icon: Boxes,
    title: "Modelling",
    href: "/overview/modelling",
    desc: "Discover the Modelica models library: machines, network components, controls, power electronics and renewables — and how to use them inside or outside Dynawo.",
    color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-100",
  },
  {
    icon: PlayCircle,
    title: "Simulating",
    href: "/overview/simulating",
    desc: "Learn how to run time-domain simulations with the Dynawo tools, set up your first study and explore the provided examples.",
    color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-100",
  },
];

export default function GettingStartedPage() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-[#002B5C]">

      {/* Breadcrumb */}
      <div className="border-b border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-7xl px-8 py-3 text-[13px] text-slate-400">
          <Link to="/" className="hover:text-[#002B5C] transition">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-500">Overview</span>
          <span className="mx-2">/</span>
          <span className="font-semibold text-[#002B5C]">Getting started</span>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-8 py-14">

        {/* Page header */}
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-xs font-extrabold uppercase tracking-widest text-blue-500">Overview</p>
          <h1 className="text-4xl font-extrabold leading-tight text-[#002B5C]">Getting started</h1>
          <p className="mt-5 text-base leading-7 text-slate-500">
            Dynawo is built around two main contributions: a{" "}
            <strong className="text-[#002B5C]">Modelica models library</strong> and a{" "}
            <strong className="text-[#002B5C]">high-performance simulation engine</strong>.
            Choose where you want to start.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://github.com/dynawo/dynawo/releases/latest"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-[#002B5C] bg-white px-5 py-3 text-sm font-semibold text-[#002B5C] shadow-sm hover:bg-[#002B5C] hover:text-white transition"
            >
              <Download size={16} /> Download the latest release
            </a>
            <a
              href={DOCUMENTATION_PDF_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-[#00A3E0] bg-white px-5 py-3 text-sm font-semibold text-[#00A3E0] shadow-sm hover:bg-[#00A3E0] hover:text-white transition"
            >
              <BookOpen size={16} /> Documentation (PDF)
            </a>
          </div>
        </div>

        {/* Paths */}
        <div className="grid gap-6 md:grid-cols-2">
          {paths.map(({ icon: Icon, title, href, desc, color, bg, border }) => (
            <Link
              key={title}
              to={href}
              className={`group flex flex-col gap-4 rounded-2xl border p-8 transition hover:shadow-md ${bg} ${border}`}
            >
              <Icon size={32} className={color} />
              <h2 className="text-2xl font-extrabold text-[#002B5C]">{title}</h2>
              <p className="text-sm leading-6 text-slate-600">{desc}</p>
              <span className={`mt-auto inline-flex items-center gap-2 text-sm font-bold ${color}`}>
                Start here <ArrowRight size={16} className="transition group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>

        {/* Graphical interface */}
        <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-8 sm:flex-row sm:items-center">
          <MonitorPlay size={32} className="shrink-0 text-[#00A3E0]" />
          <div className="flex-1">
            <p className="mb-1 text-base font-extrabold text-[#002B5C]">Prefer a graphical interface?</p>
            <p className="text-sm leading-6 text-slate-500">
              The Dynawo GUI lets you upload input files, edit parameters, run simulations and inspect the
              curves from your browser. On Windows, it runs with Docker as the only prerequisite.
            </p>
          </div>
          <Link
            to={GUI_PAGE_HREF}
            className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-[#002B5C] bg-white px-5 py-3 text-sm font-semibold text-[#002B5C] shadow-sm hover:bg-[#002B5C] hover:text-white transition"
          >
            Discover the Dynawo GUI <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
