---
id: omnetpp-562
download: true
layout: download-details
title: OMNeT++ 5.6.2
date: 2020-05-20
sortkey: "2020-05-20"
category: omnetpp
whatsnew-url: https://github.com/omnetpp/omnetpp/blob/master/WHATSNEW.md#omnet-562-may-2020
opp-env-command: opp_env install omnetpp-5.6.2
tabs:
- id: linux
  download-file-url: https://github.com/omnetpp/omnetpp/releases/download/omnetpp-5.6.2/omnetpp-5.6.2-src-linux.tgz
  filesize: 281497790
  md5: 6a9a027f39044c56333318e71e52f97b

- id: windows
  download-file-url: https://github.com/omnetpp/omnetpp/releases/download/omnetpp-5.6.2/omnetpp-5.6.2-src-windows.zip
  filesize: 718600751
  md5: 562cb360929e73453958b122482e808c

- id: macos
  download-file-url: https://github.com/omnetpp/omnetpp/releases/download/omnetpp-5.6.2/omnetpp-5.6.2-src-macosx.tgz
  filesize: 332202023
  md5: 7b68b7c501baacbeb22049e9e13ef2bb

- id: docker
  download-page-url: https://hub.docker.com/r/omnetpp/omnetpp
  description: $ docker run --rm -it -v "$(pwd):/root/models" -u "$(id -u):$(id -g)" omnetpp/omnetpp:u18.04-5.6.2

- id: core
  download-file-url: https://github.com/omnetpp/omnetpp/releases/download/omnetpp-5.6.2/omnetpp-5.6.2-src-core.tgz
  filesize: 64083550
  md5: f5d0abd930f2be4f9786b3ced3c71b2d
---

### Changes since version 5.6:

- Fixes for the Sequence Chart viewer in the IDE not displaying some event log files.
- Various fixes for graphical glitches on Linux in the IDE.
- Fix for a buffer overrun error with very long file names.
