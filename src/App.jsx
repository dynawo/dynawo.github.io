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

import { useState, useRef, useEffect } from "react";
import { Switch, Route, Link, useLocation } from "react-router-dom";
import ArchitecturePage from "./pages/ArchitecturePage";
import ModellingPage from "./pages/ModellingPage";
import SimulatingPage from "./pages/SimulatingPage";
import HowToContributePage from "./pages/HowToContributePage";
import DevelopmentSetupPage from "./pages/DevelopmentSetupPage";
import CodeOfConductPage from "./pages/CodeOfConductPage";
import GovernancePage from "./pages/GovernancePage";
import PublicationsPage from "./pages/PublicationsPage";
import RoadmapPage from "./pages/RoadmapPage";
import ContactPage from "./pages/ContactPage";
import GettingStartedPage, { DOCUMENTATION_PDF_URL } from "./pages/GettingStartedPage";
import ToolPage from "./pages/ToolPage";
import GuiPage, { GUI_PAGE_HREF } from "./pages/GuiPage";
import { tools as toolPages, toolHref, toolByName } from "./data/tools";
import {
  ArrowRight,
  Github,
  BookOpen,
  ShieldCheck,
  Wind,
  Activity,
  Cpu,
  FlaskConical,
  Clock,
} from "lucide-react";
import heroBg from "../background.jpeg";

/* ═══════════════════════════════════════════════════════════════════════
   DATA
═══════════════════════════════════════════════════════════════════════ */

const tools = [
  {
    name: "DynaFlow",
    desc: "Steady-state calculations",
    color: "text-emerald-500",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    icon: "⌬",
  },
  {
    name: "DynaWaltz",
    desc: "Long-term stability simulations",
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-200",
    icon: "〜",
  },
  {
    name: "DynaSwing",
    desc: "Short-term stability simulations",
    color: "text-purple-600",
    bg: "bg-purple-50",
    border: "border-purple-200",
    icon: "∿",
  },
  {
    name: "DynaStream",
    desc: "Real-time simulation",
    color: "text-cyan-600",
    bg: "bg-cyan-50",
    border: "border-cyan-200",
    icon: <Clock size={22} />,
  },
  {
    name: "DySym",
    desc: "Short-circuit calculations",
    color: "text-red-500",
    bg: "bg-red-50",
    border: "border-red-200",
    icon: "↯",
  },
  {
    name: "DynaWave",
    desc: "Quasi-EMT simulations",
    color: "text-orange-500",
    bg: "bg-orange-50",
    border: "border-orange-200",
    icon: "≋",
  },
];

const modelCategories = [
  {
    name: "Electrical Machines",
    desc: "Synchronous generators, motors and detailed machine models",
    color: "text-blue-700",
    bg: "bg-blue-50",
    border: "border-blue-200",
    icon: "⚙",
  },
  {
    name: "Network",
    desc: "Lines, transformers, buses, shunts and static network elements",
    color: "text-slate-600",
    bg: "bg-slate-50",
    border: "border-slate-200",
    icon: "⌁",
  },
  {
    name: "Controls",
    desc: "AVR, governors, PSS, limiters and voltage/frequency regulators",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    icon: "◎",
  },
  {
    name: "Power Electronics",
    desc: "Converters, HVDC, FACTS and grid-forming inverters",
    color: "text-purple-600",
    bg: "bg-purple-50",
    border: "border-purple-200",
    icon: "⏦",
  },
  {
    name: "Renewable Energy",
    desc: "Wind turbines (WECC, IEC), solar PV and battery storage",
    color: "text-orange-500",
    bg: "bg-orange-50",
    border: "border-orange-200",
    icon: "⊛",
  },
];



/* ═══════════════════════════════════════════════════════════════════════
   ATOMS
═══════════════════════════════════════════════════════════════════════ */

function DynawoMark({ className = "h-10 w-10" }) {
  return (
    <img src="/dynawo-logo.svg" alt="Dynawo mark" className={`object-contain ${className}`} />
  );
}


function SectionLabel({ children }) {
  return (
    <p className="mb-3 text-xs font-extrabold uppercase tracking-widest text-blue-500">
      {children}
    </p>
  );
}

function SectionHeading({ children }) {
  return (
    <h2 className="text-3xl font-extrabold leading-tight text-[#002B5C]">{children}</h2>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   HERO GRAPHIC  — Dynawo at center, 5 tools in pentagon with mini curves
═══════════════════════════════════════════════════════════════════════ */

// viewBox "0 0 90 32", baseline y=16
// endDot: draw a filled circle at the stable end point
const CURVES = {
  // true damped sinusoid: y = 10 − 7·exp(−0.065t)·sin(πt/12), stepped every 2 units
  DynaFlow:  { d: "M0,10 L2,7 L4,5.3 L6,5.3 L8,6.4 L10,8.2 L12,10 L14,11.4 L16,12.2 L18,12.2 L20,11.7 L22,10.8 L24,10 L26,9.4 L28,9 L30,9 L32,9.2 L34,9.6 L36,10 L38,10.4 L40,10.5 L42,10.5 L44,10.3 L46,10.1 L48,10 L50,9.9 L52,9.75 L54,9.75 L56,9.85 L58,9.95 L60,10 L70,10", endDot: { cx: 70, cy: 10 } },
  // placeholder – to be refined
  // flat → sharp step → fast damped oscillations (4 full cycles) → steady state
  DynaSwing: { d: "M0,22 L17,22 L18,4 C20.5,4 20.5,21 23,21 C25.5,21 25.5,7 28,7 C30.5,7 30.5,18 33,18 C35.5,18 35.5,9 38,9 C40.5,9 40.5,15 43,15 C45.5,15 45.5,10.5 48,10.5 C50.5,10.5 50.5,13.5 53,13.5 C55.5,13.5 55.5,11.5 58,11.5 C60,11.5 60,12 62,12 L78,12" },
  // flat → sharp step → quick damped oscillations (rounded) → new steady state
  DynaWaltz: { d: "M0,22 L23,22 L24,4 C28,4 28,20 32,20 C36,20 36,8 40,8 C44,8 44,16 48,16 C52,16 52,11 56,11 C58,11 58,12 60,12 L78,12" },
  // flat → fault → fast high-amplitude oscillations → back to same level
  DySym:     { d: "M0,16 L18,16 L19,3 C21,3 21,26 23,26 C25,26 25,5 27,5 C29,5 29,24 31,24 C33,24 33,8 35,8 C37,8 37,22 39,22 C41,22 41,11 43,11 C45,11 45,19 47,19 C49,19 49,13.5 51,13.5 C53,13.5 53,18 55,18 C56,18 56,16 57,16 L78,16", lightning: true },
  // three-phase sinusoids: same wave rendered 3× with T/3=6 x-offset
  DynaWave:  { triphase: { path: "M-24,16 C-20.76,9.4 -18.24,9.4 -15,16 C-11.76,22.6 -9.24,22.6 -6,16 C-2.76,9.4 -0.24,9.4 3,16 C6.24,22.6 8.76,22.6 12,16 C15.24,9.4 17.76,9.4 21,16 C24.24,22.6 26.76,22.6 30,16 C33.24,9.4 35.76,9.4 39,16 C42.24,22.6 44.76,22.6 48,16 C51.24,9.4 53.76,9.4 57,16 C60.24,22.6 62.76,22.6 66,16 C69.24,9.4 71.76,9.4 75,16 C78.24,22.6 80.76,22.6 84,16 C87.24,9.4 89.76,9.4 93,16", offset: 6 } },
  // step + damped oscillations (like DynaWaltz), then dashed projection + clock icon
  DynaStream: {
    d:      "M0,22 L18,22 L19,4 C23,4 23,20 27,20 C31,20 31,8 35,8 C39,8 39,16 43,16 C46,16 46,11 50,11 C52,11 52,12 54,12",
    dashed: "M54,12 L72,12",
    clock:  { cx: 81, cy: 12, r: 6 },
  },
};

// Hexagon: center (50 %, 50 %), r_x=30%, r_y=33%, starting top → clockwise
// Wider horizontal radius so 175px bubbles don't overlap
const POSITIONS = [
  { name: "DynaFlow",   left: "50%", top: "12%", color: "text-emerald-600", stroke: "#10b981" },
  { name: "DynaSwing",  left: "80%", top: "32%", color: "text-purple-600",  stroke: "#9333ea" },
  { name: "DynaStream", left: "80%", top: "68%", color: "text-cyan-600",    stroke: "#0891b2" },
  { name: "DynaWave",   left: "50%", top: "85%", color: "text-orange-500",  stroke: "#f97316" },
  { name: "DySym",      left: "20%", top: "68%", color: "text-red-500",     stroke: "#ef4444" },
  { name: "DynaWaltz",  left: "20%", top: "32%", color: "text-blue-600",    stroke: "#2563eb" },
];

function MiniCurve({ name, stroke }) {
  const curve = CURVES[name];
  return (
    <svg
      viewBox="0 0 90 32"
      className="w-full h-full block"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <line x1="0" y1="16" x2="90" y2="16" stroke="#e2e8f0" strokeWidth="1" />
      {curve.triphase
        ? [0, 1, 2].map((i) => (
            <path
              key={i}
              d={curve.triphase.path}
              fill="none"
              stroke={stroke}
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              transform={`translate(${-i * curve.triphase.offset}, 0)`}
              opacity={1 - i * 0.3}
            />
          ))
        : (
          <path
            d={curve.d}
            fill="none"
            stroke={stroke}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )
      }
      {curve.endDot && (
        <circle cx={curve.endDot.cx} cy={curve.endDot.cy} r="2.5" fill={stroke} />
      )}
      {curve.lightning && (
        <g transform="translate(9,1) scale(0.4,0.6)">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="#ef4444" />
        </g>
      )}
      {curve.dashed && (
        <path
          d={curve.dashed}
          fill="none"
          stroke={stroke}
          strokeWidth="1"
          strokeDasharray="2 2"
          strokeLinecap="round"
          opacity="0.5"
        />
      )}
      {curve.clock && (
        <g transform={`translate(${curve.clock.cx},${curve.clock.cy})`}>
          {/* Watch face */}
          <circle cx="0" cy="0" r={curve.clock.r} fill="white" stroke={stroke} strokeWidth="1.1"/>
          {/* Hour hand → ~10 o'clock */}
          <line x1="0" y1="0" x2="-2.6" y2="-1.5" stroke={stroke} strokeWidth="1.3" strokeLinecap="round"/>
          {/* Minute hand → ~2 o'clock */}
          <line x1="0" y1="0" x2="2.5" y2="-4" stroke={stroke} strokeWidth="1" strokeLinecap="round"/>
          {/* Center dot */}
          <circle cx="0" cy="0" r="0.8" fill={stroke}/>
        </g>
      )}
    </svg>
  );
}

function ToolBubble({ pos }) {
  const tool = tools.find((t) => t.name === pos.name);
  const page = toolByName(pos.name);
  return (
    <Link
      to={page ? toolHref(page) : "/overview/architecture"}
      className="absolute z-10 flex h-[118px] w-[175px] -translate-x-1/2 -translate-y-1/2 flex-col rounded-2xl border border-slate-200 bg-white px-3 pt-3 pb-3 shadow-xl transition hover:-translate-y-[52%] hover:border-[#00A3E0] hover:shadow-2xl"
      style={{ left: pos.left, top: pos.top }}
    >
      <div className="mb-1.5 shrink-0">
        <p className={`text-sm font-extrabold leading-tight ${pos.color}`}>{pos.name}</p>
        <p className={`line-clamp-1 text-[13px] leading-snug ${pos.color} opacity-75`}>{tool?.desc}</p>
      </div>
      <div className="min-h-0 flex-1 overflow-hidden">
        <MiniCurve name={pos.name} stroke={pos.stroke} />
      </div>
    </Link>
  );
}

function HeroGraphic() {
  return (
    <div className="relative min-h-[620px] overflow-hidden rounded-2xl bg-gradient-to-br from-[#dbeafe] via-white to-sky-50">

      {/* Power-system landscape background */}
      <img
        src={heroBg}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 w-full select-none"
        style={{ opacity: 0.35 }}
      />
      {/* Fade toward top so the illustration doesn't overwhelm the cards */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "linear-gradient(to bottom, white 15%, transparent 60%)" }}
      />

      {/* Radial glow + dashed spokes */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="rglow" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#bfdbfe" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#e0f2fe" stopOpacity="0"   />
          </radialGradient>
        </defs>
        <ellipse cx="50" cy="50" rx="36" ry="36" fill="url(#rglow)" />
        {POSITIONS.map((pos) => (
          <line
            key={pos.name}
            x1="50" y1="50"
            x2={parseFloat(pos.left)} y2={parseFloat(pos.top)}
            stroke={pos.stroke}
            strokeWidth="0.5"
            strokeDasharray="2 2"
            opacity="0.55"
          />
        ))}
      </svg>

      {/* Center: Dynawo logo */}
      <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5">
        <div className="grid h-24 w-24 place-items-center rounded-full bg-white shadow-2xl shadow-sky-200/60 ring-4 ring-white">
          <DynawoMark className="h-16 w-16" />
        </div>
        <span className="text-[9px] font-black tracking-[0.2em] text-[#002B5C]/35 uppercase">Dynawo</span>
      </div>

      {/* Tool bubbles */}
      {POSITIONS.map((pos) => <ToolBubble key={pos.name} pos={pos} />)}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   OVERVIEW DROPDOWN
═══════════════════════════════════════════════════════════════════════ */

const overviewMenu = [
  { label: "Architecture & concepts", href: "/overview/architecture" },
  {
    label: "Getting started",
    href: "/overview/getting-started",
    children: [
      { label: "Modelling", href: "/overview/modelling" },
      { label: "Simulating", href: "/overview/simulating" },
    ],
  },
];

const toolsMenu = [
  ...toolPages.map((t) => ({ label: t.name, href: toolHref(t) })),
  { label: "Graphical interface", href: GUI_PAGE_HREF },
];

const aboutMenu = [
  { label: "Governance", href: "/about/governance" },
  { label: "Publications", href: "/about/publications" },
  { label: "Roadmap", href: "/about/roadmap" },
  { label: "Contact", href: "/about/contact" },
];

const contributingMenu = [
  { label: "How to contribute", href: "/contributing/how-to-contribute" },
  { label: "Development setup", href: "/contributing/development-setup" },
  { label: "Code of conduct", href: "/contributing/code-of-conduct" },
];

function NavDropdown({ label, items }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1 opacity-75 transition-opacity hover:opacity-100"
      >
        {label}
        <svg className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`} viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
        </svg>
      </button>

      {open && (
        <div className="absolute left-0 top-full mt-3 w-56 rounded-xl border border-slate-100 bg-white py-2 shadow-xl z-50">
          {items.map((item) =>
            item.children ? (
              <div key={item.label}>
                <Link
                  to={item.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-2 text-[11px] font-extrabold uppercase tracking-widest text-slate-400 hover:bg-slate-50 hover:text-[#002B5C]"
                >
                  {item.label}
                </Link>
                {item.children.map((child) => (
                  <Link
                    key={child.label}
                    to={child.href}
                    onClick={() => setOpen(false)}
                    className="block px-6 py-2 text-[13px] text-[#002B5C] opacity-75 hover:bg-slate-50 hover:opacity-100"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                key={item.label}
                to={item.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-2 text-[13px] font-semibold text-[#002B5C] opacity-75 hover:bg-slate-50 hover:opacity-100"
              >
                {item.label}
              </Link>
            )
          )}
        </div>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   HEADER
═══════════════════════════════════════════════════════════════════════ */

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">

        {/* Brand */}
        <div className="flex items-center gap-7">
          <div className="text-2xl font-bold tracking-tight">
            <span className="text-slate-700">▣LF</span>
            <span className="font-light text-sky-400">ENERGY</span>
          </div>
          <div className="h-8 w-px bg-slate-200" />
          <div className="flex items-center gap-2.5">
            <DynawoMark />
            <span className="text-2xl font-extrabold text-[#002B5C]">Dynawo</span>
          </div>
        </div>

        {/* Nav */}
        <nav className="hidden items-center gap-8 text-[13px] font-semibold text-[#002B5C] lg:flex">
          <a href="/" className="opacity-75 transition-opacity hover:opacity-100 cursor-pointer">Home</a>
          <NavDropdown label="Overview" items={overviewMenu} />
          <NavDropdown label="Tools" items={toolsMenu} />
          <a href={DOCUMENTATION_PDF_URL} target="_blank" rel="noopener noreferrer" className="opacity-75 transition-opacity hover:opacity-100 cursor-pointer">Documentation</a>
          <NavDropdown label="Contributing" items={contributingMenu} />
          <NavDropdown label="About" items={aboutMenu} />
        </nav>

        <a href="https://github.com/dynawo" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-lg bg-[#002B5C] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#003a7a]">
          GitHub <Github size={16} />
        </a>
      </div>
    </header>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   TOOL CARD
═══════════════════════════════════════════════════════════════════════ */



/* ═══════════════════════════════════════════════════════════════════════
   FOOTER
═══════════════════════════════════════════════════════════════════════ */

const footerCols = [
  {
    title: "ABOUT",
    items: [
      { label: "Overview", href: "/overview/architecture" },
      { label: "Governance", href: "/about/governance" },
      { label: "Contact", href: "/about/contact" },
    ],
  },
  {
    title: "RESOURCES",
    items: [
      { label: "Publications", href: "/about/publications" },
      { label: "Roadmap", href: "/about/roadmap" },
      { label: "Use cases", href: "/#use-cases" },
    ],
  },
  {
    title: "DOCUMENTATION",
    items: [
      { label: "Documentation (PDF)", href: DOCUMENTATION_PDF_URL, external: true },
      { label: "Modelling examples", href: "/overview/modelling#examples" },
      { label: "Simulating examples", href: "/overview/simulating#examples" },
    ],
  },
  {
    title: "COMMUNITY",
    items: [
      { label: "Contribute", href: "/contributing/how-to-contribute" },
      { label: "Code of conduct", href: "/contributing/code-of-conduct" },
    ],
  },
];

function Footer() {
  return (
    <footer className="bg-[#001e42] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-8 py-14 md:grid-cols-[1.6fr_1fr_1fr_1fr_1fr]">
        {/* brand */}
        <div>
          <div className="mb-4 flex items-center gap-3">
            <img src="/dynawo-logo-white.svg" alt="Dynawo mark" className="h-9 w-9 object-contain" />
            <span className="text-xl font-extrabold">Dynawo</span>
          </div>
          <p className="max-w-[220px] text-sm leading-6 text-white/60">
            Open source time domain simulation suite for power systems.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="https://github.com/dynawo" target="_blank" rel="noopener noreferrer" aria-label="Dynawo on GitHub" className="grid h-9 w-9 place-items-center rounded-lg bg-white/10 transition hover:bg-white/20 cursor-pointer">
              <Github size={18} />
            </a>
          </div>
        </div>

        {footerCols.map((col) => (
          <div key={col.title}>
            <h4 className="mb-4 text-[11px] font-extrabold tracking-widest text-white/40">{col.title}</h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              {col.items.map((item) => (
                <li key={item.label}>
                  {item.external ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="transition hover:text-white">{item.label}</a>
                  ) : (
                    <Link to={item.href} className="transition hover:text-white">{item.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5 text-xs text-white/35">
          <span>© RTE 2025 — All rights reserved</span>
        </div>
      </div>
    </footer>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   PAGE
═══════════════════════════════════════════════════════════════════════ */

function LandingPage() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-[#002B5C]">
      <main>

        {/* ── HERO ──────────────────────────────────────────────── */}
        <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-8 py-14 lg:grid-cols-[1fr_1.3fr]">
            <div>
<h1 className="text-5xl font-extrabold leading-[1.1] tracking-tight text-[#002B5C] lg:text-[3.6rem]">
                Simulating today<br />the power systems<br />of{" "}
                <span className="text-[#00A3E0]">tomorrow.</span>
              </h1>
              <div className="my-7 h-1 w-16 rounded-full bg-[#00A3E0]" />
              <div className="max-w-[500px] space-y-4 text-sm leading-7 text-slate-600">
                <p className="text-slate-500">Dynawo is an open source power system simulation suite built around two main contributions:</p>
                <div className="flex gap-3">
                  <span className="mt-0.5 shrink-0 text-lg text-[#00A3E0]">①</span>
                  <p>
                    A <strong className="text-[#002B5C]"><a href="https://modelica.org/" target="_blank" rel="noopener noreferrer" className="hover:underline">Modelica</a> models library</strong> —
                    an extensive, validated and extendable collection of power system components (machines, controls,
                    power electronics, renewables).
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="mt-0.5 shrink-0 text-lg text-[#00A3E0]">②</span>
                  <p>
                    A <strong className="text-[#002B5C]">high-performance time-domain simulation engine</strong> —
                    fast enough for industrial-scale studies.
                  </p>
                </div>
                <p className="text-slate-500">
                  Built on top of these two foundations, six complementary tools address
                  the full range of power system studies — from steady-state load flow to
                  real-time simulation.
                </p>
              </div>
              <p className="mt-4 text-xs text-slate-400">
                Available for <strong className="text-slate-500">Linux</strong> and <strong className="text-slate-500">Windows</strong>.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link to="/overview/getting-started" className="flex items-center gap-2.5 rounded-lg bg-[#002B5C] px-7 py-3.5 font-bold text-white shadow-lg transition hover:bg-[#003a7a]">
                  Get started <ArrowRight size={18} />
                </Link>
                <a href={DOCUMENTATION_PDF_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 rounded-lg border border-[#002B5C]/20 bg-white px-7 py-3.5 font-bold text-[#002B5C] transition hover:border-[#002B5C]/40">
                  <BookOpen size={18} /> Documentation
                </a>
              </div>
            </div>
            <HeroGraphic />
        </section>

        {/* ── USE CASES ─────────────────────────────────────────── */}
        <section id="use-cases" className="mx-auto max-w-7xl px-8 pt-0 pb-10">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {[
              { icon: <ShieldCheck size={26} />, title: "Real-time operation & security studies", desc: "Ensure the secure operation of the power system in real time.", color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-100" },
              { icon: <Wind size={26} />, title: "Renewable integration", desc: "Study the impact of wind and solar generation on the system.", color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-100" },
              { icon: <Activity size={26} />, title: "Short-circuit & stability assessment", desc: "Evaluate the behavior of the system and synchronous machines during short circuits.", color: "text-red-500", bg: "bg-red-50", border: "border-red-100" },
              { icon: <Cpu size={26} />, title: "Power electronics & HVDC systems", desc: "Assess converter and HVDC impact on system stability.", color: "text-purple-600", bg: "bg-purple-50", border: "border-purple-100" },
              { icon: <FlaskConical size={26} />, title: "Research & innovation", desc: "Prototype and test new concepts and control strategies.", color: "text-orange-500", bg: "bg-orange-50", border: "border-orange-100" },
            ].map((uc) => (
              <div key={uc.title} className={`flex flex-col gap-3 rounded-2xl border p-5 ${uc.bg} ${uc.border}`}>
                <span className={uc.color}>{uc.icon}</span>
                <p className={`text-base font-extrabold leading-snug ${uc.color}`}>{uc.title}</p>
                <p className="text-sm leading-5 text-slate-500">{uc.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── ABOUT : Intro ─────────────────────────────────────── */}
        <section className="mx-auto max-w-7xl px-8 pt-4 pb-12">
          <SectionHeading>About Dynawo</SectionHeading>
          <p className="mt-6 max-w-3xl text-sm leading-7 text-slate-500">
            Dynawo provides a complete solution for simulating complex power systems, designed for both
            industrial use and academic research.
            It is part of the <strong className="text-[#002B5C]"><a href="https://lfenergy.org/" target="_blank" rel="noopener noreferrer" className="hover:underline">LF Energy Foundation</a></strong>, a project of
            The Linux Foundation that supports open-source innovation within the energy and electricity sectors.
            <br /><br />
            Dynawo is fully open source under the{" "}
            <strong className="text-[#002B5C]"><a href="https://www.mozilla.org/en-US/MPL/2.0/" target="_blank" rel="noopener noreferrer" className="hover:underline">Mozilla Public License v.&nbsp;2.0</a></strong>, with
            releases available for <strong className="text-[#002B5C]">Linux</strong> and{" "}
            <strong className="text-[#002B5C]">Windows</strong>.
            Beyond the core repository, the ecosystem includes two companion projects:{" "}
            <strong className="text-[#002B5C]">Dynawo-algorithms</strong> (contingency analysis,
            margin calculation, critical clearing time) and{" "}
            <strong className="text-[#002B5C]">DynaFlow Launcher</strong>, which enables running DynaFlow with a minimal set of inputs.
            <br /><br />
            Dynawo is integrated into{" "}

            <a href="https://www.powsybl.org/" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#00A3E0] hover:underline">PowSyBl</a>{" "}
            — an open-source framework for power system simulation and analysis — sharing the same
            network format (IIDM) and toolchain, enabling seamless interoperability with the broader
            suite of PowSyBl tools. Additionally, since the models are written in standard Modelica,
            the library can be used independently with any Modelica-compatible simulation environment,
            such as <strong className="text-[#002B5C]"><a href="https://openmodelica.org/" target="_blank" rel="noopener noreferrer" className="hover:underline">OpenModelica</a></strong>.
          </p>
        </section>

        {/* ── ABOUT : Architecture diagram ───────────────────────── */}
        <section className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-8 py-12">
            <div className="mb-8">
              <SectionLabel>Contributions</SectionLabel>
            </div>

            {/* Diagram */}
            <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden">

              {/* Two columns */}
              <div className="grid lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">

                {/* Left: Models library */}
                <div className="p-8">
                  <p className="mb-1 text-[11px] font-extrabold uppercase tracking-widest text-blue-500">Modelica models library</p>
                  <p className="mb-5 text-sm leading-6 text-slate-500">
                    An extensive, validated and extendable collection of power system components written in the
                    equation-based language <a href="https://modelica.org/" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#002B5C] hover:underline">Modelica</a>.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {modelCategories.map((cat) => (
                      <span key={cat.name} className={`flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-semibold ${cat.bg} ${cat.border} ${cat.color}`}>
                        <span>{cat.icon}</span>{cat.name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: Solver */}
                <div className="p-8">
                  <p className="mb-1 text-[11px] font-extrabold uppercase tracking-widest text-blue-500">Simulation engine</p>
                  <p className="mb-5 text-sm leading-6 text-slate-500">
                    A C++ core with strict separation between models and solvers.
                    Two solvers are available depending on the trade-off required.
                  </p>
                  <div className="flex flex-col gap-3">
                    {[
                      { name: "Simplified solver", tag: "Performance", color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-200" },
                      { name: "IDA solver", tag: "Accuracy",     color: "text-blue-700",   bg: "bg-blue-50",   border: "border-blue-200"   },
                    ].map((s) => (
                      <div key={s.name} className={`flex items-center gap-3 rounded-xl border px-4 py-3 ${s.bg} ${s.border}`}>
                        <span className={`text-sm font-extrabold ${s.color}`}>{s.name}</span>
                        <span className={`ml-auto rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ${s.color} border ${s.border}`}>{s.tag}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Arrow + tools */}
              <div className="border-t border-slate-100 bg-slate-50 px-8 py-6">
                {/* Stem */}
                <div className="flex justify-center" aria-hidden="true">
                  <div className="w-0.5 h-4 bg-[#00A3E0]" />
                </div>
                {/* Rake + cards: unified grid so branches land on card centers */}
                <div className="relative grid grid-cols-6 gap-3" aria-hidden="true">
                  {/* Horizontal bar from center of col1 to center of col6 */}
                  <div className="absolute top-0 left-[8%] right-[8%] h-0.5 bg-[#00A3E0]" />
                </div>
                <div className="grid grid-cols-6 gap-3 mt-0">
                  {tools.map((t) => (
                    <div key={t.name} className="flex flex-col items-center">
                      {/* Branch drop */}
                      <div className="w-0.5 h-4 bg-[#00A3E0]" aria-hidden="true" />
                      {/* Card */}
                      <div className={`w-full flex flex-col items-center gap-1 rounded-xl border px-3 py-4 text-center ${t.bg} ${t.border}`}>
                        <span className={`text-2xl ${t.color}`}>{t.icon}</span>
                        <p className={`text-xs font-extrabold ${t.color}`}>{t.name}</p>
                        <p className="text-[11px] leading-4 text-slate-500">{t.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          <p className="mt-6 text-sm leading-7 text-slate-500">
            Each tool is defined by a specific selection of models from the library and a choice of
            solver, tailored to a particular class of power system study.
          </p>
          </div>
        </section>

        {/* ── THEY USE DYNAWO ───────────────────────────────────── */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-8 py-12">
            <div className="mb-8 text-center">
              <SectionHeading>They use Dynawo</SectionHeading>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-10">
              <a href="https://www.gridsuite.org/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-16 shadow-sm grayscale transition hover:grayscale-0 hover:shadow-md" style={{height: "180px"}}>
                <img src="/gridsuite.png" alt="GridSuite" className="h-36 object-contain" />
              </a>
              <a href="https://www.powsybl.org/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-16 shadow-sm grayscale transition hover:grayscale-0 hover:shadow-md" style={{height: "180px"}}>
                <img src="/powsybl.png" alt="PowSyBl" className="h-12 object-contain" />
              </a>
              <a href="https://twineu.net/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-16 shadow-sm grayscale transition hover:grayscale-0 hover:shadow-md" style={{height: "180px"}}>
                <img src="/twineu.svg" alt="Twin-EU" className="h-10 object-contain" />
              </a>
              <a href="https://cresym.eu/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-16 shadow-sm grayscale transition hover:grayscale-0 hover:shadow-md" style={{height: "180px"}}>
                <img src="/Cresym.png" alt="CRESYM" className="h-16 object-contain" />
              </a>
            </div>
          </div>
        </section>

        {/* ── PARTNERS AND VENDORS ──────────────────────────────── */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-8 py-12">
            <div className="mb-8 text-center">
              <SectionHeading>Partners and vendors</SectionHeading>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-10">
              <a href="https://www.rte-france.com/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-16 shadow-sm grayscale transition hover:grayscale-0 hover:shadow-md" style={{height: "180px"}}>
                <img src="/logoRTE.png" alt="RTE" className="h-24 object-contain" />
              </a>
            </div>
          </div>
        </section>


      </main>

      <Footer />
    </div>
  );
}

/* React Router v5 does not handle "#anchor" links across pages:
   scroll to the anchor if present, otherwise to the top of the new page. */
function ScrollToHash() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

function Layout({ children }) {
  return (
    <div>
      <ScrollToHash />
      <Header />
      {children}
    </div>
  );
}

export default function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/overview/architecture" component={ArchitecturePage} />
        <Route path="/overview/getting-started" component={GettingStartedPage} />
        <Route path="/overview/modelling" component={ModellingPage} />
        <Route path={GUI_PAGE_HREF} component={GuiPage} />
        <Route path="/tools/:slug" component={ToolPage} />
        <Route path="/overview/simulating" component={SimulatingPage} />
        <Route path="/contributing/how-to-contribute" component={HowToContributePage} />
        <Route path="/contributing/development-setup" component={DevelopmentSetupPage} />
        <Route path="/contributing/code-of-conduct" component={CodeOfConductPage} />
        <Route path="/about/governance" component={GovernancePage} />
        <Route path="/about/publications" component={PublicationsPage} />
        <Route path="/about/roadmap" component={RoadmapPage} />
        <Route path="/about/contact" component={ContactPage} />
      </Switch>
    </Layout>
  );
}
