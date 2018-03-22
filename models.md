---
layout: page
title: Simulation Models
---
# Simulation Models

Before searching the internet, check the available [Model Catalog](/download/models).

The main simulation frameworks for OMNeT++ are:

- The [**INET Framework**](http://inet.omnetpp.org) can be considered the standard protocol model library of OMNeT++. INET contains models for the Internet stack (TCP, UDP, IPv4, IPv6, OSPF, BGP, etc.), wired and wireless link layer protocols (Ethernet, PPP, IEEE 802.11, etc), support for mobility, MANET protocols, DiffServ, MPLS with LDP and RSVP-TE signalling, several application models, and many other protocols and components. The INET Framework is maintained by the OMNeT++ team for the community, utilizing patches and new models contributed by members of the community. There are several INET-based model frameworks, maintained by independent research groups:

  - [**Veins**](http://veins.car2x.org/) is an open source Inter-Vehicular Communication (IVC) simulation framework composed of an event-based network simulator and a road traffic microsimulation model.

  - [**INETMANET**](http://github.com/aarizaq/inetmanet-2.0) is a fork of the INET Framework, maintained by Alfonso Ariza Quintana. It is kept up-to-date with INET, and adds a number of experimental features and protocols, mainly for mobile ad-hoc networks, many them written by Alfonso Ariza.

  - [**ANSAINET**](http://ansa.omnetpp.org) (Automated Network Simulation and Analysis (ANSA)) is a long-term project carried by researchers and students at the Brno University of Technology in the Czech Republic. The project is dedicated to the development of a variety of simulation models compatible with RFC specifications or referential implementations, which extend wired IP network framework INET (thus, the source code is called ANSAINET). Subsequently, these modules and related tools could (one day) allow formal analysis of real networks and their configurations. ANSAINET may be publicly used as the routing/switching baseline for further research initiatives, i.e., in simulations proving (or disproving) certain aspects of networking technologies (e.g., finding bottlenecks and single-point of failures, configuration errors, faulty network states, etc.).

  - [**SimuLTE**](simulte.com) is an innovative simulation tool enabling complex system level performance-evaluation of LTE and LTE Advanced networks (3GPP Release 8 and beyond) for the OMNeT++ framework. SimuLTE is written in C++ and is fully customizable with a simple pluggable interface. One can also develop new modules implementing new algorithms and protocols.

  - [**OverSim**](http://www.oversim.org/) is an open-source overlay and peer-to-peer network simulation framework for the OMNeT++ simulation environment. The simulator contains several models for structured (e.g. Chord, Kademlia, Pastry) and unstructured (e.g. GIA) P2P systems and overlay protocols.

  - Others, in no particular order: ReaSE, HIPSim++, INET-HNRL, EPON, mCoA++, TTE4INET, EBitSim, Quagga -- see them in the Model Catalog.

- [**RINASim**](http://rinasim.omnetpp.org) is a stand-alone framework for simulation of RINA-based networks. Recursive InterNetwork Architecture (RINA) as the new (and complete) clean-slate architecture tries to touch and codify every part of communication within computer networks. RINASim is coded from scratch and independent of any other library. The main goal is to offer the community with reliable and the most up-to-date tool (in the sense of RINA specification compliance) for simulating RINA-based computer networks for scientific and educational purposes. RINASim at its current state represents an entirely working implementation of the simulation environment for RINA.

- [**Castalia**](http://castalia.research.nicta.com.au/) is a simulator for Wireless Sensor Networks (WSN), Body Area Networks (BAN) and generally networks of low-power embedded devices. It is developed in the Networked Systems theme at NICTA, since 2007. Castalia is used by researchers and developers to test their distributed algorithms and/or protocols in realistic wireless channel and radio models, with a realistic node behaviour especially relating to access of the radio. Castalia's salient features include: model for temporal variation of path loss, fine-grain interference and RSSI calculation, physical process modeling, node clock drift, and several popular MAC protocols implemented. Castalia is highly parametric. It provides tools to help run large parametric simulation studies,  process and visualize the results.

If you are looking for other simulation models, look into the [Model Catalog](/download/models), use Google search to find related pages, or ask on the [Mailing List](http://groups.google.com/forum/#!forum/omnetpp).