---
download: true
layout: download-details
title: InfiniBand Flit Level Model
date: 2013-06-19
category: models
download-url: https://ipfs.omnetpp.org/models/ib_flit_sim.19_03_13.tgz
website-url: http://www.mellanox.com/page/omnet
---

This Mellanox-contributed InfiniBand simulation model is modeling the data-path of hosts and switches at the flit transfer level. The model can be used to estimate network performance under configurable hardware capabilities, timing and topologies.

This model is different from previous released model in several ways:

1. It is a port to 4.2.2 version.

2. It uses module interfaces to allow for plugging in multiple implementations of the forwarding (output port selection) module

3. Some more statistics add

4. New IB wire speed are defined (40/56 Gbps)

The models provided, do not indicate in their parameters default values nor in their code the exact capabilities or micro-architecture of Mellanox products.

