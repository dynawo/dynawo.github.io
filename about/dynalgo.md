---
title: Dynawo-algorithms
layout: default
---
<!--
    Except where otherwise noted, content in this website is Copyright (c)
    2022, RTE (http://www.rte-france.com) and licensed under a
    CC-BY-4.0 (https://creativecommons.org/licenses/by/4.0/)
    license. All rights reserved.
-->

Dyna&omega;o-algorithms is a wrapper around  Dyna&omega;o that provides utility algorithms to calculate complex key values of a power system.

It can be used with any tool of the Dyna&omega;o toolsuite (DynaFlow, DynaWaltz, DynaSwing, DySym, DynaWave).

It provides the following possibilities:
  - **Systematic analysis**: simulations of a same base power system subject to different events to assess the global stability
  - **Margin calculation**: simulations of a same base power system with a load variation and subject to different events to compute 
  the maximum load increase in a specific region before the voltage collapses;
  - **Load increase**: simulation of a single load variation.

More information is available on the [Github repository](https://github.com/dynawo/dynawo-algorithms) or in the [Dyna&omega;o-algorithms documentation](https://github.com/dynawo/dynawo-algorithms/releases/download/v1.6.0/DynawoAlgorithmsDocumentation.pdf).

![image](../assets/images/DynawoAlgorithms.png){: width="50%" .center-image}
