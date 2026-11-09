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

import { Clock } from "lucide-react";

const EXAMPLES_BASE_URL = "https://github.com/dynawo/dynawo/tree/master/examples";

/*
 * Single source of truth for the simulation tools pages (/tools/:slug).
 * - examplesPath: folder under dynawo/examples on GitHub (null if no public examples yet)
 * - examples[].path: sub-folder under examplesPath
 * - logo: wordmark in public/tools, shown instead of the name (falls back to the name as text when missing)
 * - discussionsCategory: slug of the tool's GitHub Discussions category, if one exists
 */
export const tools = [
  {
    slug: "dynaflow",
    logo: "/tools/DynaFlow.png",
    discussionsCategory: "dynaflow",
    name: "DynaFlow",
    tagline: "Steady-state calculations",
    icon: "⌬",
    color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-200",
    status: "Operational",
    solver: "Simplified solver",
    description: [
      "DynaFlow computes the steady state of a power system through a simplified time-domain simulation. Instead of solving static load-flow equations only, it lets the system evolve until it settles, which guarantees that the solution satisfies all model equations — including the behaviour of controls and automata.",
      "It is used operationally at RTE for real-time operations and planning studies.",
    ],
    useCases: [
      "Load-flow calculations including controls and automata",
      "N-1 security analysis",
    ],
    examplesPath: "DynaFlow",
    examplesIntro: "Steady-state examples on standard benchmark networks, plus illustrative cases highlighting HVDC and phase-shifter controls.",
    examples: [
      { name: "IEEE14 — DisconnectLine", desc: "14-bus network, line disconnection", path: "IEEE14/IEEE14_DisconnectLine" },
      { name: "WSCC9", desc: "9-bus network, line disconnection", path: "WSCC9" },
      { name: "LoadRestoration", desc: "Load restoration after a fault", path: "IllustrativeExamples/LoadRestoration" },
      { name: "PhaseShifters", desc: "Phase-shifting transformer control", path: "IllustrativeExamples/PhaseShifters" },
      { name: "HVDC_CLA", desc: "HVDC link with current limiter automaton", path: "IllustrativeExamples/HVDC_CLA" },
      { name: "HVDC_PhaseShifter", desc: "HVDC combined with phase-shifter", path: "IllustrativeExamples/HVDC_PhaseShifter" },
    ],
  },
  {
    slug: "dynawaltz",
    logo: "/tools/DynaWaltz.png",
    discussionsCategory: "dynawaltz",
    name: "DynaWaltz",
    tagline: "Long-term stability simulations",
    icon: "〜",
    color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-200",
    status: "Operational",
    solver: "Simplified solver",
    description: [
      "DynaWaltz performs long-term stability simulations. It relies on the simplified solver, which filters out fast dynamics and advances with large time steps to focus on slow phenomena such as tap-changers, load restoration and voltage collapse.",
      "It is the most mature tool of the suite and is used operationally for voltage stability studies.",
    ],
    useCases: [
      "Voltage stability studies",
      "Tap-changer and load restoration dynamics",
      "Cascading events over several minutes",
      "N-k security analysis",
      "Load margin calculation",
    ],
    examplesPath: "DynaWaltz",
    examplesIntro: "Long-term stability examples using the simplified solver, including the Nordic test system voltage collapse scenario.",
    examples: [
      { name: "IEEE14", desc: "Cascading line trippings and generator disconnections on IEEE 14-bus", path: "IEEE14" },
      { name: "IEEE57", desc: "Generator disconnection on IEEE 57-bus", path: "IEEE57" },
      { name: "Nordic", desc: "Fault, line tripping and voltage collapse", path: "Nordic" },
      { name: "NordicTCB", desc: "Nordic system with a transformer circuit breaker", path: "NordicTCB" },
    ],
  },
  {
    slug: "dynaswing",
    logo: "/tools/DynaSwing.png",
    discussionsCategory: "dynaswing",
    name: "DynaSwing",
    tagline: "Short-term stability simulations",
    icon: "∿",
    color: "text-purple-600", bg: "bg-purple-50", border: "border-purple-200",
    status: "On the verge of operational deployment",
    solver: "IDA solver",
    description: [
      "DynaSwing performs short-term stability simulations. It combines Modelica dynamic models with the IDA implicit DAE solver to accurately capture transient behaviour and inter-machine oscillations in the seconds following a system event.",
    ],
    useCases: [
      "Transient (rotor angle) stability",
      "Fault ride-through and controller tuning",
      "Grid-forming converters and renewables dynamic behaviour",
    ],
    examplesPath: "DynaSwing",
    examplesIntro: "Short-term stability examples using the IDA solver, covering classical benchmarks, grid-forming converters and standard renewables models.",
    examples: [
      { name: "Kundur Example 13", desc: "Set-point, VR, VR+PSS variants", path: "Kundur_Example13" },
      { name: "ENTSOE TestCase 1–3", desc: "ENTSOE controller test report cases", path: "ENTSOE" },
      { name: "IEEE14 — Fault", desc: "Three-phase fault on IEEE 14-bus", path: "IEEE14" },
      { name: "IEEE57", desc: "Three-phase fault on IEEE 57-bus", path: "IEEE57" },
      { name: "WSCC9", desc: "Three-phase fault on WSCC 9-bus", path: "WSCC9" },
      { name: "SingleMachineSystem", desc: "Electronic load, α-β motor, synchronous machine", path: "SingleMachineSystem" },
      { name: "GridForming — EPRI", desc: "Grid-forming converter EPRI benchmark", path: "GridForming" },
      { name: "GridForming_GridFollowing", desc: "Faults, line disconnection and steps with grid-forming and grid-following converters", path: "GridForming_GridFollowing" },
      { name: "IEC Wind", desc: "IEC 61400-27 wind turbine models", path: "IEC" },
      { name: "WECC Wind / PV / BESS", desc: "WECC generic wind, PV and battery storage models", path: "WECC" },
    ],
  },
  {
    slug: "dynastream",
    logo: "/tools/DynaStream.png",
    name: "DynaStream",
    tagline: "Real-time simulation",
    icon: <Clock size={22} />,
    color: "text-cyan-600", bg: "bg-cyan-50", border: "border-cyan-200",
    status: "Under development",
    solver: null,
    description: [
      "DynaStream runs Dynawo simulations in real time, for power system digital twins and hardware-in-the-loop applications. It enables continuous synchronization with live operational data for real-time decision support.",
    ],
    useCases: [
      "Power system digital twins",
      "Hardware-in-the-loop testing",
      "Real-time decision support",
    ],
    examplesPath: "RT",
    examplesIntro: "Real-time examples on the Nordic test system, together with Python testing tools to exchange data with a running simulation.",
    examples: [
      { name: "Nordic", desc: "Nordic test system run with an internal or an external clock", path: "Nordic" },
      { name: "rt-testing-tools", desc: "Python ZeroMQ client, server and subscriber scripts for real-time testing", path: "rt-testing-tools" },
    ],
  },
  {
    slug: "dysym",
    logo: "/tools/DySym.png",
    name: "DySym",
    tagline: "Short-circuit calculations",
    icon: "↯",
    color: "text-red-600", bg: "bg-red-50", border: "border-red-200",
    status: "Research & development",
    solver: null,
    description: [
      "DySym performs short-circuit calculations adapted to modern power systems with a high penetration of power-electronics-based components, whose fault contribution cannot be represented by classical methods.",
    ],
    useCases: [
      "Short-circuit current calculations",
      "Systems with high penetration of power electronics",
    ],
    examplesPath: null,
    examples: [],
  },
  {
    slug: "dynawave",
    logo: "/tools/DynaWave.png",
    name: "DynaWave",
    tagline: "Quasi-EMT simulations",
    icon: "≋",
    color: "text-orange-500", bg: "bg-orange-50", border: "border-orange-200",
    status: "Research & development",
    solver: null,
    description: [
      "DynaWave performs quasi-EMT simulations for grids with a high penetration of power electronics (converters, HVDC links, renewables). It is more detailed than classical phasor-domain tools, yet less complex than full electromagnetic transient simulation.",
    ],
    useCases: [
      "Converter-dominated grids",
      "HVDC links and renewables interactions",
      "Phenomena beyond the reach of phasor-domain simulation",
    ],
    examplesPath: null,
    examples: [],
  },
];

export function toolHref(tool) {
  return `/tools/${tool.slug}`;
}

export function toolByName(name) {
  return tools.find((t) => t.name === name);
}

// Tool-specific GitHub Discussions category when it exists, general Discussions otherwise.
export function discussionsUrl(tool) {
  const base = "https://github.com/dynawo/dynawo/discussions";
  return tool.discussionsCategory ? `${base}/categories/${tool.discussionsCategory}` : base;
}

export function examplesUrl(tool, subPath) {
  const base = `${EXAMPLES_BASE_URL}/${tool.examplesPath}`;
  return subPath ? `${base}/${subPath}` : base;
}
