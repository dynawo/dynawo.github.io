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
import { BookOpen, Layers, Puzzle, Code2, GitBranch, Download } from "lucide-react";

// Bump at each new Dynawo release (the zip URL is derived from it).
const MODELICA_LIBRARY_VERSION = "1.8.0";
const MODELICA_LIBRARY_ZIP_URL =
  `https://github.com/dynawo/dynawo/releases/download/v${MODELICA_LIBRARY_VERSION}/Dynawo_Modelica_library_v${MODELICA_LIBRARY_VERSION}.zip`;

const libraryPrinciples = [
  {
    icon: BookOpen, title: "Standard Modelica",
    desc: "All models are written in standard, unmodified Modelica. No proprietary extensions — the library can be opened, read and simulated with any Modelica-compliant tool.",
    color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-100",
  },
  {
    icon: Puzzle, title: "Composable",
    desc: "Equipment is assembled from elementary sub-models connected through typed pins. A generator, its AVR, governor, and protection relays are independent models wired together at configuration time.",
    color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-100",
  },
  {
    icon: Layers, title: "Solver-agnostic",
    desc: "Models carry no assumption about the numerical solver. The same model runs under the Dynawo simplified solver, the IDA solver, or any external Modelica environment.",
    color: "text-purple-600", bg: "bg-purple-50", border: "border-purple-100",
  },
  {
    icon: Code2, title: "Open and extensible",
    desc: "The library is open source. Users can add proprietary or experimental models following the same interface conventions without modifying the engine or the rest of the library.",
    color: "text-orange-500", bg: "bg-orange-50", border: "border-orange-100",
  },
  {
    icon: GitBranch, title: "Version-controlled",
    desc: "Models are plain text .mo files — they can be stored in version control alongside simulation configurations, ensuring full reproducibility of any study.",
    color: "text-sky-600", bg: "bg-sky-50", border: "border-sky-100",
  },
];

const modelCategories = [
  {
    icon: "⚙", name: "Electrical Machines",
    color: "text-blue-700", bg: "bg-blue-50", border: "border-blue-200",
    desc: "Synchronous generators at several levels of detail, asynchronous motors, and their associated regulators (AVR, PSS, governor) and protection systems.",
    examples: [
      "Synchronous machine",
      "Automatic voltage regulator (AVR) and power system stabiliser (PSS)",
      "Turbine-governor models",
      "Over-excitation and under-excitation limiters (OEL / UEL)",
    ],
  },
  {
    icon: "⌁", name: "Network",
    color: "text-slate-700", bg: "bg-slate-50", border: "border-slate-200",
    desc: "Dynamic models for network components, implementing a default behavior for the components of the IIDM network file.",
    examples: [
      "Tap-changer transformers",
      "Voltage-dependent loads",
      "VSC-HVDC links",
      "Shunt compensators",
    ],
  },
  {
    icon: "◎", name: "Controls & Automata",
    color: "text-emerald-700", bg: "bg-emerald-50", border: "border-emerald-200",
    desc: "System-level controls and protection automata that act on the grid in response to voltage or frequency events.",
    examples: [
      "Automatic load shedding schemes",
      "Current limite automaton",
      "Secondary voltage regulation",
    ],
  },
  {
    icon: "⏦", name: "Power Electronics",
    color: "text-purple-700", bg: "bg-purple-50", border: "border-purple-200",
    desc: "Converter-based equipment for transmission-level applications, with generic templates for both grid-forming and grid-following control strategies.",
    examples: [
      "VSC-HVDC",
      "STATCOM",
      "Grid-forming converter",
      "Grid-following converter",
    ],
  },
  {
    icon: "⊛", name: "Renewable Energy",
    color: "text-orange-600", bg: "bg-orange-50", border: "border-orange-200",
    desc: "Wind turbine and solar PV models conforming to the IEC 61400-27 and WECC standard templates.",
    examples: [
      "IEC wind turbine type 3 and type 4",
      "IEC photovoltaic plant model",
      "WECC wind and solar generic models",
      "Plant-level voltage and reactive power controllers",
    ],
  },
];

export default function ModellingPage() {
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
          <span className="font-semibold text-[#002B5C]">Modelling</span>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-8 py-14">

        {/* Page header */}
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-xs font-extrabold uppercase tracking-widest text-blue-500">Getting started</p>
          <h1 className="text-4xl font-extrabold leading-tight text-[#002B5C]">Modelica models library</h1>
          <p className="mt-5 text-base leading-7 text-slate-500">
            Dynawo ships a comprehensive open-source library of power system models written in{" "}
            <strong className="text-[#002B5C]">standard Modelica</strong>. Because it uses no
            proprietary extensions, the library is fully portable: models can be loaded, inspected,
            and simulated directly in any Modelica-compliant environment such as{" "}
            <a href="https://openmodelica.org/" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#00A3E0] hover:underline">OpenModelica</a>{" "},
            independently of the Dynawo simulation engine.
          </p>
          <p className="mt-4 text-base leading-7 text-slate-500">
            Within the Dynawo suite, models are compiled into C++ at build time and integrated into
            the simulation engine through a well-defined interface. The engine remains fully decoupled
            from the modelling layer: any solver can be used with any selection of models.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#examples"
              className="inline-flex items-center gap-2 rounded-xl border border-[#00A3E0] bg-white px-5 py-3 text-sm font-semibold text-[#00A3E0] shadow-sm hover:bg-[#00A3E0] hover:text-white transition"
            >
              Try the examples ↓
            </a>
            <a
              href={MODELICA_LIBRARY_ZIP_URL}
              download
              className="inline-flex items-center gap-2 rounded-xl border border-[#002B5C] bg-white px-5 py-3 text-sm font-semibold text-[#002B5C] shadow-sm hover:bg-[#002B5C] hover:text-white transition"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              Download the library (v{MODELICA_LIBRARY_VERSION}, .zip)
            </a>
          </div>
        </div>

        {/* Library principles */}
        <section className="mb-16">
          <h2 className="mb-6 text-xl font-extrabold text-[#002B5C]">Library design</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {libraryPrinciples.map((p) => (
              <div key={p.title} className={`rounded-2xl border p-6 ${p.bg} ${p.border}`}>
                <span className={`mb-3 block ${p.color}`}><p.icon size={22} /></span>
                <p className={`mb-2 text-sm font-extrabold ${p.color}`}>{p.title}</p>
                <p className="text-sm leading-6 text-slate-500">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Model categories */}
        <section className="mb-16">
          <h2 className="mb-2 text-xl font-extrabold text-[#002B5C]">Model categories</h2>
          <p className="mb-6 text-sm leading-6 text-slate-500">
            The library covers the full range of power system components across five categories.
            All models share the same interface conventions and can be composed freely.
          </p>
          <div className="grid gap-5 sm:grid-cols-2">
            {modelCategories.map((cat) => (
              <div key={cat.name} className={`rounded-2xl border p-6 ${cat.bg} ${cat.border}`}>
                <div className="mb-3 flex items-center gap-2">
                  <span className={`text-xl ${cat.color}`}>{cat.icon}</span>
                  <p className={`text-sm font-extrabold ${cat.color}`}>{cat.name}</p>
                </div>
                <p className="mb-4 text-sm leading-6 text-slate-500">{cat.desc}</p>
                <ul className="space-y-1.5">
                  {cat.examples.map((ex) => (
                    <li key={ex} className="flex items-start gap-2 text-[12px] text-slate-500">
                      <span className={`mt-1.5 h-1 w-1 rounded-full flex-shrink-0 ${cat.color.replace("text-", "bg-")}`} />
                      {ex}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Examples */}
        <section id="examples" className="mb-16">
          <h2 className="mb-2 text-xl font-extrabold text-[#002B5C]">Try the examples</h2>
          <p className="mb-6 text-sm leading-6 text-slate-500">
            The library ships with an <strong className="text-[#002B5C]">Examples</strong> package containing
            ready-to-run Modelica simulations covering all major model families. Each example is self-contained
            and can be opened and simulated directly in{" "}
            <a href="https://openmodelica.org/" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#00A3E0] hover:underline">OpenModelica</a>{" "}
            — no Dynawo engine required.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-6">
            {[
              {
                icon: "∿", color: "text-blue-700", bg: "bg-blue-50", border: "border-blue-200",
                name: "SMIB & ENTSOE",
                desc: "Single-machine infinite-bus cases: mechanical power steps, field voltage steps, governor and AVR tuning. Includes the three ENTSOE controller test cases.",
                cases: ["SMIBStepPm, SMIBStepEfdPm", "GovSteam / GovHydro / GovCt variants", "ENTSOE TestCase 1, 2, 3"],
              },
              {
                icon: "⌁", color: "text-slate-700", bg: "bg-slate-50", border: "border-slate-200",
                name: "IEEE benchmarks",
                desc: "Standard academic test networks: line disconnection, load variation, and no-event steady-state checks on 14-, 57-, and 118-bus systems.",
                cases: ["IEEE14 — line disconnection, CLA", "IEEE57 — HVDC variant included", "IEEE118 — large-scale no-event case"],
              },
              {
                icon: "〜", color: "text-emerald-700", bg: "bg-emerald-50", border: "border-emerald-200",
                name: "Nordic & RVS",
                desc: "Long-term voltage stability studies on the Nordic 32 and Reliability Test System (RVS 24-bus) benchmarks, with OLTCs, restorative loads and SVCs.",
                cases: ["Nordic — variable reference frequency", "RVS TestA — reactive load connection", "RVS TestB — SVC with/without load reset"],
              },
              {
                icon: "⏦", color: "text-purple-700", bg: "bg-purple-50", border: "border-purple-200",
                name: "Power electronics",
                desc: "Converter-based device test cases: VSC-HVDC link, grid-forming converters, and EPRI SMIB grid-forming benchmark.",
                cases: ["HVDC — VSC link between two infinite buses", "GridForming — grid-forming vs grid-following", "EpriSmib — EPRI grid-forming benchmark"],
              },
              {
                icon: "⊛", color: "text-orange-600", bg: "bg-orange-50", border: "border-orange-200",
                name: "Wind & Solar",
                desc: "IEC 61400-27 and WECC standard wind turbine and PV plant models under fault and steady-state conditions.",
                cases: ["IEC WT type 4A/4B (Neplan validation)", "WECC WTG type 3/4A/4B", "WECC PV current source & voltage source"],
              },
              {
                icon: "◎", color: "text-red-700", bg: "bg-red-50", border: "border-red-200",
                name: "Grid code simulations",
                desc: "Turnkey test cases for units connecting to the RTE transmission grid, following the French grid code connection requirements.",
                cases: ["Sheet I2 — fault ride-through", "Sheet I5/I6/I7 — reactive capability", "Sheet I10 — frequency response"],
              },
            ].map((g) => (
              <div key={g.name} className={`rounded-2xl border p-6 ${g.bg} ${g.border}`}>
                <div className="mb-3 flex items-center gap-2">
                  <span className={`text-xl ${g.color}`}>{g.icon}</span>
                  <p className={`text-sm font-extrabold ${g.color}`}>{g.name}</p>
                </div>
                <p className="mb-4 text-sm leading-6 text-slate-500">{g.desc}</p>
                <ul className="space-y-1">
                  {g.cases.map((c) => (
                    <li key={c} className="flex items-start gap-2 text-[12px] text-slate-500 font-mono">
                      <span className={`mt-1.5 h-1 w-1 rounded-full flex-shrink-0 ${g.color.replace("text-", "bg-")}`} />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://openmodelica.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-[#002B5C] shadow-sm hover:border-[#00A3E0] hover:text-[#00A3E0] transition"
            >
              OpenModelica (free)
            </a>
            <a
              href={MODELICA_LIBRARY_ZIP_URL}
              download
              className="inline-flex items-center gap-2 rounded-xl border border-[#002B5C] bg-[#002B5C] px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#003a7a] transition"
            >
              <Download size={16} /> Download the library (v{MODELICA_LIBRARY_VERSION}, .zip)
            </a>
            <a
              href="https://github.com/dynawo/dynawo/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-[#002B5C] bg-white px-5 py-3 text-sm font-semibold text-[#002B5C] shadow-sm hover:bg-[#002B5C] hover:text-white transition"
            >
              All releases →
            </a>
          </div>
        </section>

        {/* Next steps */}
        <section>
          <h2 className="mb-6 text-xl font-extrabold text-[#002B5C]">Next steps</h2>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/overview/architecture"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-[#002B5C] shadow-sm hover:border-[#00A3E0] hover:text-[#00A3E0] transition"
            >
              Architecture & concepts
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
