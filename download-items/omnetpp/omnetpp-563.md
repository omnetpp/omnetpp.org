---
id: omnetpp-563
download: true
layout: download-details
title: OMNeT++ 5.6.3
date: 2023-08-20
sortkey: "2020-05-21"
category: omnetpp
whatsnew-url: https://github.com/omnetpp/omnetpp/blob/master/WHATSNEW.md#omnet-562-may-2020
tabs:
- id: linux
  download-file-url: https://github.com/omnetpp/omnetpp/releases/download/omnetpp-5.6.3/omnetpp-5.6.3-src-linux.tgz
  filesize: 
  md5: 

- id: windows
  download-file-url: https://github.com/omnetpp/omnetpp/releases/download/omnetpp-5.6.3/omnetpp-5.6.3-src-windows.zip
  filesize:
  md5:

- id: macos
  download-file-url: https://github.com/omnetpp/omnetpp/releases/download/omnetpp-5.6.3/omnetpp-5.6.3-src-macosx.tgz
  filesize:
  md5:

- id: docker
  download-page-url: https://hub.docker.com/r/omnetpp/omnetpp
  description: $ docker run --rm -it -v "$(pwd):/root/models" -u "$(id -u):$(id -g)" omnetpp/omnetpp:u18.04-5.6.3

- id: core
  download-file-url: https://github.com/omnetpp/omnetpp/releases/download/omnetpp-5.6.3/omnetpp-5.6.3-src-core.tgz
  filesize:
  md5: 
---

### Changes since version 5.6:

- Fixes for the Sequence Chart viewer in the IDE not displaying some event log files.
- Various fixes for graphical glitches on Linux in the IDE.
- Fix for a buffer overrun error with very long file names.
