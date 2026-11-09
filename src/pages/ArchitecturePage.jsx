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
import { toolHref, toolByName } from "../data/tools";
import { GUI_PAGE_HREF } from "./GuiPage";
import { Layers, BookOpen, Cpu, Network, Settings, SlidersHorizontal, TrendingUp, Clock, AlertTriangle, Database } from "lucide-react";

const tools = [
  { name: "DynaFlow",  desc: "Steady-state calculations",       color: "text-emerald-500", bg: "bg-emerald-50", border: "border-emerald-200", icon: "⌬" },
  { name: "DySym",    desc: "Short-circuit calculations",       color: "text-red-500",     bg: "bg-red-50",     border: "border-red-200",     icon: "↯" },
  { name: "DynaWaltz",desc: "Long-term stability simulations",  color: "text-blue-600",    bg: "bg-blue-50",    border: "border-blue-200",    icon: "〜" },
  { name: "DynaSwing",desc: "Short-term stability simulations", color: "text-purple-600",  bg: "bg-purple-50",  border: "border-purple-200",  icon: "∿" },
  { name: "DynaWave", desc: "Quasi-EMT simulations",            color: "text-orange-500",  bg: "bg-orange-50",  border: "border-orange-200",  icon: "≋" },
];

const modelCategories = [
  { name: "Electrical Machines",  icon: "⚙", color: "text-blue-700",    bg: "bg-blue-50",    border: "border-blue-200" },
  { name: "Network",              icon: "⌁", color: "text-slate-600",   bg: "bg-slate-50",   border: "border-slate-200" },
  { name: "Controls",             icon: "◎", color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-200" },
  { name: "Power Electronics",    icon: "⏦", color: "text-purple-600",  bg: "bg-purple-50",  border: "border-purple-200" },
  { name: "Renewable Energy",     icon: "⊛", color: "text-orange-500",  bg: "bg-orange-50",  border: "border-orange-200" },
];

const solvers = [
  { name: "Simplified solver", tag: "Performance", desc: "A fast, simplified solver designed for large-scale studies where computational efficiency is the priority.", color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-200" },
  { name: "IDA solver",        tag: "Accuracy",    desc: "An implicit differential-algebraic solver for stiff systems, optimized for an accurate simulation of dynamic transients.", color: "text-blue-700",   bg: "bg-blue-50",    border: "border-blue-200" },
];

const principles = [
  { icon: Layers,  title: "Separation of models and solvers", desc: "Models and solvers are strictly decoupled — any solver can be combined with any selection of models, enabling flexible study configurations.", color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-100" },
  { icon: BookOpen, title: "Standard Modelica language", desc: "Models are written in standard Modelica, making them portable across simulation environments and understandable by domain experts.", color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-100" },
  { icon: Cpu,     title: "High performance simulation core", desc: "Built in C++, the engine delivers strong performance and scales well to large power system models.", color: "text-purple-600", bg: "bg-purple-50", border: "border-purple-100" },
  { icon: Network, title: "IIDM network format", desc: "Dynawo uses IIDM (from the PowSyBl ecosystem) as its network input format, ensuring seamless interoperability with the broader PowSyBl toolchain.", color: "text-orange-500", bg: "bg-orange-50", border: "border-orange-100" },
];

export default function ArchitecturePage() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-[#002B5C]">

      {/* Breadcrumb */}
      <div className="border-b border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-7xl px-8 py-3 text-[13px] text-slate-400">
          <Link to="/" className="hover:text-[#002B5C] transition">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-500">Overview</span>
          <span className="mx-2">/</span>
          <span className="font-semibold text-[#002B5C]">Architecture & concepts</span>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-8 py-14">

        {/* Page header */}
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-xs font-extrabold uppercase tracking-widest text-blue-500">Overview</p>
          <h1 className="text-4xl font-extrabold leading-tight text-[#002B5C]">Architecture & concepts</h1>
        </div>

        {/* Design principles */}
        <section className="mb-16">
          <h2 className="mb-6 text-xl font-extrabold text-[#002B5C]">Design principles</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((p) => (
              <div key={p.title} className={`rounded-2xl border p-6 ${p.bg} ${p.border}`}>
                <span className={`mb-3 block ${p.color}`}><p.icon size={24} /></span>
                <p className={`mb-2 text-sm font-extrabold ${p.color}`}>{p.title}</p>
                <p className="text-sm leading-6 text-slate-500">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* I/O diagram */}
        <section className="mb-16">
          <h2 className="mb-2 text-xl font-extrabold text-[#002B5C]">Inputs & outputs</h2>

          <div className="flex flex-col items-center">

            {/* Inputs */}
            <div className="w-full max-w-4xl mb-1">
              <p className="mb-2 text-[11px] font-extrabold uppercase tracking-widest text-slate-400">Inputs</p>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
                {[
                  { icon: Settings,          label: "Jobs file",      sublabel: "Simulation settings: solver, time range, network file references, output configuration.", color: "text-blue-700",    bg: "bg-blue-50",    border: "border-blue-200" },
                  { icon: Network,           label: "Network file",   sublabel: "Static description of the grid: topology, equipment parameters, in PowSyBl IIDM format.", color: "text-emerald-700", bg: "bg-emerald-50", border: "border-emerald-200" },
                  { icon: Layers,            label: "Dynamic models", sublabel: "Maps Modelica models to static network components and defines their interconnections.",     color: "text-purple-700",  bg: "bg-purple-50",  border: "border-purple-200" },
                  { icon: SlidersHorizontal, label: "Parameters",     sublabel: "Numerical parameters for each model instance (gains, time constants, rated values…).",     color: "text-orange-600",  bg: "bg-orange-50",  border: "border-orange-200" },
                  { icon: TrendingUp,        label: "Curves request", sublabel: "List of variables to export as time-domain curves.",                                        color: "text-sky-600",     bg: "bg-sky-50",     border: "border-sky-200" },
                ].map((inp) => (
                  <div key={inp.label} className={`flex flex-col gap-2 rounded-2xl border px-4 py-4 ${inp.bg} ${inp.border}`}>
                    <span className={inp.color}><inp.icon size={18} /></span>
                    <p className={`text-sm font-extrabold ${inp.color}`}>{inp.label}</p>
                    <p className="text-[11px] leading-4 text-slate-500">{inp.sublabel}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Connector → engine */}
            <div className="grid grid-cols-5 gap-3 w-full max-w-4xl" aria-hidden="true">
              {[0,1,2,3,4].map((i) => (
                <div key={i} className="flex justify-center"><div className="w-0.5 h-5 bg-slate-300" /></div>
              ))}
            </div>
            <div className="w-full max-w-4xl flex justify-center" aria-hidden="true">
              <div className="h-px bg-slate-300" style={{width: "80%"}} />
            </div>
            <div className="flex justify-center" aria-hidden="true">
              <div className="w-0.5 h-5 bg-slate-300" />
            </div>

            {/* Engine */}
            <div className="flex items-center gap-3 rounded-2xl border-2 border-[#00A3E0] bg-white px-10 py-5 shadow-md">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-[#00A3E0]/10">
                <img src="/dynawo-logo.svg" alt="" className="h-7 w-7 object-contain" />
              </div>
              <div>
                <p className="text-sm font-extrabold text-[#002B5C]">Dynawo engine</p>
                <p className="text-[11px] text-slate-400">Time-domain simulation</p>
              </div>
            </div>

            {/* Connector → outputs */}
            <div className="flex justify-center" aria-hidden="true">
              <div className="w-0.5 h-5 bg-slate-300" />
            </div>
            <div className="w-full max-w-4xl flex justify-center" aria-hidden="true">
              <div className="h-px bg-slate-300" style={{width: "75%"}} />
            </div>
            <div className="grid grid-cols-4 gap-3 w-full max-w-4xl" aria-hidden="true">
              {[0,1,2,3].map((i) => (
                <div key={i} className="flex justify-center"><div className="w-0.5 h-5 bg-slate-300" /></div>
              ))}
            </div>

            {/* Outputs */}
            <div className="w-full max-w-4xl">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  { icon: TrendingUp,    label: "Output curves",   sublabel: "Time-domain evolution of requested variables at each time step.",                          color: "text-blue-700",    bg: "bg-blue-50",    border: "border-blue-200" },
                  { icon: Clock,         label: "Events timeline", sublabel: "Chronological list of events: connections, disconnections, automata trips.",               color: "text-emerald-700", bg: "bg-emerald-50", border: "border-emerald-200" },
                  { icon: AlertTriangle, label: "Constraints",     sublabel: "Network constraints violated during the simulation (voltage, current, power limits).", color: "text-red-600",     bg: "bg-red-50",     border: "border-red-200" },
                  { icon: Database,      label: "Final state",     sublabel: "Static and dynamic network state at end of simulation.", color: "text-orange-600",  bg: "bg-orange-50",  border: "border-orange-200" },
                ].map((out) => (
                  <div key={out.label} className={`flex flex-col gap-2 rounded-2xl border px-4 py-4 ${out.bg} ${out.border}`}>
                    <span className={out.color}><out.icon size={18} /></span>
                    <p className={`text-sm font-extrabold ${out.color}`}>{out.label}</p>
                    <p className="text-[11px] leading-4 text-slate-500">{out.sublabel}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* Simulation tools detail */}
        <section className="mb-16">
          <h2 className="mb-2 text-xl font-extrabold text-[#002B5C]">Simulation tools</h2>
          <p className="mb-6 text-sm leading-6 text-slate-500">
            Each tool targets a specific class of power system study, combining a tailored selection of models and solver.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "DynaFlow", icon: "⌬", color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-200",
                desc: "Steady-state calculations via a simplified time-domain simulation, guaranteeing that the solution satisfies all model equations. Used operationally at RTE for real-time operations and planning studies.",
              },
              {
                name: "DynaWaltz", icon: "〜", color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-200",
                desc: "Long-term stability simulations using the simplified solver, which filters out fast dynamics and focuses on slow phenomena such as tap-changers, load restoration, and voltage collapse. The most mature tool of the suite — used operationally for voltage stability studies.",
              },
              {
                name: "DynaSwing", icon: "∿", color: "text-purple-600", bg: "bg-purple-50", border: "border-purple-200",
                desc: "Short-term stability simulations using the IDA solver. Combines Modelica dynamic models with an accurate implicit DAE solver to capture transient behaviour and inter-machine oscillations in the seconds following a system event. On the verge of operational deployment.",
              },
              {
                name: "DynaStream", icon: <Clock size={22} />, color: "text-cyan-600", bg: "bg-cyan-50", border: "border-cyan-200",
                desc: "Real-time simulation for power system digital twins and hardware-in-the-loop applications. Enables continuous synchronization with live operational data for real-time decision support. Currently under development.",
              },
              {
                name: "DySym", icon: "↯", color: "text-red-600", bg: "bg-red-50", border: "border-red-200",
                desc: "Short-circuit calculations adapted to modern power systems with high penetration of power-electronics-based components. Currently in the research and development stage.",
              },
              {
                name: "DynaWave", icon: "≋", color: "text-orange-500", bg: "bg-orange-50", border: "border-orange-200",
                desc: "Quasi-EMT simulations for grids with high penetration of power-electronics (converters, HVDC links, renewables). More detailed than classical phasor-domain tools, yet less complex than full electromagnetic transient simulation. Currently in the research and development stage.",
              },
            ].map((t) => (
              <Link key={t.name} to={toolHref(toolByName(t.name))} className={`group flex flex-col rounded-2xl border p-6 transition hover:shadow-md ${t.bg} ${t.border}`}>
                <div className="mb-3 flex items-center gap-2">
                  <span className={`text-2xl ${t.color}`}>{t.icon}</span>
                  <span className={`text-base font-extrabold ${t.color}`}>{t.name}</span>
                </div>
                <p className="text-sm leading-6 text-slate-600">{t.desc}</p>
                <span className={`mt-4 text-sm font-semibold ${t.color}`}>
                  Learn more & examples <span className="inline-block transition group-hover:translate-x-1">→</span>
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Companion projects */}
        <section className="mb-16">
          <h2 className="mb-2 text-xl font-extrabold text-[#002B5C]">Companion projects</h2>
          <p className="mb-6 text-sm leading-6 text-slate-500">
            Three satellite projects extend the capabilities of the core Dynawo suite.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="mb-2 text-base font-extrabold text-[#002B5C]">Dynawo-algorithms</p>
              <p className="text-sm leading-6 text-slate-500">
                Adds advanced study workflows on top of the Dynawo engine:{" "}
                <strong className="text-[#002B5C]">contingency analysis</strong>,{" "}
                <strong className="text-[#002B5C]">load margin calculation</strong>, and{" "}
                <strong className="text-[#002B5C]">critical clearing time</strong> computation.
                Supports distributed computing via MPI for large-scale parallel campaigns. Used operationally.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="mb-2 text-base font-extrabold text-[#002B5C]">DynaFlow Launcher</p>
              <p className="text-sm leading-6 text-slate-500">
                Generates all DynaFlow input files automatically from a{" "}
                <strong className="text-[#002B5C]">single IIDM network file</strong>, applying
                predefined modelling rules to build the jobs, dynamic models, and parameter files.
              </p>
            </div>
            <Link to={GUI_PAGE_HREF} className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-[#00A3E0] hover:shadow-md">
              <p className="mb-2 text-base font-extrabold text-[#002B5C]">Dynawo GUI</p>
              <p className="text-sm leading-6 text-slate-500">
                A <strong className="text-[#002B5C]">web interface</strong> to prepare, run and analyse
                Dynawo simulations without the command line: upload input files, explore the network,
                edit parameters and inspect the output curves.
              </p>
              <span className="mt-4 text-sm font-semibold text-[#00A3E0]">
                Learn more <span className="inline-block transition group-hover:translate-x-1">→</span>
              </span>
            </Link>
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
              Modelling →
            </Link>
            <Link
              to="/overview/simulating"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-[#002B5C] shadow-sm hover:border-[#00A3E0] hover:text-[#00A3E0] transition"
            >
              Simulating →
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
