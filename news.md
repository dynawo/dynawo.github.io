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

#### Dyna&omega;o becomes a suite of simulation tools

**Dyna&omega;o 's primary focus has been on long-term and short-term stability studies** but the very encouraging results obtained and the flexibility of the approach led to **an extension of the initiative. Dyna&omega;o  is now evolving towards a complete and coherent suite of simulation tools**, sharing the same philosophy:
  - **[DynaFlow]({{ '/about/dynaflow' }})** for steady-state calculations
  - **[DySym]({{ '/about/dysym' }})** for short-circuit calculations
  - **[DynaWaltz]({{ '/about/dynawaltz' }})** for long-term stability simulations
  - **[DynaSwing]({{ '/about/dynaswing' }})** for short-term stability studies
  - **[DynaWave]({{ '/about/dynawave' }})** for stability studies and system design with a high-penetration of power-electronics based components (quasi-EMT)

![image](../assets/images/DynawoLogos.png){: width="70%" .center-image}

Go to their specific web page to learn more about each simulation tool: **[DynaFlow]({{ '/about/dynaflow' }})**, **[DySym]({{ '/about/dysym' }})**, **[DynaWaltz]({{ '/about/dynawaltz' }})**, **[DynaSwing]({{ '/about/dynaswing' }})** and **[DynaWave]({{ '/about/dynawave' }})**.

#### Dyna&omega;o v1.2.0 release

Dyna&omega;o's new version - V1.2.0 - has been released on July, the 31st. It notably includes the **release of steady-state calculation models** (restorative load, generators, frequency regulation model - SignalN -, HVDCTanPhi and HVDCPV), **the creation of an examples directory** with associated documentation and additional test cases, an important effort leading to **a 20 % improvement on performances for large-scale test cases** (variables simplification, algorithm optimization and implementation improvements) and **a better modeling robustness** (bad topology handling, propagation of disconnection signals, etc.).   

In addition to these new features, new models and test cases are also available in the Dyna&omega;o library:
 
* HVDC Standard model
* Shackshaft saturation model
* Full OpenModelica grid forming converters and HVDC test cases

The full details concerning the release content is available [here]({{ '/release_note' }}) and the different distributions could be retrieved from the [Try/Install]({{ '/install' }}) page. 

#### IEEE PES General Meeting presentation

A presentation on the Dyna&omega;o approach is scheduled at the next IEEE PES General Meeting conference, that will be held virtually during August 2020. The presentation is included into a very nice panel session on "Numerical challenges in multi-energy simulations" and is entitled **"Speed-up of Modelica based large-scale simulations, the example of the open-source tool Dyna&omega;o".** It explains the main principles of the approach before going into more details on the advanced strategies used in Dyna&omega;o to reach performances compatible with an industrial use. **If you have registered for the conference, the presentation is available [here](https://event.on24.com/eventRegistration/console/EventConsoleApollo.jsp?uimode=nextgeneration&eventid=2462049&sessionid=1&key=98CD1C81776A198D3BF0C7A11E3852EC&contenttype=A&eventuserid=305999&playerwidth=1000&playerheight=650&caller=previewLobby&text_language_id=en&format=fhvideo1&newConsole=true#).**

#### OpenModelica workshop

Two presentations related to the use of Modelica for power system simulations were done during the last [OpenModelica workshop](https://openmodelica.org/events/openmodelica-workshop/openmodelica-program-2020), held in Linköping on February the 3rd. 

* **[A presentation](https://openmodelica.org/images/M_images/OpenModelicaWorkshop_2020/PresentationOMDAE.pdf) on the use of OpenModelica DAE mode in collaboration with TU Bielefeld.** The DAE mode is a compilation mode in OpenModelica that prevents the compiler to transform the original DAE system written by the user
  into an ODE system for the numerical resolution. In particular, as shown by the examples provided into the presentation, for large scale simulations of electro-mechanical power system, this transformation lead to large algebraic loops, resulting in performances issues.

* **[A presentation](https://openmodelica.org/images/M_images/OpenModelicaWorkshop_2020/Presentation%20PowerGrids%20-%20Animations.pdf) with Dynamica of the [PowerGrids library](https://github.com/PowerGrids/PowerGrids), an open-source Modelica library developed for simulations of power systems with full Modelica environments (such as OpenModelica or Dymola)**. This library is complementary to Dyna&omega;o library and follows the same high-level principles: it will serve to experiment and develop models, especially at the research stage, before they are 
  integrated to the official stable Dyna&omega;o library.
