---
id: omnetpp-46
download: true
layout: download-details
title: OMNeT++ 4.6
date: 2014-12-02
sortkey: "2014-12-02"
category: omnetpp
more-url: /software/2014/12/02/omnet-4-6-released
tabs:
- id: linux
  download-file-url: https://github.com/omnetpp/omnetpp/releases/download/omnetpp-4.6/omnetpp-4.6-src.tgz
  ipfs: ipfs get /ipns/ipfs.omnetpp.org/release/4.6/omnetpp-4.6-src.tgz

- id: windows
  download-file-url: https://github.com/omnetpp/omnetpp/releases/download/omnetpp-4.6/omnetpp-4.6-src-windows.zip
  ipfs: ipfs get /ipns/ipfs.omnetpp.org/release/4.6/omnetpp-4.6-src-windows.zip

- id: macos
  download-file-url: https://github.com/omnetpp/omnetpp/releases/download/omnetpp-4.6/omnetpp-4.6-src.tgz
  ipfs: ipfs get /ipns/ipfs.omnetpp.org/release/4.6/omnetpp-4.6-src.tgz

- id: docker
  download-page-url: https://hub.docker.com/r/omnetpp/omnetpp
  description: $ docker run --rm -it -v "$(pwd):/root/models" -u "$(id -u):$(id -g)" omnetpp/omnetpp:u18.04-4.6
---

Highlights of this release: models are now compiled as C++11 sources; upgrade of
the Windows toolchain to MSYS2 and the latest MinGW; the debut of opp_test; and
the rewrite of opp_msgc as part of nedtool. It also contains several bug fixes.
