# Build Dynawo on MacOS

## Building requirements

- Xcode or Command Line Tools (install with `xcode-select --install`)
- CMake
- Boost and libarchive

You can find scripts to install CMake, Boost and libarchive [here](compilation_options.md). After that you will need to change values `TO_COMPLETE` of `myEnvDynawo.sh` to point where you have installed libraries. You may also need to add `export PATH=PATH_TO_CMAKE_INSTALL/bin:$PATH` in `myEnvDynawo.sh` if you did not install CMake with root privileges.

## Building Dynawo

### With pre-built OpenModelica

We provide on Github MacOS binaries of Dynawo, part of those are OpenModelica Compiler binaries built for Dynawo. To avoid building it from scratch you can download those binaries. You can launch the following commands in a terminal:

``` bash
$> curl -L $(curl -s -L -X GET https://api.github.com/repos/dynawo/dynawo/releases/latest | grep "Dynawo_MacOS" | grep url | cut -d '"' -f 4) -o $HOME/Dynawo_MacOS_latest.zip
$> unzip $HOME/Dynawo_MacOS_latest.zip -d $HOME/Dynawo_MacOS_latest
$> git clone https://github.com/dynawo/dynawo.git dynawo
$> cd dynawo
$> mkdir OpenModelica
$> mv $HOME/Dynawo_MacOS_latest/OpenModelica OpenModelica/Install
$> rm -rf $HOME/Dynawo_MacOS_latest*
$> echo '#!/bin/bash
export DYNAWO_HOME=$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)

export DYNAWO_SRC_OPENMODELICA=$DYNAWO_HOME/OpenModelica/Source
export DYNAWO_INSTALL_OPENMODELICA=$DYNAWO_HOME/OpenModelica/Install

export DYNAWO_LOCALE=en_GB
export DYNAWO_RESULTS_SHOW=true
export DYNAWO_BROWSER="open -a Safari"

export DYNAWO_NB_PROCESSORS_USED=1

export DYNAWO_BUILD_TYPE=Release
export DYNAWO_CXX11_ENABLED=YES
export DYNAWO_COMPILER=CLANG
export DYNAWO_LIBRARY_TYPE=SHARED

export DYNAWO_LIBARCHIVE_HOME=TO_COMPLETE
export DYNAWO_BOOST_HOME=TO_COMPLETE
#export DYNAWO_GTEST_HOME=TO_COMPLETE
#export DYNAWO_GMOCK_HOME=$DYNAWO_GTEST_HOME

export PATH="$(dirname $(xcrun -f llvm-cov))":$PATH

$DYNAWO_HOME/util/envDynawo.sh $@' > myEnvDynawo.sh
$> chmod +x myEnvDynawo.sh
$> ./myEnvDynawo.sh deploy-autocompletion --deploy
$> dynawo build-user
```

### With building OpenModelica

