---
id: omnetpp-46
download: true
layout: download-details
title: OMNeT++ 4.6
date: 2014-12-02
sortkey: "2014-12-02"
category: omnetpp
whatsnew-url: https://github.com/omnetpp/omnetpp/blob/master/WHATSNEW.md#omnet-46-dec-2014
visualchangelog-url: /documentation/visualchangelog#4.6
opp-env-command: opp_env install omnetpp-4.6.0
tabs:
- id: linux
  download-file-url: https://github.com/omnetpp/omnetpp/releases/download/omnetpp-4.6/omnetpp-4.6-src.tgz

- id: windows
  download-file-url: https://github.com/omnetpp/omnetpp/releases/download/omnetpp-4.6/omnetpp-4.6-src-windows.zip

- id: macos
  download-file-url: https://github.com/omnetpp/omnetpp/releases/download/omnetpp-4.6/omnetpp-4.6-src.tgz

- id: docker
  download-page-url: https://hub.docker.com/r/omnetpp/omnetpp
  description: $ docker run --rm -it -v "$(pwd):/root/models" -u "$(id -u):$(id -g)" omnetpp/omnetpp:u18.04-4.6
---

Highlights of this release: models are now compiled as C++11 sources; upgrade of
the Windows toolchain to MSYS2 and the latest MinGW; the debut of opp_test; and
the rewrite of opp_msgc as part of nedtool. It also contains several bug fixes.
