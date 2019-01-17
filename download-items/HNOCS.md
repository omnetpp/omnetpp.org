---
download: true
layout: download-details
title: HNOCS - Network on Chip Simulation Framework
years-active: 2011-2013, 2018
category: models
tags: model framework omnetpp5 omnetpp4
keywords: network on chip
github-url: https://github.com/yanivbi/HNOCS
---

NoC simulation is a key for NoC architectures research resulting from the huge
incurred cost of VLSI prototypes production using modern manufacturing
processes. Although several NoC simulators exist, they are either proprietary or
built on non standard infrastructure. HNOCS is an open-source implementation of
a NoC simulation framework using OMNeT++. The HNOCS framework utilizes the
OMNeT++ module interface feature to support runtime selection of simulation
modules from a library of parametrized components. For example by setting the
opCalcType parameter from 'XY' to 'XY/YX' the simulation change to use a
different output port selection algorithm. The models provided support
heterogeneous NoC configuration in terms of link capacity and number of VCs.
HNOCS modules available today implement wormhole switching, with round-robin or
winner-takes-all arbitration. Current version of HNOCS contains different router
implementations: synchronous, asynchronous and a full virtual output queuing
(VOQ) with FIFO for each (input VC, output VC and output port) tuple.
