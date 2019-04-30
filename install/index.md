---
title: Install
layout: default
---
<!--
    Except where otherwise noted, content in this website is Copyright (c)
    2015-2019, RTE (http://www.rte-france.com) and licensed under a
    CC-BY-4.0 (https://creativecommons.org/licenses/by/4.0/)
    license. All rights reserved.
-->
For the moment Dyna&omega;o has only be tested on **Linux** platforms (Centos and Debian based) and provided that you can install system packages there should be no problem on other Linux distributions. For **MacOS** and **Windows** users we provide a [Docker](https://github.com/dynawo/dynawo-docker) solution (also on [Docker Hub](https://hub.docker.com/r/dynawo/dynawo)) to either download a [pre-build image](https://github.com/dynawo/dynawo-docker#users) with Dyna&omega;o embedded or create your [own image](https://github.com/dynawo/dynawo-docker#developer) for developers. We also plan to provide compilation compatibility for Windows. If you have any issue building Dyna&omega;o don't hesitate to send us an [email](mailto:rte-des-simulation-dynamique@rte-france.com) with your errors and we will try to answer you back quickly.

Dyna&omega;o and its dependencies will need some packages to work. Here is the list of all packages you can install to have no dependency problem in the following steps. This example works for Ubuntu:

``` bash
$> apt-get install -y git gcc g++ gfortran autoconf pkgconf automake make libtool cmake hwloc openjdk-8-jdk libblas-dev liblpsolve55-dev libarchive-dev doxygen doxygen-latex liblapack-dev libexpat1-dev libsqlite3-dev libxerces-c-dev zlib1g-dev gettext patch clang python-pip libncurses5-dev libreadline-dev libdigest-perl-md5-perl unzip gcovr lcov libboost-all-dev qt4-qmake qt4-dev-tools lsb-release libxml2-utils python-lxml python-psutil wget libcurl4-openssl-dev rsync
```
This one works for Fedora:
``` bash
$> dnf install -y git gcc gcc-c++ gcc-gfortran autoconf automake make libtool cmake hwloc java-1.8.0-openjdk-devel blas-devel lapack-devel lpsolve-devel expat-devel glibc-devel sqlite-devel xerces-c-devel libarchive-devel zlib-devel doxygen doxygen-latex qt-devel gettext patch wget python-devel clang llvm-devel ncurses-devel readline-devel unzip perl-Digest-MD5 vim gcovr python-pip python-psutil boost-devel lcov gtest-devel gmock-devel xz rsync python-lxml graphviz libcurl-devel
```

To build Dyna&omega;o you need to clone this repository and launch the following commands in the source code directory:

``` bash
$> git clone https://github.com/dynawo/dynawo.git dynawo
$> cd dynawo
$> echo '#!/bin/bash
export DYNAWO_HOME=$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)

export DYNAWO_SRC_OPENMODELICA=$DYNAWO_HOME/OpenModelica/Source
export DYNAWO_INSTALL_OPENMODELICA=$DYNAWO_HOME/OpenModelica/Install

export DYNAWO_LOCALE=en_GB
export DYNAWO_RESULTS_SHOW=true
export DYNAWO_BROWSER=xdg-open

export DYNAWO_NB_PROCESSORS_USED=$(($(nproc --all)/2))

export DYNAWO_BUILD_TYPE=Release
export DYNAWO_CXX11_ENABLED=YES

$DYNAWO_HOME/util/envDynawo.sh $@' > myEnvDynawo.sh
$> chmod +x myEnvDynawo.sh
$> ./myEnvDynawo.sh build-user
```

You can have more information about compilation options and customisation [here](compilation_options).

**Warning**: If you're working behind a proxy make sure you have exported the following proxy environment variables
``` bash
$> export http_proxy=http://login:mdp@proxy_address:proxy_port/
$> export https_proxy=https://login:mdp@proxy_address:proxy_port/
$> export no_proxy=localhost,127.0.0.0/8,::1
$> export HTTP_PROXY=$http_proxy;export HTTPS_PROXY=$https_proxy;export NO_PROXY=$no_proxy;
```

Once you have installed and compiled Dyna&omega;o as explained in the previous
part, you can launch a simulation by calling:

``` bash
$> ./myEnvDynawo.sh jobs nrt/data/IEEE14/IEEE14_BasicTestCases/IEEE14_DisconnectLine/IEEE14.jobs
```

This command launches a simple simulation on the IEEE 14-bus network that should work if your installation went well and your compilation finished successfully. It could be checked by looking to the outputs directory and comparing its content with the ones from the reference outputs directory (especially the curves file).

``` bash
$> cd nrt/data/IEEE14/IEEE14_BasicTestCases/IEEE14_DisconnectLine
$> ls outputs
$> diff outputs/curves/curves.csv reference/outputs/curves/curves.csv
```

All the simulation outputs are stored into the outputs directory.

It is also possible to display directly simulation results - plots - into a simple GUI (created for demonstration purpose) by using the following command:

``` bash
$> ./myEnvDynawo.sh jobs-with-curves nrt/data/IEEE14/IEEE14_BasicTestCases/IEEE14_DisconnectLine/IEEE14.jobs
```

For example, for this line disconnection, the plot for the voltage module in p.u. on bus 10 should look like this:

![image](../assets/images/VoltageModule.png "Voltage module in p.u. on bus 10"){: .center-image}

You can obtain more informations about commands you can use by launching:
``` bash
$> ./myEnvDynawo.sh help
```

**We advise you to deploy our autocompletion** script to help you with the available commands, it will also set an alias in your bashrc or zshrc to be able to call Dyna&omega;o from anywhere. You can launch one of the two following commands:
``` bash
$> ./myEnvDynawo.sh deploy-autocompletion --deploy --shell-type bash
$> ./myEnvDynawo.sh deploy-autocompletion --deploy --shell-type zsh
```

Then you can launch:
``` bash
$> dynawo help
```
