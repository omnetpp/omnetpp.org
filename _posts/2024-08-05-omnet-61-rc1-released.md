---
layout: post
title: OMNeT++ 6.1 Release Candidate 1 Available
category: Software
details-url: https://github.com/omnetpp/omnetpp/releases/tag/omnetpp-6.1rc1
---
This update marks a significant refinement of OMNeT++ since version 6.0, impacting virtually every aspect of the simulation framework, including the IDE and simulation library. Among the various enhancements, the Analysis Tool stands out with major improvements to both its user interface and its underlying chart templates and Python library. For example, the new, highly customizable number and quantity formatting options facilitate the interpretation of raw simulation results displayed in the user interface; chart legends became much more customizable; and the enhanced plotting of enum-valued vectors allows much more appropriate visualization.

Additional notable updates include the ability to denote ini file sections as "abstract" (meaning they merely serve as base for further configurations); the validation of parameter values according to the `@enum` property; a new bookmarking feature and other enhancements in the Qtenv log window; a more streamlined operation of Project Features in the IDE; the possibility to have simulation programs dump the stack trace in the case of crashes; a new Python library for reading and querying NED files; and much more. 

Important: Please read the installation instructions even if you are familiar with OMNeT++, as there are new dependencies and the recommended way of installing Python packages has also changed. There is a new `install.sh` script in the root of the source distribution that will help you install OMNeT++ on your machine.

Read the [What's New](https://github.com/omnetpp/omnetpp/blob/omnetpp-6.1rc1/WHATSNEW.md) page for more details.