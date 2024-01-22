---
id: omnetpp-57
download: true
layout: download-details
title: OMNeT++ 5.7
date: 2021-10-06
sortkey: "2021-10-06"
category: omnetpp
whatsnew-url: https://github.com/omnetpp/omnetpp/blob/master/WHATSNEW.md#omnet-57-sept-2021
tabs:
- id: linux
  download-file-url: https://github.com/omnetpp/omnetpp/releases/download/omnetpp-5.7/omnetpp-5.7-src-linux.tgz
  filesize: 332422125
  md5: 2b8dfc258b47c079d63a6b573b30f2f9

- id: windows
  download-file-url: https://github.com/omnetpp/omnetpp/releases/download/omnetpp-5.7/omnetpp-5.7-src-windows.zip
  filesize: 770704247
  md5: e6588fd745675984e45ae1d60b2146a9

- id: macos
  download-file-url: https://github.com/omnetpp/omnetpp/releases/download/omnetpp-5.7/omnetpp-5.7-src-macosx.tgz
  filesize: 475812819
  md5: 850f41d57ac4a7250f3dd1efa903f7d1

- id: docker
  download-page-url: https://hub.docker.com/r/omnetpp/omnetpp
  description: $ docker run --rm -it -v "$(pwd):/root/models" -u "$(id -u):$(id -g)" omnetpp/omnetpp:u20.04-5.7

- id: core
  download-file-url: https://github.com/omnetpp/omnetpp/releases/download/omnetpp-5.7/omnetpp-5.7-src-core.tgz
  filesize: 75371971
  md5: 11a7d42a9197f52626dcecd575643ac4

- id: opp_env
  opp-env-command: opp_env install omnetpp-5.7.0
---

### Changes since version 5.6.2:

This version is intended to be the last release of the 5.x series. The main purpose of
this release is to make it possible to write model code, primarily NED, which is also
compatible with the upcoming OMNeT++ 6.0. It also contains several bug fixes backported
from the 6.0 branch.
