---
layout: post
title: OMNeT++ 2.1 released
joomla_id: 3614
joomla_url: "-sp-351411894"
date: 2001-05-25 22:03:34.000000000 +02:00
author: Andras
excerpt: 'OMNeT++ 2.1 released. It now includes Nick van Foreest''s queueing tutorial.
  Available also as a nicely integrated package for Windows: precompiled binaries
  for MSVC, including manual, tutorial, samples and MSVC appwizard, bundled with Tcl/Tk,
  Gnuplot, grep, etc. Installer made with NSIS.'
category: Software
---
OMNeT++ 2.1 released. It now includes Nick van Foreest's queueing tutorial. Available also as a nicely integrated package for Windows: precompiled binaries for MSVC, including manual, tutorial, samples and MSVC appwizard, bundled with Tcl/Tk, Gnuplot, grep, etc. Installer made with NSIS.<FONT face="courier new, courier, mono"><BR>In the OMNeT++ 2.1 release (May 2001)<BR>-------------------------------------<BR>This release is devoted to making OMNeT++ easier to install, easier<BR>to use and easier to learn. Most important, there is now a binary package<BR>for Windows. The install package comes with Tcl/Tk, Gnuplot and some<BR>Unix utilities (grep, awk) bundled, and in addition to the OMNeT++ programs<BR>and libraries compiled with MSVC, it also contains prebuilt executables<BR>of the sample simulations. To shorten the learning curve, the package<BR>contains Nick van Foreest's Queueing Tutorial. Some MSVC integration stuff<BR>(AppWizard, macro to add a NED file to the project) was also added.<BR>Changes in the source distribution: it now includes the Tutorial and<BR>the sources of the MSVC integration components. To facilitate creating<BR>binary distributions, omnetpp.h and the other simulation kernel headers<BR>have been moved out of src/sim/, to a new include/ directory. There was no<BR>change on the simulation kernel itself.<BR>Further enhancements: Plove can now be built as a single executable with<BR>compiled-in Tcl code; on Windows, Plove and GNED can now be compiled as GUI<BR>apps (using WinMain() instead of main()). I added makefiles for Win95/98/ME<BR>(although I couldn't test them). Borland C++ is no longer supported:<BR>I removed the old project files (*.ide), but added back (unsupported)<BR>Makefile.bc's</FONT>
