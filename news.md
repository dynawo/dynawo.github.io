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

#### Dyna&omega;o v1.1.0 release

Dyna&omega;o's new version - V1.1.0 - has been released on March, the 23rd. It notably includes **Windows** (compilation with Visual Studio 2019) and **MacOS portabilities**, **improvements on
numerical robustness** (especially by the automatic generation of mode changes from Modelica models in case of tough events such as short-circuit) and **performances improvements through the large
use of aliased and calculated variables**, both from C++ and Modelica models.

In addition to these new features, new models and test cases are also available in the Dyna&omega;o library:
 
* **Source models** (injector BG, injector Id/Iq, converter)
* **Network models** (ideal switch, bus and dynamic line)
* **Control models** (Grid forming controls, PLL)
* **IEEE14 Fault testcase**

The full details concerning the release content is available [here]({{ '/release_note' }}) and the different distributions could be retrieved from the [Try/Install]({{ '/install' }}) page. 

#### OpenModelica workshop

Two presentations related to the use of Modelica for power system simulations were done during the last [OpenModelica workshop](https://openmodelica.org/events/openmodelica-workshop/openmodelica-program-2020), held in Linköping on February the 3rd. 

* **[A presentation](https://openmodelica.org/images/M_images/OpenModelicaWorkshop_2020/PresentationOMDAE.pdf) on the use of OpenModelica DAE mode in collaboration with TU Bielefeld.** The DAE mode is a compilation mode in OpenModelica that prevents the compiler to transform the original DAE system written by the user
  into an ODE system for the numerical resolution. In particular, as shown by the examples provided into the presentation, for large scale simulations of electro-mechanical power system, this transformation lead to large algebraic loops, resulting in performances issues.

* **[A presentation](https://openmodelica.org/images/M_images/OpenModelicaWorkshop_2020/Presentation%20PowerGrids%20-%20Animations.pdf) with Dynamica of the [PowerGrids library](https://github.com/PowerGrids/PowerGrids), an open-source Modelica library developed for simulations of power systems with full Modelica environments (such as OpenModelica or Dymola)**. This library is complementary to Dyna&omega;o library and follows the same high-level principles: it will serve to experiment and develop models, especially at the research stage, before they are 
  integrated to the official stable Dyna&omega;o library.
