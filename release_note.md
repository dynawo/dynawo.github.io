---
title: ReleaseNote
layout: default
---
<!--
    Except where otherwise noted, content in this website is Copyright (c)
    2015-2019, RTE (http://www.rte-france.com) and licensed under a
    CC-BY-4.0 (https://creativecommons.org/licenses/by/4.0/)
    license. All rights reserved.
-->

#### Dyna&omega;o v1.2.0

**Main changes:**

* Creation of an example directory with additional test cases
* Steady-state calculation models release (restorative load, generators, frequency regulation model - Signal N-, HVDCPTanPhi and HVDCPV)
* Performance improvement up to 20 % on large-scale simulations (variables simplification, algorithm optimization and implementation improvements)
* Modeling robustness (handling bad topology, propagation of disconnection signals, data handling improvement)

**New features:**

* New criteria system
* Complete log refactoring

**New models:**

* HVDC Standard model
* Shackshaft saturation model
* Steady-state models

**3rd Party:**

* Improvement in Adept integration (better complex handling and support of CombiTable)
* Python scripts adaptation to Python 3
* Modelica utilities integration

**Test cases:**

* Full OM grid forming converter and HVDC test cases (in the examples package of the Dynawo library)
* Examples section in Dynawo (Steady-state calculation examples - DynaFlow, long-term stability examples - DynaWaltz, transient stability examples - DynaSwing)

