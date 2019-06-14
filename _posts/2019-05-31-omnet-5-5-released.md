---
layout: post
title: OMNeT++ 5.5.1 Released
category: Software
---
We are happy to announce the release of OMNeT++ 5.5.1. This release contains several
important fixes like JDK 11 and osgEarth 2.10 compatibility, a workaround
for long CDT indexing times, and several improvements in the simulation library.

<!--more-->

Core:
- Added the intuniformexcl() NED and C++ function. It returns a random integer with uniform distribution over [a,b), that is, including a and excluding b.
- The contents of resultfilters.h and resultrecorders.h are now public API, i.e. part of \<omnetpp.h>. This change allows one to derive new result filters/recorders by subclassing the built-in ones.
- A description string can now be specified when registering new result filters and recorders. New registration macros have been added for this purpose.
- cXMLElement was optimized to use less memory when large files are loaded.
- cHistogram now collects the number of positive and negative infinity values separately.
- SimTime: Added preciseDiv() for a precise division of an integer and a simulation time.
- cQueue, cPacketQueue: Added a constructor that accepts a comparator object (not just a function).
- cModule: Added containsModule() method.

Other:
- Several Qtenv-related fixes and improvements
- Added support for osgEarth 2.10 and above
- Updated IDE to Eclipse 4.11. This resolves compatibility issues with JDK 11.
- Workaround for long C++ indexer runtimes in the IDE.









