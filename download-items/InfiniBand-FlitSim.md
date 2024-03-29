---
download: true
layout: download-details
title: InfiniBand Flit Level Model
years-active: 2004-2013
category: models
tags: model omnetpp4
keywords: routing
download-file-url: https://github.com/omnetpp-models/archive/releases/download/archive/ib_flit_sim.19_03_13.tgz
---

This Mellanox-contributed InfiniBand simulation model is modeling the data-path
of hosts and switches at the flit transfer level. The model can be used to
estimate network performance under configurable hardware capabilities, timing
and topologies.

This model is different from previous released model in several ways:

1. It is a port to 4.2.2 version.

2. It uses module interfaces to allow for plugging in multiple implementations
   of the forwarding (output port selection) module

3. Some more statistics add

4. New IB wire speed are defined (40/56 Gbps)

The models provided, do not indicate in their parameters default values nor in
their code the exact capabilities or micro-architecture of Mellanox products.
