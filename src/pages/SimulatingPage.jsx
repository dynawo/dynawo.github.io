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
import { Settings, Network, Layers, SlidersHorizontal, TrendingUp, Clock, AlertTriangle, Database } from "lucide-react";
import { tools, toolHref } from "../data/tools";
import { ToolName } from "./ToolPage";
import { GUI_PAGE_HREF } from "./GuiPage";

const inputFiles = [
  {
    icon: Settings, label: ".jobs", title: "Jobs file",
    desc: "Orchestrates the simulation: references all other files, sets the solver, the time range, and the output directory.",
    color: "text-blue-700", bg: "bg-blue-50", border: "border-blue-200",
  },
  {
    icon: Network, label: ".iidm", title: "Network file",
    desc: "Static network topology in PowSyBl IIDM format: buses, lines, transformers, generators, loads.",
    color: "text-emerald-700", bg: "bg-emerald-50", border: "border-emerald-200",
  },
  {
    icon: Layers, label: ".dyd", title: "Dynamic models",
    desc: "Maps Modelica models to network components and declares connections between model pins.",
    color: "text-purple-700", bg: "bg-purple-50", border: "border-purple-200",
  },
  {
    icon: SlidersHorizontal, label: ".par", title: "Parameters",
    desc: "Numerical values for every model instance: gains, time constants, rated values, limits.",
    color: "text-orange-600", bg: "bg-orange-50", border: "border-orange-200",
  },
  {
    icon: TrendingUp, label: ".crv", title: "Curves request",
    desc: "List of model variables to export as time-domain curves (optional).",
    color: "text-sky-600", bg: "bg-sky-50", border: "border-sky-200",
  },
];

const outputFiles = [
  {
    icon: TrendingUp, label: "curves.csv", title: "Output curves",
    desc: "Time-domain evolution of all requested variables, one column per variable, exported at each solver step.",
    color: "text-blue-700", bg: "bg-blue-50", border: "border-blue-200",
  },
  {
    icon: Clock, label: "timeline.log", title: "Events timeline",
    desc: "Chronological list of discrete events during the simulation: connections, disconnections, automata trips.",
    color: "text-emerald-700", bg: "bg-emerald-50", border: "border-emerald-200",
  },
  {
    icon: AlertTriangle, label: "constraints.xml", title: "Constraints",
    desc: "Network constraints violated during the simulation: voltage, current and power limit breaches.",
    color: "text-red-600", bg: "bg-red-50", border: "border-red-200",
  },
  {
    icon: Database, label: "finalState/", title: "Final state",
    desc: "Static and dynamic network state at the end of the simulation, usable as initial state for a subsequent run.",
    color: "text-orange-600", bg: "bg-orange-50", border: "border-orange-200",
  },
];

const solvers = [
  {
    lib: "dynawo_SolverSIM", name: "Simplified solver",
    tag: "Performance",
    tagColor: "text-emerald-700", tagBg: "bg-emerald-100",
    desc: "Filters fast dynamics and advances with large time steps. Best suited for long-term stability studies (DynaWaltz) and steady-state calculations (DynaFlow) where computational speed matters.",
    color: "text-emerald-700", bg: "bg-emerald-50", border: "border-emerald-200",
  },
  {
    lib: "dynawo_SolverIDA", name: "IDA solver",
    tag: "Accuracy",
    tagColor: "text-blue-700", tagBg: "bg-blue-100",
    desc: "Implicit differential-algebraic solver for stiff systems. Captures fast transients accurately. Used for short-term stability (DynaSwing).",
    color: "text-blue-700", bg: "bg-blue-50", border: "border-blue-200",
  },
];

const steps = [
  {
    num: "01", title: "Prepare the network file",
    desc: "Export your network from a planning tool (PowSyBl, PowerFactory…) in IIDM format, or use one of the provided IEEE benchmark files.",
    color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-100",
  },
  {
    num: "02", title: "Describe the dynamic layer",
    desc: "Write the .dyd file to assign Modelica models to network components, and the .par file to set their parameters.",
    color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-100",
  },
  {
    num: "03", title: "Configure the jobs file",
    desc: "Set the solver, the simulation time window, reference the other input files, and configure the outputs directory.",
    color: "text-purple-600", bg: "bg-purple-50", border: "border-purple-100",
  },
  {
    num: "04", title: "Run and analyse",
    desc: "Launch the simulation with the Dynawo CLI. Inspect the output curves, events timeline and constraints in the outputs folder.",
    color: "text-orange-500", bg: "bg-orange-50", border: "border-orange-100",
  },
];

export default function SimulatingPage() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-[#002B5C]">

      {/* Breadcrumb */}
      <div className="border-b border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-7xl px-8 py-3 text-[13px] text-slate-400">
          <Link to="/" className="hover:text-[#002B5C] transition">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-500">Overview</span>
          <span className="mx-2">/</span>
          <span className="text-slate-500">Getting started</span>
          <span className="mx-2">/</span>
          <span className="font-semibold text-[#002B5C]">Simulating</span>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-8 py-14">

        {/* Header */}
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-xs font-extrabold uppercase tracking-widest text-blue-500">Getting started</p>
          <h1 className="text-4xl font-extrabold leading-tight text-[#002B5C]">Simulating</h1>
          <p className="mt-5 text-base leading-7 text-slate-500">
            A Dynawo simulation is described by a set of XML input files assembled under a{" "}
            <strong className="text-[#002B5C]">.jobs</strong> file. The engine reads these files,
            compiles the Modelica models, integrates the DAE system, and writes the results to an
            output directory. This page walks through each input, the solver choice, and the outputs.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#examples"
              className="inline-flex items-center gap-2 rounded-xl border border-[#00A3E0] bg-white px-5 py-3 text-sm font-semibold text-[#00A3E0] shadow-sm hover:bg-[#00A3E0] hover:text-white transition"
            >
              See the examples ↓
            </a>
            <a
              href="https://github.com/dynawo/dynawo/releases/latest"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-[#002B5C] bg-white px-5 py-3 text-sm font-semibold text-[#002B5C] shadow-sm hover:bg-[#002B5C] hover:text-white transition"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              Download Dynawo — GitHub releases
            </a>
          </div>
        </div>

        {/* Running */}
        <section className="mb-16">
          <h2 className="mb-2 text-xl font-extrabold text-[#002B5C]">Running a simulation</h2>
          <p className="mb-6 text-sm leading-6 text-slate-500">
            Dynawo simulations can be launched in four ways depending on your environment and workflow.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-6">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="mb-2 text-sm font-extrabold text-[#002B5C]">Graphical interface</p>
              <p className="mb-3 text-[12px] leading-5 text-slate-500">
                A web interface to upload input files, edit model and solver parameters, run the simulation
                and inspect the curves from your browser — no command line needed.
              </p>
              <Link
                to={GUI_PAGE_HREF}
                className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#00A3E0] hover:underline"
              >
                Dynawo GUI →
              </Link>
            </div>
            <div className="rounded-2xl border border-[#00A3E0]/30 bg-sky-50 p-5">
              <p className="mb-2 text-sm font-extrabold text-[#002B5C]">PowSyBl</p>
              <p className="mb-3 text-[12px] leading-5 text-slate-500">
                Dynawo is integrated as a dynamic simulation provider in the{" "}
                <a href="https://www.powsybl.org/" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#00A3E0] hover:underline">PowSyBl</a>{" "}
                Java framework. Use the <code className="rounded bg-white/70 px-1 font-mono text-[11px]">DynawoSimulation</code> API to run simulations programmatically from a Java or Groovy workflow.
              </p>
              <a
                href="https://www.powsybl.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#00A3E0] hover:underline"
              >
                PowSyBl documentation →
              </a>
            </div>
            <div className="rounded-2xl border border-[#00A3E0]/30 bg-sky-50 p-5">
              <p className="mb-2 text-sm font-extrabold text-[#002B5C]">PyPowSyBl</p>
              <p className="mb-3 text-[12px] leading-5 text-slate-500">
                The Python binding for PowSyBl exposes the same Dynawo simulation API.
                Suitable for scripted studies, parameter sweeps, and integration in data science workflows.
              </p>
              <a
                href="https://pypowsybl.readthedocs.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#00A3E0] hover:underline"
              >
                PyPowSyBl documentation →
              </a>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="mb-2 text-sm font-extrabold text-[#002B5C]">Dynawo CLI</p>
              <p className="mb-3 text-[12px] leading-5 text-slate-500">
                The native command-line interface. Reads the .jobs file and runs all defined simulation jobs sequentially.
              </p>
              <p className="mb-1 text-[10px] font-extrabold uppercase tracking-widest text-slate-400">Linux / macOS</p>
              <div className="mb-3 rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 overflow-x-auto">
                <pre className="text-[12px] leading-6 font-mono whitespace-pre">
                  <span className="text-emerald-400">dynawo.sh</span>
                  <span className="text-white"> jobs </span>
                  <span className="text-sky-300">simulation.jobs</span>
                </pre>
              </div>
              <p className="mb-1 text-[10px] font-extrabold uppercase tracking-widest text-slate-400">Windows</p>
              <div className="rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 overflow-x-auto">
                <pre className="text-[12px] leading-6 font-mono whitespace-pre">
                  <span className="text-emerald-400">dynawo.cmd</span>
                  <span className="text-white"> jobs </span>
                  <span className="text-sky-300">simulation.jobs</span>
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Workflow steps */}
        <section className="mb-16">
          <h2 className="mb-6 text-xl font-extrabold text-[#002B5C]">Simulation workflow</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.num} className={`rounded-2xl border p-6 ${s.bg} ${s.border}`}>
                <p className={`mb-3 text-3xl font-black leading-none ${s.color} opacity-30`}>{s.num}</p>
                <p className={`mb-2 text-sm font-extrabold ${s.color}`}>{s.title}</p>
                <p className="text-sm leading-6 text-slate-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Input files */}
        <section className="mb-16">
          <h2 className="mb-2 text-xl font-extrabold text-[#002B5C]">Input files</h2>
          <p className="mb-6 text-sm leading-6 text-slate-500">
            Every simulation requires four files; the curves request is optional.
            All paths in the .jobs file are relative to the directory that contains it.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {inputFiles.map((f) => (
              <div key={f.label} className={`rounded-2xl border p-5 ${f.bg} ${f.border}`}>
                <span className={`mb-3 block ${f.color}`}><f.icon size={20} /></span>
                <p className={`mb-1 text-xs font-extrabold uppercase tracking-widest ${f.color}`}>{f.label}</p>
                <p className="mb-2 text-sm font-extrabold text-[#002B5C]">{f.title}</p>
                <p className="text-[12px] leading-5 text-slate-500">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Solver choice */}
        <section className="mb-16">
          <h2 className="mb-2 text-xl font-extrabold text-[#002B5C]">Choosing a solver</h2>
          <p className="mb-6 text-sm leading-6 text-slate-500">
            Dynawo provides two solvers. The choice determines which simulation tool is effectively used
            and drives the accuracy/performance trade-off.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {solvers.map((s) => (
              <div key={s.name} className={`rounded-2xl border p-6 ${s.bg} ${s.border}`}>
                <div className="mb-3 flex items-center justify-between gap-2">
                  <p className={`text-sm font-extrabold ${s.color}`}>{s.name}</p>
                  <span className={`rounded-full px-3 py-0.5 text-[11px] font-extrabold ${s.tagColor} ${s.tagBg}`}>{s.tag}</span>
                </div>
                <p className={`mb-3 text-xs font-mono ${s.color} opacity-60`}>{s.lib}</p>
                <p className="text-sm leading-6 text-slate-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Outputs */}
        <section className="mb-16">
          <h2 className="mb-2 text-xl font-extrabold text-[#002B5C]">Outputs</h2>
          <p className="mb-6 text-sm leading-6 text-slate-500">
            All outputs are written to the directory specified in the .jobs file.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {outputFiles.map((f) => (
              <div key={f.label} className={`rounded-2xl border p-5 ${f.bg} ${f.border}`}>
                <span className={`mb-3 block ${f.color}`}><f.icon size={20} /></span>
                <p className={`mb-1 text-xs font-extrabold uppercase tracking-widest ${f.color}`}>{f.label}</p>
                <p className="mb-2 text-sm font-extrabold text-[#002B5C]">{f.title}</p>
                <p className="text-[12px] leading-5 text-slate-500">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Examples */}
        <section id="examples" className="mb-16">
          <h2 className="mb-2 text-xl font-extrabold text-[#002B5C]">Examples</h2>
          <p className="mb-6 text-sm leading-6 text-slate-500">
            The Dynawo release ships a set of ready-to-run examples for each simulation tool.
            Each example contains all the required input files and a reference output to validate your installation.
            Run any of them with{" "}
            <code className="rounded bg-slate-100 px-1.5 py-0.5 text-[12px] font-mono text-[#002B5C]">dynawo.sh jobs &lt;name&gt;.jobs</code>.
            Browse the examples of each tool on its dedicated page:
          </p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {tools.filter((t) => t.examples.length > 0).map((t) => (
              <Link
                key={t.slug}
                to={`${toolHref(t)}#examples`}
                className={`group flex flex-col gap-3 rounded-2xl border p-6 transition hover:shadow-md ${t.bg} ${t.border}`}
              >
                <div className="flex items-center gap-2">
                  <span className={`text-xl ${t.color}`}>{t.icon}</span>
                  <ToolName tool={t} size="sm" />
                </div>
                <p className="text-[12px] leading-5 text-slate-500">{t.examplesIntro}</p>
                <span className={`mt-auto text-sm font-semibold ${t.color}`}>
                  {t.examples.length} examples <span className="inline-block transition group-hover:translate-x-1">→</span>
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Next steps */}
        <section>
          <h2 className="mb-6 text-xl font-extrabold text-[#002B5C]">Next steps</h2>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/overview/modelling"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-[#002B5C] shadow-sm hover:border-[#00A3E0] hover:text-[#00A3E0] transition"
            >
              ← Modelling
            </Link>
            <Link
              to="/overview/architecture"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-[#002B5C] shadow-sm hover:border-[#00A3E0] hover:text-[#00A3E0] transition"
            >
              Architecture & concepts
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
