---
title: News
layout: default
---
<!--
    Except where otherwise noted, content in this website is Copyright (c)
    2015-2020, RTE (http://www.rte-france.com) and licensed under a
    CC-BY-4.0 (https://creativecommons.org/licenses/by/4.0/)
    license. All rights reserved.
-->
<a name="Features"></a>
#### Companion Projects

**An important work on creating a more complete environment around Dyna&omega;o is currently going on**. It notably implies the development of a [launcher for dynaflow](https://github.com/dynawo/dynaflow-launcher), the [release open-source](https://github.com/dynawo/dynawo-algorithms) of contingency analysis or margin calculation algorithms as well as first efforts to link the [PowSyBl and Dyna&omega;o efforts](https://github.com/powsybl/powsybl-dynawo). Don't hesitate to have a look to these companion projects!

<a name="SpringConf"></a>
#### 2021 Spring Conferences

Three papers related to Dyna&omega;o have been accepted for the [IPST](http://www.ipst2021.com/) and [PowerTech](https://www.powertech2021.com/) conferences:

* **A first feasability paper** on the use of Dyna&omega;o for EMT simulations at the IPST conference, demonstrating that Modelica and Dyna&omega;o are promising technologies for EMT simulations. It also clearly identifies the existing barrers, especially the need for a symbolic Jacobian for Modelica models to reach similar performances than classical EMT simulation tools.

* **A paper introducing the average HVDC model** developed in Modelica and available open-source in the Dyna&omega;o library. This model enables to represent a standard behavior for HVDC links for voltage and transient stability studies and offers some degree of freedom via parameters to adjust more accurately the response if needed. It could definitely be useful for collaborative studies in which IP rights avoid the exact model sharing and for long-term studies in which the final exact link behavior is not yet completely known.

* **A paper presenting the DynaFlow approach**. It introduces the main choices done in DynaFlow, in particular the idea to do a simplified time-domain simulation to calculate the final steady-state solution to ensure that the speed differences between the different controls, regulations and special protection schemes is represented in a correct way. The paper also presents the most important models and the results obtained on a few examples.

<a name="OM"></a>
#### OpenModelica workshop

Two presentations related to the use of Modelica for power system simulations were done during the last [OpenModelica workshop](https://openmodelica.org/events/openmodelica-workshop/openmodelica-program-2021).

* **[A presentation](https://openmodelica.org/images/M_images/OpenModelicaWorkshop_2021/1010_Dynawo%20-%20A%20Suite%20of%20Power%20System%20Simulation%20Tools%20using%20Modelica%20and%20the%20Open%20Modelica%20Compiler.pdf) on Dyna&omega;o** introducing the main motivations related to the project, its history and its perspectives as well as the links it has with Modelica and in particular the OpenModelica Compiler.

* **[A presentation](https://openmodelica.org/images/M_images/OpenModelicaWorkshop_2021/1530_ScalableTestGridsPresentation.pdf) with Dynamica of the [ScalableTestGrids library](https://github.com/PowerGrids/ScalableTestGrids)**, an open-source Modelica library created to generate power system large-scale test cases to assess Modelica tools performance.