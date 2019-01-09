---
download: true
layout: download-details
title: NIST TESIM-OMNeT++ - Tennessee Simulator federated with OMNeT++ networking model
category: models
years-active: 2016-
tags: model inet2 omnetpp4
github-url: https://github.com/usnistgov/tesim_omnetpp
---

This software package is used to co-simulate wireless networks and physical
systems in cyber-physical system (CPS) evaluation.

The wireless network simulator is built upon the INET and MiXiM libraries.
It enables the following features in the discrete event packet-level network simulation:

- TDMA slot allocation for periodic process variable updates
- IEEE 802.15.4-based transceiver
- Industrial wireless channel model [2]
- Co-channel interference (e.g., between IEEE 802.11 and IEEE 802.15.4 radios)

The physical system simulator is based on the Tennessee Eastman simulator C++
code. It works as an independent function module in OMNET++ platform and share
the same global clock with the radios (no time synchronization issues).

Documentation is available in the repo.

Author: YongKang Liu, NIST
