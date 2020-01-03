---
layout: post
title: OMNeT++ 6.0 Preview 6 Available
category: Software
---
We are happy to announce the [sixth preview version of OMNeT++ 6](/download/preview).
This version contains a completely revamped charting solution in the IDE. It is
now completely based on Python3, with support for displaying Matplotlib charts
right inside the IDE, accessing simulation results in the form of Pandas DataFrames,
and using the built-in (older) charts from Python.

<!--more-->

Core:

- Introduced structured NED parameters using JSON like syntax.

IDE:

- A completely rewritten Charts interface in the Analysis Tool.
- Updated NED documentation generator with command line support (opp_neddoc).

Samples:

- Added a new sample (pythoncharts) that contains the documentation, and some sample analysis files for the new Python-based plotting, using the data from the resultfiles sample.
- Added a new sample (openstreetmap) that displays a city map, with some animated car traffic on it. Map data comes from an OSM file exported from openstreetmap.org.
- A new sample (petrinets) demonstrating how to implement stochastic Petri nets, a well-known formalism for the description of distributed systems.

[Download it here](/download/preview).
