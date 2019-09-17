---
layout: post
title: INET 3.0 Released
joomla_id: 3734
joomla_url: inet-3-released
date: 2015-06-25 11:54:56.000000000 +02:00
author: Andras
excerpt: "<p>INET 3.0.0 is now available for download. This release contains a lot
  of new features and fixes compared to 2.6. Please read the <a href=\"https://github.com/inet-framework/inet/blob/v3.0.0/WHATSNEW\">what’s
  new</a> file carefully to see all the changes in detail. This release is not source
  compatible with 2.6 so you may need to adjust your models after upgrading.</p>\r\n<p>Highlights:</p>\r\n<ul>\r\n<li>A
  new physical layer model that builds upon the INET and MiXiM physical layers, and
  brings them to new heights. Design goals were extreme modularity, extensibility,
  the ability to support (and easily switch between) various levels of detail, and
  the ability to add support for exploiting various pieces of parallel hardware.</li>\r\n<li>Includes
  a new packet/bit/symbol level physical layer model for the 802.11 OFDM PHY according
  to the IEEE 802.11-2012 standard, and a hypothetical generic packet/bit/symbol level
  APSK physical layer model for further experimentation. The new implementations include
  forward error correction encoding/decoding, scrambling/descrambling, interleaving/deinterleaving,
  and modulation/demodulation.</li>\r\n<li>New step by step wireless tutorial</li>\r\n<li>A
  new tool to enable/disable INET features from the command line</li>\r\n<li>Extensive
  refactoring aimed at improving code quality. It includes directory restructuring,
  code formatting, refactoring of init stages and publish-subscribe communication,
  and more.</li>\r\n<li>Modernized C++ source code using new C++11 features such as
  nullptr, auto types, range loop, override, etc.</li>\r\n<li>Network layer refactoring
  that allows higher layer protocols (including routing protocols) to be written in
  a network protocol agnostic manner.</li>\r\n<li>Numerous SCTP improvements</li>\r\n<li>New
  IGMPv3, PIM-DM and PIM-SM models</li>\r\n<li>Improved IPv4NetworkConfigurator to
  support multi-path routing scenarios.</li>\r\n<li>TUN/TAP virtual network interfaces</li>\r\n<li>Network
  Emulation feature no longer depends on OMNeT++ to detect the presence of PCAP. Instead
  the feature can be turned on/off by the user.</li>\r\n<li>Improved response time
  on external interfaces.</li>\r\n<li>Added support for sending NF_LINK_BREAK signal
  from BMAC and CSMA. This is required for certain routing protocols (i.e. AODV) to
  function properly.</li>\r\n<li>Added a new power model:\r\n<ul>\r\n<li>Removed obsolete
  classes: IBattery, BasicBattery, InetSimpleBattery and Energy.</li>\r\n<li>Added
  new interfaces: IEnergyConsumer, IEnergyStorage, and IEnergyGenerator.</li>\r\n<li>Added
  implementations: IdealEnergyStorage, and SimpleEnergyStorage.</li>\r\n</ul>\r\n</li>\r\n<li>Added
  a new physical environment model and removing obsolete classes: Obstacle, ObstacleControl,
  and AnnotationManager.</li>\r\n<li>Added new geometry model:\r\n<ul>\r\n<li>orientation
  related classes: EulerAngles, Rotation, and Quaternion.</li>\r\n<li>basic 3D geometry
  classes: LineSegment, Box, Plane, and Polygon.</li>\r\n<li>3D convex shapes: Cuboid,
  Sphere, Prism, and Polyhedron.</li>\r\n<li>geometry cache data structures: SpatialGrid,
  QuadTree, and BVHTree.</li>\r\n</ul>\r\n</li>\r\n<li>Added support for drawing the
  physical objects on a compound module canvas (Tkenv) in 2D as seen from a configured
  view angle.</li>\r\n<li>Rewritten packet serializer classes.</li>\r\n<li>Added a
  new StaticConcentricMobility similar to StaticGridMobility that places nodes on
  concentric circles.</li>\r\n<li>Removed TracCI and TraCIScenarioManager because
  these modules are maintained in the Veins framework.</li>\r\n</ul>\r\n<p>This version
  requires OMNeT++ 4.6 or later. Read the <a href=\"https://github.com/inet-framework/inet/blob/v3.0.0/WHATSNEW\">what’s
  new</a> file for more detail and <a href=\"https://github.com/inet-framework/inet/releases/download/v3.0.0/inet-3.0.0-src.tgz\">download
  INET-3.0.0</a> now.</p>"
category: Software
---
<p>INET 3.0.0 is now available for download. This release contains a lot of new features and fixes compared to 2.6. Please read the <a href="https://github.com/inet-framework/inet/blob/v3.0.0/WHATSNEW">what’s new</a> file carefully to see all the changes in detail. This release is not source compatible with 2.6 so you may need to adjust your models after upgrading.</p>
<p>Highlights:</p>
<ul>
<li>A new physical layer model that builds upon the INET and MiXiM physical layers, and brings them to new heights. Design goals were extreme modularity, extensibility, the ability to support (and easily switch between) various levels of detail, and the ability to add support for exploiting various pieces of parallel hardware.</li>
<li>Includes a new packet/bit/symbol level physical layer model for the 802.11 OFDM PHY according to the IEEE 802.11-2012 standard, and a hypothetical generic packet/bit/symbol level APSK physical layer model for further experimentation. The new implementations include forward error correction encoding/decoding, scrambling/descrambling, interleaving/deinterleaving, and modulation/demodulation.</li>
<li>New step by step wireless tutorial</li>
<li>A new tool to enable/disable INET features from the command line</li>
<li>Extensive refactoring aimed at improving code quality. It includes directory restructuring, code formatting, refactoring of init stages and publish-subscribe communication, and more.</li>
<li>Modernized C++ source code using new C++11 features such as nullptr, auto types, range loop, override, etc.</li>
<li>Network layer refactoring that allows higher layer protocols (including routing protocols) to be written in a network protocol agnostic manner.</li>
<li>Numerous SCTP improvements</li>
<li>New IGMPv3, PIM-DM and PIM-SM models</li>
<li>Improved IPv4NetworkConfigurator to support multi-path routing scenarios.</li>
<li>TUN/TAP virtual network interfaces</li>
<li>Network Emulation feature no longer depends on OMNeT++ to detect the presence of PCAP. Instead the feature can be turned on/off by the user.</li>
<li>Improved response time on external interfaces.</li>
<li>Added support for sending NF_LINK_BREAK signal from BMAC and CSMA. This is required for certain routing protocols (i.e. AODV) to function properly.</li>
<li>Added a new power model:
<ul>
<li>Removed obsolete classes: IBattery, BasicBattery, InetSimpleBattery and Energy.</li>
<li>Added new interfaces: IEnergyConsumer, IEnergyStorage, and IEnergyGenerator.</li>
<li>Added implementations: IdealEnergyStorage, and SimpleEnergyStorage.</li>
</ul>
</li>
<li>Added a new physical environment model and removing obsolete classes: Obstacle, ObstacleControl, and AnnotationManager.</li>
<li>Added new geometry model:
<ul>
<li>orientation related classes: EulerAngles, Rotation, and Quaternion.</li>
<li>basic 3D geometry classes: LineSegment, Box, Plane, and Polygon.</li>
<li>3D convex shapes: Cuboid, Sphere, Prism, and Polyhedron.</li>
<li>geometry cache data structures: SpatialGrid, QuadTree, and BVHTree.</li>
</ul>
</li>
<li>Added support for drawing the physical objects on a compound module canvas (Tkenv) in 2D as seen from a configured view angle.</li>
<li>Rewritten packet serializer classes.</li>
<li>Added a new StaticConcentricMobility similar to StaticGridMobility that places nodes on concentric circles.</li>
<li>Removed TracCI and TraCIScenarioManager because these modules are maintained in the Veins framework.</li>
</ul>
<p>This version requires OMNeT++ 4.6 or later. Read the <a href="https://github.com/inet-framework/inet/blob/v3.0.0/WHATSNEW">what’s new</a> file for more detail and <a href="https://github.com/inet-framework/inet/releases/download/v3.0.0/inet-3.0.0-src.tgz">download INET-3.0.0</a> now.</p>
