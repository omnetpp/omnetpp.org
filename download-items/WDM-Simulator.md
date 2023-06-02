---
download: true
layout: download-details
title: WDM Simulator
years-active: 2006
category: models
tags: model omnetpp3
keywords: wdm, optical, hornet
download-file-url: https://github.com/omnetpp-models/archive/releases/download/archive/WDM-0.9-src.tgz
---

This is a simulator for WDM networks, built using OMNet++3.0 on WinXP.
It was written for my dissertation. I am going to graduate soon,
and I thought about sharing it with others who want to realize
similar simulations.

The network structure built is HORNET (Hybrid Opto-electronic Ring
NETwork) which is proposed by Stanford University [1,2].

There are several (no more than 100) nodes in the fiber optic network.
They are connected in a ring. Every one of them owns a
certain unique wavelength as its address wavelength. So the
network can be thought as a WDMA (Wavelength Division Multiple
Access) one. Also, a situation where several nodes share the same
wavelength is allowed. Of course, it is makes sense for the number of
wavelengths to be bigger than that of nodes. The whole network is
divided to slots ring, a packet can be transferred to all other nodes
in every wavelength per time slot.

Chao Xiong, March 2006.

[1] I.M.White et al., 'A Summary of HORNET Project: A Next-Generation
Metropolitan Area Network', IEEE JSAC, vol.21, no.9, Nov.2003, pp.1478-94

[2] I.M.White, 'A New Architecture and Technologies for High-Capacity-Next-Generation
Metropolitan Networks', Ph.D.dissertation, Stanford University, 2002
