---
download: true
layout: download-details
title: Ethernet
years-active: 2003
category: models
tags: standalone omnetpp3 omnetpp2
download-file-url: http://ctieware.eng.monash.edu.au/twiki/pub/Simulation/EtherNet/Ethernet-0.95-src.tgz
---

NOTE: THIS PACKAGE HAS BEEN MERGED INTO THE INET FRAMEWORK. FURTHER VERSIONS
WILL NOT BE DISTRIBUTED SEPARATELY, ONLY AS PART OF INET. It is still possible
to use EtherMAC etc. without the rest of the INET framework.

Ethernet, Fast Ethernet and Gigabit Ethernet model. Includes MAC, LLC, switch,
hub and bus models.  Version 0.95 adds auto MAC address assignment,
auto-configuration of transmission rate and duplex/half duplex mode, support for
all frame types (Ethernet II, 802.3 with LLC, 802.3 with SNAP), and uses OMNeT++
3.0a4's controlInfo(). Sports a demo model with about 8000 computers and 900
switches and hubs, mixing all kinds of Ethernet technologies. Compatible with
OMNeT++ 2.3p1 and 3.0a4 up. For use with 3.0a6 and up, supplied omnetpp.ini
files have to be revised because changed meaning of '*' (see 3.0a6 release
notes).
