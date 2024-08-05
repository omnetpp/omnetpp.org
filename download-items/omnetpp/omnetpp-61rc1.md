---
id: omnetpp-61
download: true
layout: download-details
title: OMNeT++ 6.1rc1
date: 2024-08-05
sortkey: "2024-08-05"
category: preview
whatsnew-url: https://github.com/omnetpp/omnetpp/blob/omnetpp-6.1rc1/WHATSNEW
tabs:
- id: linux.x86_64
  download-file-url: https://github.com/omnetpp/omnetpp/releases/download/omnetpp-6.1rc1/omnetpp-6.1rc1-linux-x86_64.tgz
  filesize: 408211550
  md5: 518f4bcec9f68a9a2d7e922154c4958a

- id: linux.aarch64
  download-file-url: https://github.com/omnetpp/omnetpp/releases/download/omnetpp-6.1rc1/omnetpp-6.1rc1-linux-aarch64.tgz
  filesize: 407546637
  md5: ee9e1918ef330a956bba56b61be68d95

- id: windows
  download-file-url: https://github.com/omnetpp/omnetpp/releases/download/omnetpp-6.1rc1/omnetpp-6.1rc1-windows-x86_64.zip
  filesize: 930814544
  md5: fdd402c5b3d597f63d3f95e0425ade5c

- id: macos.x86_64
  download-file-url: https://github.com/omnetpp/omnetpp/releases/download/omnetpp-6.1rc1/omnetpp-6.1rc1-macos-x86_64.tgz
  filesize: 407459049
  md5: 6bbdde4d303128b10264eec6f256cc6e

- id: macos.aarch64
  download-file-url: https://github.com/omnetpp/omnetpp/releases/download/omnetpp-6.1rc1/omnetpp-6.1rc1-macos-aarch64.tgz
  filesize: 406229924
  md5: 0c0d06c9713dab66ac2cca35bd1e2de3

- id: core
  download-file-url: https://github.com/omnetpp/omnetpp/releases/download/omnetpp-6.1rc1/omnetpp-6.1rc1-core.tgz
  filesize: 79477301
  md5: 976613f63eb5b6fb5dccaf98e4468d86

- id: opp_env
  opp-env-command: opp_env install omnetpp-6.1rc1

---
This update marks a significant refinement of OMNeT++ since version 6.0, impacting virtually every aspect of the simulation framework, including the IDE and simulation library. Among the various enhancements, the Analysis Tool stands out with major improvements to both its user interface and its underlying chart templates and Python library. For example, the new, highly customizable number and quantity formatting options facilitate the interpretation of raw simulation results displayed in the user interface; chart legends became much more customizable; and the enhanced plotting of enum-valued vectors allows much more appropriate visualization.

Additional notable updates include the ability to denote ini file sections as "abstract" (meaning they merely serve as base for further configurations); the validation of parameter values according to the `@enum` property; a new bookmarking feature and other enhancements in the Qtenv log window; a more streamlined operation of Project Features in the IDE; the possibility to have simulation programs dump the stack trace in the case of crashes; a new Python library for reading and querying NED files; and much more. 

Important: Please read the installation instructions even if you are familiar with OMNeT++, as there are new dependencies and the recommended way of installing Python packages has also changed. There is a new `install.sh` script in the root of the source distribution that will help you install OMNeT++ on your machine.

Issues [fixed](https://github.com/omnetpp/omnetpp/milestone/43?closed=1) in version 6.1rc1.
