---
download: true
layout: download-details
title: MimicNet - Predicting data center network performance at scale
category: models
years-active: 2020-2022
tags: model omnetpp4 inet2
keywords: data center, machine learning, mi, performance estimation
github-url: https://github.com/eniac/MimicNet
---

MimicNet provides fast performance estimation for data center networks at scale,
based on packet-level simulations and machine learning. From the abstract of the
related paper:

At-scale evaluation of new data center network innovations is becoming
increasingly intractable. This is true for testbeds, where few, if any, can
afford a dedicated, full-scale replica of a data center. It is also true for
simulations, which while originally designed for precisely this purpose, have
struggled to cope with the size of today's networks. This paper presents an
approach for quickly obtaining accurate performance estimates for large data
center networks. Our system,MimicNet, provides users with the familiar
abstraction of a packet-level simulation for a portion of the network while
leveraging redundancy and recent advances in machine learning to quickly and
accurately approximate portions of the network that are not directly visible.
MimicNet can provide over two orders of magnitude speedup compared to regular
simulation for a data center with thousands of servers. Even at this scale,
MimicNet estimates of the tail FCT, throughput, and RTT are within 5% of the
true results.

MimicNet was developed at the Distributed Systems Lab, University of Pennsylvania.

The paper describes the details of the system:
*"MimicNet: fast performance estimates for data center networks with machine
learning"*, Qizhen Zhang, Kelvin K. W. Ng, Charles Kazer, Shen Yan, João Sedoc,
Vincent Liu. SIGCOMM '21. <https://dl.acm.org/doi/10.1145/3452296.3472926>