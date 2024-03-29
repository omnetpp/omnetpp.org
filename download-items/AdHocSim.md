---
download: true
layout: download-details
title: AdHocSim
years-active: 2001-2003,2005
category: models
tags: model model omnetpp3
keywords: aodv, ad hoc, manet, mobility, wireless
download-file-url: https://github.com/omnetpp-models/archive/releases/download/archive/adHocSim-1.1-src.tgz
---

Nicola Concer's simulator for ad-hoc networks. Implements AODV protocol and
several mobility models. This version (1.1) has been updated to work with
OMNeT++ 3.0. Please be aware that the model has no standards compliance and has
not undergone validation.

This is a simulator of an ad hoc network originally developed using OMNeT++ v2.2.

This project is a part of the thesis I made with prof.Donatiello and
dott.Bononi of the Bologna University's Computer Science department.

The main features implemented are:

* each host is modeled by a compound module that contains
  - a physical level model
  - a MAC level
  - a routing model that implements AODV standard draft v.10
  - a mobility model that can use one of the following algorithms
        o random walk
        o restricted random walk
        o random direction
        o random waypoint
        o pursuit model
        o normal markovian mobility model

* each host moves following an independent mobility algorithm

* communication links are set up and disposed dynamically

* each link can be unidirectional or bi-directional depending on the
  transmission power of each host

Source code and documentation is available on the web site (click 'Thesis').

Updated for OMNeT++ 3.0 Andras Varga Jan 2005.

