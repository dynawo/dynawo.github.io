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
import { Network, Zap, SlidersHorizontal, AlertTriangle, PlayCircle, LineChart, Github } from "lucide-react";

export const GUI_REPO_URL = "https://github.com/dynawo/dynawo-graphical-user-interface";
export const GUI_PAGE_HREF = "/tools/gui";

// Guided tour: screenshots in public/gui, in workflow order.
const tour = [
  {
    icon: Network, title: "Explore the network", img: "/gui/network-view.png",
    desc: "Load an IIDM network and browse it as a network area diagram or a single line diagram, with voltage levels and bus voltages. Focus on the neighbourhood of an element to navigate large grids.",
  },
  {
    icon: Zap, title: "Run load flows and DynaFlow", img: "/gui/load-flow.png",
    desc: "Compute a load flow with OpenLoadFlow, or a steady state with DynaFlow through DynaFlow Launcher — including N-1 security analysis — and open the result back in the network view.",
  },
  {
    icon: SlidersHorizontal, title: "Edit model parameters", img: "/gui/edit-parameters.png",
    desc: "Select a dynamic model and edit its parameters, with the values read from the IIDM file shown alongside. Shared parameter sets are flagged, and every change can be reverted. Solver parameters are edited the same way.",
  },
  {
    icon: AlertTriangle, title: "Define events", img: "/gui/events.png",
    desc: "Pick a network element, choose an event compatible with its type (for example a line disconnection), set its parameters and let the interface propose the connections to the network model.",
  },
  {
    icon: PlayCircle, title: "Run the simulation", img: "/gui/run-simulation.png",
    desc: "Choose the Dynawo version, launch the simulation and follow the console output. Every run is kept in a run history with its outputs.",
  },
  {
    icon: LineChart, title: "Compare runs", img: "/gui/compare-runs.png",
    desc: "Plot any curve from one or several runs on the same chart to compare scenarios, then download all input files and results as a single ZIP archive.",
  },
];

const codeBlock = "rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 overflow-x-auto";

export default function GuiPage() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-[#002B5C]">

      {/* Breadcrumb */}
      <div className="border-b border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-7xl px-8 py-3 text-[13px] text-slate-400">
          <Link to="/" className="hover:text-[#002B5C] transition">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-500">Tools</span>
          <span className="mx-2">/</span>
          <span className="font-semibold text-[#002B5C]">Graphical user interface</span>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-8 py-14">

        {/* Page header */}
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-xs font-extrabold uppercase tracking-widest text-blue-500">Tools</p>
          <h1 className="text-4xl font-extrabold leading-tight text-[#002B5C]">Dynawo graphical user interface</h1>
          <p className="mt-5 text-base leading-7 text-slate-500">
            A web interface to prepare, run and analyse Dynawo simulations without the command line.
            Upload your input files, explore the network, edit model and solver parameters, then run
            the simulation and inspect the curves — all from your browser.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={GUI_REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-[#002B5C] bg-[#002B5C] px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#003a7a] transition"
            >
              <Github size={16} /> Dynawo GUI on GitHub
            </a>
            <a
              href="#install"
              className="inline-flex items-center gap-2 rounded-xl border border-[#00A3E0] bg-white px-5 py-3 text-sm font-semibold text-[#00A3E0] shadow-sm hover:bg-[#00A3E0] hover:text-white transition"
            >
              Install ↓
            </a>
          </div>
        </div>

        {/* Guided tour */}
        <section className="mb-16">
          <h2 className="mb-2 text-xl font-extrabold text-[#002B5C]">What you can do</h2>
          <p className="mb-8 max-w-3xl text-sm leading-6 text-slate-500">
            Start by uploading your .jobs, .dyd, .par, .iidm and .crv files, then follow the workflow below.
            Click a screenshot to view it in full size.
          </p>
          <div className="flex flex-col gap-12">
            {tour.map((t, i) => (
              <div key={t.title} className="grid items-center gap-6 lg:grid-cols-[1fr_1.6fr] lg:gap-10">
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="mb-3 flex items-center gap-3">
                    <span className="text-[11px] font-black text-slate-300">{String(i + 1).padStart(2, "0")}</span>
                    <t.icon size={20} className="text-[#00A3E0]" />
                    <h3 className="text-base font-extrabold text-[#002B5C]">{t.title}</h3>
                  </div>
                  <p className="text-sm leading-6 text-slate-500">{t.desc}</p>
                </div>
                <a
                  href={t.img}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block overflow-hidden rounded-2xl border border-slate-200 shadow-md transition hover:shadow-xl"
                >
                  <img src={t.img} alt={`Dynawo GUI — ${t.title}`} loading="lazy" className="block w-full" />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Install */}
        <section id="install" className="mb-16">
          <h2 className="mb-2 text-xl font-extrabold text-[#002B5C]">Install and run</h2>
          <p className="mb-6 max-w-3xl text-sm leading-6 text-slate-500">
            See the{" "}
            <a href={GUI_REPO_URL} target="_blank" rel="noopener noreferrer" className="font-semibold text-[#00A3E0] hover:underline">README</a>{" "}
            for prerequisites, configuration options and troubleshooting.
          </p>
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="mb-2 text-sm font-extrabold text-[#002B5C]">Windows — with Docker</p>
              <p className="mb-4 text-[13px] leading-6 text-slate-500">
                Docker Desktop is the only prerequisite: Dynawo and DynaFlow Launcher are bundled in the image,
                so the application also works offline. Double-click{" "}
                <code className="rounded bg-slate-100 px-1 font-mono text-[12px]">start-dynawo-gui.bat</code>, then
                open <code className="rounded bg-slate-100 px-1 font-mono text-[12px]">http://localhost:8080</code>.
                The first start builds the images and takes a while; later starts take seconds.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="mb-2 text-sm font-extrabold text-[#002B5C]">Linux</p>
              <p className="mb-4 text-[13px] leading-6 text-slate-500">
                Requires Python ≥ 3.10 and Node.js ≥ 18. Install the dependencies, then start the application
                and open <code className="rounded bg-slate-100 px-1 font-mono text-[12px]">http://localhost:5173</code>.
              </p>
              <div className={codeBlock}>
                <pre className="text-[12px] leading-6 font-mono whitespace-pre text-white">
{`./install.sh
./run.sh`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Next steps */}
        <section>
          <h2 className="mb-6 text-xl font-extrabold text-[#002B5C]">Next steps</h2>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/overview/simulating"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-[#002B5C] shadow-sm hover:border-[#00A3E0] hover:text-[#00A3E0] transition"
            >
              Simulating →
            </Link>
            <Link
              to="/overview/getting-started"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-[#002B5C] shadow-sm hover:border-[#00A3E0] hover:text-[#00A3E0] transition"
            >
              Getting started
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
