---
download: true
layout: download-details
title: STEAM-Sim
years-active: 2015
category: models
tags: model framework omnetpp3 omnetpp4
keywords: wireless, mobility, sensor
download-page-url: https://sourceforge.net/projects/steamsim/files/steam-sim.tar.gz/download
---

STEAM-Sim establishes a hardware/software/network co-simulation of wireless sensor networks.

Original C code is used in simulation. The code is natively executed by the CPU
where the simulation is run. The time annotation engine annotates the C source
code used for simulation with the timing information as if the code is run on a
microcontroller. The annotation process is fully automated.

Hardware models are developed using the PAWiS framework and reflect the timing,
functionality, and energy-consumption of real-world hardware such as a CC2420
radio transceiver.

Network behavior in terms of wireless channel models are provided by the PAWiS
and the MiXiM framework.

STEAM-Sim is an extension to the PAWiS and MiXiM framework. The underlying
simulator is OMNeT++. Please see the corresponding documentation.

Contiki v2.6 operating system was also ported to STEAM-Sim, thus it is possible
to run Contiki-based code in the simulation.

Author: Georg Möstl, Johannes Kepler University, Linz, Austria