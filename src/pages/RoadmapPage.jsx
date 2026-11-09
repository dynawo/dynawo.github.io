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
import { CheckCircle2, Circle, Clock } from "lucide-react";

const STATUS = {
  done:        { label: "Done",        color: "text-emerald-700", bg: "bg-emerald-100", icon: CheckCircle2 },
  in_progress: { label: "In progress", color: "text-blue-700",    bg: "bg-blue-100",    icon: Clock        },
  planned:     { label: "Planned",     color: "text-slate-500",   bg: "bg-slate-100",   icon: Circle       },
};

function StatusBadge({ status }) {
  const s = STATUS[status];
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-extrabold ${s.color} ${s.bg}`}>
      <s.icon size={11} />
      {s.label}
    </span>
  );
}

// Sources: release notes v1.2.0 → v1.8.0, open "v2.0.0" milestone on GitHub, TSC reports.
// "since" = first release shipping the feature (shown as a badge).
const axes = [
  {
    num: "01",
    title: "Models development",
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-200",
    dot: "bg-blue-500",
    items: [
      {
        title: "WECC renewable and storage models",
        status: "done",
        since: "v1.3.0 → v1.8.0",
        detail: "Generic WECC photovoltaic and wind models (v1.3.0), REEC-C and battery energy storage systems (v1.7.0), then REGC A/B, mechanical and auxiliary models, converter-level zone 1 and protections (v1.8.0).",
      },
      {
        title: "IEC 61400-27 wind models",
        status: "done",
        since: "v1.3.0 → v1.7.0",
        detail: "IEC wind turbine type 4A/4B and wind power plant models validated against reference results, extended with the IEC 2015 wind power plant controls.",
      },
      {
        title: "Grid-forming and grid-following converters",
        status: "in_progress",
        detail: "Grid-forming and grid-following converter models, extended in v1.8.0 with the EPRI grid-forming inverter and distributed inverter-based generation models. Dynamic grid-following and grid-forming converters are under development.",
      },
      {
        title: "Protections and automata",
        status: "done",
        since: "v1.6.0 → v1.8.0",
        detail: "Distance protections, loss of synchronism, under-frequency load shedding, LVRT/HVRT protections, recloser relay and over-voltage automaton.",
      },
      {
        title: "Loads and network models",
        status: "done",
        since: "v1.7.0 → v1.8.0",
        detail: "Composite motor loads, frequency-dependent loads, phase-shifter and ratio tap-changer transformers, line fault and variable impedance fault models.",
      },
      {
        title: "Grid code simulations package",
        status: "done",
        since: "v1.8.0",
        detail: "Turnkey test cases for units connecting to the RTE transmission grid, following the French grid code requirements.",
      },
      {
        title: "Standard regulation models",
        status: "in_progress",
        since: "v1.7.0",
        detail: "Governors (GovSteamEU, GovHydro4, GovCT2) and IEEE base classes for voltage regulators, PSS and limiters are available; IEEE over- and under-excitation limiter examples are under development.",
      },
      {
        title: "New converter-based and HVDC models",
        status: "planned",
        detail: "IEC 63406 converter-based generating unit, IEC type 3 wind turbine, generic plant controller for renewables, REPC_C, and a generic HVDC model with independent controls on each converter side.",
      },
      {
        title: "Switch-off of Modelica bus models",
        status: "planned",
        detail: "Possibility to switch off a bus modelled in Modelica during the simulation.",
      },
      {
        title: "Modelica Standard Library 4.1.0",
        status: "planned",
        detail: "Migration of the Dynawo Modelica library to MSL 4.1.0.",
      },
    ],
  },
  {
    num: "02",
    title: "Test cases",
    color: "text-purple-600",
    bg: "bg-purple-50",
    border: "border-purple-200",
    dot: "bg-purple-500",
    items: [
      {
        title: "Examples package",
        status: "done",
        since: "v1.2.0",
        detail: "Self-contained simulation examples for DynaFlow, DynaWaltz and DynaSwing, shipped with every release.",
      },
      {
        title: "ENTSO-E controller test cases",
        status: "done",
        since: "v1.3.0",
        detail: "The three ENTSO-E controller test report cases (TestCase 1, 2, 3) integrated as examples.",
      },
      {
        title: "Nordic test system",
        status: "done",
        since: "v1.4.0 → v1.6.0",
        detail: "Long-term voltage stability benchmark, available both as a full Modelica model and as a Dynawo test case, including the voltage collapse scenario.",
      },
      {
        title: "IEEE and RVS benchmarks",
        status: "done",
        since: "v1.6.0 → v1.7.0",
        detail: "IEEE 14, 30, 57 and 118-bus systems and the RVS package; IEEE 57 and 118 also available fully in OpenModelica on the Dynawo Modelica library.",
      },
      {
        title: "Large-scale national and pan-European cases",
        status: "planned",
        detail: "Public release of large-scale transmission network test cases for benchmarking and research.",
      },
    ],
  },
  {
    num: "03",
    title: "Architecture & performance",
    color: "text-orange-600",
    bg: "bg-orange-50",
    border: "border-orange-200",
    dot: "bg-orange-500",
    items: [
      {
        title: "Contingency analysis & margin calculation",
        status: "done",
        since: "v1.3.0",
        detail: "Contingency analysis, load margin calculation and critical clearing time, with MPI support for parallel campaigns, in the dynawo-algorithms companion repository.",
      },
      {
        title: "Third-party upgrades",
        status: "done",
        since: "v1.6.0 → v1.7.0",
        detail: "Sundials 6.3.0, SuiteSparse 5.10.1 and powsybl-iidm4cpp v1.5.1; legacy IIDM library removed.",
      },
      {
        title: "Solver improvements",
        status: "done",
        since: "v1.8.0",
        detail: "IDA solver refactoring, derivatives solved during global initialisation, more accurate statistics and new debug options.",
      },
      {
        title: "Migration tooling",
        status: "done",
        since: "v1.6.0 → v1.8.0",
        detail: "Scripts to migrate existing input files to the latest release, rewritten in Python and callable from envDynawo.sh and dynawo.sh.",
      },
      {
        title: "Outputs and platforms",
        status: "done",
        since: "v1.7.0 → v1.8.0",
        detail: "HDF5 curves export, full final-state dump; Linux distribution built on Oracle Linux 8, Windows build based on Visual Studio 2022.",
      },
      {
        title: "Symbolic Jacobian for Modelica models",
        status: "in_progress",
        detail: "Use of the symbolic Jacobian generated by OpenModelica to speed up the simulation of stiff systems.",
      },
      {
        title: "OpenModelica 1.24",
        status: "in_progress",
        detail: "Upgrade of the Modelica compilation chain to OpenModelica 1.24.4.",
      },
      {
        title: "On-the-fly reconnection",
        status: "planned",
        detail: "Reconnection of network equipment during the simulation.",
      },
      {
        title: "Islanding management",
        status: "planned",
        detail: "Handling of network splitting into several electrical islands during the simulation.",
      },
      {
        title: "Multiple IIDM terminals per preassembled model",
        status: "planned",
        detail: "Possibility to map several IIDM terminals onto a single preassembled model.",
      },
      {
        title: "Third-party dependencies upgrade",
        status: "planned",
        detail: "Upgrade of the third-party libraries, in particular the IIDM library.",
      },
      {
        title: "Migration to C++14",
        status: "planned",
        detail: "Move the Dynawo C++ code base to the C++14 standard.",
      },
    ],
  },
  {
    num: "04",
    title: "Simulation tools",
    color: "text-cyan-600",
    bg: "bg-cyan-50",
    border: "border-cyan-200",
    dot: "bg-cyan-500",
    items: [
      {
        title: "DynaStream — real-time simulation",
        status: "in_progress",
        since: "v1.8.0",
        detail: "Real-time integration shipped in v1.8.0: interactive mode with on-demand state dump, updatable multipliers and discrete variables, JSON exporters. Development continues towards digital twin applications.",
      },
      {
        title: "DynaWave — quasi-EMT simulation",
        status: "in_progress",
        detail: "Research and development stage. A phasor-domain modelling approach for converter-dominated grids has been validated against EMT results as a proof of concept.",
      },
      {
        title: "Graphical user interface",
        status: "in_progress",
        detail: "Web interface to prepare, run and analyse Dynawo simulations without the command line, available in the dynawo-graphical-user-interface repository.",
      },
      {
        title: "DySym — short-circuit calculation",
        status: "in_progress",
        detail: "Research and development stage: short-circuit calculation adapted to power systems with a high share of power electronics.",
      },
    ],
  },
];

export default function RoadmapPage() {
  const doneCount    = axes.flatMap(a => a.items).filter(i => i.status === "done").length;
  const activeCount  = axes.flatMap(a => a.items).filter(i => i.status === "in_progress").length;
  const plannedCount = axes.flatMap(a => a.items).filter(i => i.status === "planned").length;

  return (
    <div className="min-h-screen bg-white font-sans antialiased text-[#002B5C]">

      {/* Breadcrumb */}
      <div className="border-b border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-7xl px-8 py-3 text-[13px] text-slate-400">
          <Link to="/" className="hover:text-[#002B5C] transition">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-500">About</span>
          <span className="mx-2">/</span>
          <span className="font-semibold text-[#002B5C]">Roadmap</span>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-8 py-14">

        {/* Header */}
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-xs font-extrabold uppercase tracking-widest text-blue-500">About</p>
          <h1 className="text-4xl font-extrabold leading-tight text-[#002B5C]">Roadmap</h1>
          <p className="mt-5 text-base leading-7 text-slate-500">
            The Dynawo roadmap is organised around four development axes: models, test cases,
            architecture, and the simulation tools of the suite. The latest release is{" "}
            <a href="https://github.com/dynawo/dynawo/releases/tag/v1.8.0" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#00A3E0] hover:underline">
              v1.8.0
            </a>{" "}
            (October 2026). Priorities are discussed openly in{" "}
            <a href="https://github.com/dynawo/dynawo/discussions" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#00A3E0] hover:underline">
              GitHub Discussions
            </a>{" "}
            and tracked as GitHub issues.
          </p>
        </div>

        {/* Summary counters */}
        <div className="mb-12 grid grid-cols-3 gap-4 max-w-lg">
          {[
            { label: "Completed",   count: doneCount,    ...STATUS.done        },
            { label: "In progress", count: activeCount,  ...STATUS.in_progress },
            { label: "Planned",     count: plannedCount, ...STATUS.planned     },
          ].map((s) => (
            <div key={s.label} className={`rounded-2xl border px-5 py-4 text-center ${s.bg} border-transparent`}>
              <p className={`text-3xl font-black ${s.color}`}>{s.count}</p>
              <p className={`text-[11px] font-extrabold uppercase tracking-widest mt-1 ${s.color}`}>{s.label}</p>
            </div>
          ))}
        </div>

        {/* Axes */}
        <div className="flex flex-col gap-12">
          {axes.map((axis) => (
            <section key={axis.num}>
              {/* Axis header */}
              <div className={`mb-6 flex items-center gap-3 rounded-2xl border px-6 py-4 ${axis.bg} ${axis.border}`}>
                <span className={`text-2xl font-black opacity-30 ${axis.color}`}>{axis.num}</span>
                <h2 className={`text-lg font-extrabold ${axis.color}`}>{axis.title}</h2>
                <span className="ml-auto text-[12px] text-slate-400 font-semibold">
                  {axis.items.filter(i => i.status === "done").length}/{axis.items.length} completed
                </span>
              </div>

              {/* Items */}
              <div className="relative ml-4 flex flex-col gap-0">
                {/* Vertical line */}
                <div className={`absolute left-0 top-3 bottom-3 w-0.5 ${axis.dot}`} style={{opacity: 0.2}} />

                {axis.items.map((item, idx) => (
                  <div key={item.title} className="relative flex items-start gap-6 pl-8 pb-6 last:pb-0">
                    {/* Dot */}
                    <div className={`absolute left-[-4px] top-[6px] h-2.5 w-2.5 rounded-full ring-2 ring-white ${
                      item.status === "done"        ? axis.dot :
                      item.status === "in_progress" ? "bg-blue-400" :
                      "bg-slate-300"
                    }`} />

                    {/* Card */}
                    <div className="flex-1 rounded-2xl border border-slate-100 bg-white px-6 py-4 shadow-sm">
                      <div className="mb-2 flex items-start justify-between gap-3">
                        <p className="text-sm font-extrabold text-[#002B5C] leading-snug">{item.title}</p>
                        <div className="flex shrink-0 items-center gap-2">
                          {item.since && (
                            <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-500 whitespace-nowrap">
                              {item.since}
                            </span>
                          )}
                          <StatusBadge status={item.status} />
                        </div>
                      </div>
                      <p className="text-[13px] leading-6 text-slate-500">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-16 rounded-2xl border border-slate-200 bg-slate-50 p-8 flex flex-col sm:flex-row sm:items-center gap-6">
          <div className="flex-1">
            <p className="mb-1 text-sm font-extrabold text-[#002B5C]">Suggest a feature or follow progress</p>
            <p className="text-sm leading-6 text-slate-500">
              Roadmap items are tracked as GitHub issues. Open a discussion to propose a new feature or upvote existing ones.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <a
              href="https://github.com/dynawo/dynawo/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-[#002B5C] bg-white px-5 py-3 text-sm font-semibold text-[#002B5C] shadow-sm hover:bg-[#002B5C] hover:text-white transition"
            >
              GitHub issues →
            </a>
            <a
              href="https://github.com/dynawo/dynawo/discussions"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-[#002B5C] shadow-sm hover:border-[#00A3E0] hover:text-[#00A3E0] transition"
            >
              Discussions →
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
