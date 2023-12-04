---
id: omnetpp-56
download: true
layout: download-details
title: OMNeT++ 5.6
date: 2020-01-13
sortkey: "2020-01-13"
category: omnetpp
whatsnew-url: https://github.com/omnetpp/omnetpp/blob/master/WHATSNEW.md#omnet-56-january-2020
opp-env-command: opp_env install omnetpp-5.6.0
tabs:
- id: linux
  download-file-url: https://github.com/omnetpp/omnetpp/releases/download/omnetpp-5.6/omnetpp-5.6-src-linux.tgz
  filesize: 281554188
  md5: 7f2df41902a863e7ba6ec8c2ee98d8bb

- id: windows
  download-file-url: https://github.com/omnetpp/omnetpp/releases/download/omnetpp-5.6/omnetpp-5.6-src-windows.zip
  filesize: 718611478
  md5: 39db2b35f2c9dd0ea3718e6881901082

- id: macos
  download-file-url: https://github.com/omnetpp/omnetpp/releases/download/omnetpp-5.6/omnetpp-5.6-src-macosx.tgz
  filesize: 332235946
  md5: 6bedd860804179ebce605a33f067469a

- id: docker
  download-page-url: https://hub.docker.com/r/omnetpp/omnetpp
  description: $ docker run --rm -it -v "$(pwd):/root/models" -u "$(id -u):$(id -g)" omnetpp/omnetpp:u18.04-5.6

- id: core
  download-file-url: https://github.com/omnetpp/omnetpp/releases/download/omnetpp-5.6/omnetpp-5.6-src-core.tgz
  filesize: 64088174
  md5: 2cb1deb513fa0d300edfd9d1650ec59e
---

This is primarily a bugfix release, with a small but practically quite useful NED feature (`@reconnect`) and minor additions to the simulation library.
Regarding bugfixes, Qtenv has received quite a lot of attention.
