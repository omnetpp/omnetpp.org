---
download: true
layout: download-details
title: AFDX - Avionics Full-Duplex Switched Ethernet model for OMNeT++
years-active: 2012-2017, 2022
category: models
tags: model omnetpp6
keywords: afdx, ethernet, fieldbus, avionics
github-url: https://github.com/badapplexx/AFDX
---

- The model contains only the MAC layer implementation, higher layer functions are not implemented.
- This version is based on <https://github.com/omnetpp-models/afdx>

IMPROVEMENTS OVER LEGACY VERSION:

- Compatible with OMNeT++ v.6 and using the queueinglib that is released with that OMNeT++ v.6
- Deprecated funtions are replaced
- To model technological latencies, delay blocks are added
- BAG Regulation is implemented
- Integrity checking is improved
- Multiple message source support is added with capability of customisable data rate
- Token-bucket algorithm is added for traffic policing
- VL-Router is updated to be using a text file as a routing table
- Simulation is updated to make it possible to modify the behaviour of the simulation and topology from *.ini file
- New records are added to most essential blocks and a new class called NetworkStatistics is added to take care of the records


Contributors:

Ipek Gokce <ipek.peskirci@gmail.com>
Emre Atik <emreatik94@gmail.com>
Rudolf Hornig <rudi@omnetpp.org>
