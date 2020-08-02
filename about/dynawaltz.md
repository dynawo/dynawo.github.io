---
title: DynaWaltz
layout: default
---
<!--
    Except where otherwise noted, content in this website is Copyright (c)
    2015-2020, RTE (http://www.rte-france.com) and licensed under a
    CC-BY-4.0 (https://creativecommons.org/licenses/by/4.0/)
    license. All rights reserved.
-->

**Long-term stability studies are a core process for ensuring power system stability: they enable to guarantee that the slow dynamics of the system don't lead to an instability or a system collapse.**

Most of the classical approaches for long-term stability studies use simplified models to reach acceptable simulation times on large-scale systems. The quasi steady-state simulation approach is the most widely known approximation: it consists in considering the fast dynamics stabilized and thus in replacing their differential nature by pure algebraic equations (for example, an integral control for voltage regulation can be considered instantaneous). While this technique globally provides acceptable results on most of the situations, **it involves a strong a priori hypothesis on the real system behavior.** This approximation is more and more questionable in a system where the multiplicity and diversity of the controls is exploding.

**Our long-term stability simulation tool DynaWaltz uses a different paradigm. Instead of doing a priori simplifications or hypothesis on the modelling side, it is the numerical method that will take charge of filtering the fast dynamics while keeping as detailed models as necessary.** Thanks to an intensive research work conducted during the Pegase project on the numerical method, DynaWaltz manages to achieve simular simulation times than current long-term stability simulation tools.

**DynaWaltz is the most advanced simulation tool of the Dyna&omega;o, initiative. A parallel run in RTE is forecasted for the winter 2020/2021 and if the results are positive, DynaWaltz should be used operationnaly in 2021 in RTE.** Most of the models impacting the system slow dynamics - tap-changers, loads, static var compensators, etc. - are already developed and available in the repository. The current work for this tool consists in robustifying it by using it on a large number of French test cases, doing the final validation for some additional models (special protection schemes, secondary voltage regulatio) and providing additional features (contingency analysis, margin calculation) around the core.

For more details on DynaWaltz behavior, please have a look to [our use cases documentation](https://github.com/dynawo/dynawo/releases/download/v1.2.0/DynawoDocumentation.zip).

![image](../assets/images/DynaWaltz.png){: width="40%" .center-image}