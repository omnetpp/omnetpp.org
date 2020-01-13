---
id: omnetpp-551
download: true
layout: download-details
title: OMNeT++ 5.5.1
date: 2019-06-13
sortkey: "2019-06-13"
category: omnetpp
more-url: /software/2019/05/31/omnet-5-5-released
tabs:
- id: linux
  download-file-url: https://github.com/omnetpp/omnetpp/releases/download/omnetpp-5.5.1/omnetpp-5.5.1-src-linux.tgz
  ipfs: ipfs get /ipns/ipfs.omnetpp.org/release/5.5.1/omnetpp-5.5.1-src-linux.tgz
  filesize: 272039539
  md5: f7abe260ff47ec02a665e287c653db86

- id: windows
  download-file-url: https://github.com/omnetpp/omnetpp/releases/download/omnetpp-5.5.1/omnetpp-5.5.1-src-windows.zip
  ipfs: ipfs get /ipns/ipfs.omnetpp.org/release/5.5.1/omnetpp-5.5.1-src-windows.zip
  filesize: 709138815
  md5: aa1c2f28ddd9469090caee58602ab375

- id: macos
  download-file-url: https://github.com/omnetpp/omnetpp/releases/download/omnetpp-5.5.1/omnetpp-5.5.1-src-macosx.tgz
  ipfs: ipfs get /ipns/ipfs.omnetpp.org/release/5.5.1/omnetpp-5.5.1-src-macosx.tgz
  filesize: 322716630
  md5: 846192b5a6de1652e81a0ba8019436d3

- id: docker
  download-page-url: https://hub.docker.com/r/omnetpp/omnetpp
  description: $ docker run --rm -it -v "$(pwd):/root/models" -u "$(id -u):$(id -g)" omnetpp/omnetpp:u18.04-5.5.1

- id: core
  download-file-url: https://github.com/omnetpp/omnetpp/releases/download/omnetpp-5.5.1/omnetpp-5.5.1-src-core.tgz
  ipfs: ipfs get /ipns/ipfs.omnetpp.org/release/5.5.1/omnetpp-5.5.1-src-core.tgz
  filesize: 64060909
  md5: 8aec0eb7ed81712bfa3583a4aa87209f
---

This release contains several important fixes like JDK 11 and osgEarth 2.10 compatibility, a workaround for long CDT indexing times, and several improvements in the simulation library.
