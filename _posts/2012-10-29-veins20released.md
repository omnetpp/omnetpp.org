---
layout: post
title: VEINS 2.0 released
joomla_id: 3699
joomla_url: veins20released
date: 2012-10-29 00:00:00.000000000 +01:00
author: Administrator
excerpt: <div>The Veins project team have announced Veins 2.0, the latest version
  of their vehicular network simulation framework for OMNeT++. Veins is an open source
  Inter-Vehicular Communication (IVC) simulation framework composed of an event-based
  network simulator and a road traffic micro-simulation model, containing numerous
  improvements and new features.</div><div><br /></div><div>This release continues
  the framework's six year tradition of providing a comprehensive set of high quality
  models for the simulation of Inter Vehicle Communication (IVC) to an ever growing
  user base; now spanning 5 continents, including universities, governmental bodies,
  and independent research institutes as well as most major European automobile manufacturers.&nbsp;</div><div><br
  /></div><div>Full source code, a beginner's tutorial, documentation, and the publication
  list are available at <a href="http://veins.car2x.org/" mce_href="http://veins.car2x.org/"
  target="_blank">http://veins.car2x.org/</a></div><div>
category: Software
---
<div>The Veins project team have announced Veins 2.0, the latest version of their vehicular network simulation framework for OMNeT++. Veins is an open source Inter-Vehicular Communication (IVC) simulation framework composed of an event-based network simulator and a road traffic micro-simulation model, containing numerous improvements and new features.</div><div><br /></div><div>This release continues the framework's six year tradition of providing a comprehensive set of high quality models for the simulation of Inter Vehicle Communication (IVC) to an ever growing user base; now spanning 5 continents, including universities, governmental bodies, and independent research institutes as well as most major European automobile manufacturers.&nbsp;</div><div><br /></div><div>Full source code, a beginner's tutorial, documentation, and the publication list are available at <a href="http://veins.car2x.org/" mce_href="http://veins.car2x.org/" target="_blank">http://veins.car2x.org/</a></div><div></div><div>Like previous versions, Veins 2.0 is based on pure Open Source software offering unrestricted extensibility, relies on SUMO, a trusted vehicular mobility model and implementation by the Transportation and Traffic Science community, and allows for online re-configuration and re-routing of vehicles in reaction to network packets.&nbsp;</div><div><br /></div><div>The following list names only some of the features that come with the new release:&nbsp;</div><div><ul><li>Compared to earlier versions, Veins 2.0 now makes use of MiXiM physical layer and mobility support to offer a wealth of new and &nbsp;improved models that cover requirements specific to IVC simulation like mobility models, multi-path propagation, obstacle-caused fading in vehicular networks, as well as PHY and MAC layer modules.&nbsp;</li><li>For the first time, Veins 2.0 features dedicated models of IEEE 802.11p and IEEE 1609.4 DSRC PHY and MAC layers, including Access Categories for QoS, Wave Short Message (WSM) handling, and beaconing WAVE service announcements, as well as multi channel operation, i.e. the periodic switching between the Control Channel (CCH) and Service Channels (SCHs).&nbsp;</li><li>Veins includes full EDCA functionality, enabling researchers to simulate multi-channel multi-priority applications. Please see the Changelog for full details.&nbsp;</li></ul></div><div>Changes from the last release candidate (veins-2.0-rc2) include:&nbsp;</div><div><ul><li>The IEEE 1609.4/802.11p MAC behaviour has been further optimized (minor bug fixes and performance tweaks)&nbsp;</li><li>The IEEE 802.11p Physical Layer and Decider have been improved. Interference/SNR computation is more robust and simplified frame capturing has been added.&nbsp;</li><li>Veins 2.0 now offers additional checks to validate user created experiments, full compatibility with clang and newer versions of gcc, delivers a more polished user experience, and offers many more available IVC centric metrics.&nbsp;</li></ul></div><div>Detailed descriptions of all employed models and the results of extensive model validation can be found in the peer reviewed publications linked from <a href="http://veins.car2x.org/" mce_href="http://veins.car2x.org/" target="_blank">http://veins.car2x.org/&nbsp;</a></div><div><br /></div><div>I would like to invite everyone to download and try out Veins 2.0 -- as always, we will be happy to help with any open questions or problems during migration!&nbsp;</div><div><br /></div><div>On behalf of the Veins core team,&nbsp;</div><div>Christoph&nbsp;</div>