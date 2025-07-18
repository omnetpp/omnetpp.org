---
download: true
layout: download-details
title: inbaverSim - Content Centric Networks Simulation Framework
logo: /images/logo/inbaversim.png
logo-scale-height: 1.5
logo-vertical-offset: -1px
logo-tooltip: inbaverSim - Content Centric Networks Simulation Framework
sortkey: "07"
years-active: 2021-
category: models
keywords: ccn, icn, ndn
tags: featured model omnetpp6 inet4
github-url: https://github.com/ComNets-Bremen/inbaverSim
opp-env-command: opp_env install inbaversim-latest
---

inbaverSim is an OMNeT++ model framework to simulate Content Centric Networks
(CCN). It provides a comprehensive simulation environment for studying
content-centric networking paradigms, which decouple location from identity,
security, and access to retrieve content by name. The functionality and the
message formats follow the description provided in RFC 8569 and RFC 8609.

inbaverSim is able to model the operation of different types of CCN nodes and
networks. A list of node types are given below.

- Wireless Nodes: Nodes that are able to connect to infrastructure based wireless networks (e.g., WLAN, LTE)
- Wireless Access Routers: Routers that are access points/base stations for wireless nodes
- DTN/OppNets Nodes: Wireless nodes that employ direct communications between nodes
- Wired Nodes: Nodes connected to networks over wired network attachments
- Access Routers: Routers for wired network nodes
- Core Routers: Central CCN routers that connect other networks
- Content Servers: Servers that host content
- Wireless Sensor Nodes: Wireless sensor nodes deployed with sensors (temperature, humidity, etc.)
- IOT Gateways: Gateways connecting wireless sensor networks and the Internet
- Internet: Node simulating a CCN based Internet where the behavior of many nodes and applications are deployed

An overview of the model framework is available in the following publication:

Udugama, Asanga. "inbaverSim: An OMNeT++ Model Framework for Content Centric Networking."
8th OMNeT++ Community Summit, Virtual Summit, September 8-10, 2021.
