---
id: omnetpp-561
download: true
layout: download-details
title: OMNeT++ 5.6.1
date: 2020-02-10
sortkey: "2020-02-10"
category: omnetpp
whatsnew-url: https://github.com/omnetpp/omnetpp/blob/master/WHATSNEW.md#omnet-561-february-2020
opp-env-command: opp_env install omnetpp-5.6.1
tabs:
- id: linux
  download-file-url: https://github.com/omnetpp/omnetpp/releases/download/omnetpp-5.6.1/omnetpp-5.6.1-src-linux.tgz
  filesize: 281525564
  md5: 762133c44244baa5793a0f05e5ecd032

- id: windows
  download-file-url: https://github.com/omnetpp/omnetpp/releases/download/omnetpp-5.6.1/omnetpp-5.6.1-src-windows.zip
  filesize: 718627397
  md5: 4e1019d67fb71cf9a9b09e8a39ec3249

- id: macos
  download-file-url: https://github.com/omnetpp/omnetpp/releases/download/omnetpp-5.6.1/omnetpp-5.6.1-src-macosx.tgz
  filesize: 332229343
  md5: b4469bfab6d4e176ed866f3810dc0863

- id: docker
  download-page-url: https://hub.docker.com/r/omnetpp/omnetpp
  description: $ docker run --rm -it -v "$(pwd):/root/models" -u "$(id -u):$(id -g)" omnetpp/omnetpp:u18.04-5.6.1

- id: core
  download-file-url: https://github.com/omnetpp/omnetpp/releases/download/omnetpp-5.6.1/omnetpp-5.6.1-src-core.tgz
  filesize: 64084991
  md5: b0647617f240b6aee9ae9317d910295c
---

This is primarily a bugfix release, with a small but practically quite useful NED feature (`@reconnect`) and minor additions to the simulation library.
Regarding bugfixes, Qtenv has received quite a lot of attention.
