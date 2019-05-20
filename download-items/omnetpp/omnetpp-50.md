---
id: omnetpp-50
download: true
layout: download-details
title: OMNeT++ 5.0
date: 2016-04-14
sortkey: "2016-04-14"
category: omnetpp
more-url: /software/2016/04/15/omnet-5-0-released
tabs:
- id: linux
  download-file-url: https://gateway.ipfs.io/ipns/ipfs.omnetpp.org/release/5.0/omnetpp-5.0-src.tgz
  ipfs: ipfs get /ipns/ipfs.omnetpp.org/release/5.0/omnetpp-5.0-src.tgz
  filesize: 217153019
  md5: 91f9540077d719e693610d70244d8661

- id: windows
  download-file-url: https://gateway.ipfs.io/ipns/ipfs.omnetpp.org/release/5.0/omnetpp-5.0-src-windows.zip
  ipfs: ipfs get /ipns/ipfs.omnetpp.org/release/5.0/omnetpp-5.0-src-windows.zip
  filesize: 541802007
  md5: 0a71bfa770a772acd7e92e484c7c5fc0

- id: macos
  download-file-url: https://gateway.ipfs.io/ipns/ipfs.omnetpp.org/release/5.0/omnetpp-5.0-src-macosx.tgz
  ipfs: ipfs get /ipns/ipfs.omnetpp.org/release/5.0/omnetpp-5.0-src-macosx.tgz
  filesize: 259115847
  md5: ea79eb182d9fd41cdb46ca1977b2c5d0
---

Release 5.0 is a result of development effort of nearly two years. This is a
major release that introduces significant new features compared to the last 4.x
version, for example the Canvas API (2D graphics), OpenSceneGraph-based 3D
graphics support, improved logging, a new Qt-based runtime environment that will
eventually replace Tkenv, and much more.

We have also taken the opportunity of the major release to improve several
corners of the OMNeT++ API, and also to get rid of deprecated functionality. For
porting models from OMNeT++ 4.x, see doc/API-changes.txt which lists all
changes, with hints on how to update the model code.

