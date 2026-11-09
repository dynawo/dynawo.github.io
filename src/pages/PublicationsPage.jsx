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
import { BookOpen, ExternalLink } from "lucide-react";

const primaryRef = {
  title: "Towards an Open-Source Solution using Modelica for Time-Domain Simulation of Power Systems",
  authors: "A. Guironnet, M. Saugier, S. Petitrenaud, F. Xavier, P. Panciatici",
  venue: "2018 IEEE PES Innovative Smart Grid Technologies Conference Europe (ISGT-Europe)",
  year: "2018",
  doi: "https://doi.org/10.1109/isgteurope.2018.8571872",
};

const dynawoPapers = [
  {
    title: "An Open-Source Industrial-Grade Collection of Renewable Energy Source Generic Models in Modelica Language",
    authors: "J. El Feghali, L. Garbay, A. Guironnet, P. Parquier, M. Chiaramello, M. Franke, L. Plavec",
    venue: "16th International Modelica & FMI Conference, Lucerne, Switzerland",
    year: "2025",
    url: "https://doi.org/10.3384/ecp218383",
    linkLabel: "DOI",
  },
  {
    title: "An Open-Source Benchmark of IEEE Test Cases for Easily Testing a New Approach for Steady State Calculations in Power Systems",
    authors: "J. El Feghali, Q. Cossart, G. Bureau, B. Letellier, I. Menezes, F. Rosière, M. Chiaramello",
    venue: "15th International Modelica Conference, Aachen, Germany",
    year: "2023",
    url: "https://doi.org/10.3384/ecp204633",
    linkLabel: "DOI",
  },
  {
    title: "An Open Source Tool to Compare Simulators on Large-Scale Cases - Application to Dynawo",
    authors: "J.L. Marin, V. Gaitan, G. Oms, M. Chiaramello, Q. Cossart, A. Guironnet",
    venue: "1st International Workshop on Open Source Modelling and Simulation of Energy Systems, Aachen",
    year: "2022",
  },
  {
    title: "Implementation and Validation of the Generic WECC Photovoltaics and Wind Turbine Generator Models in Modelica",
    authors: "M. Nuschke, S. Lohr, A. Guironnet, M. Saugier",
    venue: "14th International Modelica Conference",
    year: "2021",
  },
  {
    title: "Speed-up Of Large-Scale Voltage Stability Simulations within a Fully Separated Modeler/Solver Framework",
    authors: "A. Guironnet, F. Rosière, G. Bureau, M. Saugier",
    venue: "4th International Conference on Smart Energy Systems and Technologies (SEST)",
    year: "2021",
  },
  {
    title: "Modelica-based Simulation of Electromagnetic Transients Using Dynaωo: Current Status and Perspectives",
    authors: "A. Masoom, A. Guironnet, A. Zeghaida, T. Ould-Bachir, J. Mahseredjian",
    venue: "Electric Power Systems Research, Volume 197",
    year: "2021",
  },
  {
    title: "A Novel Approach for the Calculation of Steady States in Transmission Systems Using Simplified Time-Domain Simulation",
    authors: "Q. Cossart, M. Chiaramello, A. Guironnet, P. Panciatici",
    venue: "IEEE PowerTech 2021, Madrid",
    year: "2021",
  },
  {
    title: "An Open-Source Average HVDC Model for Stability Studies",
    authors: "Q. Cossart, M. Saugier, A. Guironnet",
    venue: "IEEE PowerTech 2021, Madrid",
    year: "2021",
  },
  {
    title: "Dynaωo: A Suite of Power System Simulation Tools using Modelica and the Open Modelica Compiler",
    authors: "A. Guironnet, F. Rosière, G. Bureau, M. Saugier, Q. Cossart, M. Chiaramello, M. Bongrain, I. Menezes",
    venue: "2021 OpenModelica Workshop",
    year: "2021",
  },
  {
    title: "An Open-Source Implementation of Grid-Forming Converters using Modelica",
    authors: "Q. Cossart, F. Rosière, A. Guironnet, M. Saugier",
    venue: "2020 IEEE PES Innovative Smart Grid Technologies Conference Europe (ISGT-Europe)",
    year: "2020",
  },
  {
    title: "A comparative analysis of LU decomposition methods for power system simulations",
    authors: "L. Razik, L. Schumacher, A. Monti, A. Guironnet, G. Bureau",
    venue: "2019 IEEE Milano PowerTech",
    year: "2019",
  },
  {
    title: "Speedup of EMT simulations by using an integration scheme enriched with a predictive Fourier coefficients estimator",
    authors: "P.-M. Gibert, P. Panciatici, R. Losseau, A. Guironnet, D. Tromeur-Dervout, J. Erhel",
    venue: "2018 IEEE PES Innovative Smart Grid Technologies Conference Europe (ISGT-Europe)",
    year: "2018",
  },
  {
    title: "Use of the Sinusoidal Predictor Method within a Fully Separated Modeler/Solver Framework for Fast and Flexible EMT Simulations",
    authors: "P.-M. Gibert, R. Losseau, A. Guironnet, P. Panciatici, D. Tromeur-Dervout, J. Erhel",
    venue: "Proceedings of 8th International Conference on Simulation and Modeling Methodologies, Technologies and Applications",
    year: "2018",
  },
];

const presentations = [
  {
    title: "An Open-Source Exercise Package for Electric Power System Teaching using the Dynaωo Modelica Library",
    authors: "G. Aouizerate, J. El Feghali, P. Aristidou, S. Prabakaran, G. Bureau, B. Letellier, J. De Sloovere, F. Rosière, M. Chiaramello",
    venue: "OpenModelica Workshop 2025",
    year: "2025",
    url: "https://openmodelica.org/images/M_images/OpenModelicaWorkshop_2025/2025-02-03_Joy_El_Feghali_OMWorkshop_2025_Dynawo_Exercise_package_VF.pdf",
    linkLabel: "Slides",
  },
  {
    title: "An Open-Source Implementation of WECC Battery Energy Storage Systems Models for Power System Stability Studies",
    authors: "J. El Feghali, G. Aouizerate, G. Bureau, J. De Sloovere, B. Letellier, S. Prabakaran, F. Rosière, M. Chiaramello",
    venue: "OpenModelica Workshop 2025",
    year: "2025",
    url: "https://openmodelica.org/images/M_images/OpenModelicaWorkshop_2025/2025-02-03_Joy_El_Feghali_OMWorkshop_2025_WECC_models_VF.pdf",
    linkLabel: "Slides",
  },
  {
    title: "An Open-Source Implementation of IEEE Test Cases using a Simplified Time-Domain Approach for Steady State Calculations",
    authors: "J. El Feghali, G. Bureau, J. De Sloovere, B. Letellier, I. Menezes, F. Rosière, M. Chiaramello",
    venue: "OpenModelica Workshop 2024",
    year: "2024",
    url: "https://openmodelica.org/images/M_images/OpenModelicaWorkshop_2024/05_Pr%c3%a9sentation_Joy_ELFEGHALI_OM_Workshop_2024.pdf",
    linkLabel: "Slides",
  },
];

const relatedPapers = [
  {
    title: "ScalableTestGrids - An Open-Source and Flexible Benchmark Suite to Assess Modelica Tool Performance on Large-Scale Power System Test Cases",
    authors: "F. Casella, A. Guironnet",
    venue: "14th International Modelica Conference",
    year: "2021",
  },
  {
    title: "Electromagnetic Transient Simulation of Large Power Networks with Modelica",
    authors: "A. Masoom, T. Ould-Bachir, J. Mahseredjian, A. Guironnet",
    venue: "14th International Modelica Conference",
    year: "2021",
  },
  {
    title: "Simulation of Electromagnetic Transients with Modelica, Accuracy and Performance Assessment for Transmission Line Models",
    authors: "A. Masoom, T. Ould-Bachir, J. Mahseredjian, A. Guironnet, N. Ding",
    venue: "2020 PSCC Conference, Porto, Portugal",
    year: "2020",
  },
  {
    title: "Towards Pan-European Power Grids Modelling in Modelica: Design Principles and A Prototype for A Reference Power System Library",
    authors: "A. Bartolini, F. Casella, A. Guironnet",
    venue: "13th International Modelica Conference, Regensburg, Germany",
    year: "2019",
  },
  {
    title: "A generic customized predictor corrector approach for accelerating EMTP-like simulations",
    authors: "P.-M. Gibert, D. Tromeur-Dervout, P. Panciatici, F. Beaude, P. Wang, J. Erhel",
    venue: "2017 IEEE Manchester PowerTech",
    year: "2017",
  },
  {
    title: "Solving large-scale Modelica models: new approaches and experimental results using OpenModelica",
    authors: "W. Braun, F. Casella, B. Bachmann",
    venue: "12th International Modelica Conference, Prague, Czech Republic",
    year: "2017",
  },
  {
    title: "A Modelica-based Tool for Power System Dynamic Simulations",
    authors: "R. Viruez, S. Machado, L. M. Zamarreño, G. León, F. Beaude, S. Petitrenaud, J.-B. Heyberger",
    venue: "12th International Modelica Conference, Prague, Czech Republic",
    year: "2017",
  },
  {
    title: "Aspects of power system modeling, initialization and simulation using the Modelica language",
    authors: "G. Leon, M. Halat, M. Sabate, J.-B. Heyberger, F. J. Gomez, L. Vanfretti",
    venue: "2015 IEEE Eindhoven PowerTech",
    year: "2015",
  },
  {
    title: "A modelica power system library for phasor time-domain simulation",
    authors: "T. Bogodorova, M. Sabate, G. Leon, L. Vanfretti, M. Halat, J. B. Heyberger, P. Panciatici",
    venue: "IEEE PES ISGT Europe 2013",
    year: "2013",
  },
  {
    title: "Power system modeling in Modelica for time-domain simulation",
    authors: "A. S. Chieh, P. Panciatici, J. Picard",
    venue: "2011 IEEE Trondheim PowerTech",
    year: "2011",
  },
  {
    title: "Simplified time-domain simulation of detailed long-term dynamic models",
    authors: "D. Fabozzi, T. Van Cutsem",
    venue: "2009 IEEE Power & Energy Society General Meeting",
    year: "2009",
  },
  {
    title: "SUNDIALS: Suite of Nonlinear and Differential/Algebraic Equation Solvers",
    authors: "A. C. Hindmarsh, P. N. Brown, K. E. Grant, S. L. Lee, R. Serban, D. Shumaker, C. S. Woodward",
    venue: "ACM Transactions on Mathematical Software, Vol. 31, No. 3, pp. 363–396",
    year: "2005",
  },
  {
    title: "Modelica - a general object-oriented language for continuous and discrete-event system modeling and simulation",
    authors: "P. Fritzson, P. Bunus",
    venue: "Proceedings 35th Annual Simulation Symposium (SS 2002)",
    year: "2002",
  },
];

function YearBadge({ year }) {
  return (
    <span className="shrink-0 rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-extrabold text-slate-500">
      {year}
    </span>
  );
}

function PaperList({ papers }) {
  return (
    <div className="flex flex-col divide-y divide-slate-100 rounded-2xl border border-slate-200 bg-white overflow-hidden">
      {papers.map((p) => (
        <div key={p.title} className="flex items-start gap-5 px-6 py-5 hover:bg-slate-50 transition">
          <YearBadge year={p.year} />
          <div className="min-w-0 flex-1">
            <p className="mb-1 text-sm font-extrabold leading-snug text-[#002B5C]">{p.title}</p>
            <p className="mb-0.5 text-[12px] text-slate-500">{p.authors}</p>
            <p className="text-[12px] italic text-slate-400">{p.venue}</p>
          </div>
          {p.url && (
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-[#00A3E0] bg-white px-3 py-1.5 text-[12px] font-semibold text-[#00A3E0] hover:bg-[#00A3E0] hover:text-white transition"
            >
              {p.linkLabel} <ExternalLink size={12} />
            </a>
          )}
        </div>
      ))}
    </div>
  );
}

export default function PublicationsPage() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-[#002B5C]">

      {/* Breadcrumb */}
      <div className="border-b border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-7xl px-8 py-3 text-[13px] text-slate-400">
          <Link to="/" className="hover:text-[#002B5C] transition">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-500">About</span>
          <span className="mx-2">/</span>
          <span className="font-semibold text-[#002B5C]">Publications</span>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-8 py-14">

        {/* Header */}
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-xs font-extrabold uppercase tracking-widest text-blue-500">About</p>
          <h1 className="text-4xl font-extrabold leading-tight text-[#002B5C]">Publications</h1>
          <p className="mt-5 text-base leading-7 text-slate-500">
            Scientific publications about Dynawo and related work. If you use Dynawo in your research,
            please cite the primary reference below.
          </p>
        </div>

        {/* Primary reference */}
        <section className="mb-16">
          <h2 className="mb-6 text-xl font-extrabold text-[#002B5C]">Primary reference</h2>
          <div className="rounded-2xl border-2 border-[#00A3E0] bg-sky-50 p-8">
            <div className="mb-4 flex items-start justify-between gap-4">
              <div className="flex items-center gap-2">
                <BookOpen size={18} className="shrink-0 text-[#00A3E0]" />
                <YearBadge year={primaryRef.year} />
              </div>
              <a
                href={primaryRef.doi}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-[#00A3E0] bg-white px-3 py-1.5 text-[12px] font-semibold text-[#00A3E0] hover:bg-[#00A3E0] hover:text-white transition"
              >
                DOI <ExternalLink size={12} />
              </a>
            </div>
            <p className="mb-2 text-base font-extrabold leading-snug text-[#002B5C]">{primaryRef.title}</p>
            <p className="mb-1 text-sm text-slate-500">{primaryRef.authors}</p>
            <p className="text-sm italic text-slate-400">{primaryRef.venue}</p>

            {/* BibTeX */}
            <details className="mt-5">
              <summary className="cursor-pointer text-[12px] font-semibold text-[#00A3E0] hover:underline">
                BibTeX
              </summary>
              <pre className="mt-3 overflow-x-auto rounded-xl bg-[#0f172a] px-5 py-4 text-[11px] leading-6 text-slate-300 whitespace-pre">{`@inproceedings{guironnet2018dynawo,
  title     = {Towards an Open-Source Solution using Modelica for
               Time-Domain Simulation of Power Systems},
  author    = {Guironnet, Adrien and Saugier, Marianne and
               Petitrenaud, Sebastien and Xavier, Florent and
               Panciatici, Patrick},
  booktitle = {2018 IEEE PES Innovative Smart Grid Technologies
               Conference Europe (ISGT-Europe)},
  year      = {2018},
  doi       = {10.1109/isgteurope.2018.8571872}
}`}</pre>
            </details>
          </div>
        </section>

        {/* Publications about Dynawo */}
        <section className="mb-16">
          <h2 className="mb-2 text-xl font-extrabold text-[#002B5C]">Publications about Dynawo</h2>
          <p className="mb-6 text-sm leading-6 text-slate-500">
            Papers presenting results obtained with or about Dynawo, in reverse chronological order.
          </p>
          <PaperList papers={dynawoPapers} />
        </section>

        {/* Presentations */}
        <section className="mb-16">
          <h2 className="mb-2 text-xl font-extrabold text-[#002B5C]">Presentations</h2>
          <p className="mb-6 text-sm leading-6 text-slate-500">
            Talks given about Dynawo at workshops and conferences, in reverse chronological order.
          </p>
          <PaperList papers={presentations} />
        </section>

        {/* Related publications */}
        <section className="mb-16">
          <h2 className="mb-2 text-xl font-extrabold text-[#002B5C]">Related concept publications</h2>
          <p className="mb-6 text-sm leading-6 text-slate-500">
            Foundational papers on the methods, tools, and concepts underlying Dynawo.
          </p>
          <PaperList papers={relatedPapers} />
        </section>

      </div>
    </div>
  );
}
