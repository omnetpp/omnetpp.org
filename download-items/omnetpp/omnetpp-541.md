---
id: omnetpp-541
download: true
layout: download-details
title: OMNeT++ 5.4.1
date: 2018-06-29
sortkey: "2018-06-29"
category: omnetpp
more-url: /software/2018/06/29/omnet-5-4-1-released
tabs:
- id: linux
  download-file-url: https://github.com/omnetpp/omnetpp/releases/download/omnetpp-5.4.1/omnetpp-5.4.1-src-linux.tgz
  ipfs: ipfs get /ipns/ipfs.omnetpp.org/release/5.4.1/omnetpp-5.4.1-src-linux.tgz
  filesize: 260762901
  md5: 0d65c0e156382122c47e87a4efef3996

- id: windows
  download-file-url: https://github.com/omnetpp/omnetpp/releases/download/omnetpp-5.4.1/omnetpp-5.4.1-src-windows.zip
  ipfs: ipfs get /ipns/ipfs.omnetpp.org/release/5.4.1/omnetpp-5.4.1-src-windows.zip
  filesize: 697388215
  md5: 6245e161969eb5657a6689fa3067c640

- id: macos
  download-file-url: https://github.com/omnetpp/omnetpp/releases/download/omnetpp-5.4.1/omnetpp-5.4.1-src-macosx.tgz
  ipfs: ipfs get /ipns/ipfs.omnetpp.org/release/5.4.1/omnetpp-5.4.1-src-macosx.tgz
  filesize: 311422427
  md5: 736433babdde9df03ee88988ab1ef79e

- id: docker
  download-page-url: https://hub.docker.com/r/omnetpp/omnetpp
  description: $ docker run --rm -it -v "$(pwd):/root/models" -u "$(id -u):$(id -g)" omnetpp/omnetpp:u18.04-5.4.1

- id: core
  download-file-url: https://github.com/omnetpp/omnetpp/releases/download/omnetpp-5.4.1/omnetpp-5.4.1-src-core.tgz
  ipfs: ipfs get /ipns/ipfs.omnetpp.org/release/5.4.1/omnetpp-5.4.1-src-core.tgz
  filesize: 63575167
  md5: f29b6cdba2c1c07f33ea15207cf59e1a
---

This release contains last-minute features and improvements, mostly motivated by
the upcoming INET 4 release. Highlights are the typename and exists() operators
in NED; nan and inf keywords in NED; support for logarithmic units like dB, dBW,
dBm, dBV, dBmV. Qtenv has also gained much more powerful just-in-time debugging
capabilities than before.
