---
layout: post
title: INET 4.1 Released
category: Software
---

We are happy to announce INET Framework version 4.1.0. Go ahead and 
<a href="https://inet.omnetpp.org/Download.html" target="_blank" rel="nofollow">get it now</a>!
It comes with some backward incompatible changes due to cleanup, a few new features, 
a number of smaller improvements, and many bug fixes.
This version requires OMNeT++ 5.4.1 or later.

<!--more-->

The backward incompatible changes are the following:

1. The module initialization stages have been refactored. All stages with numbers
   in their names (e.g. INITSTAGE_LINK_LAYER_2) have been removed, because their
   intended purpose was not clear, and they were often misused. Several new stages
   have been added to replace the removed stages. The new stages have names which
   express better the specific purposes they are used for (e.g. INITSTAGE_POWER,
   INITSTAGE_GROUP_MOBILITY, INITSTAGE_NETWORK_INTERFACE_CONFIGURATION).

   This change most likely results in compilation errors in simulation models
   which use the affected initialization stages. It may also cause runtime errors
   if the stage name has not been changed but its usage is slightly modified.

2. Individual protocol specific data structure fields of InterfaceEntry (e.g. the
   ipv4Data field with type Ipv4InterfaceData stores IP address and netmask) have
   been removed and replaced with a generic API. The new API allows storing any
   number of arbitrary protocol specific data structures in the network interface
   similarly to packet tags. All affected protocols have been updated.

   This change always results in compilation errors in affected simulation models.

3. The old ExtInterface module (used for emulation) has been split into several
   modules. There are separate modules for using simulated network interfaces from
   the host OS, and also for using host OS network interfaces from the simulation.
   The new external interfaces no longer rely on PCAP, they rather use host OS
   raw sockets and TUN/TAP interfaces. Besides ethernet, the new version also
   provides IEEE 802.11 network interface emulation. A new external UDP protocol
   module is also added, which allows INET applications to be tested unmodified
   on real networks using the UDP protocol of the host OS.

   This change results in runtime errors in simulations which use the modified
   models. Configuration of affected simulations have to be updated.

4. Replaced EulerAngles with Quaternion to represent orientation (and angular
   velocity, and angular acceleration) in mobility models to avoid gimbal lock
   and ambigous state representation. Euler angles are easy for human consumption
   but they are generally considered a bad idea for representing 3D orientation.

   This change always results in compilation errors in affected simulation models.

5. Moved MAC address parameters from MAC modules to the corresponding network
   interface modules (e.g. EtherMac -> EthernetInterface). The reason is that
   MAC address really belongs to the network interface and often management or
   other network interface submodules need access to it.

   This change results in runtime errors in simulations which use the modified
   parameters. Configuration of affected simulations have to be updated.

The backward compatible changes are the following:

6. Many applications have been extended with support for lifecycle operations.
   Applications can be started, stopped, and crashed individually using the same
   ScenarioManager script which is also used to control the lifecycle operations
   of network nodes. These applications also subclass from a common ApplicationBase.
   Similarly to applications, network interfaces also support lifecycle operations,
   they can be brought down and up using the ScenarioManager.

7. Two new protocol groups (for UDP and TCP) have been added which allow the
   identification of application protocols based on port numbers. The application
   protocols may not even be implemented in INET, yet they can still be identified
   (e.g. when using emulation) and displayed in the Qtenv packet log window.

8. The PacketPrinter has been extended with a new type column which contains
   the protocol specific packet type (e.g. ECHO_REQUEST for ICMPv4). The packet
   type is contributed by the protocol specific packet printer. This feature helps
   understanding packet logs in Qtenv. With the new version, the printer is also
   capable of providing a reasonably good enough packet name for packets received
   from external sources (e.g. an external network interface during emulation).

9. Modules that provide emulation support have been extended with a new host OS
   network namespace parameter. This feature allows, for example, running multiple
   linux BABEL daemons in their own network namespaces (with their own routing
   tables etc.) and connecting each one to the same simulation which provides
   mobility and wireless connectivity. For another example, it allows connecting
   multiple docker containers running in separate network namespaces again to
   the same simulation. Unfortunately, the network namespace feature is only
   available on Linux at the moment.

10. Added two new socket classes, EthernetSocket and Ieee8022LlcSocket, which
    allow applications to directly use the link layer protocols on a particular
    network interface. For example, an application can send and receive ethernet
    frames directly, bypassing network and transport layer protocols.

11. Added IEEE 802.1Q VLAN tag (C tag and S tag) support to ethernet interfaces.
    Virtual ethernet networks can be statically configured using ethernet interface
    parameters of switches and hosts. Additionally, all network nodes can have
    any number of virtual network interfaces which can be configured to request
    VLAN tagging. This feature allows using multiple different virtual networks
    on the same physical network on a per application basis.

12. Raphael Riebl contributed support for ether type discrimantion for IEEE 802.11p
    networks in the 5.9 GHz band. The new modules provide both IEEE 802.11 EPD and
    IEEE 802.11 LPD as required by the standard. The LLC module is automatically
    selected based on the opMode and band parameters.

13. Mani Amoozadeh contributed several new features and fixed quite a few bugs
    in BGP and OSPF wired routing protocols. Among others, BGP has been updated
    related to split horizon, multi-hop EGBP, network interface mode parameters,
    packet checksum calculation, packet serialization, and multiple additional
    parameters to turn on/off individual protocol features. Similarly, OSPF has
    also been updated related to BDR promotion, network interface mode parameters,
    packet checksum calculation, and packet serialization. He also validated the
    INET models by comparing simulation runs with the CISCO packet tracer tool
    for many important use cases.

14. Other notable changes

    Updated a few mobility models to provide better parameterization for 3D.

    Added ClnsAddress and ClnsAddressType from ANSA project.

    Added a new antenna model for rotationally symmetric antenna lobes.

    Added linear and logarithmic antenna lobe visualization.

    Extended IPv4 network configuration with support for configuring isolated networks.

    Fixed several smaller issues related to 802.11 block acknowledgement and QoS recovery procedures.

    Numerous other bug fixes and small improvements.
