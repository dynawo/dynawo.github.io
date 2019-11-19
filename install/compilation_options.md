---
title: Compilation Options
layout: default
---
<!--
    Except where otherwise noted, content in this website is Copyright (c)
    2015-2019, RTE (http://www.rte-france.com) and licensed under a
    CC-BY-4.0 (https://creativecommons.org/licenses/by/4.0/)
    license. All rights reserved.
-->
Dyna&omega;o compilation and launching can be customised through environment variables. `util/envDynawo.sh` script defines some environment variables than can be overridden by the user. The `myEnvDynawo.sh` script created at the first step of install is a simple way for the user to customise those **environment variables**. Some variables are  **mandatory** and some are **optional**, this page aims at providing information about all those variables.

# Mandatory variables

To launch `util/envDynawo.sh` script a list of variables needs to be defined.

All the variables should be defined through an export `export VAR=VALUE`. **For simplicity we recommend to define those in `myEnvDynawo.sh` like it is done in the install procedure of [Dyna&omega;o](/index.md)**.

|Variable|Description|Value|
|---------|-----------|-----------|
|DYNAWO_HOME|Path of Dyna&omega;o source code.|PATH|
|DYNAWO_BUILD_TYPE|Compile Dyna&omega;o in Release or Debug.|Debug or Release|
|DYNAWO_CXX11_ENABLED|Should compiler use -std=c++11 or -std=c++98.|YES or NO|
|DYNAWO_SRC_OPENMODELICA|Path of OpenModelica source code.|PATH|
|DYNAWO_INSTALL_OPENMODELICA|Path of OpenModelica install folder.|PATH|

# Optional variables

Below is a list of variables that are optional to define in `myEnvDynawo.sh`. Usually we recommend to at least define:
- DYNAWO_NB_PROCESSORS_USED
- DYNAWO_RESULTS_SHOW
- DYNAWO_BROWSER

|Variable|Description|Value|
|---------|-----------|-----------|
|DYNAWO_NB_PROCESSORS_USED|Allow to use multiple cores for compilation.|1 (default) or n|
|DYNAWO_BROWSER|Define your default browser command.|firefox (default) or other|
|DYNAWO_PDFVIEWER|Define your default pdf viewer command.|xdg-open (default) or other (evince)|
|DYNAWO_RESULTS_SHOW|Should browser open at the end of simulation or tests coverage.|true (default) or false|
|DYNAWO_LOCALE|Enables to create a different local language for dictionaries.|en_GB|
|DYNAWO_COMPILER|Choose compiler|GCC (default) or CLANG|
|DYNAWO_LIBRARY_TYPE|Allow to compile Dyna&omega;o executable and libraries as shared or static objects.|SHARED (default) or STATIC|
|DYNAWO_LIBARCHIVE_HOME|Path to a custom install of libarchive.|PATH (default is system one)|
|DYNAWO_BOOST_HOME|Path to a custom install of Boost.|PATH (default is system one)|
|DYNAWO_GTEST_HOME|Path to a custom install of GoogleTest.|PATH (default is system one)|
|DYNAWO_GMOCK_HOME|Path to a custom install of GoogleMock.|Usually GTEST_ROOT (default is system one)|

For `DYNAWO_LOCALE` only `en_GB` is available for the moment and the user would have to define its own dictionaries in `$DYNAWO_HOME/dynawo/sources/Common/Dictionaries` for its language, for example for fr_FR.

# Optional optional variables

Some other variables are even more optional and can be defined by the user in some very particular cases. **We recommend to let `util/envDynawo.sh` defines those variables but if you do export them beware of the consequences.**

|Variable|Description|Value|
|---------|-----------|-----------|
|DYNAWO_BUILD_DIR|Path to a build directory (because of CMake should be different than DYNAWO_HOME).|PATH|
|DYNAWO_INSTALL_DIR|Path where you want to install Dyna&omega;o.|PATH|
|DYNAWO_DEPLOY_DIR|Path where you want to deploy Dyna&omega;o.|PATH|
|DYNAWO_THIRD_PARTY_BUILD_DIR|Where you want to build 3rd Parties.|PATH|
|DYNAWO_THIRD_PARTY_INSTALL_DIR|Where you want to install 3rd Parties.|PATH|
|DYNAWO_USE_XSD_VALIDATION|Enable to use information to validate xml files.|true (default) or false|
|DYNAWO_FLOT_DOWNLOAD_URL|Url to a repository containing a Flot archive (named *v0.6.0.tar.gz*).|Default [https://github.com/flot/flot/archive](https://github.com/flot/flot/archive).|
|DYNAWO_JQUERY_DOWNLOAD_URL|Url to a repository containing a JQuery archive (named *1.3.2.targ.gz*).|Default [https://github.com/jquery/jquery/archive](https://github.com/jquery/jquery/archive)|
|DYNAWO_CPPLINT_DOWNLOAD_URL|Url to a repository containing a ccplint archive (named *1.3.0.targ.gz*).|Default [https://github.com/cpplint/cpplint/archive](https://github.com/cpplint/cpplint/archive)|
|DYNAWO_ADEPT_DOWNLOAD_URL|Url to a repository containing a Adept archive (named *adept-2.0.5.tar.gz*).|Default [http://www.met.reading.ac.uk/clouds/adept](http://www.met.reading.ac.uk/clouds/adept)|
|DYNAWO_MODELICA_GIT_URL|Url to a git repository of Modelica Standard Library.|Default [https://github.com/modelica/ModelicaStandardLibrary.git](https://github.com/modelica/ModelicaStandardLibrary.git)|
|DYNAWO_OPENMODELICA_GIT_URL|Url to a git repository of OpenModelica.|Default [https://openmodelica.org/git-readonly/OpenModelica.git](https://openmodelica.org/git-readonly/OpenModelica.git)|
|DYNAWO_SUITE_SPARSE_DOWNLOAD_URL|Url to a repository containing a SuiteSparse archive (named *SuiteSparse-4.5.4.tar.gz*).|Default [http://faculty.cse.tamu.edu/davis/SuiteSparse](http://faculty.cse.tamu.edu/davis/SuiteSparse)|
|DYNAWO_SUNDIALS_DOWNLOAD_URL|Url to a repository containing a Sundials archive (named *sundials-4.1.0.tar.gz*).|Default [https://computation.llnl.gov/projects/sundials/download](https://computation.llnl.gov/projects/sundials/download)|
|DYNAWO_XERCESC_DOWNLOAD_URL|Url to a repository containing a Xerces-C++ archive (named *xerces-c-3.2.2.tar.gz*).|Default [http://archive.apache.org/dist/xerces/c/3/sources](http://archive.apache.org/dist/xerces/c/3/sources)|

# Custom install of system libraries

Some system libraries that should be installed through a package manager (**dnf** or **apt** for example) can be installed from source and used to compile Dyna&omega;o against them. **We don't recommend to do this on recent OS** but this procedure have been tested on Centos6.4 with success. Below we provide small scripts to download and compile a **Release** or **Debug** version of those libraries. All downloads and builds will be done in the directory where you create the scripts (ie execute the first command).

## Lcov

``` bash
$> echo '#!/bin/bash
LCOV_VERSION=1.13
LCOV_ARCHIVE=lcov-$LCOV_VERSION.tar.gz
LCOV_DIRECTORY=lcov-$LCOV_VERSION
LCOV_DOWNLOAD_URL=https://downloads.sourceforge.net/ltp
SCRIPT_DIR=$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)
INSTALL_DIR=$SCRIPT_DIR/Lcov/install/$LCOV_VERSION
cd $SCRIPT_DIR
if [ ! -f "${LCOV_ARCHIVE}" ]; then
  if [ -x "$(command -v curl)" ]; then
    curl -L ${LCOV_DOWNLOAD_URL}/${LCOV_ARCHIVE} -o ${LCOV_ARCHIVE} || { echo "Error while downloading Lcov."; exit 1; }
  else
    echo "You need to install curl."
    exit 1
  fi
fi
if [ ! -d "$SCRIPT_DIR/$LCOV_DIRECTORY" ]; then
  tar -xzf $LCOV_ARCHIVE -C $SCRIPT_DIR || { echo "Error while extracting Lcov."; exit 1; }
fi
if [ ! -d "$INSTALL_DIR" ]; then
  mkdir -p $INSTALL_DIR
fi
cd "$SCRIPT_DIR/$LCOV_DIRECTORY"
DESTDIR=$INSTALL_DIR make install || { echo "Error while make install."; exit 1; }' > compile_lcov.sh
$> chmod +x compile_lcov.sh
$> ./compile_lcov.sh
```

You can then use your custom install with `export PATH=/path/to/compile_lcov.sh/Lcov/install/1.13/usr/local/bin:$PATH` in your `myEnvDynawo.sh` script.

## CMake

``` bash
$> echo '#!/bin/bash
CMAKE_VERSION=3.12.3
CMAKE_VERSION_SHORT=3.12
CMAKE_ARCHIVE=cmake-$CMAKE_VERSION.tar.gz
CMAKE_DOWNLOAD_URL=https://cmake.org/files/v$CMAKE_VERSION_SHORT
CMAKE_DIRECTORY=cmake-$CMAKE_VERSION
SCRIPT_DIR=$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)
INSTALL_DIR=$SCRIPT_DIR/cmake/install/${CMAKE_VERSION//_/.}
NB_PROCESSORS_USED=1
pushd $SCRIPT_DIR
if [ ! -f "${CMAKE_ARCHIVE}" ]; then
  if [ -x "$(command -v curl)" ]; then
    curl -L ${CMAKE_DOWNLOAD_URL}/${CMAKE_ARCHIVE} -o ${CMAKE_ARCHIVE} || { echo "Error while downloading cmake."; exit 1; }
  else
    echo "You need to install curl."
    exit 1
  fi
fi
if [ ! -d "$SCRIPT_DIR/$CMAKE_DIRECTORY" ]; then
  tar -xzf $CMAKE_ARCHIVE -C $SCRIPT_DIR || { echo "Error while extracting cmake."; exit 1; }
fi

if [ ! -d "$INSTALL_DIR" ]; then
  mkdir -p $INSTALL_DIR
fi
pushd $SCRIPT_DIR/$CMAKE_DIRECTORY
./bootstrap --system-curl --prefix=$INSTALL_DIR || { echo "Error while bootstrap cmake."; exit 1; }
make -j $NB_PROCESSORS_USED || { echo "Error while cmake make."; exit 1; }
make -j $NB_PROCESSORS_USED install || { echo "Error while cmake make install."; exit 1; }' > compile_cmake.sh
$> chmod +x compile_cmake.sh
$> ./compile_cmake.sh
```

You can use your custom install with `export PATH=PATH_TO_CMAKE_INSTALL/bin:$PATH` in your `myEnvDynawo.sh` script.
