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
import { Terminal, Monitor, AlertTriangle } from "lucide-react";

const envVars = [
  { name: "DYNAWO_BUILD_TYPE", desc: "Build type: Release (default) or Debug." },
  { name: "DYNAWO_COMPILER", desc: "Compiler: GCC (default) or CLANG." },
  { name: "DYNAWO_NB_PROCESSORS_USED", desc: "Maximum number of CPU cores to use during compilation." },
  { name: "DYNAWO_BROWSER", desc: "Browser command used to open result curves (e.g. firefox)." },
];

export default function DevelopmentSetupPage() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-[#002B5C]">

      {/* Breadcrumb */}
      <div className="border-b border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-7xl px-8 py-3 text-[13px] text-slate-400">
          <Link to="/" className="hover:text-[#002B5C] transition">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-500">Contributing</span>
          <span className="mx-2">/</span>
          <span className="font-semibold text-[#002B5C]">Development setup</span>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-8 py-14">

        {/* Header */}
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-xs font-extrabold uppercase tracking-widest text-blue-500">Contributing</p>
          <h1 className="text-4xl font-extrabold leading-tight text-[#002B5C]">Development setup</h1>
          <p className="mt-5 text-base leading-7 text-slate-500">
            This guide covers building Dynawo from source on <strong className="text-[#002B5C]">Linux</strong> and{" "}
            <strong className="text-[#002B5C]">Windows</strong>. Building from source is required to modify
            the tool. If you only need to run simulations, download the pre-built release instead.
          </p>

          <div className="mt-5 flex items-start gap-3 rounded-xl border border-sky-200 bg-sky-50 px-5 py-4">
            <Monitor size={18} className="mt-0.5 shrink-0 text-sky-500" />
            <p className="text-sm leading-6 text-sky-700">
              <strong>macOS:</strong> Building from source is not supported natively. Use the Docker image instead:{" "}
              <code className="rounded bg-sky-100 px-1.5 py-0.5 text-[12px] font-mono">docker run -it dynawo/dynawo</code>.
              More details on{" "}
              <a href="https://github.com/dynawo/dynawo-docker" target="_blank" rel="noopener noreferrer" className="font-semibold underline">dynawo-docker</a>.
            </p>
          </div>

          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href="https://github.com/dynawo/dynawo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-[#002B5C] bg-white px-5 py-3 text-sm font-semibold text-[#002B5C] shadow-sm hover:bg-[#002B5C] hover:text-white transition"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              dynawo/dynawo on GitHub
            </a>
            <a
              href="https://github.com/dynawo/dynawo/releases/latest"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#0f172a] px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-700 transition"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              Download pre-built release
            </a>
          </div>
        </div>

        {/* ── LINUX ──────────────────────────────────────────────── */}
        <section className="mb-16">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50">
              <Terminal size={18} className="text-emerald-600" />
            </div>
            <h2 className="text-xl font-extrabold text-[#002B5C]">Linux</h2>
          </div>

          {/* Install packages */}
          <h3 className="mb-3 text-sm font-extrabold text-[#002B5C]">Install packages</h3>
          <p className="mb-4 text-sm leading-6 text-slate-500">
            Install all dependencies at once with your distribution's package manager.
          </p>

          <p className="mb-1.5 text-[11px] font-extrabold uppercase tracking-widest text-slate-400">Ubuntu 22.04</p>
          <pre className="mb-5 overflow-x-auto rounded-xl bg-[#0f172a] px-5 py-4 text-[12px] leading-6 text-slate-200 whitespace-pre-wrap">
            <code>{`apt install -y git gcc g++ gfortran autoconf pkgconf automake make libtool cmake hwloc openjdk-8-jdk libblas-dev liblpsolve55-dev libarchive-dev doxygen doxygen-latex liblapack-dev libexpat1-dev libsqlite3-dev zlib1g-dev gettext patch clang python3-pip libncurses5-dev libreadline-dev libdigest-perl-md5-perl unzip gcovr lcov libboost-all-dev lsb-release libxml2-utils python3-lxml python3-psutil wget libcurl4-openssl-dev rsync libopenblas-openmp-dev qtbase5-dev qtchooser qt5-qmake qtbase5-dev-tools`}</code>
          </pre>

          <p className="mb-1.5 text-[11px] font-extrabold uppercase tracking-widest text-slate-400">Ubuntu 20.04</p>
          <pre className="mb-5 overflow-x-auto rounded-xl bg-[#0f172a] px-5 py-4 text-[12px] leading-6 text-slate-200 whitespace-pre-wrap">
            <code>{`apt install -y git gcc g++ gfortran autoconf pkgconf automake make libtool cmake hwloc openjdk-8-jdk libblas-dev liblpsolve55-dev libarchive-dev doxygen doxygen-latex liblapack-dev libexpat1-dev libsqlite3-dev zlib1g-dev gettext patch clang python3-pip libncurses5-dev libreadline-dev libdigest-perl-md5-perl unzip gcovr lcov libboost-all-dev qt5-default lsb-release libxml2-utils python-lxml python-psutil wget libcurl4-openssl-dev rsync libopenblas-openmp-dev`}</code>
          </pre>

          <p className="mb-1.5 text-[11px] font-extrabold uppercase tracking-widest text-slate-400">Fedora</p>
          <pre className="mb-8 overflow-x-auto rounded-xl bg-[#0f172a] px-5 py-4 text-[12px] leading-6 text-slate-200 whitespace-pre-wrap">
            <code>{`dnf install -y git gcc gcc-c++ gcc-gfortran autoconf automake make libtool cmake hwloc java-1.8.0-openjdk-devel blas-devel lapack-devel lpsolve-devel expat-devel glibc-devel sqlite-devel libarchive-devel zlib-devel doxygen doxygen-latex qt-devel gettext patch wget python-devel clang llvm-devel ncurses-devel readline-devel unzip perl-Digest-MD5 vim gcovr python-pip python-psutil boost-devel lcov gtest-devel gmock-devel xz rsync python-lxml graphviz libcurl-devel bash-completion`}</code>
          </pre>

          {/* Clone + create myEnvDynawo */}
          <h3 className="mb-3 text-sm font-extrabold text-[#002B5C]">Clone and create the environment script</h3>
          <p className="mb-3 text-sm leading-6 text-slate-500">
            Clone the repository and create your personal <code className="rounded bg-slate-100 px-1.5 py-0.5 text-[12px] font-mono text-slate-700">myEnvDynawo.sh</code> entrypoint. This file lets you configure build options and launch Dynawo.
          </p>
          <pre className="mb-8 overflow-x-auto rounded-xl bg-[#0f172a] px-5 py-4 text-[13px] leading-6 text-slate-200">
            <code>{`git clone https://github.com/dynawo/dynawo.git
cd dynawo
echo '#!/bin/bash
export DYNAWO_HOME=$(cd "$(dirname "\${BASH_SOURCE[0]}")" && pwd)

export DYNAWO_SRC_OPENMODELICA=$DYNAWO_HOME/OpenModelica/Source
export DYNAWO_INSTALL_OPENMODELICA=$DYNAWO_HOME/OpenModelica/Install

export DYNAWO_LOCALE=en_GB
export DYNAWO_RESULTS_SHOW=true
export DYNAWO_BROWSER=firefox

export DYNAWO_NB_PROCESSORS_USED=1

export DYNAWO_BUILD_TYPE=Release

$DYNAWO_HOME/util/envDynawo.sh $@' > myEnvDynawo.sh
chmod +x myEnvDynawo.sh`}</code>
          </pre>

          {/* Build */}
          <h3 className="mb-3 text-sm font-extrabold text-[#002B5C]">Build</h3>
          <p className="mb-3 text-sm leading-6 text-slate-500">
            Launch the full build. The first run downloads and compiles all third-party dependencies (Sundials, Boost, Adept, …) — this takes a significant amount of time. Subsequent builds are incremental.
          </p>
          <pre className="mb-4 overflow-x-auto rounded-xl bg-[#0f172a] px-5 py-4 text-[13px] leading-6 text-slate-200">
            <code>{`./myEnvDynawo.sh build-user`}</code>
          </pre>

          <div className="mb-8 flex items-start gap-3 rounded-xl border border-yellow-200 bg-yellow-50 px-5 py-4">
            <AlertTriangle size={16} className="mt-0.5 shrink-0 text-yellow-600" />
            <p className="text-sm leading-6 text-yellow-800">
              Behind a proxy? Export <code className="rounded bg-yellow-100 px-1 font-mono text-[11px]">http_proxy</code>,{" "}
              <code className="rounded bg-yellow-100 px-1 font-mono text-[11px]">https_proxy</code> and{" "}
              <code className="rounded bg-yellow-100 px-1 font-mono text-[11px]">no_proxy</code> before running the build.
            </p>
          </div>

          {/* Launch */}
          <h3 className="mb-3 text-sm font-extrabold text-[#002B5C]">Launch a simulation</h3>
          <p className="mb-3 text-sm leading-6 text-slate-500">
            Once built, run one of the bundled examples to verify the installation:
          </p>
          <pre className="mb-4 overflow-x-auto rounded-xl bg-[#0f172a] px-5 py-4 text-[13px] leading-6 text-slate-200">
            <code>{`./myEnvDynawo.sh jobs-with-curves examples/DynaWaltz/IEEE14/IEEE14_GeneratorDisconnections/IEEE14.jobs`}</code>
          </pre>
          <p className="mb-3 text-sm leading-6 text-slate-500">
            Deploy the shell autocompletion to also get a <code className="rounded bg-slate-100 px-1.5 py-0.5 text-[12px] font-mono text-slate-700">dynawo</code> alias available from anywhere:
          </p>
          <pre className="mb-2 overflow-x-auto rounded-xl bg-[#0f172a] px-5 py-4 text-[13px] leading-6 text-slate-200">
            <code>{`# bash
./myEnvDynawo.sh deploy-autocompletion --deploy --shell-type bash
# zsh
./myEnvDynawo.sh deploy-autocompletion --deploy --shell-type zsh`}</code>
          </pre>
        </section>

        {/* ── WINDOWS ────────────────────────────────────────────── */}
        <section className="mb-16">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50">
              <Monitor size={18} className="text-blue-600" />
            </div>
            <h2 className="text-xl font-extrabold text-[#002B5C]">Windows</h2>
          </div>

          <h3 className="mb-4 text-sm font-extrabold text-[#002B5C]">Requirements</h3>
          <div className="mb-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Visual Studio 2022", note: "Visual Studio 2019 also works. Required for the C++ compiler." },
              { name: "CMake", note: "Build system generator." },
              { name: "Java (OpenJDK)", note: "Required to build the OpenModelica compiler." },
              { name: "Python 2 or Python 3", note: "python must be in PATH, or set DYNAWO_PYTHON_COMMAND." },
            ].map((r) => (
              <div key={r.name} className="rounded-xl border border-blue-100 bg-blue-50 p-4">
                <p className="mb-1 text-sm font-extrabold text-blue-600">{r.name}</p>
                <p className="text-[12px] leading-5 text-slate-500">{r.note}</p>
              </div>
            ))}
          </div>

          <h3 className="mb-3 text-sm font-extrabold text-[#002B5C]">Build</h3>
          <p className="mb-3 text-sm leading-6 text-slate-500">
            Open <strong>x64 Native Tools Command Prompt for VS2022</strong> and run:
          </p>
          <pre className="mb-4 overflow-x-auto rounded-xl bg-[#0f172a] px-5 py-4 text-[13px] leading-6 text-slate-200">
            <code>{`git config --global core.eol lf
git config --global core.autocrlf input
set OPENMODELICAHOME=
set OPENMODELICALIBRARY=
md dynawo-project && cd dynawo-project
git clone https://github.com/dynawo/dynawo.git
cd dynawo
cmake -S dynawo/3rdParty -B b-3-p -DCMAKE_INSTALL_PREFIX=../d-3-p -DOPENMODELICA_INSTALL=../OpenModelica/Install -DOPENMODELICA_SRC=../OpenModelica/Source -DOMDEV_HOME=../OMDev
cmake --build b-3-p
cmake -S dynawo -B b -DCMAKE_INSTALL_PREFIX=../d-i -DDYNAWO_HOME=.. -DINSTALL_OPENMODELICA=../../OpenModelica/Install -DDYNAWO_THIRD_PARTY_DIR=../../d-3-p
cmake --build b --target install
cmake --build b --target models
cmake --build b --target solvers`}</code>
          </pre>
          <div className="mb-6 flex items-start gap-3 rounded-xl border border-yellow-200 bg-yellow-50 px-5 py-4">
            <AlertTriangle size={16} className="mt-0.5 shrink-0 text-yellow-600" />
            <p className="text-sm leading-6 text-yellow-800">
              Keep build and install directory names short (e.g. <code className="rounded bg-yellow-100 px-1 font-mono text-[11px]">b</code>,{" "}
              <code className="rounded bg-yellow-100 px-1 font-mono text-[11px]">d-i</code>,{" "}
              <code className="rounded bg-yellow-100 px-1 font-mono text-[11px]">b-3-p</code>) — Windows has a maximum path length limitation. The install folders (<code className="rounded bg-yellow-100 px-1 font-mono text-[11px]">d-i</code>, <code className="rounded bg-yellow-100 px-1 font-mono text-[11px]">d-3-p</code>) must be located outside the <code className="rounded bg-yellow-100 px-1 font-mono text-[11px]">dynawo</code> source folder.
            </p>
          </div>

          <h3 className="mb-3 text-sm font-extrabold text-[#002B5C]">Launch a simulation</h3>
          <pre className="overflow-x-auto rounded-xl bg-[#0f172a] px-5 py-4 text-[13px] leading-6 text-slate-200">
            <code>{`cd ..\\d-i
dynawo.cmd jobs ..\\dynawo\\examples\\DynaWaltz\\IEEE14\\IEEE14_GeneratorDisconnections\\IEEE14.jobs
dynawo.cmd jobs-with-curves ..\\dynawo\\examples\\DynaWaltz\\IEEE14\\IEEE14_GeneratorDisconnections\\IEEE14.jobs`}</code>
          </pre>
        </section>

        {/* ── ENV VARS ───────────────────────────────────────────── */}
        <section className="mb-16">
          <h2 className="mb-2 text-xl font-extrabold text-[#002B5C]">Environment variables</h2>
          <p className="mb-6 text-sm leading-6 text-slate-500">
            These variables can be adjusted in <code className="rounded bg-slate-100 px-1.5 py-0.5 text-[12px] font-mono text-slate-700">myEnvDynawo.sh</code> (Linux) or as system environment variables (Windows).
          </p>
          <div className="overflow-hidden rounded-2xl border border-slate-200">
            {envVars.map((v, i) => (
              <div key={v.name} className={`flex items-start gap-6 px-6 py-4 ${i % 2 === 0 ? "bg-white" : "bg-slate-50"}`}>
                <code className="shrink-0 rounded-lg bg-[#0f172a] px-3 py-1.5 text-[12px] font-mono text-emerald-400 whitespace-nowrap">{v.name}</code>
                <p className="text-sm leading-6 text-slate-500">{v.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-[12px] text-slate-400">
            More options are documented at{" "}
            <a href="https://dynawo.github.io/install/compilation_options" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#00A3E0] hover:underline">
              dynawo.github.io/install/compilation_options
            </a>.
          </p>
        </section>

        {/* ── USEFUL COMMANDS ────────────────────────────────────── */}
        <section className="mb-16">
          <h2 className="mb-2 text-xl font-extrabold text-[#002B5C]">Useful commands (Linux)</h2>
          <p className="mb-6 text-sm leading-6 text-slate-500">
            All build targets are exposed through <code className="rounded bg-slate-100 px-1.5 py-0.5 text-[12px] font-mono text-slate-700">myEnvDynawo.sh</code>. Run it without arguments to list all available commands.
          </p>
          <div className="overflow-hidden rounded-2xl border border-slate-200">
            {[
              { cmd: "./myEnvDynawo.sh build-user", desc: "Full build including third-party dependencies (first run)." },
              { cmd: "./myEnvDynawo.sh jobs <file>.jobs", desc: "Run a simulation from a .jobs file." },
              { cmd: "./myEnvDynawo.sh jobs-with-curves <file>.jobs", desc: "Run a simulation and open result curves in a browser." },
              { cmd: "./myEnvDynawo.sh help", desc: "List all available commands." },
            ].map((row, i) => (
              <div key={row.cmd} className={`flex items-start gap-6 px-6 py-4 ${i % 2 === 0 ? "bg-white" : "bg-slate-50"}`}>
                <code className="shrink-0 rounded-lg bg-[#0f172a] px-3 py-1.5 text-[12px] font-mono text-emerald-400 whitespace-nowrap">
                  {row.cmd}
                </code>
                <p className="text-sm leading-6 text-slate-500">{row.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Next steps */}
        <section>
          <h2 className="mb-6 text-xl font-extrabold text-[#002B5C]">Next steps</h2>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/contributing/how-to-contribute"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-[#002B5C] shadow-sm hover:border-[#00A3E0] hover:text-[#00A3E0] transition"
            >
              ← How to contribute
            </Link>
            <Link
              to="/contributing/code-of-conduct"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-[#002B5C] shadow-sm hover:border-[#00A3E0] hover:text-[#00A3E0] transition"
            >
              Code of conduct →
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
