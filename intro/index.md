---
layout: page
title: What is OMNeT++?
---

> **OMNeT++ is an extensible, modular, component-based C++ simulation library and framework, primarily for building
> network simulators.** "Network" is meant in a broader sense that includes wired and wireless communication networks,
> on-chip networks, queueing networks, and so on. Domain-specific functionality such as support for sensor networks,
> wireless ad-hoc networks, Internet protocols, performance modeling, photonic networks, etc., is provided by model
> frameworks, developed as independent projects. OMNeT++ offers an Eclipse-based IDE, a graphical runtime environment,
> and a host of other tools. There are extensions for real-time simulation, network emulation, database integration,
> SystemC integration, and several other functions. OMNeT++ is distributed under the [Academic Public License](license).

Although OMNeT++ is not a network simulator itself, it has gained widespread popularity as a network simulation
platform in the scientific community as well as in industrial settings, and building up a large user community.

OMNeT++ provides a component architecture for models. Components _(modules)_ are programmed in C++, then assembled
into larger components and models using a high-level language _(NED)_. Reusability of models comes for free. OMNeT++
has extensive GUI support, and due to its modular architecture, the simulation kernel (and models) can be embedded
easily into your applications.

Check the [screenshots](screenshots) or [videos](videos) gallery if you are interested how the IDE and
running simulations look like.

## Components

* simulation kernel library
* NED topology description language
* OMNeT++ IDE based on the Eclipse platform
* GUI for simulation execution, links into simulation executable (Qtenv)
* command-line user interface for simulation execution (Cmdenv)
* utilities (makefile creation tool, etc.)
* documentation, sample simulations, etc.

## Models

An overview of available simulation models and model frameworks can be found [here](models).

## Platforms

OMNeT++ runs on Windows, Linux, macOS, and other Unix-like systems.

The OMNeT++ IDE requires Windows, Linux, or macOS.

## Credits

OMNeT++ has been originally developed by András Varga. See [Credits, acknowledgements.](/intro/credits)
