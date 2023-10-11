---
layout: page
title: What is OMNeT++?
redirect_from: "/intro/index.php/"
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

## Components

The main ingredients of OMNeT++ are:

* Simulation kernel library (C++)
* The NED topology description language
* Simulation IDE based on the Eclipse platform
* Interactive simulation runtime GUI (Qtenv)
* Command-line interface for simulation execution (Cmdenv)
* Utilities (makefile creation tool, etc.)
* Documentation, sample simulations, etc.

## Models

During the years OMNeT++ has been available, countless simulation models and
model frameworks have been written for it by researchers in diverse areas:
queuing, resource modeling, internet protocols, wireless networks, switched
LANs, peer-to-peer networks, media streaming, mobile ad-hoc networks, mesh
networks, wireless sensor networks, vehicular networks, NoCs, optical networks,
HPC systems, cloud computing, SANs, and more. Most of these model frameworks are
open source, developed as independent projects, and follow their own release
cycles.

The [INET Framework](http://inet.omnetpp.org) can be considered the standard
protocol model library of OMNeT++. INET contains models for the Internet stack
and many other protocols and components. The INET Framework is maintained by the
OMNeT++ team for the community, utilizing patches and new models contributed by
members of the community. Several other simulation frameworks take INET as a
base, and extend it into specific directions, such as vehicular networks (Veins,
CoRE), overlay/peer-to-peer networks (OverSim), or LTE (SimuLTE).

We maintain a list of selected OMNeT++ models and model frameworks
[here](/download/models-and-tools).

## Platforms

The OMNeT++ simulation kernel is standard C++, and runs basically on all
platforms where a modern C++ compiler is available. The Simulation IDE requires
Windows, Linux, or macOS.
