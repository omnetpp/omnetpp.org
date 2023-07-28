---
layout: post
title: OMNeT++ 3.0 released
joomla_id: 3528
joomla_url: "-sp-1191803972"
date: 2004-12-29 20:00:59.000000000 +01:00
author: Andras
excerpt: OMNeT++ 3.0 has been released. [<A href="/download/old">Download</A>]
category: Software
---
OMNeT++ 3.0 has been released. [<A href="/download/old">Download</A>] <P>The following list summarizes all changes since OMNeT++ 2.3:</P>
<UL>
<LI>The simulation kernel has received an overhaul.
<LI>A new step-by-step tutorial, revised documentation and several new sample simulations have been included to shorten your learning curve.
<LI>Dynamic NED loading will cut model build time and simplify your work.
<LI>Documentation generation tool will document your own large simulation models, and help you quickly get an overview about the structure of 3rd party models.
<LI>The new Random Number Architecture features a modern, very long cycle Random Number Generator (Mersenne Twister) for more realistic simulation results, and RNG mapping for more flexibility in simulation experiments.
<LI>Simulation models can now conveniently access XML configuration files for complex input.
<LI>Plove now features a powerful interactive charting component, and also an internal data-flow engine for processing output vectors before plotting.
<LI>The new Scalars tool complements Plove, and lets you analyze and plot scalar data produced by simulations.
<LI>Support for Parallel Distributed Simulation
<LI>Several Simulation GUI usability enhancements will save you time, and make your work more efficient.
<LI>New icons, and enhanced animation capabilities (icon coloring, queue length display, status text, transmission range, transient bubbles, etc.) improve the overall look and feel of your models, give you more insight, and make the models instantly presentable.
<LI>For better visualization of model dynamics, OMNeT++ now supports animation of direct message sending and C++ method calls across modules.
<LI>The automatic network layouting using the SpringEmbedder algorithm will let you work with large networks in the GUI, without the need for <BR>individual positioning of nodes.
<LI>Ready to receive your extensions: plug-in interfaces for new random number generators, new configuration databases and simulation event schedulers complement existing plug-in interfaces for recording simulation data, and let you implement custom input/output, real-time simulation, hardware-in-the-loop simulation and more.</LI></UL>
<P>Delta from 3.0 beta 1:</P>
<UL>
<LI>User Manual revised
<LI>Several bugfixes and new test cases, significant performance improvements in the network setup code; more intuitive error messages at places.
<LI>The new .use-default=true notation in omnetpp.ini makes it possible to apply the NED file defaults (specified via input()) to some or all unbound module parameters.
<LI>histogram classes (cLongHistogram, cDoubleHistogram) revisited</LI></UL>
