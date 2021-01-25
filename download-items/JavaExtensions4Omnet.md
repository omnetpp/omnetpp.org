---
download: true
layout: download-details
title: Java Extensions for OMNeT++
years-active: 2017-
category: tools
tags: tool omnetpp5 inet3
keywords: java, language, binding
github-url: https://gitlab.amd.e-technik.uni-rostock.de/henning.puttnies/javaextensions4omnet
---

This project enables writing simulation modules using the Java programming
language for the OMNeT++ network simulator.

Please note that this project heavily bases on JSimpleModule (https://github.com/omnetpp/jsimplemodule).

It is also possible to have a mixed language network (e.g. some modules are
written in C++ and some in Java). We also show how to interface to the INET
library, as an example of how to interface between the Java world and existing
C++ libs. There are two ways to use this project. You can either download a VM
that runs out of the box or you can build up everything on your own using this
repository. As a starting point, we highly recommend using the VM, as the JE4O
base on Java Native Interface (JNI) and there are many pitfalls during the setup
process.

