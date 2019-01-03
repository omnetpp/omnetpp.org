---
download: true
layout: download-details
title: LRE-OMNeT++ - Limited Relative Error (LRE) for OMNeT++
category: models
years-active: 2018-
tags: model omnetpp5
github-url: https://github.com/ComNetsHH/LRE-OMNeT
---

This project provides an integration of the Limited Relative Error (LRE)
algorithm into the OMNeT++ simulator. The LRE algorithm itself comes as a
stand-alone implementation. (The LRE algorithm is an alternative statistical
method for data evaluation. LRE continuously requests more samples until it
deems the evaluation confident enough.)

Generally, the LRE entity subscribes to a signal whose name must be provided by
the user. LRE will update its internal analysis each time a signal emission is
captured, and if the relative errors calculated at each Markov chain state is
small enough, LRE will end the simulation. The algorithm can be configured
through the NED parameters.

This project was presented at the [5th OMNeT++ Community
Summit](https://summit.omnetpp.org/archive/2018/) (paper and slides behind the
link).

Provided by the Institute of Communication Networks (ComNets), Hamburg
University of Technology.
