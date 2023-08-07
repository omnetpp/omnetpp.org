---
id: omnetpp-331
download: true
layout: download-details
title: OMNeT++ 3.3.1
date: 2019-05-31
sortkey: "2019-05-31"
category: omnetpp
whatsnew-url: https://github.com/omnetpp/omnetpp/blob/omnetpp-3.3/doc/WhatsNew
tabs:
- id: linux
  download-file-url: https://github.com/omnetpp/omnetpp/releases/download/omnetpp-3.3.1/omnetpp-3.3.1-src.tgz

- id: docker
  download-page-url: https://hub.docker.com/r/omnetpp/omnetpp
  description: $ docker run --rm -it -v "$(pwd):/root/models" -u "$(id -u):$(id -g)" omnetpp/omnetpp:u18.04-3.3
---

This release patches OMNeT++ 3.3 to compile with GCC 7.3. It can be used
for porting models written for OMNeT++ 3.3. It was tested only on Ubuntu 18.04, but
other Linux distributions with an up to date GCC compiler should work, too.
