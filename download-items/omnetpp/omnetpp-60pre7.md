---
id: omnetpp-60pre6
download: true
layout: download-details
title: OMNeT++ 6.0 Preview 7
date: 2020-03-11
sortkey: "2020-03-11"
category: preview
tabs:
- id: linux
  download-file-url: https://github.com/omnetpp/omnetpp/releases/download/omnetpp-6.0pre7/omnetpp-6.0pre7-src-linux.tgz

- id: windows
  download-file-url: https://github.com/omnetpp/omnetpp/releases/download/omnetpp-6.0pre7/omnetpp-6.0pre7-src-windows.zip

- id: macos
  download-file-url: https://github.com/omnetpp/omnetpp/releases/download/omnetpp-6.0pre7/omnetpp-6.0pre7-src-macosx.tgz

- id: core
  download-file-url: https://github.com/omnetpp/omnetpp/releases/download/omnetpp-6.0pre7/omnetpp-6.0pre7-src-core.tgz
---
This is a preview release demonstrating our completely revamped charting solution in the IDE. It is now
completely based on Python3, with support for displaying Matplotlib charts right inside the IDE,
accessing simulation results in the form of Pandas DataFrames, and using the built-in (older) charts
from Python. Analysis files (.anf) created by older versions of the IDE (and vice versa) cannot be
opened by this release, because the internal model changed substantially.

Core:
- Introduced structured NED parameters using JSON like syntax.

IDE:
- A completely rewritten Charts interface in the Analysis Tool.
- Updated NED documentation generator with command line support (opp_neddoc).

Samples:
- Added a new sample (pythoncharts) that contains the documentation, and some sample analysis files for
  the new Python-based plotting, using the data from the resultfiles sample.
- Added a new sample (openstreetmap) that displays a city map, with some animated car traffic on it.
  Map data comes from an OSM file exported from openstreetmap.org.
- A new sample (petrinets) demonstrating how to implement stochastic Petri nets, a well-known formalism
  for the description of distributed systems.