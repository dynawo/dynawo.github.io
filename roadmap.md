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

* PV and Wind WECC model: under final validation and integration, September 2021
* ~~HVDC standard model: expected September 2020~~: Available since V1.2.0
* ~~Additional models for steady-state calculations (Static Var Compensator, voltage regulation, etc.)~~: Available in the master
* Standard regulation models (governors, voltage regulators, power system stabilizers): under progress
* IEC 61400 Wind model: December 2021

### Axis 2 - Test cases
* Adding large scale test cases (national and panEuropean ones): internally ready but postponed to December 2021 (anonymisation) for public availability
* ~~New examples section~~: Available since V1.2.0.
* [NordicTestSystem case](https://www.researchgate.net/publication/339572493_Test_Systems_for_Voltage_Stability_Studies_IEEE_Task_Force_on_Test_Systems_for_Voltage_Stability_Analysis_and_Security_Assessment): under validation for Dyna&omega;o and delayed in Modelica (waiting for updates in OpenModelica), September 2021
* [ENTSO-E controller test case](https://eepublicdownloads.entsoe.eu/clean-documents/pre2015/publications/entsoe/RG_SOC_CE/131127_Controller_Test_Report.pdf): under validation for Dyna&omega;o and Modelica, June 2021

### Axis 3 - Dependencies, architecture and performances
* ~~Switch to Sundials V5.0.0 and Suitesparse V5.3.0~~: Available in the master
* ~~Switch to a newer IIDM library version~~: Available in the master
* ~~Performances improvements~~: Available in the master
* Ancilarry services - contingency analysis and margin calculation: under progress, new repository [dynawo-algorithms](https://github.com/dynawo/dynawo-algorithms)
* Dyna&omega;o connectivity analysis improvement (system splitting): postponed 2021
* Symbolic Jacobian use for Modelica models: waiting for OpenModelica update

