---
title: Roadmap
layout: default
---
<!--
    Except where otherwise noted, content in this website is Copyright (c)
    2015-2019, RTE (http://www.rte-france.com) and licensed under a
    CC-BY-4.0 (https://creativecommons.org/licenses/by/4.0/)
    license. All rights reserved.
-->
Below are the major development axis identified for Dyna&omega;o for the next few months, with associated contents and due date. It is important to notice that the development content and the due dates may be subject to change due to unforeseen complexity in implementing features or priority changes.

### Axis 1 - Models development

* ~~PV and Wind WECC model~~: Available since V1.3.0
* ~~HVDC standard model: expected September 2020~~: Available since V1.2.0
* ~~Additional models for steady-state calculations (Static Var Compensator, voltage regulation, etc.)~~: Available since V1.3.0
* Standard regulation models (governors, voltage regulators, power system stabilizers): under progress
* IEC 61400 Wind model: under final validation, May 2022

### Axis 2 - Test cases
* Adding large scale test cases (national and panEuropean ones): internally ready but postponed to September 2022 (anonymisation) for public availability
* ~~New examples section~~: Available since V1.2.0.
* [NordicTestSystem case](https://www.researchgate.net/publication/339572493_Test_Systems_for_Voltage_Stability_Studies_IEEE_Task_Force_on_Test_Systems_for_Voltage_Stability_Analysis_and_Security_Assessment): under development, July 2022
* ~~[ENTSO-E controller test case](https://eepublicdownloads.entsoe.eu/clean-documents/pre2015/publications/entsoe/RG_SOC_CE/131127_Controller_Test_Report.pdf)~~ Available since V1.3.0
* Additional IEEE test cases: under validation, expected September 2022

### Axis 3 - Dependencies, architecture and performances
* ~~Switch to Sundials V5.0.0 and Suitesparse V5.3.0~~: Available since V1.3.0
* ~~Switch to a newer IIDM library version~~: Available since V1.3.0
* ~~Performances improvements~~: Available since V1.2.2
* ~~Ancilarry services - contingency analysis and margin calculation:~~ Available since V1.3.0 for the new repository [dynawo-algorithms](https://github.com/dynawo/dynawo-algorithms)
* ~~Switch to MPI for multiple simulations (ancillary services)~~: Available since V1.3.0
* Critical clearing time algorithm: under validation, expected September 2022
* Symbolic Jacobian use for Modelica models: under developement in OpenModelica, December 2022

