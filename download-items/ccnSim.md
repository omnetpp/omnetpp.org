---
download: true
layout: download-details
title: ccnSim - Simulation of Content Centric Networks (ICN/CCN)
years-active: 2013-2018
category: models
tags: model omnetpp4
keywords: web, caching
website-url: https://nonsns.github.io/code/ccnSim/
github-url: https://github.com/TeamRossi/ccnSim-0.4
---

ccnSim is an extremely scalable chunk-level simulator of Information and Content
Centric Networks (ICN/CCN) written in C++ under the OMNeT++ framework. It allows
the simulation of forwarding and caching strategies, cache decision policies,
content request model, and so on.

ccnSim features three simulation engines:

- A classic event-driven engine that allows to assess CCN
  performance in scenarios with large orders of magnitude for CCN content stores
  (up to 10^6 chunks) and Internet catalog sizes (up to 10^8 files) on
  off-the-shelf hardware (i.e, a PC with a fair amount of RAM).

- ModelGraft, a new hybrid modeling/simulation engine that allows for
  unprecedented scalability: with respect to the (highly optimized) execution
  times of event driven simulation in v0.3, the new technique allow simulation
  of much larger networks catalogs and content stores on an exiguous amount of
  RAM and with over 100x reduction of simulation duration.

- Finally, a novel parallel simulation engine that achieves 100x gain over
  ModelGraft and thus a 10000x gain over event-driven simulation! The new
  technique (referred to as CS-POST-MT in true) proposes to, instead of slicing
  nodes of the network over multiple cores, to slice independent portions of the
  catalog over multiple cores. In contrast to network slicing, which would incur
  significant MPI overhead, the new technique exhibits an ideal speedup in the
  number of cores, which justify the above speedups).

Parallel version: <https://github.com/TeamRossi/ccnSim-0.4-Parallel>

Paper: Chiocchetti, Raffaele, Rossi, Dario and Rossini, Giuseppe, "ccnSim: an
Highly Scalable CCN Simulator." In IEEE International Conference on
Communications (ICC), June 2013.