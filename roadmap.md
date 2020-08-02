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

* ~~Adding new models (proportional and proportional integral VR, proportional governor, static var compensator, PLL, injectors)~~
* PV and Wind WECC model: under final validation and integration
* ~~Grid forming converters models, expected April 2020~~ Available since V1.1.0.
* ~~HVDC standard model: expected September 2020~~: Available since V1.2.0
* Additional models for steady-state calculations (Static Var Compensator, voltage regulation, etc.): December 2020

### Axis 2 - Test cases
* Adding large scale test cases (national and panEuropean ones): internally ready but postponed to December 2020 (anonymisation) for public availability
* ~~New examples section~~: Available since V1.2.0.
* Nordic32 case: under development both in full Modelica and Dyna&omega;o format

### Axis 3 - Dependencies, architecture and performances
* ~~Switch to OpenModelica V1.13 version and DAE mode use~~
* Switch to Sundials V5.0.0 and Suitesparse V5.3.0
* Switch to a newer IIDM library version: under progres, expected November 2020
* Performances improvements: under progress
* Ancilarry services - contingency analysis and margin calculation: under progress
* Dyna&omega;o connectivity analysis improvement (system splitting): postponed 2021

