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
Dyna&omega;o compilation and launching can be customised through environment variables. `util/envDynawo.sh` script defines some environment variables than can be override by the user. The `myEnvDynawo.sh` script created at the first step of install is a simple way for the user to customise those **environment variables**. Some variables are  **mandatory** and some are **optional**, this page aims at providing information about all those variables.

# Mandatory variables

To launch `util/envDynawo.sh` script a list of variables needs to be defined.

All the variables should be defined through an export `export VAR=VALUE`. For simplicity we recommend to define those in `myEnvDynawo.sh` like it is done in the install procedure of [Dyna&omega;o](/index.md).

|Variable|Description|Value|
|---------|-----------|-----------|
|DYNAWO_HOME|Path of Dyna&omega;o source code.|PATH|
|BUILD_TYPE|Compile Dyna&omega;o in Release or Debug.|Debug or Release|
|CXX11_ENABLED|Should compiler use -std=c++11 or -std=c++98.|YES or NO|
|OPENMODELICA_VERSION|Current OpenModelica version used by Dyna&omega;o.|1_9_4|
|SRC_OPENMODELICA|Path of OpenModelica source code.|PATH|
|INSTALL_OPENMODELICA|Path of OpenModelica install folder.|PATH|
|USE_ADEPT|Should Dyna&omega;o use Adept as differentiation tool.|YES|

# Optional variables

Below is a list of variables that are optional to define in `myEnvDynawo.sh`. Usually we recommend to at least define:
- NB_PROCESSORS_USED
- RESULTS_SHOW
- BROWSER

|Variable|Description|Value|
|---------|-----------|-----------|
|NB_PROCESSORS_USED|Allow to use multiple cores for compilation.|1 or n|
|BROWSER|Define your default browser command.|firefox or other|
|RESULTS_SHOW|Should browser open at the end of simulation or tests coverage.|true or false|
|DYNAWO_LOCALE|Enables to create a different local language for dictionaries.|en_GB|
|COMPILER|Choose compiler|GCC or CLANG (**Warning** recent version of clang is not working with c++11 for the moment).|
|DYNAWO_LIBRARY_TYPE|Allow to compile Dyna&omega;o executable and libraries as shared or static objects.|SHARED or STATIC|
|LIBARCHIVE_HOME|Path to a custom install of libarchive.|PATH|
|BOOST_ROOT|Path to a custom install of Boost.|PATH|
|GTEST_ROOT|Path to a custom install of GoogleTest.|PATH|
|GMOCK_HOME|Path to a custom install of GoogleMock.|Usually GTEST_ROOT|

# Optional optional variables

Some other variables are even more optional and can be defined by the user in some very particular cases. We recommend to let `util/envDynawo.sh` defines those variables but if you do export them beware of the consequences.

|Variable|Description|Value|
|---------|-----------|-----------|
|DYNAWO_BUILD_DIR|Path to a build directory (because of CMake should be different than DYNAWO_HOME).|PATH|
|DYNAWO_INSTALL_DIR|Path where you want to install Dyna&omega;o.|PATH|
|DYNAWO_DEPLOY_DIR|Path where you want to deploy Dyna&omega;o.|PATH|
|THIRD_PARTY_BUILD_DIR|Where you want to build 3rd Parties.|PATH|
|THIRD_PARTY_INSTALL_DIR|Where you want to build 3rd Parties.|PATH|
|MODELICA_LIB|Version of [Modelica Standard Library](https://github.com/modelica/ModelicaStandardLibrary) to use.|3.2.2|
|USE_XSD_VALIDATION|Enable to use information to validate xml files.|true or false|
|FLOT_DOWNLOAD_URL|Url to a repository containing a Flot archive (named *v0.6.0.tar.gz*).|Default [https://github.com/flot/flot/archive](https://github.com/flot/flot/archive).|
|JQUERY_DOWNLOAD_URL|Url to a repository containing a JQuery archive (named *1.3.2.targ.gz*).|Default [https://github.com/jquery/jquery/archive](https://github.com/jquery/jquery/archive)|
|CPPLINT_DOWNLOAD_URL|Url to a repository containing a ccplint archive (named *1.3.0.targ.gz*).|Default [https://github.com/cpplint/cpplint/archive](https://github.com/cpplint/cpplint/archive)|
|ADEPT_DOWNLOAD_URL|Url to a repository containing a Adept archive (named *adept-1.1.tar.gz*).|Default [http://www.met.reading.ac.uk/clouds/adept](http://www.met.reading.ac.uk/clouds/adept)|
|MODELICA_GIT_URL|Url to a git repository of Modelica Standard Library.|Default [https://github.com/modelica/ModelicaStandardLibrary.git](https://github.com/modelica/ModelicaStandardLibrary.git)|
|OPENMODELICA_GIT_URL|Url to a git repository of OpenModelica.|Default [https://openmodelica.org/git-readonly/OpenModelica.git](https://openmodelica.org/git-readonly/OpenModelica.git)|
|SUITE_SPARSE_DOWNLOAD_URL|Url to a repository containing a SuiteSparse archive (named *SuiteSparse-4.5.4.tar.gz*).|Default [http://faculty.cse.tamu.edu/davis/SuiteSparse](http://faculty.cse.tamu.edu/davis/SuiteSparse)|
|SUNDIALS_DOWNLOAD_URL|Url to a repository containing a Sundials archive (named *sundials-2.7.0.tar.gz*).|Default [https://computation.llnl.gov/projects/sundials/download](https://computation.llnl.gov/projects/sundials/download)|
|XERCESC_DOWNLOAD_URL|Url to a repository containing a Xerces-C++ archive (named *xerces-c-3.2.2.tar.gz*).|Default [http://archive.apache.org/dist/xerces/c/3/sources](http://archive.apache.org/dist/xerces/c/3/sources)|

# Custom install of system libraries

Some system libraries that should be installed through a package manager (**dnf** or **apt** for example) can be installed from source and used to compile Dyna&omega;o against them. **We don't recommend to do this on recent OS** but this procedure have been tested on Centos6.4 with success. Below we provide small scripts to download and compile a **Release** or **Debug** version of those libraries. All downloads and builds will be done in the directory where you create the scripts (ie execute the first command).

## Libarchive

[Libarchive website](https://www.libarchive.org/)

``` bash
$> echo 'LIBARCHIVE_VERSION=3.3.3
LIBARCHIVE_ARCHIVE=libarchive-${LIBARCHIVE_VERSION}.tar.gz
LIBARCHIVE_DIRECTORY=libarchive-$LIBARCHIVE_VERSION
LIBARCHIVE_DOWNLOAD_URL=https://libarchive.org/downloads
SCRIPT_DIR=$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)
BUILD_DIR=$SCRIPT_DIR/libarchive/build/$LIBARCHIVE_VERSION
BUILD_TYPE=Release
INSTALL_DIR=$SCRIPT_DIR/libarchive/install/$LIBARCHIVE_VERSION
C_COMPILER=$(command -v gcc)
NB_PROCESSORS_USED=1
cd $SCRIPT_DIR
if [ ! -f "${LIBARCHIVE_ARCHIVE}" ]; then
  if [ -x "$(command -v wget)" ]; then
    wget ${LIBARCHIVE_DOWNLOAD_URL}/${LIBARCHIVE_ARCHIVE} || { echo "Error while downloading Libarchive."; exit 1; }
  else
    echo "You need to install wget."
    exit 1
  fi
fi
if [ ! -d "$SCRIPT_DIR/$LIBARCHIVE_DIRECTORY" ]; then
  tar -xzf $LIBARCHIVE_ARCHIVE -C $SCRIPT_DIR || { echo "Error while extracting Libarchive."; exit 1; }
fi
if [ ! -d "$BUILD_DIR" ]; then
  mkdir -p $BUILD_DIR
fi
if [ ! -d "$INSTALL_DIR" ]; then
  mkdir -p $INSTALL_DIR
fi
cd $BUILD_DIR
cmake "$SCRIPT_DIR/$LIBARCHIVE_DIRECTORY" -DCMAKE_INSTALL_PREFIX=$INSTALL_DIR -DCMAKE_BUILD_TYPE=$BUILD_TYPE -DCMAKE_C_COMPILER=$C_COMPILER || { echo "Error while cmake configuration of Libarchive."; exit 1; }
make -j $NB_PROCESSORS_USED || { echo "Error while make of Libarchive."; exit 1; }
make install || { echo "Error while make install of Libarchive."; exit 1; }' > compile_libarchive.sh
$> chmod +x compile_libarchive.sh
$> ./compile_libarchive.sh
```

## Boost

[Boost website](https://www.boost.org/)

``` bash
$> echo 'BOOST_VERSION=1_69_0
BOOST_ARCHIVE=boost_${BOOST_VERSION}.tar.gz
BOOST_DIRECTORY=boost_$BOOST_VERSION
BOOST_DOWNLOAD_URL=https://sourceforge.net/projects/boost/files/boost/${BOOST_VERSION//_/.}
SCRIPT_DIR=$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)
BUILD_DIR=$SCRIPT_DIR/boost/build/${BOOST_VERSION//_/.}
BUILD_TYPE=Release
INSTALL_DIR=$SCRIPT_DIR/boost/install/${BOOST_VERSION//_/.}
C_COMPILER=$(command -v gcc)
CXX11_ENABLED=NO
NB_PROCESSORS_USED=1
cd $SCRIPT_DIR
if [ ! -f "${BOOST_ARCHIVE}" ]; then
  if [ -x "$(command -v wget)" ]; then
    wget ${BOOST_DOWNLOAD_URL}/${BOOST_ARCHIVE} || { echo "Error while downloading Boost."; exit 1; }
  else
    echo "You need to install wget."
    exit 1
  fi
fi
if [ ! -d "$SCRIPT_DIR/$BOOST_DIRECTORY" ]; then
  tar -xzf $BOOST_ARCHIVE -C $SCRIPT_DIR || { echo "Error while extracting Boost."; exit 1; }
fi
if [ "$(echo "$CXX11_ENABLED" | tr "[:upper:]" "[:lower:]")" = "no" -o "$(echo "$CXX11_ENABLED" | tr "[:upper:]" "[:lower:]")" = "false" -o "$(echo "$CXX11_ENABLED" | tr "[:upper:]" "[:lower:]")" = "off" ]; then
  CXX_STD_FLAG="98"
else
  CXX_STD_FLAG="11"
fi
if [ ! -d "$BUILD_DIR" ]; then
  mkdir -p $BUILD_DIR
fi
if [ ! -d "$INSTALL_DIR" ]; then
  mkdir -p $INSTALL_DIR
fi
cd $SCRIPT_DIR/$BOOST_DIRECTORY
./bootstrap.sh --prefix=$INSTALL_DIR cxxstd=$CXX_STD_FLAG --with-toolset=$(basename $C_COMPILER) --with-libraries=filesystem,program_options,serialization,system,log,iostreams || { echo "Error while bootstrap."; exit 1; }
./b2 -d2 -j $NB_PROCESSORS_USED --build-dir=$BUILD_DIR  cxxflags="-std=c++$CXX_STD_FLAG" toolset=$(basename $C_COMPILER) variant=${BUILD_TYPE,,} install || { echo "Error while b2."; exit 1; }' > compile_boost.sh
$> chmod +x compile_boost.sh
$> ./compile_boost.sh
```

Version 1_69_0 was not tested on Centos6.4 but 1_59_0 is working well.

## GoogleTest

[GoogleTest website](https://github.com/google/googletest)

``` bash
$> echo 'GTEST_VERSION=1.8.1
GTEST_ARCHIVE=release-${GTEST_VERSION}.tar.gz
GTEST_DIRECTORY=googletest-release-$GTEST_VERSION
GTEST_DOWNLOAD_URL=https://github.com/google/googletest/archive
SCRIPT_DIR=$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)
BUILD_DIR=$SCRIPT_DIR/googletest/build/$GTEST_VERSION
BUILD_TYPE=Release
INSTALL_DIR=$SCRIPT_DIR/googletest/install/$GTEST_VERSION
C_COMPILER=$(command -v gcc)
CXX_COMPILER=$(command -v g++)
CXX11_ENABLED=NO
NB_PROCESSORS_USED=1
cd $SCRIPT_DIR
if [ ! -f "${GTEST_ARCHIVE}" ]; then
  if [ -x "$(command -v wget)" ]; then
    wget ${GTEST_DOWNLOAD_URL}/${GTEST_ARCHIVE} || { echo "Error while downloading GoogleTest."; exit 1; }
  else
    echo "You need to install wget."
    exit 1
  fi
fi
if [ ! -d "$SCRIPT_DIR/$GTEST_DIRECTORY" ]; then
  tar -xzf $GTEST_ARCHIVE -C $SCRIPT_DIR || { echo "Error while extracting GoogleTest."; exit 1; }
fi
if [ ! -d "$BUILD_DIR" ]; then
  mkdir -p $BUILD_DIR
fi
if [ ! -d "$INSTALL_DIR" ]; then
  mkdir -p $INSTALL_DIR
fi
if [ "$(echo "$CXX11_ENABLED" | tr "[:upper:]" "[:lower:]")" = "no" -o "$(echo "$CXX11_ENABLED" | tr "[:upper:]" "[:lower:]")" = "false" -o "$(echo "$CXX11_ENABLED" | tr "[:upper:]" "[:lower:]")" = "off" ]; then
  CXX_STD_FLAG="98"
else
  CXX_STD_FLAG="11"
fi
cd $BUILD_DIR
cmake "$SCRIPT_DIR/$GTEST_DIRECTORY" -DBUILD_SHARED_LIBS=ON -DCMAKE_INSTALL_PREFIX=$INSTALL_DIR -DCMAKE_BUILD_TYPE=$BUILD_TYPE -DCMAKE_C_COMPILER=$C_COMPILER -DCMAKE_CXX_COMPILER=$CXX_COMPILER -DCMAKE_CXX_FLAGS="-std=c++$CXX_STD_FLAG" -DCVF_VERSION:STRING=1.9.0 || { echo "Error while cmake configuration of GoogleTest."; exit 1; }
make -j $NB_PROCESSORS_USED || { echo "Error while make."; exit 1; }
make install || { echo "Error while make install."; exit 1; }' > compile_googletest.sh
$> chmod +x compile_googletest.sh
$> ./compile_googletest.sh
```

`DCVF_VERSION` flag might be unused on newer CMake version, it is only here because we had trouble with cmake version 2.8.12.2 (at least).

**Warnings** Version 1.8.1 does not work on Centos6.4 ([Related Issue](https://github.com/google/googletest/pull/2073)) and 1.8.0 causes problems with thread on runtime so we recommend to use the system one (1.5.0) even if at the time GoogleTest instructed to not use pre-built libraries. For more recent OS this procedure and the use of the latest version of GoogleTest should be fine. On Debian based OS **libgtest-dev** provides sources but not compiled version as instructed by GoogleTest so we recommend to install it with the previous procedure (tested on Debian 9). If you have any trouble building GoogleTest stackoverflow is full of answers for various problems on various OS, otherwise don't hesitate to ask us.

## Lcov

``` bash
$> echo 'LCOV_VERSION=1.13
LCOV_ARCHIVE=lcov-$LCOV_VERSION.tar.gz
LCOV_DIRECTORY=lcov-$LCOV_VERSION
LCOV_DOWNLOAD_URL=https://downloads.sourceforge.net/ltp
SCRIPT_DIR=$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)
INSTALL_DIR=$SCRIPT_DIR/Lcov/install/$LCOV_VERSION
cd $SCRIPT_DIR
if [ ! -f "${LCOV_ARCHIVE}" ]; then
  if [ -x "$(command -v wget)" ]; then
    wget ${LCOV_DOWNLOAD_URL}/${LCOV_ARCHIVE} || { echo "Error while downloading Lcov."; exit 1; }
  else
    echo "You need to install wget."
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
