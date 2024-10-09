---
id: omnetpp-61
download: true
layout: download-details
title: OMNeT++ 6.1.0
date: 2024-10-09
sortkey: "2024-10-09"
category: omnetpp-current
whatsnew-url: https://github.com/omnetpp/omnetpp/blob/omnetpp-6.1.0/WHATSNEW.md
tabs:
- id: linux.x86_64
  download-file-url: https://github.com/omnetpp/omnetpp/releases/download/omnetpp-6.1.0/omnetpp-6.1.0-linux-x86_64.tgz
  filesize: 403716606
  sha1: 36b81c18eb7045cbcc9607288a3d7e3325869e15

- id: linux.aarch64
  download-file-url: https://github.com/omnetpp/omnetpp/releases/download/omnetpp-6.1.0/omnetpp-6.1.0-linux-aarch64.tgz
  filesize: 403054940
  sha1: 23d90493f901bd8d36344cd4bbeb3d765dc8e9bf

- id: windows
  download-file-url: https://github.com/omnetpp/omnetpp/releases/download/omnetpp-6.1.0/omnetpp-6.1.0-windows-x86_64.zip
  filesize: 926631793
  sha1: 30706c89c92ce6ac63c3ced7ec3cf2d45b701925

- id: macos.x86_64
  download-file-url: https://github.com/omnetpp/omnetpp/releases/download/omnetpp-6.1.0/omnetpp-6.1.0-macos-x86_64.tgz
  filesize: 403716606
  sha1: 7b2607730343c912754af0f546ba9dd8e3be5c41

- id: macos.aarch64
  download-file-url: https://github.com/omnetpp/omnetpp/releases/download/omnetpp-6.1.0/omnetpp-6.1.0-macos-aarch64.tgz
  filesize: 401761494
  sha1: 29e7639cc8f6cdae3100dee62112ebb68880a195

- id: core
  download-file-url: https://github.com/omnetpp/omnetpp/releases/download/omnetpp-6.1.0/omnetpp-6.1.0-core.tgz
  filesize: 79505310
  sha1: 4e643421035b322d91b9bfbb273c2ee165af82a0

- id: opp_env
  opp-env-command: opp_env install omnetpp-6.1.0

---
This update marks a significant refinement of OMNeT++ since version 6.0,
impacting virtually every aspect of the simulation framework, including the IDE
and simulation library. Among the various enhancements, the Analysis Tool stands
out with major improvements to both its user interface and its underlying chart
templates and Python library. For example, the new, highly customizable number
and quantity formatting options facilitate the interpretation of raw simulation
results displayed in the user interface; chart legends became much more
customizable; and the enhanced plotting of enum-valued vectors allows much more
appropriate visualization.

Additional notable updates include the ability to denote ini file sections as
"abstract" (meaning they merely serve as base for further configurations); the
validation of parameter values according to the `@enum` property; a new
bookmarking feature and other enhancements in the Qtenv log window; a more
streamlined operation of Project Features in the IDE; the possibility to have
simulation programs dump the stack trace in the case of crashes; a new Python
library for reading and querying NED files; and much more. Below is a detailed
summary of these key enhancements and other important changes in this release.

Important: Please read the installation instructions even if you are familiar
with OMNeT++, as there are new dependencies and the recommended way of
installing Python packages has also changed. There is a new `install.sh` script
in the root of the source distribution that will help you install OMNeT++ on
your machine.

Issues [fixed](https://github.com/omnetpp/omnetpp/milestone/43?closed=1) in version 6.1.0.
